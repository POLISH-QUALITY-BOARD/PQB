import { expect, test } from './../test';

test('I can navigate to section', async ({ isMobile, page, homePage }) => {
  const { navbarNavigationItem } = homePage.getLocators();
  const n = 0;

  await homePage.goto();

  if (isMobile) {
    await homePage.clickNavbarHamburgerButton();
  }

  const selector = await navbarNavigationItem
    .nth(n)
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await homePage.clickNavbarNavigationItem(n);

  await expect(page.locator(selector)).toBeInViewport();
});
