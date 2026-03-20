import { test, expect } from '@playwright/test';

const testParameters = [
  {
    filename: 'Statut_PQB.pdf',
    testId: 'statutes-download-pl'
  },
  {
    filename: 'deklaracjaCzlonkowska_PQB.docx',
    testId: 'download-membership-declaration'
  },
  {
    filename: 'deklaracjaNDA_PQB.docx',
    testId: 'download-nda-declaration'
  }
];

for (const { filename, testId } of testParameters) {
  test(`I can download ${filename}`, async ({ page }) => {
    await page.goto('/');

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByTestId(testId).click()
    ]);

    expect(download.suggestedFilename()).toBe(filename);
  });
}

test('I can download Statut_PQB_en-US.pdf', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('statutes-tab-en').click();

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('statutes-download-en').click()
  ]);

  expect(download.suggestedFilename()).toBe('Statut_PQB_en-US.pdf');
});
