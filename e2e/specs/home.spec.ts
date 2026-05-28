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

test('I can navigate to section', async ({ isMobile, homePage, baseURL }) => {
  const { navbarMobileNavigationItem, navbarDesktopNavigationItem } = homePage.getLocators();

  await homePage.goto();

  if (isMobile) {
    await homePage.clickNavbarHamburgerButton();
  }

  const href = await (isMobile ? navbarMobileNavigationItem : navbarDesktopNavigationItem)
    .first()
    .getAttribute('href');

  const { hash } = new URL(href!, baseURL);

  await (isMobile
    ? homePage.clickNavbarMobileNavigationItem()
    : homePage.clickNavbarDesktopNavigationItem());

  await expect(homePage.getPage().locator(hash)).toBeInViewport();
});

test('I can download documents', async ({ homePage, baseURL, request }) => {
  const { downloadLink } = homePage.getLocators();

  await homePage.goto();

  const downloadLinks = await downloadLink.all();

  for (const [n] of downloadLinks.entries()) {
    const href = await downloadLink.nth(n).getAttribute('href');

    const response = await request.get(new URL(href!, baseURL).toString());

    expect(response.ok()).toBe(true);
  }
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

test('It passes accessibility audit', async ({ homePage, makeAxeBuilder }) => {
  await homePage.goto();

  const { violations } = await makeAxeBuilder({ page: homePage.getPage() }).analyze();

  expect(violations).toEqual([]);
});
