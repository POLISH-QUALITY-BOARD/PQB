import { expect, test } from './../test';
import type { Page } from '@playwright/test';

const getConsentCommands = (page: Page) =>
  page.evaluate(() =>
    window.dataLayer
      .map((entry) => Array.from(entry as ArrayLike<unknown>))
      .filter(([command]) => command === 'consent')
  );

test('It denies analytics consent by default', async ({ homePage }) => {
  await homePage.goto();

  expect(await getConsentCommands(homePage.getPage())).toContainEqual([
    'consent',
    'default',
    { analytics_storage: 'denied', wait_for_update: 500 }
  ]);
});

test('It grants analytics consent after accepting cookies', async ({ homePage }) => {
  await homePage.goto();
  await homePage.clickCookieConsentAcceptButton();

  expect(await getConsentCommands(homePage.getPage())).toContainEqual([
    'consent',
    'update',
    { analytics_storage: 'granted' }
  ]);
});

test('It keeps analytics consent denied after denying cookies', async ({ homePage }) => {
  await homePage.goto();
  await homePage.clickCookieConsentDenyButton();

  const commands = await getConsentCommands(homePage.getPage());

  expect(commands).toContainEqual(['consent', 'update', { analytics_storage: 'denied' }]);
  expect(commands).not.toContainEqual(['consent', 'update', { analytics_storage: 'granted' }]);
});

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
