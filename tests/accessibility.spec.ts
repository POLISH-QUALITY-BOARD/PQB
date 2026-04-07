import AxeBuilder from '@axe-core/playwright';
import { type Locator, type Page, expect, test } from '@playwright/test';

const isFocused = (locator: Locator) =>
  locator
    .and(locator.page().locator(':focus'))
    .count()
    .then((count) => count > 0);

const pressTabUntil = async (page: Page, predicate: () => Promise<boolean>) => {
  while (true) {
    await page.keyboard.press('Tab');

    if (await predicate()) {
      return;
    }
  }
};

const declarations = [
  { name: 'membership declaration', testId: 'download-membership-declaration-button' },
  { name: 'NDA declaration', testId: 'download-nda-declaration-button' }
];

for (const { name, testId } of declarations) {
  test(`I can download ${name} using keyboard`, async ({ isMobile, page }) => {
    const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');
    const navbarJoinButton = page.getByTestId(
      isMobile ? 'navbar-mobile-join-us-button' : 'navbar-desktop-join-us-button'
    );
    const downloadButton = page.getByTestId(testId);

    await page.goto('/');

    if (isMobile) {
      await pressTabUntil(page, () => isFocused(navbarHamburgerButton));
      await page.keyboard.press('Enter');
    }

    await pressTabUntil(page, () => isFocused(navbarJoinButton));
    await page.keyboard.press('Enter');

    await pressTabUntil(page, () => isFocused(downloadButton));

    await expect(
      Promise.all([page.waitForEvent('download'), page.keyboard.press('Enter')])
    ).resolves.toBeDefined();
  });
}

test('It passes accessibility audit', async ({ page }) => {
  await page.goto('/');

  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(violations).toEqual([]);
});
