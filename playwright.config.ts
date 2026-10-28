import { defineConfig } from "@playwright/test";
const baseURL =
  process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4321";
export default defineConfig({
  testDir: "./tests/browser",
  use: {
    baseURL,
    viewport: { width: 1440, height: 900 },
    launchOptions: {
      executablePath: process.env.PRESENTATION_BROWSER,
    },
  },
  webServer: {
    command: "pnpm exec astro preview --host 127.0.0.1",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
