import { expect, test } from './../test';
import AxeBuilder from '@axe-core/playwright';
import type { Keyboard, Locator } from '@playwright/test';

const isFocused = (locator: Locator) =>
  locator
    .and(locator.page().locator(':focus'))
    .count()
    .then((count) => count > 0);

const pressTabUntil = async (keyboard: Keyboard, predicate: () => Promise<boolean>) => {
  while (true) {
    await keyboard.press('Tab');

    if (await predicate()) {
      return;
    }
  }
};

test('I can download membership declaration using keyboard', async ({ isMobile, homePage }) => {
  const {
    navbarHamburgerButton,
    navbarDesktopJoinUsButton,
    navbarMobileJoinUsButton,
    membershipDeclarationDownloadButton
  } = homePage.getLocators();
  const { keyboard } = homePage.getPage();

  await homePage.goto();

  if (isMobile) {
    await pressTabUntil(keyboard, () => isFocused(navbarHamburgerButton));
    await keyboard.press('Enter');
  }

  await pressTabUntil(keyboard, () =>
    isFocused(isMobile ? navbarMobileJoinUsButton : navbarDesktopJoinUsButton)
  );
  await keyboard.press('Enter');

  await pressTabUntil(keyboard, () => isFocused(membershipDeclarationDownloadButton));

  await expect(
    Promise.all([homePage.getPage().waitForEvent('download'), keyboard.press('Enter')])
  ).resolves.toBeDefined();
});

test('It passes accessibility audit', async ({ homePage }) => {
  await homePage.goto();

  const { violations } = await new AxeBuilder({ page: homePage.getPage() })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(violations).toEqual([]);
});
