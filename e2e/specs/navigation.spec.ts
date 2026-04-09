import { expect, test } from './../test';

test('I can navigate to section', async ({ isMobile, homePage }) => {
  const { navbarMobileNavigationItem, navbarDesktopNavigationItem } = homePage.getLocators();

  await homePage.goto();

  if (isMobile) {
    await homePage.clickNavbarHamburgerButton();
  }

  const selector = await (isMobile ? navbarMobileNavigationItem : navbarDesktopNavigationItem)
    .first()
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await (isMobile
    ? homePage.clickNavbarMobileNavigationItem()
    : homePage.clickNavbarDesktopNavigationItem());

  await expect(homePage.getPage().locator(selector)).toBeInViewport();
});
