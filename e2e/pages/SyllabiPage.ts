import type { Page } from '@playwright/test';

export class SyllabiPage {
  constructor(private readonly page: Page) {}

  getPage() {
    return this.page;
  }

  goto() {
    return this.page.goto('/sylabusy');
  }
}
