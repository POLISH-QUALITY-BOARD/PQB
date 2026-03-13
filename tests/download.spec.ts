import { test, expect } from '@playwright/test';

test('I can download PQB statut (Polish)', async ({ page }) => {
  await page.goto('/');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-statut-pl').click()
  ]);

  expect(download.suggestedFilename()).toBe('Statut_PQB.pdf');
});

test('I can download PQB statut (English)', async ({ page }) => {
  await page.goto('/');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-statut-en').click()
  ]);

  expect(download.suggestedFilename()).toBe('Statut_PQB_en-US.pdf');
});

test('I can download membership declaration', async ({ page }) => {
  await page.goto('/');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-membership-declaration').click()
  ]);

  expect(download.suggestedFilename()).toBe('deklaracjaCzlonkowska_PQB.docx');
});

test('I can download NDA declaration', async ({ page }) => {
  await page.goto('/');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('download-nda-declaration').click()
  ]);

  expect(download.suggestedFilename()).toBe('deklaracjaNDA_PQB.docx');
});
