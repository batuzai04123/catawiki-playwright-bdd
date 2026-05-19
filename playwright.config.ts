import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const desktopTestDir = defineBddConfig({
  features: 'features/desktop/*.feature',
  steps: 'test-steps/**/*.ts',
  importTestFrom: 'src/fixture.ts',
  outputDir: '.features-gen/desktop',
  disableWarnings: {
    importTestFrom: true,
  },
});

const mobileTestDir = defineBddConfig({
  features: 'features/mobile/*.feature',
  steps: 'test-steps/**/*.ts',
  importTestFrom: 'src/fixture.ts',
  outputDir: '.features-gen/mobile',
  disableWarnings: {
    importTestFrom: true,
  },
});

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.catawiki.com',
    trace: 'on',
    screenshot: 'on',
  },
  expect: {
    timeout: 30 * 1000,
  },
  projects: [
    {
      name: 'Google Chrome',
      testDir: desktopTestDir,
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Microsoft Edge',
      testDir: desktopTestDir,
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Mobile Chrome',
      testDir: mobileTestDir,
      use: { ...devices['Pixel 5'], channel: 'chrome' },
    },
  ],
});
