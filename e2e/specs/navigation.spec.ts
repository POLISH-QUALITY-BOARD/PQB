import { expect, test } from './../test';

test('I can navigate to section', async ({ isMobile, homePage }) => {
  const { navbarMobileNavigationItem, navbarDesktopNavigationItem } = homePage.getLocators();
  const n = 1;

  await homePage.goto();

  if (isMobile) {
    await homePage.clickNavbarHamburgerButton();
  }

  const selector = await (isMobile ? navbarMobileNavigationItem : navbarDesktopNavigationItem)
    .nth(n)
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await (isMobile
    ? homePage.clickNavbarMobileNavigationItem(n)
    : homePage.clickNavbarDesktopNavigationItem(n));

  await expect(homePage.getPage().locator(selector)).toBeInViewport();
});
