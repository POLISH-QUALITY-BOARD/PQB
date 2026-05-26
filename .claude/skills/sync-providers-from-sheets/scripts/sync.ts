#!/usr/bin/env -S npx tsx
import { readFileSync } from 'node:fs';

const SPREADSHEET_ID = '1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4';

const SHEET_CONFIGS = {
  'DOSTAWCY SZKOLEŃ': {
    path: '/Users/sebam/dev/website/content/pages/accreditation-registry/providers.md',
    type: 'providers'
  },
  MATERIAŁY: {
    path: '/Users/sebam/dev/website/content/pages/accreditation-registry/materials.md',
    type: 'materials'
  },
  TRENERZY: {
    path: '/Users/sebam/dev/website/content/pages/accreditation-registry/trainers.md',
    type: 'trainers'
  }
};

const token = process.env.GOOGLE_SHEETS_ACCESS_TOKEN;
if (!token) {
  console.error('❌ Missing GOOGLE_SHEETS_ACCESS_TOKEN environment variable');
  console.error('   Get a fresh token from https://developers.google.com/oauthplayground/');
  console.error('   Scope: https://www.googleapis.com/auth/spreadsheets');
  process.exit(1);
}

// Certification mapping
const certMap: Array<{ pattern: RegExp; code: string }> = [
  { pattern: /foundation level\s+v?4\.0/i, code: 'ctfl-v4-0' },
  { pattern: /(foundation level.{0,3}agile tester|agile tester\s+v?1\.0)/i, code: 'ctfl-at' },
  { pattern: /acceptance testing\s+v?1\.0/i, code: 'ct-act' },
  { pattern: /ai testing\s+v?1\.0/i, code: 'ct-ai' },
  { pattern: /advanced level.{0,3}test analyst\s+v?3\.1/i, code: 'ctal-ta' },
  { pattern: /advanced level.{0,3}(test manager|test management)\s+v?3\.0/i, code: 'ctal-tm' },
  { pattern: /advanced level.{0,3}technical test analyst\s+v?4\.0/i, code: 'ctal-tta' },
  { pattern: /assessing test processes/i, code: 'ctel-itp-atp' },
  { pattern: /implementing test process improvement/i, code: 'ctel-itp-itpi' }
];

function mapCertifications(raw: string): string[] {
  const codes: string[] = [];
  const normalized = raw.replace(/certifield/gi, 'certified').replace(/certifiel\b/gi, 'certified');
  for (const { pattern, code } of certMap) {
    if (pattern.test(normalized) && !codes.includes(code)) {
      codes.push(code);
    }
  }
  return codes;
}

function parseDate(raw: string): string | null {
  if (!raw) return null;
  if (/syllabus version|remains valid|valid for/i.test(raw)) return null;
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

async function fetchSheet(sheetName: string): Promise<string[][]> {
  const range = encodeURIComponent(`'${sheetName}'!A1:Z1000`);
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

// PROVIDERS sheet parser
function parseProvidersSheet(rows: string[][]): Set<string> {
  const providers = new Set<string>();
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const name = (row[1] || '').trim();
    const material = (row[8] || '').trim();
    if (!name || !material) continue;
    providers.add(name);
  }
  return providers;
}

function parseMdProviders(content: string): Set<string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return new Set();
  const names = new Set<string>();
  const lines = match[1].split('\n');
  let inItems = false;
  for (const line of lines) {
    if (line.startsWith('items:')) {
      inItems = true;
      continue;
    }
    if (!inItems) continue;
    const nameMatch = line.match(/^ {2}- name:\s*(.+)$/);
    if (nameMatch) {
      names.add(nameMatch[1].trim());
    }
  }
  return names;
}

// MATERIALS sheet parser
interface SheetMaterial {
  id: string;
  name: string;
  author: string;
  dateFrom: string | null;
}

function parseMaterialsSheet(rows: string[][]): SheetMaterial[] {
  const materials: SheetMaterial[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const author = (row[1] || '').trim();
    const syllabus = (row[8] || '').trim();
    const accId = (row[13] || '').trim();
    const dateFrom = parseDate(row[14] || '');

    if (!author || !syllabus || !accId) continue;
    materials.push({ id: accId, name: syllabus, author, dateFrom });
  }
  return materials;
}

function parseMdMaterials(content: string): SheetMaterial[] {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return [];
  const materials: SheetMaterial[] = [];
  const lines = match[1].split('\n');
  let inItems = false;
  let current: Partial<SheetMaterial> | null = null;

  for (const line of lines) {
    if (line.startsWith('items:')) {
      inItems = true;
      continue;
    }
    if (!inItems) continue;
    const nameMatch = line.match(/^ {2}- name:\s*(.+)$/);
    if (nameMatch) {
      current = { name: nameMatch[1].trim() };
      continue;
    }
    if (!current) continue;
    const authorMatch = line.match(/^ {6}name:\s*(.+)$/);
    if (authorMatch) {
      current.author = authorMatch[1].trim();
      continue;
    }
    const dateMatch = line.match(/^ {4}dateFrom:\s*(.+)$/);
    if (dateMatch && current) {
      current.dateFrom = dateMatch[1].trim();
      materials.push(current as SheetMaterial);
      current = null;
    }
  }
  return materials;
}

// TRAINERS sheet parser
interface SheetTrainer {
  name: string;
  certifications: string[];
  dateFrom: string | null;
  dateTo: string | null;
}

function parseTrainersSheet(rows: string[][]): Map<string, SheetTrainer> {
  const trainersMap = new Map<string, SheetTrainer>();
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const name = (row[1] || '').trim();
    const certificates = (row[8] || '').trim();
    const accId = (row[9] || '').trim();
    const dateFrom = parseDate(row[10] || '');
    const dateTo = parseDate(row[11] || '');

    if (!name || !accId) continue;

    const certs = mapCertifications(certificates);
    if (!trainersMap.has(name)) {
      trainersMap.set(name, { name, certifications: [], dateFrom, dateTo });
    }
    const trainer = trainersMap.get(name)!;
    for (const cert of certs) {
      if (!trainer.certifications.includes(cert)) {
        trainer.certifications.push(cert);
      }
    }
    if (dateFrom && (!trainer.dateFrom || dateFrom < trainer.dateFrom)) {
      trainer.dateFrom = dateFrom;
    }
    if (dateTo && (!trainer.dateTo || dateTo > trainer.dateTo)) {
      trainer.dateTo = dateTo;
    }
  }
  return trainersMap;
}

function parseMdTrainers(content: string): Map<string, SheetTrainer> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return new Map();
  const trainers = new Map<string, SheetTrainer>();
  const lines = match[1].split('\n');
  let inItems = false;
  let current: Partial<SheetTrainer> | null = null;

  for (const line of lines) {
    if (line.startsWith('items:')) {
      inItems = true;
      continue;
    }
    if (!inItems) continue;
    const nameMatch = line.match(/^ {2}- name:\s*(.+)$/);
    if (nameMatch) {
      if (current && current.name) {
        trainers.set(current.name, current as SheetTrainer);
      }
      current = { name: nameMatch[1].trim(), certifications: [], accId: '' };
      continue;
    }
    if (!current) continue;
    const dateMatch = line.match(/^ {4}dateFrom:\s*(.+)$/);
    if (dateMatch) {
      current.dateFrom = dateMatch[1].trim();
    }
    const certMatch = line.match(/^ {6}- ([\w-]+)$/);
    if (certMatch && current.certifications) {
      current.certifications.push(certMatch[1]);
    }
  }
  if (current && current.name) {
    trainers.set(current.name, current as SheetTrainer);
  }
  return trainers;
}

function parseExistingMd(filePath: string): string | null {
  try {
    return readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

async function main() {
  console.log('🔄 Syncing data from Google Sheets...\n');

  const sheets: Record<string, string[][]> = {};
  for (const [sheetName] of Object.entries(SHEET_CONFIGS)) {
    const rows = await fetchSheet(sheetName);
    sheets[sheetName] = rows;
    console.log(`📥 Fetched ${rows.length} rows from "${sheetName}"`);
  }

  console.log('\n' + '═'.repeat(80));
  console.log('📊 PROVIDERS SYNC');
  console.log('═'.repeat(80));

  const providersRows = sheets['DOSTAWCY SZKOLEŃ'];
  const sheetProviders = parseProvidersSheet(providersRows);
  console.log(`\n✅ Found ${sheetProviders.size} providers in sheet`);

  const providersPath = SHEET_CONFIGS['DOSTAWCY SZKOLEŃ'].path;
  const providersContent = parseExistingMd(providersPath);
  const mdProviders = providersContent ? parseMdProviders(providersContent) : new Set();
  console.log(`✅ Found ${mdProviders.size} providers in providers.md`);

  if (sheetProviders.size === mdProviders.size) {
    console.log('✅ Providers list is synchronized');
  } else {
    console.log(`⚠️  Mismatch: sheet has ${sheetProviders.size}, md has ${mdProviders.size}`);
  }

  console.log('\n' + '═'.repeat(80));
  console.log('📚 MATERIALS SYNC');
  console.log('═'.repeat(80));

  const materialsRows = sheets['MATERIAŁY'];
  const sheetMaterials = parseMaterialsSheet(materialsRows);
  console.log(`\n✅ Found ${sheetMaterials.length} materials in sheet`);

  const materialsPath = SHEET_CONFIGS['MATERIAŁY'].path;
  const materialsContent = parseExistingMd(materialsPath);
  if (!materialsContent) {
    console.log('⚠️  materials.md not found');
  } else {
    const mdMaterials = parseMdMaterials(materialsContent);
    console.log(`✅ Found ${mdMaterials.length} materials in materials.md`);

    const sheetNames = sheetMaterials.map((m) => `${m.author}-${m.name}`);
    const mdNames = mdMaterials.map((m) => `${m.author}-${m.name}`);
    const sheetSet = new Set(sheetNames);
    const mdSet = new Set(mdNames);

    const missing = sheetNames.filter((n) => !mdSet.has(n));
    const stale = mdNames.filter((n) => !sheetSet.has(n));

    if (missing.length > 0 || stale.length > 0) {
      if (missing.length > 0) {
        console.log(`\n⚠️  Missing in materials.md (${missing.length}):`);
        missing.forEach((m) => console.log(`    - ${m}`));
      }
      if (stale.length > 0) {
        console.log(`\n⚠️  Stale in materials.md (${stale.length}):`);
        stale.forEach((m) => console.log(`    - ${m}`));
      }
    } else {
      console.log('✅ Materials list is synchronized');
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log('👨‍🏫 TRAINERS SYNC');
  console.log('═'.repeat(80));

  const trainersRows = sheets['TRENERZY'];
  const sheetTrainersMap = parseTrainersSheet(trainersRows);
  console.log(`\n✅ Found ${sheetTrainersMap.size} trainers in sheet`);

  const trainersPath = SHEET_CONFIGS['TRENERZY'].path;
  const trainersContent = parseExistingMd(trainersPath);
  if (!trainersContent) {
    console.log('⚠️  trainers.md not found');
  } else {
    const mdTrainersMap = parseMdTrainers(trainersContent);
    console.log(`✅ Found ${mdTrainersMap.size} trainers in trainers.md`);

    const sheetNames = new Set(sheetTrainersMap.keys());
    const mdNames = new Set(mdTrainersMap.keys());

    const missing = Array.from(sheetNames).filter((n) => !mdNames.has(n));
    const stale = Array.from(mdNames).filter((n) => !sheetNames.has(n));

    if (missing.length > 0 || stale.length > 0) {
      if (missing.length > 0) {
        console.log(`\n⚠️  Missing in trainers.md (${missing.length}):`);
        missing.forEach((m) => console.log(`    - ${m}`));
      }
      if (stale.length > 0) {
        console.log(`\n⚠️  Stale in trainers.md (${stale.length}):`);
        stale.forEach((m) => console.log(`    - ${m}`));
      }
    } else {
      console.log('✅ Trainers list is synchronized');
    }

    // Check certification mismatches
    let certMismatches = 0;
    for (const [name, sheetTrainer] of sheetTrainersMap) {
      const mdTrainer = mdTrainersMap.get(name);
      if (!mdTrainer) continue;

      const sheetSet = new Set(sheetTrainer.certifications);
      const mdSet = new Set(mdTrainer.certifications);
      const missingInMd = Array.from(sheetSet).filter((c) => !mdSet.has(c));
      const missingInSheet = Array.from(mdSet).filter((c) => !sheetSet.has(c));

      if (missingInMd.length > 0 || missingInSheet.length > 0) {
        certMismatches++;
        console.log(`\n🔸 ${name}:`);
        if (missingInMd.length > 0) {
          console.log(`    Missing in trainers.md: ${missingInMd.join(', ')}`);
        }
        if (missingInSheet.length > 0) {
          console.log(`    Missing in sheet: ${missingInSheet.join(', ')}`);
        }
      }
    }
    if (certMismatches === 0 && missing.length === 0 && stale.length === 0) {
      console.log('✅ All trainers and certifications are synchronized');
    }
  }

  console.log('\n' + '═'.repeat(80));
  console.log(`✅ Sync report complete`);
  console.log('═'.repeat(80));
}

main().catch((err) => {
  console.error('\n❌ Error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
