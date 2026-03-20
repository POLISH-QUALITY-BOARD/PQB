import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('It passess accessibility audit', async ({ page }) => {
  await page.goto('/');

  const { violations } = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(violations).toEqual([]);
});
