// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//import dotenv from 'dotenv';
// import path from 'path';
 //dotenv.config();
//dotenv.config({ path: path.resolve(__dirname, '.env') });



// Загружаем переменные окружения из .env файла



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
 // timeout: 120_000,
 //  globalSetup: require.resolve('./global-setup'),
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   // storageState: 'auth.json',
    /* Base URL to use in actions like `await page.goto('/')`. */
    httpCredentials: {
      username: 'admin', // замените на логин
      password: '12fGr546UJ855DSAz23', // замените на пароль
     },
   
   baseURL: 'http://devtest.tools.by/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   // {
   //   name: 'firefox',
  //    use: { ...devices['Desktop Firefox'] },
 //  },

   //  {
   //   name: 'webkit',
   //   use: { ...devices['Desktop Safari'] },
   // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

  

 // module.exports = defineConfig({
 //   use: {
      // Указываем путь к файлу с сохранением состояния авторизации
 //     storageState: 'auth.json',
 //   },
 // })




