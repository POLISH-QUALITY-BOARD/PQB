import { expect, test } from './../test';

test('I can navigate to accreditation registry', async ({ accreditationRegistryPage }) => {
  const response = await accreditationRegistryPage.goto();

  expect(response?.status()).toBe(200);
});

test('Accreditation registry passes accessibility audit', async ({
  accreditationRegistryPage,
  makeAxeBuilder
}) => {
  await accreditationRegistryPage.goto();

  const { violations } = await makeAxeBuilder({
    page: accreditationRegistryPage.getPage()
  }).analyze();

  expect(violations).toEqual([]);
});
