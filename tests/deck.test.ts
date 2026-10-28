import assert from "node:assert/strict";
import { test } from "node:test";
import { parseDeck, sortDecks } from "../src/lib/deck.ts";
const valid = `---\ntitle: Example\ndescription: A talk\norder: 2\nlanguage: en\nfont: mono\n---\n# Slide\n\n---\n\n## Another`;
test("preserves slide separators and derives the slug", () => {
  const deck = parseDeck(valid, "/decks/example-talk.md");
  assert.equal(deck.slug, "example-talk");
  assert.match(deck.body, /# Slide\n\n---\n\n## Another/);
});
test("reports invalid frontmatter with its filename", () => {
  for (const source of [
    valid.replace("title: Example", "title: ''"),
    valid.replace("order: 2", "order: nope"),
    valid.replace("font: mono\n", ""),
    "# No metadata",
  ]) {
    assert.throws(
      () => parseDeck(source, "broken.md"),
      /Invalid deck broken.md/,
    );
  }
});
test("sorts descending with deterministic ties without mutating input", () => {
  const deck = parseDeck(valid, "example.md");
  const input = [
    { ...deck, slug: "z", order: 0 },
    { ...deck, slug: "b" },
    { ...deck, slug: "a" },
  ];
  assert.deepEqual(
    sortDecks(input).map((d) => d.slug),
    ["a", "b", "z"],
  );
  assert.equal(input[0].slug, "z");
});
