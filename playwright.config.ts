import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  use: {
    baseURL: "http://127.0.0.1:4321",
    viewport: { width: 1440, height: 900 },
    launchOptions: {
      executablePath: process.env.PRESENTATION_BROWSER,
    },
  },
  webServer: {
    command: "pnpm exec astro preview --host 127.0.0.1",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
});
