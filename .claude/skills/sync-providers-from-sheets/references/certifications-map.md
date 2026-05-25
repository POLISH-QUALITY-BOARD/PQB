# Certification Code Mapping

The Google Sheets "DOSTAWCY SZKOLEŃ" registry uses long human-readable certification names in column I (`Nazwa materiałów`). The `providers.md` file uses short kebab-case codes. This document is the source of truth for that mapping.

## Active codes (declared in providers.md filters)

These codes appear in the `filters:` section at the top of `providers.md`:

| Code            | Full name in spreadsheet                                      | Tooltip in UI                                                        |
| --------------- | ------------------------------------------------------------- | -------------------------------------------------------------------- |
| `ctfl-v4-0`     | Certified Tester Foundation Level v4.0                        | ISTQB® Certified Tester Foundation Level v4.0                        |
| `ctfl-at-v1-0`  | Certified Tester Foundation Level – Agile Tester v1.0         | ISTQB® Certified Tester Foundation Level – Agile Tester v1.0         |
| `ct-act-v1-0`   | Certified Tester – Acceptance Testing v1.0                    | ISTQB® Certified Tester – Acceptance Testing v1.0                    |
| `ct-ai-v1-0`    | Certified Tester – AI Testing v1.0                            | ISTQB® Certified Tester – AI Testing v1.0                            |
| `ctal-ta-v3-1`  | Certified Tester Advanced Level – Test Analyst v3.1           | ISTQB® Certified Tester Advanced Level – Test Analyst v3.1           |
| `ctal-tm-v3-0`  | Certified Tester Advanced Level – Test Manager v3.0           | ISTQB® Certified Tester Advanced Level – Test Manager v3.0           |
| `ctal-tta-v4-0` | Certified Tester Advanced Level – Technical Test Analyst v4.0 | ISTQB® Certified Tester Advanced Level – Technical Test Analyst v4.0 |

## Known variations in the spreadsheet

The spreadsheet is edited by humans, so the same certification name appears in multiple forms. The sync script's matcher must handle all of these:

### CTFL-AT (Agile Tester)

- ✅ `Certified Tester Foundation Level – Agile Tester v1.0` (canonical, with em-dash)
- ✅ `Certified Tester Foundation Level Agile Tester v1.0` (no dash)
- ⚠️ `Certifield Tester Foundation Level Agile Tester v1.0` (typo: "Certifield")
- ⚠️ `Certifiel Tester ...` (another observed typo of "Certified")

### Multiple certifications in one cell

Sometimes column I packs multiple certifications separated by semicolons, e.g.:
`Certified Tester Advanced Level Test Management v3.0; Certified Tester Advanced Level Technical Test Analyst v4.0`

The sync script splits on `;` before matching. If you see "Missing in sheet" for a cert that should be there, check whether the cell value contains a semicolon and confirm the split worked.

### CTAL-TM (Test Manager / Management)

- ✅ `Certified Tester Advanced Level – Test Manager v3.0` (canonical)
- ⚠️ `Certified Tester Advanced Level Test Management v3.0` ("Management" not "Manager", no em-dash)

### CTAL-TA, CTAL-TTA, etc.

The em-dash (`–`, U+2013) is often dropped or replaced with a hyphen or omitted entirely. Match on the discriminating words (`Test Analyst`, `Technical Test Analyst`, `AI Testing`, etc.) rather than expecting exact punctuation.

## Matching strategy

The sync script does substring matching after normalization:

1. Lowercase both the cell value and each map key.
2. Remove em-dashes (`–`) and replace with regular hyphens or spaces.
3. Check if any canonical name's discriminating words appear in the cell value.
4. If no match, fix typos like "Certifield" → "Certified" and retry.
5. If still no match, output `(unmapped)` so the user can update this file.

## When to add a new code

If a new certification appears in the spreadsheet:

1. Add a new row to the "Active codes" table above.
2. Add the code to the `filters:` section in `providers.md` (with `text` and `tooltip` fields).
3. Add the mapping to the `certMap` constant in `scripts/sync.ts`.
4. Update the UI components if the filter rendering depends on a hard-coded list.

## Adding `dateTo` (expiry)

Many certifications don't have an expiry. The spreadsheet sometimes uses the boilerplate text "This certificate remains valid for the duration of the above syllabus version." in the `dateTo` column — treat this as "no expiry" and **omit** `dateTo` from the YAML entirely (don't write `dateTo: null` or empty string).

Only include `dateTo` when there's an actual date.
