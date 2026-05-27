import { AccreditationRegistryPage } from './pages/AccreditationRegistryPage';
import { HomePage } from './pages/HomePage';
import { ScrPage } from './pages/ScrPage';
import { SyllabiPage } from './pages/SyllabiPage';
import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend<{
  accreditationRegistryPage: AccreditationRegistryPage;
  homePage: HomePage;
  scrPage: ScrPage;
  syllabiPage: SyllabiPage;
  makeAxeBuilder: ({ page }: { page: Page }) => AxeBuilder;
}>({
  accreditationRegistryPage: async ({ page }, use) => {
    await use(new AccreditationRegistryPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  scrPage: async ({ page }, use) => {
    await use(new ScrPage(page));
  },
  syllabiPage: async ({ page }, use) => {
    await use(new SyllabiPage(page));
  },
  // eslint-disable-next-line no-empty-pattern
  makeAxeBuilder: async ({}, use) => {
    await use(({ page }: { page: Page }) =>
      new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    );
  }
});

export { expect } from '@playwright/test';
