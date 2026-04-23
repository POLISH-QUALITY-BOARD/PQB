import { expect, test } from './../test';

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
