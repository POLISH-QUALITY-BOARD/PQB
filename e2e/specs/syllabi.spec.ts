import { expect, test } from './../test';

test('I can navigate to syllabi', async ({ syllabiPage }) => {
  const response = await syllabiPage.goto();

  expect(response?.status()).toBe(200);
});

test('It passes accessibility audit', async ({ syllabiPage, makeAxeBuilder }) => {
  await syllabiPage.goto();

  const { violations } = await makeAxeBuilder({
    page: syllabiPage.getPage()
  }).analyze();

  expect(violations).toEqual([]);
});
