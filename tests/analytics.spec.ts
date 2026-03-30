import { test, expect, type Response } from '@playwright/test';

const isGoogleAnalytics = (response: Response, event: string) => {
  const { hostname, searchParams } = new URL(response.url());

  return hostname.includes('google-analytics.com') && searchParams.get('en') === event;
};

test('It can track page view', async ({ page }) => {
  await page.goto('/');

  const [response] = await Promise.all([
    page.waitForResponse((response) => isGoogleAnalytics(response, 'page_view')),
    page.getByTestId('cookie-consent-accept-button').click()
  ]);

  expect(response.ok()).toBe(true);
});

test('It can track file download', async ({ page }) => {
  await page.goto('/');

  const [response] = await Promise.all([
    page.waitForResponse((response) => isGoogleAnalytics(response, 'file_download')),
    page.locator('a[download]').first().click()
  ]);

  expect(response.ok()).toBe(true);
});
