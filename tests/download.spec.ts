import { test, expect } from '@playwright/test';

test('I can download documents', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('cookie-consent-accept-button').click();

  const anchors = await page.locator('a[download]').all();

  for (const anchor of anchors) {
    const dataTestId = await anchor.getAttribute('data-testid');

    if (dataTestId === 'statutes-download-en') {
      await page.getByTestId('statutes-tab-en').click();
    }

    await anchor.evaluate((element) => element.scrollIntoView({ block: 'center' }));

    const [download] = await Promise.all([page.waitForEvent('download'), anchor.click()]);

    expect(download).toBeDefined();
  }
});
