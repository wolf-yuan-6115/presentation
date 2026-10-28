# Presentations

Markdown presentations and a homepage built as one static [Astro](https://astro.build) site with [Reveal.js](https://revealjs.com). Presentations use Catppuccin Mocha; the homepage retains its own theme.

## Development

Use Node 24.17 or newer Node 24 LTS and pnpm 12.11.2.

```sh
pnpm install
pnpm dev
```

Open the homepage or a deck's URL on the same development server. Build and inspect the deployable site with:

```sh
pnpm check
pnpm test
pnpm build
pnpm preview
```

The complete site is generated in `dist/`. Cloudflare Workers serves that directory using the existing Wrangler configuration. No adapter, workspace builds, or merge step is required. The Node version for a hosted build must also be selected in the provider's build environment; Wrangler's runtime variables do not select the build executable.

## Adding a presentation

Create `src/decks/my-talk.md`:

```md
---
title: My talk
description: What the audience will learn
order: 4
language: en
font: mono
---

<!-- .slide: class="cover" -->

# My talk

<hr>

Presented by **Your name**

<!-- qr -->

## First topic

Content goes here.

---

## Next topic

More content.
```

The filename becomes `/my-talk/` and the deck is automatically listed on the homepage, ordered by descending `order`. All metadata fields are required. Use `language: zh-Hant` and `font: wenkai` for the Chinese font preset. Store images in `public/decks/my-talk/` and reference them as `/decks/my-talk/image.png`; reuse common assets from `/decks/shared/`.

Only leading frontmatter is parsed. Slide separators are standalone `---` lines; use `<hr>` for decorative rules so formatting cannot accidentally create slides. The optional standalone `<!-- qr -->` marker inserts the shared QR slide and does not need surrounding separators. Markdown is trusted repository content and may include HTML; never put secrets in decks. Reveal renders the embedded Markdown in the browser.

## Animations and code

Use Reveal's native attributes rather than Slidev syntax:

```md
## Progressive reveal

This is visible immediately.

This appears on the next click.

<!-- .element: class="fragment" -->

---

<!-- .slide: data-auto-animate data-auto-animate-id="example" -->

## Code, step one

<pre data-id="example-code"><code class="language-js" data-trim data-line-numbers="1">
const count = 1;
</code></pre>

---

<!-- .slide: data-auto-animate data-auto-animate-id="example" -->

## Code, step two

<pre data-id="example-code"><code class="language-js" data-trim data-line-numbers="1|2">
const count = 1;
console.log(count);
</code></pre>
```

Plain fenced code blocks work too. HTML code blocks allow explicit code identity and stepped line highlighting. Escape `<`, `>` and `&` inside raw HTML code blocks; fenced code blocks handle escaping automatically. Auto-Animate moves matching lines between slides; it does not reproduce Slidev's token-level Magic Move.

Use `Note:` on its own line to start speaker notes. Press **S** for presenter view, **Esc** for overview, and arrow keys/space for navigation. Reduced-motion preferences disable transitions. Shared presentation classes include `cover`, `image-small`, `image-medium`, `image-tall`, `image-icon`, `image-narrow`, `image-center`, `text-small`, and `text-muted`.

## Printing

Open a deck with `?print-pdf`, for example `/my-talk/?print-pdf`. Wait for fonts/images, then use Chromium's Print → Save as PDF with landscape orientation, no margins, and background graphics enabled. Fragments print together in their final state. Automated PDF and PowerPoint exports are not included.

## Verification

```sh
pnpm check
pnpm test
pnpm format:check
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

Browser tests cover all deck slides for overflow and missing images, navigation, QR links, print layout, homepage responsiveness, and a shared runtime URL. To use an existing Chromium executable, set `PRESENTATION_BROWSER` to its path. Run `pnpm build` before browser tests.

## License

This repository is licensed under CC BY-SA 4.0. See [LICENSE](LICENSE).
