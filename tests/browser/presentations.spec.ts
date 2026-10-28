import { expect, test } from "@playwright/test";
const slugs = [
  "clhs-autolearning-rust",
  "clcs-aframe",
  "clcs-1st-html-basic",
];
for (const slug of slugs) {
  test(`${slug}: rendering, navigation, assets and print`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`/${slug}/`);
    await expect(page.locator(".reveal")).toHaveClass(/ready/);
    await page.evaluate(() => document.fonts.ready);
    await expect(
      page.locator(".slides > section").first(),
    ).toHaveClass(/cover/);
    await page.keyboard.press("ArrowRight");
    await expect(page.locator("section.present")).toHaveClass(
      /qr-slide/,
    );
    await expect(page.locator("section.present a")).toHaveAttribute(
      "href",
      `https://presentation.wolf-yuan.dev/${slug}/`,
    );
    const count = await page.locator(".slides > section").count();
    for (let index = 0; index < count; index++) {
      await page.goto(`/${slug}/#/${index}`);
      await expect(page.locator(".reveal")).toHaveClass(/ready/);
      await page.evaluate(() => document.fonts.ready);
      const slide = page.locator(".slides > section.present");
      const dimensions = await slide.evaluate(async (section) => {
        await Promise.all(
          [...section.querySelectorAll("img")].map((img) =>
            img.decode(),
          ),
        );
        return {
          width: section.scrollWidth,
          height: section.scrollHeight,
        };
      });
      if ([0, 1, 5, 19].includes(index)) {
        await page.waitForTimeout(750);
        await page.screenshot({
          path: test.info().outputPath(`slide-${index}.png`),
        });
      }
      expect
        .soft(dimensions.height, `${slug} slide ${index + 1}`)
        .toBeLessThanOrEqual(705);
      expect
        .soft(dimensions.width, `${slug} slide ${index + 1}`)
        .toBeLessThanOrEqual(1105);
    }
    expect(await page.locator(".hljs").count()).toBeGreaterThan(0);
    expect(
      await page.locator("[data-auto-animate]").count(),
    ).toBeGreaterThan(0);
    const popup = page.waitForEvent("popup");
    await page.keyboard.press("s");
    const notes = await popup;
    await notes.waitForLoadState();
    await expect(notes.locator("body")).toContainText(
      /speaker|upcoming|time/i,
    );
    await notes.close();
    await page.goto(`/${slug}/?print-pdf`);
    await expect(page.locator("html")).toHaveClass(/print-pdf/);
    await expect(page.locator(".pdf-page").first()).toBeAttached();
    expect(errors).toEqual([]);
  });
}
test("homepage, 404 and shared runtime", async ({ page }) => {
  const scripts: string[] = [];
  for (const slug of slugs) {
    await page.goto(`/${slug}/`);
    scripts.push(
      (await page
        .locator('script[type="module"][src]')
        .getAttribute("src"))!,
    );
  }
  expect(new Set(scripts).size).toBe(1);
  await page.goto("/");
  for (const slug of slugs)
    await expect(page.locator(`a[href="/${slug}"]`)).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  await page.goto("/404.html");
  await expect(page.getByText("404 Not Found")).toBeVisible();
});

test("animated code keeps a compact, stable line-number gutter", async ({
  page,
}) => {
  await page.goto("/clhs-autolearning-rust/#/5");
  await expect(page.locator(".reveal")).toHaveClass(/ready/);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(650);
  const measure = () =>
    page
      .locator("section.present pre code")
      .first()
      .evaluate((code) => {
        const cell =
          code.querySelector<HTMLElement>(".hljs-ln-code")!;
        const number = code.querySelector<HTMLElement>(
          ".hljs-ln-numbers",
        )!;
        const scale =
          code.getBoundingClientRect().width /
          (code as HTMLElement).offsetWidth;
        return {
          inset:
            (cell.getBoundingClientRect().left -
              code.getBoundingClientRect().left) /
            scale,
          gutter: number.getBoundingClientRect().width / scale,
          font: parseFloat(getComputedStyle(cell).fontSize),
        };
      });
  const initial = await measure();
  expect(initial.inset).toBeLessThan(initial.font * 4.5);
  for (const direction of ["ArrowRight", "ArrowLeft"]) {
    await page.keyboard.press(direction);
    await page.waitForTimeout(100);
    const during = await measure();
    await page.waitForTimeout(550);
    const after = await measure();
    for (const state of [during, after]) {
      expect(Math.abs(state.gutter - initial.gutter)).toBeLessThan(1);
      expect(Math.abs(state.inset - initial.inset)).toBeLessThan(1);
    }
  }
  await page.screenshot({
    path: test.info().outputPath("code-gutter.png"),
  });
});

test("long animated code can scroll its last line fully into view", async ({
  page,
}) => {
  await page.goto("/clhs-autolearning-rust/#/12");
  await expect(page.locator(".reveal")).toHaveClass(/ready/);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(650);
  for (let round = 0; round < 2; round++) {
    await page.keyboard.press("ArrowRight");
    await expect(page).toHaveURL(/#\/13$/);
    await page.waitForTimeout(650);
    const code = page.locator("section.present pre code").first();
    await code.hover();
    await page.mouse.wheel(0, 3000);
    await expect
      .poll(() =>
        code.evaluate(
          (element) =>
            element.scrollHeight -
            element.clientHeight -
            element.scrollTop,
        ),
      )
      .toBeLessThanOrEqual(1);
    const bounds = await code.evaluate((element) => {
      const pre = element.parentElement!;
      const last = element.querySelector("tr:last-child")!;
      return {
        preBottom: pre.getBoundingClientRect().bottom,
        codeBottom: element.getBoundingClientRect().bottom,
        lastBottom: last.getBoundingClientRect().bottom,
        lastLine: last.textContent,
        lineNumber: last
          .querySelector(".hljs-ln-numbers")
          ?.getAttribute("data-line-number"),
      };
    });
    expect(bounds.lineNumber).toBe("19");
    expect(bounds.lastLine).toBe("}");
    expect(bounds.codeBottom).toBeLessThanOrEqual(
      bounds.preBottom + 1,
    );
    expect(bounds.lastBottom).toBeLessThanOrEqual(
      Math.min(bounds.codeBottom, bounds.preBottom) + 1,
    );
    if (round === 0)
      await page.screenshot({
        path: test.info().outputPath("code-last-line.png"),
      });
    await page.keyboard.press("ArrowLeft");
    await page.waitForTimeout(650);
  }
});
