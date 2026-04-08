import { expect, test } from './../test';
import type { Response } from '@playwright/test';

const PAGE_VIEW_EVENT = 'page_view';
const FILE_DOWNLOAD_EVENT = 'file_download';

const isGoogleAnalytics = (event: string) => (response: Response) => {
  const { hostname, searchParams } = new URL(response.url());

  return hostname.includes('google-analytics.com') && searchParams.get('en') === event;
};

test('It can track page view', async ({ homePage }) => {
  await homePage.goto();

  const [response] = await Promise.all([
    homePage.getPage().waitForResponse(isGoogleAnalytics(PAGE_VIEW_EVENT)),
    homePage.clickCookieConsentAcceptButton()
  ]);

  expect(response.ok()).toBe(true);
});

test('It can track file download', async ({ homePage }) => {
  await homePage.goto();

  const [response] = await Promise.all([
    homePage.getPage().waitForResponse(isGoogleAnalytics(FILE_DOWNLOAD_EVENT)),
    homePage.clickDownloadLink()
  ]);

  expect(response.ok()).toBe(true);
});
