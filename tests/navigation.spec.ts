import { test, expect } from '@playwright/test';

test('I can navigate to section', async ({ page }) => {
  const navigationItem = page.getByTestId('navigation-item').first();

  await page.goto('/');

  const selector = await navigationItem
    .getAttribute('href')
    .then((href) => (href ?? '').split('/'))
    .then(([, selector]) => selector);

  await navigationItem.click();

  await expect(page.locator(selector)).toBeInViewport();
});
