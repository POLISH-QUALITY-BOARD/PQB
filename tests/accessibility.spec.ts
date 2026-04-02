import { test, expect, type Page, type Locator } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

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
    const hamburgerButton = page.getByTestId('hamburger-button');
    const joinButton = page
      .getByTestId(isMobile ? 'mobile-navigation-item' : 'desktop-navigation-item')
      .and(page.locator('[href*="#dolacz"]'));
    const downloadButton = page.getByTestId(testId);

    await page.goto('/');

    if (isMobile) {
      await pressTabUntil(page, () => isFocused(hamburgerButton));
      await page.keyboard.press('Enter');
    }

    await pressTabUntil(page, () => isFocused(joinButton));
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
