#!/usr/bin/env -S npx tsx
import { readFileSync } from 'node:fs';

const SPREADSHEET_ID = '1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4';
const SHEET_NAME = 'DOSTAWCY SZKOLEŃ';
const PROVIDERS_MD = '/Users/sebam/dev/website/content/pages/accreditation-registry/providers.md';

const token = process.env.GOOGLE_SHEETS_ACCESS_TOKEN;
if (!token) {
  console.error('❌ Missing GOOGLE_SHEETS_ACCESS_TOKEN environment variable');
  console.error('   Get a fresh token from https://developers.google.com/oauthplayground/');
  console.error('   Scope: https://www.googleapis.com/auth/spreadsheets');
  process.exit(1);
}

// Map of canonical certification names (lowercased, normalized) -> short code.
// The matcher does substring matching against normalized cell values, so we
// can match many variations. See references/certifications-map.md.
const certMap: Array<{ pattern: RegExp; code: string }> = [
  { pattern: /foundation level\s+v?4\.0/i, code: 'ctfl-v4-0' },
  { pattern: /(foundation level.{0,3}agile tester|agile tester\s+v?1\.0)/i, code: 'ctfl-at-v1-0' },
  { pattern: /acceptance testing\s+v?1\.0/i, code: 'ct-act-v1-0' },
  { pattern: /ai testing\s+v?1\.0/i, code: 'ct-ai-v1-0' },
  { pattern: /advanced level.{0,3}test analyst\s+v?3\.1/i, code: 'ctal-ta-v3-1' },
  { pattern: /advanced level.{0,3}(test manager|test management)\s+v?3\.0/i, code: 'ctal-tm-v3-0' },
  { pattern: /advanced level.{0,3}technical test analyst\s+v?4\.0/i, code: 'ctal-tta-v4-0' }
];

function mapCertification(raw: string): string | null {
  // Fix common typos of "Certified" seen in the spreadsheet
  const normalized = raw.replace(/certifield/gi, 'certified').replace(/certifiel\b/gi, 'certified');
  for (const { pattern, code } of certMap) {
    if (pattern.test(normalized)) return code;
  }
  return null;
}

function parseDate(raw: string): string | null {
  if (!raw) return null;
  // Skip the boilerplate "no expiry" text
  if (/syllabus version|remains valid/i.test(raw)) return null;
  // Parse "24 Apr 2026" format
  const match = raw.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (!match) return null;
  const months: Record<string, string> = {
    jan: '01',
    feb: '02',
    mar: '03',
    apr: '04',
    may: '05',
    jun: '06',
    jul: '07',
    aug: '08',
    sep: '09',
    oct: '10',
    nov: '11',
    dec: '12'
  };
  const day = match[1].padStart(2, '0');
  const month = months[match[2].slice(0, 3).toLowerCase()];
  if (!month) return null;
  return `${match[3]}-${month}-${day}`;
}

interface SheetCertification {
  code: string | null;
  rawMaterial: string;
  dateFrom: string | null;
  dateTo: string | null;
}

interface SheetProvider {
  name: string;
  website: string;
  certifications: SheetCertification[];
}

async function fetchSheet(): Promise<string[][]> {
  const range = encodeURIComponent(`'${SHEET_NAME}'!A1:Z1000`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheet fetch failed (${res.status}): ${body}`);
  }
  const json = (await res.json()) as { values?: string[][] };
  return json.values || [];
}

function parseSheet(rows: string[][]): Map<string, SheetProvider> {
  const providers = new Map<string, SheetProvider>();
  // Skip header row
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const name = (row[1] || '').trim(); // B
    const website = (row[3] || '').trim(); // D
    const material = (row[8] || '').trim(); // I
    const dateFrom = parseDate(row[12] || ''); // M
    const dateTo = parseDate(row[13] || ''); // N

    if (!name || !material) continue;

    if (!providers.has(name)) {
      providers.set(name, { name, website, certifications: [] });
    }
    const provider = providers.get(name)!;
    if (!provider.website && website) provider.website = website;

    // The spreadsheet sometimes packs multiple certifications into one cell,
    // separated by ';' — split and emit one entry per certification.
    const materials = material.split(/\s*;\s*/).filter(Boolean);
    for (const m of materials) {
      provider.certifications.push({
        code: mapCertification(m),
        rawMaterial: m,
        dateFrom,
        dateTo
      });
    }
  }
  return providers;
}

interface MdCertification {
  code: string;
  dateFrom: string;
  dateTo?: string;
}

interface MdProvider {
  name: string;
  certifications: MdCertification[];
  website: string;
}

function parseProvidersMd(): Map<string, MdProvider> {
  const content = readFileSync(PROVIDERS_MD, 'utf-8');
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) throw new Error('Could not extract YAML frontmatter from providers.md');

  const providers = new Map<string, MdProvider>();
  const lines = yamlMatch[1].split('\n');
  let inItems = false;
  let current: MdProvider | null = null;
  let currentCert: Partial<MdCertification> | null = null;

  for (const line of lines) {
    if (line.startsWith('items:')) {
      inItems = true;
      continue;
    }
    if (!inItems) continue;

    const nameMatch = line.match(/^ {2}- name:\s*(.+)$/);
    if (nameMatch) {
      if (current) {
        if (currentCert && currentCert.code) {
          current.certifications.push(currentCert as MdCertification);
        }
        providers.set(current.name, current);
      }
      current = { name: nameMatch[1].trim(), certifications: [], website: '' };
      currentCert = null;
      continue;
    }
    if (!current) continue;

    const codeMatch = line.match(/^ {6}- code:\s*(.+)$/);
    if (codeMatch) {
      if (currentCert && currentCert.code) {
        current.certifications.push(currentCert as MdCertification);
      }
      currentCert = { code: codeMatch[1].trim() };
      continue;
    }
    const dateFromMatch = line.match(/^ {8}dateFrom:\s*(.+)$/);
    if (dateFromMatch && currentCert) {
      currentCert.dateFrom = dateFromMatch[1].trim();
      continue;
    }
    const dateToMatch = line.match(/^ {8}dateTo:\s*(.+)$/);
    if (dateToMatch && currentCert) {
      currentCert.dateTo = dateToMatch[1].trim();
      continue;
    }
    const hrefMatch = line.match(/^ {6}href:\s*(.+)$/);
    if (hrefMatch) {
      current.website = hrefMatch[1].trim();
      continue;
    }
  }
  if (current) {
    if (currentCert && currentCert.code)
      current.certifications.push(currentCert as MdCertification);
    providers.set(current.name, current);
  }
  return providers;
}

function renderYamlBlock(provider: SheetProvider): string {
  // Deduplicate certifications by code, keeping the earliest dateFrom and latest dateTo
  const byCode = new Map<string, { code: string; dateFrom: string; dateTo?: string }>();
  for (const cert of provider.certifications) {
    if (!cert.code || !cert.dateFrom) continue;
    const existing = byCode.get(cert.code);
    if (!existing) {
      byCode.set(cert.code, {
        code: cert.code,
        dateFrom: cert.dateFrom,
        ...(cert.dateTo ? { dateTo: cert.dateTo } : {})
      });
    } else if (cert.dateFrom < existing.dateFrom) {
      existing.dateFrom = cert.dateFrom;
    }
  }

  let yaml = `  - name: ${provider.name}\n`;
  yaml += `    certifications:\n`;
  for (const cert of byCode.values()) {
    yaml += `      - code: ${cert.code}\n`;
    yaml += `        dateFrom: ${cert.dateFrom}\n`;
    if (cert.dateTo) yaml += `        dateTo: ${cert.dateTo}\n`;
  }
  yaml += `    website:\n`;
  yaml += `      href: ${provider.website}\n`;
  yaml += `      ariaLabel: Przejdź na stronę ${provider.name}\n`;
  return yaml;
}

async function main() {
  const verbose = process.argv.includes('--verbose');
  console.log('🔄 Syncing providers from Google Sheets...\n');

  const rows = await fetchSheet();
  console.log(`📥 Fetched ${rows.length} rows from "${SHEET_NAME}"`);

  const sheetProviders = parseSheet(rows);
  console.log(`📊 Parsed ${sheetProviders.size} unique providers from sheet\n`);

  const mdProviders = parseProvidersMd();
  console.log(`📄 Loaded ${mdProviders.size} providers from providers.md\n`);

  const sheetNames = new Set(sheetProviders.keys());
  const mdNames = new Set(mdProviders.keys());

  const onlyInSheet = [...sheetNames].filter((n) => !mdNames.has(n));
  const onlyInMd = [...mdNames].filter((n) => !sheetNames.has(n));

  console.log('═'.repeat(80));
  console.log('📋 DIFF REPORT');
  console.log('═'.repeat(80));

  if (onlyInSheet.length === 0 && onlyInMd.length === 0) {
    console.log('\n✅ Provider lists match exactly.\n');
  }

  if (onlyInSheet.length > 0) {
    console.log(`\n⚠️  In Google Sheets but NOT in providers.md (${onlyInSheet.length}):`);
    for (const name of onlyInSheet) {
      const p = sheetProviders.get(name)!;
      const unmapped = p.certifications.filter((c) => !c.code);
      console.log(`\n   - ${name}`);
      console.log(`     Website: ${p.website || '(none)'}`);
      console.log(`     Certifications: ${p.certifications.length} (${unmapped.length} unmapped)`);
      if (unmapped.length > 0) {
        for (const u of unmapped) {
          console.log(`       ⚠️  Unmapped: "${u.rawMaterial}"`);
        }
      }
    }

    console.log('\n📝 YAML blocks to paste into providers.md (before closing ---):\n');
    console.log('```yaml');
    for (const name of onlyInSheet) {
      console.log(renderYamlBlock(sheetProviders.get(name)!));
    }
    console.log('```\n');
  }

  if (onlyInMd.length > 0) {
    console.log(`\n⚠️  In providers.md but NOT in Google Sheets (${onlyInMd.length}):`);
    for (const name of onlyInMd) {
      console.log(`   - ${name}`);
    }
    console.log('\n   ℹ️  Do NOT auto-remove these. Ask the user first.\n');
  }

  // Per-provider cert comparison for providers in both
  const inBoth = [...sheetNames].filter((n) => mdNames.has(n));
  const certMismatches: string[] = [];
  for (const name of inBoth) {
    const sheet = sheetProviders.get(name)!;
    const md = mdProviders.get(name)!;
    const sheetCodes = new Set(sheet.certifications.map((c) => c.code).filter(Boolean));
    const mdCodes = new Set(md.certifications.map((c) => c.code));
    const missingInMd = [...sheetCodes].filter((c) => !mdCodes.has(c!));
    const missingInSheet = [...mdCodes].filter((c) => !sheetCodes.has(c));
    if (missingInMd.length > 0 || missingInSheet.length > 0) {
      certMismatches.push(name);
      console.log(`\n🔸 ${name}:`);
      if (missingInMd.length > 0) {
        console.log(`   Missing in providers.md: ${missingInMd.join(', ')}`);
        console.log(`   Suggested YAML additions:`);
        const earliestByCode = new Map<string, { dateFrom: string; dateTo?: string }>();
        for (const c of sheet.certifications) {
          if (!c.code || !missingInMd.includes(c.code) || !c.dateFrom) continue;
          const existing = earliestByCode.get(c.code);
          if (!existing || c.dateFrom < existing.dateFrom) {
            earliestByCode.set(c.code, {
              dateFrom: c.dateFrom,
              ...(c.dateTo ? { dateTo: c.dateTo } : {})
            });
          }
        }
        for (const [code, dates] of earliestByCode) {
          console.log(`      - code: ${code}`);
          console.log(`        dateFrom: ${dates.dateFrom}`);
          if (dates.dateTo) console.log(`        dateTo: ${dates.dateTo}`);
        }
      }
      if (missingInSheet.length > 0)
        console.log(`   Missing in sheet:      ${missingInSheet.join(', ')}`);
      if (verbose) {
        console.log('   Sheet raw materials:');
        for (const c of sheet.certifications) {
          console.log(`     - "${c.rawMaterial}" → ${c.code || '(unmapped)'}`);
        }
      }
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log(
    `Summary: ${onlyInSheet.length} to add, ${onlyInMd.length} stale, ${certMismatches.length} cert mismatches`
  );
  console.log('═'.repeat(80));
}

main().catch((err) => {
  console.error('\n❌ Error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
