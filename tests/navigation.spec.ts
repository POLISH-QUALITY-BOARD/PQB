import { expect, test } from '@playwright/test';

test('I can navigate to section', async ({ isMobile, page }) => {
  const navigationItem = page
    .getByTestId(isMobile ? 'navbar-mobile-navigation-item' : 'navbar-desktop-navigation-item')
    .first();
  const navbarHamburgerButton = page.getByTestId('navbar-hamburger-button');

  await page.goto('/');

  if (isMobile) {
    await navbarHamburgerButton.click();
  }

  const selector = await navigationItem
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await navigationItem.click();

  await expect(page.locator(selector)).toBeInViewport();
});
