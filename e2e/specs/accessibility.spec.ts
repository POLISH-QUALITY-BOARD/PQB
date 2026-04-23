import { expect, test } from './../test';
import AxeBuilder from '@axe-core/playwright';
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

test('It passes accessibility audit', async ({ homePage }) => {
  await homePage.goto();

  const { violations } = await new AxeBuilder({ page: homePage.getPage() })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(violations).toEqual([]);
});
