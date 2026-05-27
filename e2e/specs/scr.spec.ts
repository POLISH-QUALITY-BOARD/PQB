import { expect, test } from './../test';

test('I can navigate to SCR', async ({ scrPage }) => {
  const response = await scrPage.goto();

  expect(response?.status()).toBe(200);
});

test('It passes accessibility audit', async ({ scrPage, makeAxeBuilder }) => {
  await scrPage.goto();

  const { violations } = await makeAxeBuilder({
    page: scrPage.getPage()
  }).analyze();

  expect(violations).toEqual([]);
});
