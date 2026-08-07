import { expect, test } from "@playwright/test";

test("prospective client can understand Noah without AI", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "AI Portfolio" })).toBeVisible();
  await expect(
    page.getByText(
      "Production AI Systems Engineer — Agents, RAG, and Full-Stack Delivery",
    ),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Me", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Projects", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Skills", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Experience", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Contact", exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Knowledge Engine/ }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: /Quad Agent/ })).toBeVisible();
});
