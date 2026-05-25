---
name: sync-providers-from-sheets
description: Synchronize the PQB accreditation registry between the Google Sheets "Dostawy szkoleń" spreadsheet and the providers.md file. Use this skill whenever the user wants to check, compare, sync, or update providers, training providers (dostawcy szkoleń), the accreditation registry (rejestr akredytacji), or providers.md against the master Google Sheets registry. Trigger phrases include "compare providers", "sync providers.md", "check accreditation registry", "update dostawców", "porównaj dostawców", "zaktualizuj providers", or any mention of the spreadsheet ID 1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4. Also trigger when the user references the Polish ISTQB accreditation data or asks to check if providers.md is up to date with the master spreadsheet.
---

# Sync Providers from Google Sheets

## What this skill does

Synchronizes provider data between the Google Sheets master registry ("Dostawy szkoleń") and the local `providers.md` file in the PQB website project. The Google Sheets is the source of truth — `providers.md` should always reflect its content.

## Why this skill exists

The PQB website displays a list of accredited training providers on the `/rejestr-akredytacji` page. The data source is a Google Sheet maintained by the PQB team, and `providers.md` must be manually kept in sync. This skill automates the comparison and update process to prevent drift.

## Configuration

- **Spreadsheet ID:** `1MNJ0Zke9jcg8VoPsjQQZwEJU8FO9PtCNVmVhfov0u-4`
- **Sheet name:** `DOSTAWCY SZKOLEŃ`
- **Target file:** `/Users/sebam/dev/website/content/pages/accreditation-registry/providers.md`
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

The bundled script `scripts/sync.ts` handles fetching, parsing, comparing, and reporting. Run it:

```bash
cd /Users/sebam/dev/website
GOOGLE_SHEETS_ACCESS_TOKEN="<token>" npx tsx .claude/skills/sync-providers-from-sheets/scripts/sync.ts
```

The script outputs:

- All providers found in the spreadsheet with their normalized certifications
- A diff report: providers only in the sheet, providers only in providers.md, and certification mismatches
- Suggested YAML blocks for any missing providers, ready to copy into `providers.md`

### Step 3: Review the diff with the user

Before changing any files, show the user:

- How many providers are in each source
- Which providers are missing from `providers.md`
- Which certifications differ (e.g., the sheet has a newer expiry date)

Ask the user to confirm the additions/changes. They may want to skip some providers (e.g., ones still pending review).

### Step 4: Update providers.md

Use the `Edit` tool to add the missing providers to `providers.md`. They go inside the `items:` array, before the closing `---`. Match the existing indentation (two spaces).

For each new provider, the YAML block must follow this exact structure:

```yaml
- name: <Provider Name>
  certifications:
    - code: <cert-code>
      dateFrom: YYYY-MM-DD
    - code: <cert-code>
      dateFrom: YYYY-MM-DD
      dateTo: YYYY-MM-DD # only if applicable
  website:
    href: <https URL>
    ariaLabel: Przejdź na stronę <Provider Name>
```

The certification code mapping is in `references/certifications-map.md` — consult it when the script reports an "unmapped" cert (the spreadsheet has typos sometimes, like "Certifield" instead of "Certified").

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

The spreadsheet uses long human-readable names; `providers.md` uses short codes. The full mapping is in `references/certifications-map.md`. Common ones:

| Spreadsheet (column I)                                        | Code            |
| ------------------------------------------------------------- | --------------- |
| Certified Tester Foundation Level v4.0                        | `ctfl-v4-0`     |
| Certified Tester Foundation Level – Agile Tester v1.0         | `ctfl-at-v1-0`  |
| Certified Tester – Acceptance Testing v1.0                    | `ct-act-v1-0`   |
| Certified Tester – AI Testing v1.0                            | `ct-ai-v1-0`    |
| Certified Tester Advanced Level – Test Analyst v3.1           | `ctal-ta-v3-1`  |
| Certified Tester Advanced Level – Test Manager v3.0           | `ctal-tm-v3-0`  |
| Certified Tester Advanced Level – Technical Test Analyst v4.0 | `ctal-tta-v4-0` |

The script handles common variations (with/without em-dash, "Test Management" vs "Test Manager"). It also tolerates the typo "Certifield" → "Certified".

## Date handling

Spreadsheet dates are in `DD MMM YYYY` format (e.g., `24 Apr 2026`). The script converts them to ISO `YYYY-MM-DD` for the YAML.

The `dateTo` column sometimes contains the boilerplate text "This certificate remains valid for the duration of the above syllabus version." — treat this as "no expiry" and omit `dateTo` from the YAML.

## Important columns in the spreadsheet

The script reads these columns from `DOSTAWCY SZKOLEŃ`:

- **B:** Nazwa firmy (provider name)
- **D:** Strona www (website)
- **I:** Nazwa materiałów (certification / training material)
- **M:** Data uzyskania akredytacji (dateFrom)
- **N:** Data wygaśnięcia akredytacji (dateTo)

A single provider appears on multiple rows — one row per certification. The script groups them by provider name.

## Edge cases

- **Provider in providers.md but not in sheet:** Don't auto-remove. Flag it to the user and ask — the provider may have been removed intentionally or the sheet row may be temporarily missing.
- **Different dates between sources:** The sheet is authoritative. Update `providers.md` to match.
- **New certification code not in the map:** Add it to `references/certifications-map.md` and update the script's `certMap` constant.
- **Token expired mid-run:** The script will fail with a 401. Get a fresh token and retry — partial updates are safe because the script is idempotent.

## Files in this skill

- `scripts/sync.ts` — The sync script. Reads sheet, parses providers.md, reports diff.
- `references/certifications-map.md` — Full certification code mapping with edge cases.
