import { describe, expect, it } from "vitest";
import { HEROES } from "@/data/heroes";
import { COMPETITIVE_META_PRIORITY } from "./meta-priority";

const heroSlugs = new Set(HEROES.map((h) => h.slug));

describe("COMPETITIVE_META_PRIORITY", () => {
  it("only references heroes that exist in the roster", () => {
    for (const entry of COMPETITIVE_META_PRIORITY) {
      expect(heroSlugs.has(entry.slug), `unknown hero slug "${entry.slug}"`).toBe(true);
    }
  });

  it("has no duplicate slugs", () => {
    const slugs = COMPETITIVE_META_PRIORITY.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("lists premier entries before high entries (draft simulator relies on array order)", () => {
    const firstHigh = COMPETITIVE_META_PRIORITY.findIndex((e) => e.tier === "high");
    const lastPremier = COMPETITIVE_META_PRIORITY.map((e) => e.tier).lastIndexOf("premier");
    expect(lastPremier).toBeLessThan(firstHigh);
  });

  it("gives every entry a non-empty note", () => {
    for (const entry of COMPETITIVE_META_PRIORITY) {
      expect(entry.note.trim().length).toBeGreaterThan(0);
    }
  });
});
