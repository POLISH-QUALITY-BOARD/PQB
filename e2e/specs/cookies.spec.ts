import { expect, test } from './../test';

test('I can accept cookies', async ({ homePage }) => {
  const { cookieConsent } = homePage.getLocators();

  await homePage.goto();
  await homePage.clickCookieConsentAcceptButton();

  await expect(cookieConsent).not.toBeVisible();

  await homePage.goto();

  await expect(cookieConsent).not.toBeVisible();
});

test('I can deny cookies', async ({ homePage }) => {
  const { cookieConsent } = homePage.getLocators();

  await homePage.goto();
  await homePage.clickCookieConsentDenyButton();

  await expect(cookieConsent).not.toBeVisible();

  await homePage.goto();

  await expect(cookieConsent).not.toBeVisible();
});
