import { expect, test } from './../test';
import type { Locator } from '@playwright/test';

const pressTabUntilFocusedThenPressEnter = async (locator: Locator) => {
  const { keyboard } = locator.page();

  const isFocused = (locator: Locator) =>
    locator
      .and(locator.page().locator(':focus'))
      .count()
      .then((count) => count > 0);

  while (true) {
    await keyboard.press('Tab');

    if (await isFocused(locator)) {
      return await keyboard.press('Enter');
    }
  }
};

test('I can navigate to home', async ({ homePage }) => {
  const response = await homePage.goto();

  expect(response?.status()).toBe(200);
});

test('I can download membership declaration using keyboard', async ({ homePage }) => {
  const { membershipDeclarationDownloadButton } = homePage.getLocators();

  await homePage.goto();

  await expect(
    Promise.all([
      homePage.getPage().waitForEvent('download'),
      pressTabUntilFocusedThenPressEnter(membershipDeclarationDownloadButton)
    ])
  ).resolves.toBeDefined();
});

test('Home passes accessibility audit', async ({ homePage, makeAxeBuilder }) => {
  await homePage.goto();

  const { violations } = await makeAxeBuilder({ page: homePage.getPage() }).analyze();

  expect(violations).toEqual([]);
});
