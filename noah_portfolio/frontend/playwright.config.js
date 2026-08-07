import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

const python =
  process.env.E2E_PYTHON ??
  (process.platform === "win32"
    ? path.resolve("../../.venv/Scripts/python.exe")
    : "python");

const e2eEnv = {
  ...process.env,
  DEEPSEEK_API_KEY: "test-only-key",
  DEEPSEEK_BASE_URL: "http://127.0.0.1:8765",
};

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:8501",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 1000 } },
    },
  ],
  webServer: [
    {
      command: `"${python}" ../../tests/fake_deepseek_server.py`,
      url: "http://127.0.0.1:8765/health",
      reuseExistingServer: false,
      timeout: 30_000,
    },
    {
      command: `"${python}" -m streamlit run ../../streamlit_app.py --server.headless true --server.port 8501 --browser.gatherUsageStats false`,
      url: "http://127.0.0.1:8501",
      env: e2eEnv,
      reuseExistingServer: false,
      timeout: 120_000,
    },
  ],
});
