import { z } from "astro/zod";
import fm from "front-matter";

const metadata = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  order: z.number().int(),
  language: z.enum(["zh-Hant", "en"]),
  font: z.enum(["wenkai", "mono"]),
});
export type Deck = z.infer<typeof metadata> & {
  slug: string;
  body: string;
};
export function parseDeck(source: string, filename: string): Deck {
  try {
    const { attributes, body } = fm(source);
    const slug = filename.split("/").pop()!.replace(/\.md$/, "");
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
      throw new Error("Invalid deck slug");
    return { ...metadata.parse(attributes), slug, body };
  } catch (error) {
    throw new Error(
      `Invalid deck ${filename}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
export function sortDecks(decks: Deck[]): Deck[] {
  return [...decks].sort(
    (a, b) => b.order - a.order || a.slug.localeCompare(b.slug),
  );
}
