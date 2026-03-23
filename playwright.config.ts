import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const PORT = 4173;

dotenv.config();

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT}`,
    port: PORT,
    reuseExistingServer: !process.env.CI
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: process.env.CI ? 'never' : 'on-failure' }]
  ],
  workers: process.env.CI ? '100%' : 1,
  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
