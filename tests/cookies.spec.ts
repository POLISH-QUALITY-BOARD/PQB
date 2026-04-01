import { test, expect } from '@playwright/test';

test('I can accept cookies', async ({ page }) => {
  const cookieConsent = page.getByTestId('cookie-consent');
  const cookieConsentAcceptButton = page.getByTestId('cookie-consent-accept-button');

  await page.goto('/');

  await cookieConsentAcceptButton.click();

  await expect(cookieConsent).not.toBeVisible();

  await page.goto('/');

  await expect(cookieConsent).not.toBeVisible();
});

test('I can deny cookies', async ({ page }) => {
  const cookieConsent = page.getByTestId('cookie-consent');
  const cookieConsentDenyButton = page.getByTestId('cookie-consent-deny-button');

  await page.goto('/');

  await cookieConsentDenyButton.click();

  await expect(cookieConsent).not.toBeVisible();

  await page.goto('/');

  await expect(cookieConsent).not.toBeVisible();
});
