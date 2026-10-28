import { parseDeck, sortDecks } from "./deck";
const sources = import.meta.glob<string>("../decks/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
export const decks = sortDecks(
  Object.entries(sources).map(([filename, source]) =>
    parseDeck(source, filename),
  ),
);
