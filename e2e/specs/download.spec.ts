import { expect, test } from '../test';

test('I can download documents', async ({ homePage, baseURL, request }) => {
  const { downloadLink } = homePage.getLocators();

  await homePage.goto();
  await homePage.clickCookieConsentAcceptButton();

  const downloadLinks = await downloadLink.all();

  for (const [n] of downloadLinks.entries()) {
    const href = await downloadLink.nth(n).getAttribute('href');

    const response = await request.get(new URL(href!, baseURL).toString());

    expect(response.ok()).toBe(true);
  }
});
