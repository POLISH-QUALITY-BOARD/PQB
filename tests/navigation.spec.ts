import { test, expect } from '@playwright/test';

test('I can navigate to section', async ({ isMobile, page }) => {
  const navigationItem = page
    .getByTestId(isMobile ? 'mobile-navigation-item' : 'desktop-navigation-item')
    .first();

  await page.goto('/');

  if (isMobile) {
    await page.getByTestId('hamburger-button').click();
  }

  const selector = await navigationItem
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await navigationItem.click();

  await expect(page.locator(selector)).toBeInViewport();
});
