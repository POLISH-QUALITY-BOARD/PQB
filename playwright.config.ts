import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;

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
