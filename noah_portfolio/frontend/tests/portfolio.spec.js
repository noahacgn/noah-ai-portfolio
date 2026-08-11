import { expect, test } from "@playwright/test";

test("prospective client can understand Noah without AI", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Backend & AI Portfolio" })).toBeVisible();
  await expect(
    page.getByText("Senior Backend Engineer · Java, Spring Boot & AI Integration"),
  ).toHaveCount(0);
  await expect(page.getByRole("textbox", { name: "Ask about Noah's work" })).toHaveAttribute(
    "placeholder",
    "Could Noah stabilize my Spring backend?",
  );
  await expect(page.getByRole("button", { name: "Ask the Backend & AI Portfolio" }).locator(".lucide-bot")).toBeVisible();
  await expect(
    page.getByText("AI-generated · Don't share sensitive information", { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Me", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Projects", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Skills", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Experience", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Contact", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Backend & AI Work" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /CPcash Wallet/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Digimart/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Quad Agent/ })).toBeVisible();
});

test("hero question suggestions rotate and pause while the visitor is composing", async ({ page }) => {
  await page.goto("/");
  const input = page.getByRole("textbox", { name: "Ask about Noah's work" });

  await expect(input).toHaveAttribute(
    "placeholder",
    "Could Noah stabilize my Spring backend?",
  );
  await expect.poll(
    () => input.getAttribute("placeholder"),
    { timeout: 7_000 },
  ).toBe("How does Noah design reliable payment flows?");

  await input.focus();
  const focusedSuggestion = await input.getAttribute("placeholder");
  await page.waitForTimeout(5_500);
  await expect(input).toHaveAttribute("placeholder", focusedSuggestion);

  await input.fill("Can Noah help with my retrieval workflow?");
  await input.blur();
  await page.waitForTimeout(5_500);
  await expect(input).toHaveAttribute("placeholder", focusedSuggestion);
});

test("hero scroll cue clears the quick portfolio views", async ({ page }) => {
  await page.goto("/");

  const gap = await page.locator(".hero-section").evaluate((hero) => {
    const quickViews = hero.querySelector(".quick-grid").getBoundingClientRect();
    const scrollCue = hero.querySelector(".explore-projects").getBoundingClientRect();
    return scrollCue.top - quickViews.bottom;
  });

  expect(gap).toBeGreaterThanOrEqual(24);
});

test("scrolling from the hero recreates the source transition", async ({ page }) => {
  await page.goto("/");

  const watermark = page.locator(".watermark span");
  await expect(watermark).toHaveCSS("color", "rgba(0, 0, 0, 0)");
  await expect(watermark).toHaveCSS("background-image", /linear-gradient/);

  const projects = page.locator(".projects-section");
  await expect.poll(() => projects.evaluate((section) => getComputedStyle(section, "::before").backgroundImage)).toContain("linear-gradient");

  const interactions = page.locator(".hero-interactions");
  const scrollContainer = page.locator("section.stMain");
  await scrollContainer.evaluate((element) => element.scrollTo(0, 450));
  await expect.poll(() => interactions.evaluate((element) => Number(getComputedStyle(element).opacity))).toBeLessThan(0.8);
  await scrollContainer.evaluate((element) => element.scrollTo(0, 0));
  await expect.poll(() => interactions.evaluate((element) => Number(getComputedStyle(element).opacity))).toBe(1);

  await page.getByRole("button", { name: "Explore Projects", exact: true }).click();
  await expect.poll(async () => {
    return Math.abs(await page.locator("#projects-heading").evaluate((heading) => heading.getBoundingClientRect().top));
  }).toBeLessThan(120);
  await expect(page.locator(".section-heading-row")).toHaveClass(/is-visible/);
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
  await expect(page.getByRole("heading", { name: "Backend & AI Portfolio" })).toBeVisible();
  const input = page.getByRole("textbox", { name: "Ask about Noah's work" });
  await page.waitForTimeout(5_500);
  await expect(input).toHaveAttribute(
    "placeholder",
    "Could Noah stabilize my Spring backend?",
  );
});
