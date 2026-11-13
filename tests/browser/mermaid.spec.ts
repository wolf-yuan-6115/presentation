import { expect, test } from "@playwright/test";

const deckURL = "/gdg-5th-cloud-build/";

test("Mermaid does not auto-render while diagram fonts are loading", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const load = document.fonts.load.bind(document.fonts);
    document.fonts.load = (font, text) => {
      if (!text?.includes("flowchart LR")) return load(font, text);
      document.documentElement.dataset.diagramFontsPending = "true";
      return new Promise((resolve, reject) => {
        window.addEventListener(
          "release-diagram-fonts",
          () => load(font, text).then(resolve, reject),
          { once: true },
        );
      });
    };
  });
  await page.goto(`${deckURL}#/13`);
  await expect(page.locator("html")).toHaveAttribute(
    "data-diagram-fonts-pending",
    "true",
  );
  // Exercise Mermaid's window-load hook while our renderer awaits fonts.
  await page.evaluate(() => window.dispatchEvent(new Event("load")));
  await expect(
    page.locator("code.mermaid[data-processed]"),
  ).toHaveCount(0);
  await page.evaluate(() =>
    window.dispatchEvent(new Event("release-diagram-fonts")),
  );
  await expect(page.locator(".reveal")).toHaveClass(/ready/);
  await expect(page.locator(".mermaid-diagram svg")).toHaveCount(6);
  await expect(page.locator(".mermaid-error")).toHaveCount(0);
  await expect(
    page.locator("section.present .mermaid-diagram svg"),
  ).toBeVisible();
});

test("Mermaid renders hidden slides, navigation and print without overflow", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(deckURL);
  await expect(page.locator(".reveal")).toHaveClass(/ready/);
  await expect(page.locator(".mermaid-diagram svg")).toHaveCount(6);
  await expect(page.locator(".mermaid-error")).toHaveCount(0);

  const indexes = await page
    .locator(".slides > section")
    .evaluateAll((slides) =>
      slides.flatMap((slide, index) =>
        slide.querySelector(".mermaid-diagram") ? [index] : [],
      ),
    );
  for (const index of indexes) {
    await page.goto(`${deckURL}#/${index}`);
    const slide = page.locator("section.present");
    await expect(slide.locator(".mermaid-diagram svg")).toBeVisible();
    const dimensions = await slide.evaluate((section) => {
      const svg = section.querySelector(".mermaid-diagram svg")!;
      return {
        width: section.scrollWidth,
        height: section.scrollHeight,
        svgWidth: svg.getBoundingClientRect().width,
        svgHeight: svg.getBoundingClientRect().height,
        viewBox: svg.getAttribute("viewBox"),
        title: svg.querySelector("title")?.textContent,
      };
    });
    expect(dimensions.width).toBeLessThanOrEqual(1105);
    expect(dimensions.height).toBeLessThanOrEqual(705);
    expect(dimensions.svgWidth).toBeGreaterThan(100);
    expect(dimensions.svgHeight).toBeGreaterThan(60);
    expect(dimensions.viewBox).not.toMatch(/NaN|Infinity/);
    expect(dimensions.title).toBeTruthy();
  }

  // A direct link must work without first visiting the earlier diagrams.
  await page.reload();
  await expect(
    page.locator("section.present .mermaid-diagram svg"),
  ).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.press("ArrowRight");
  await expect(
    page.locator("section.present .mermaid-diagram svg"),
  ).toBeVisible();

  await page.goto(`${deckURL}?print-pdf`);
  await expect(
    page.locator(".pdf-page .mermaid-diagram svg"),
  ).toHaveCount(6);
  await expect(page.locator(".mermaid-error")).toHaveCount(0);
  await expect(page.locator(".mermaid-render-stage")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("invalid Mermaid preserves source and does not stop the deck", async ({
  page,
}) => {
  await page.route(`**${deckURL}`, async (route) => {
    const response = await route.fetch();
    const html = (await response.text()).replace(
      "sequenceDiagram",
      "invalidDiagram",
    );
    await route.fulfill({ response, body: html });
  });
  await page.goto(deckURL);
  await expect(page.locator(".reveal")).toHaveClass(/ready/);
  await expect(page.locator(".mermaid-error")).toHaveCount(1);
  await expect(page.locator("code.nohighlight")).toContainText(
    "invalidDiagram",
  );
  await expect(page.locator(".mermaid-diagram svg")).toHaveCount(5);
  await expect(page.locator(".mermaid-render-stage")).toHaveCount(0);
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(/#\/1$/);
  await expect(page.locator("section.present")).toBeVisible();
});
