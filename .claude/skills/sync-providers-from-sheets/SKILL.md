---
name: sync-providers-from-sheets
description: Synchronize PQB accreditation registry data between Google Sheets and local markdown files. Supports 3 sheets - "DOSTAWCY SZKOLEŃ" (providers.md), "MATERIAŁY" (materials.md), and "TRENERZY" (trainers.md). Use this skill whenever the user wants to check, compare, sync, or update any accreditation data. Trigger phrases include "sync providers", "check materials", "update trainers", "compare accreditation registry", "porównaj dostawców", "zaktualizuj materiały", or any mention of the spreadsheet ID 1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4. Also trigger when comparing data from multiple sheets or checking synchronization status.
---

# Sync PQB Accreditation Registry

## What this skill does

Synchronizes accreditation registry data between the Google Sheets master registry and three local markdown files:

- **DOSTAWCY SZKOLEŃ** → `providers.md` (training provider organizations)
- **MATERIAŁY** → `materials.md` (accredited training materials/courses)
- **TRENERZY** → `trainers.md` (individual trainers with certifications)

The Google Sheets is the source of truth — all markdown files should reflect its content.

## Why this skill exists

The PQB website displays accreditation data across three pages: `/rejestr-akredytacji` (providers), materials, and trainers. The data sources are Google Sheets maintained by the PQB team, and the markdown files must be kept in sync. This skill automates comparison and reporting to prevent drift.

## Configuration

- **Spreadsheet ID:** `1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4`
- **Sheets:**
  - `DOSTAWCY SZKOLEŃ` → `providers.md` (training provider organizations)
  - `MATERIAŁY` → `materials.md` (training materials and courses)
  - `TRENERZY` → `trainers.md` (individual trainers)
- **Target directory:** `/Users/sebam/dev/website/content/pages/accreditation-registry/`
- **Auth:** Requires `GOOGLE_SHEETS_ACCESS_TOKEN` environment variable
- **Access token source:** https://developers.google.com/oauthplayground/ — select scope `https://www.googleapis.com/auth/spreadsheets`

## Workflow

Follow these steps in order. Don't skip steps even if you think you remember the state from a previous run — the spreadsheet may have changed.

### Step 1: Get the access token

Check if `GOOGLE_SHEETS_ACCESS_TOKEN` is set:

```bash
echo "${GOOGLE_SHEETS_ACCESS_TOKEN:0:20}..."
```

If empty, ask the user for a fresh access token. Tokens expire after ~1 hour, so don't reuse old ones. Direct them to https://developers.google.com/oauthplayground/ with scope `https://www.googleapis.com/auth/spreadsheets`.

### Step 2: Run the sync script

The bundled script `scripts/sync.ts` handles fetching all 3 sheets, parsing, comparing, and reporting. Run it:

```bash
cd /Users/sebam/dev/website
GOOGLE_SHEETS_ACCESS_TOKEN="<token>" npx tsx .claude/skills/sync-providers-from-sheets/scripts/sync.ts
```

The script outputs a comprehensive diff report for all 3 data types:

**Providers (DOSTAWCY SZKOLEŃ):**

- Providers found in each source
- List of new providers to add or stale entries to remove
- Certification mismatches

**Materials (MATERIAŁY):**

- Accredited training materials and courses
- Missing entries (should be added to materials.md)
- Stale entries (should be removed from materials.md)

**Trainers (TRENERZY):**

- Individual trainer records (with consolidated certifications)
- Name mismatches (e.g., character encoding issues)
- Certification discrepancies per trainer

### Step 3: Review the diffs with the user

Before changing any files, discuss findings for all 3 sheets:

**Providers:**

- Count of providers in sheet vs. providers.md
- New providers to add, stale entries to remove
- Certification updates (new certs, updated dates)

**Materials:**

- Count of materials in sheet vs. materials.md
- New courses to add, stale entries to remove
- Author/provider changes

**Trainers:**

- Count of trainers in sheet vs. trainers.md
- New trainers to add, renamed trainers (character encoding), stale entries
- Certification updates per trainer

Ask the user to confirm additions/changes for all 3 files. They may want to defer certain updates (e.g., trainers still pending approval).

### Step 4: Update markdown files

Update all three files based on the diff report:

**Providers (providers.md):**
Use the `Edit` tool to add missing providers to the `items:` array (before closing `---`).

```yaml
- name: <Provider Name>
  certifications:
    - code: <cert-code>
      dateFrom: YYYY-MM-DD
      dateTo: YYYY-MM-DD # only if applicable
  website:
    href: <https URL>
    ariaLabel: Przejdź na stronę <Provider Name>
```

**Materials (materials.md):**
Add missing course entries to the `items:` array.

```yaml
- name: <Syllabus/Course Name>
  author:
    name: <Author/Provider Name>
    linkedin: # or website: if applicable
      href: <https URL>
      ariaLabel: Przejdź na...
  dateFrom: YYYY-MM-DD
  dateTo: YYYY-MM-DD # only if applicable
```

**Trainers (trainers.md):**
Add missing trainers to the `items:` array. Fix character encoding issues if found.

```yaml
- name: <Trainer Name>
  dateFrom: YYYY-MM-DD
  dateTo: YYYY-MM-DD
  certifications:
    - <cert-code>
  linkedin: # or other contact info
    href: <https URL>
    ariaLabel: Przejdź na profil LinkedIn...
```

The certification code mapping is in `references/certifications-map.md` — consult it for unmapped certs (the spreadsheet sometimes has typos like "Certifield" instead of "Certified").

### Step 5: Verify

Run the project's checks. **All three must pass** before committing:

```bash
cd /Users/sebam/dev/website
npm run format
npm run lint
npm run test:unit
```

If formatting changes any files, that's expected — Prettier may reflow the YAML.

### Step 6: Commit on a feature branch

Never commit directly to `main`. Create a feature branch:

```bash
git checkout -b feat/sync-providers-$(date +%Y%m%d)
git add content/pages/accreditation-registry/providers.md
git commit -m "feat: sync providers.md with Google Sheets registry"
```

Then ask the user if they want to push and open a PR.

## Certification code mapping

Used in both **trainers.md** and **providers.md**, the full mapping is in `references/certifications-map.md`. Codes:

| Spreadsheet certification name                                      | Code            |
| ------------------------------------------------------------------- | --------------- |
| Certified Tester Foundation Level v4.0                              | `ctfl-v4-0`     |
| Certified Tester Foundation Level – Agile Tester v1.0               | `ctfl-at`       |
| Certified Tester – Acceptance Testing v1.0                          | `ct-act`        |
| Certified Tester – AI Testing v1.0                                  | `ct-ai`         |
| Certified Tester Advanced Level – Test Analyst v3.1                 | `ctal-ta`       |
| Certified Tester Advanced Level – Test Manager v3.0                 | `ctal-tm`       |
| Certified Tester Advanced Level – Technical Test Analyst v4.0       | `ctal-tta`      |
| Certified Tester Expert Level Assessing Test Processes              | `ctel-itp-atp`  |
| Certified Tester Expert Level Implementing Test Process Improvement | `ctel-itp-itpi` |

The script handles variations (em-dash vs hyphen, "Test Management" vs "Test Manager") and tolerates the typo "Certifield" → "Certified".

## Date handling

Spreadsheet dates are in `DD MMM YYYY` format (e.g., `24 Apr 2026`). The script converts them to ISO `YYYY-MM-DD` for the YAML.

The `dateTo` column sometimes contains the boilerplate text "This certificate remains valid for the duration of the above syllabus version." — treat this as "no expiry" and omit `dateTo` from the YAML.

## Important columns in the spreadsheet

### DOSTAWCY SZKOLEŃ (providers)

- **B:** Nazwa firmy (provider name)
- **D:** Strona www (website)
- **I:** Nazwa materiałów (certification / training material)
- **M:** Data uzyskania akredytacji (dateFrom)
- **N:** Data wygaśnięcia akredytacji (dateTo)

A single provider appears on multiple rows — one row per certification. The script groups them by provider name.

### MATERIAŁY (training materials)

- **B:** Imię nazwisko / Podmiot (author/provider name)
- **D:** Strona www/profilowa (website)
- **I:** Sylabus (certification/course name)
- **N:** Nr akredytacji (accreditation ID)
- **O:** Data uzyskania akredytacji (dateFrom)
- **P:** Data wygaśnięcia akredytacji (dateTo)

Each row is a unique material entry with its author.

### TRENERZY (trainers)

- **B:** Imię i nazwisko (trainer name)
- **I:** Certyfikaty (comma/semicolon-separated certifications)
- **J:** Nr akredytacji (accreditation ID)
- **K:** Data uzyskania akredytacji (dateFrom)
- **L:** Data wygaśnięcia akredytacji (dateTo)

A single trainer may appear on multiple rows — one row per accreditation record. The script consolidates them by trainer name, merging all certifications.

## Edge cases

- **Provider in providers.md but not in sheet:** Don't auto-remove. Flag it to the user and ask — the provider may have been removed intentionally or the sheet row may be temporarily missing.
- **Different dates between sources:** The sheet is authoritative. Update `providers.md` to match.
- **New certification code not in the map:** Add it to `references/certifications-map.md` and update the script's `certMap` constant.
- **Token expired mid-run:** The script will fail with a 401. Get a fresh token and retry — partial updates are safe because the script is idempotent.

## Files in this skill

- `scripts/sync.ts` — The sync script. Reads sheet, parses providers.md, reports diff.
- `references/certifications-map.md` — Full certification code mapping with edge cases.
