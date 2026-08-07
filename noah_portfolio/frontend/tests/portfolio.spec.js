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

test("fluid cursor trail reacts without blocking the portfolio", async ({ page }) => {
  await page.goto("/");

  const trail = page.locator("canvas[data-fluid-trail]");
  await expect(trail).toHaveAttribute("data-fluid-state", "idle");
  await expect(trail).toHaveCSS("pointer-events", "none");

  const before = await trail.screenshot();
  await page.mouse.move(80, 160);
  await page.mouse.move(920, 390, { steps: 14 });
  await expect(trail).toHaveAttribute("data-fluid-state", "active");
  const after = await trail.screenshot();

  expect(Buffer.compare(before, after)).not.toBe(0);
  await page.getByRole("button", { name: "Me", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Ask me about Noah's work" })).toBeVisible();
});

test("reduced motion removes the fluid simulation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(page.locator("canvas[data-fluid-trail]")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "AI Portfolio" })).toBeVisible();
});
