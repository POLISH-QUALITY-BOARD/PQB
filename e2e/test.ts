import { HomePage } from './pages/HomePage';
import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  }
});

export { expect } from '@playwright/test';
