import { describe, expect, it } from "vitest";
import { HEROES } from "./index";
import { getItem } from "@/data/items";

const heroSlugs = new Set(HEROES.map((h) => h.slug));

describe("hero data integrity", () => {
  it("every hero slug is unique", () => {
    expect(heroSlugs.size).toBe(HEROES.length);
  });

  it.each(HEROES)(
    "$name: strongAgainst/weakAgainst/synergizesWith reference real heroes",
    (hero) => {
      for (const slug of [...hero.strongAgainst, ...hero.weakAgainst, ...hero.synergizesWith]) {
        expect(heroSlugs.has(slug), `${hero.slug} references unknown hero "${slug}"`).toBe(true);
      }
    },
  );

  it.each(HEROES)("$name: does not reference itself as a matchup", (hero) => {
    for (const slug of [...hero.strongAgainst, ...hero.weakAgainst, ...hero.synergizesWith]) {
      expect(slug).not.toBe(hero.slug);
    }
  });

  it.each(HEROES)("$name: every build item slug exists in the item catalog", (hero) => {
    for (const build of hero.builds) {
      for (const itemSlug of build.itemSlugs) {
        expect(getItem(itemSlug), `${hero.slug} build "${build.label}" references unknown item "${itemSlug}"`).toBeDefined();
      }
    }
  });

  it.each(HEROES)("$name: has exactly 4 skills in passive/skill1/skill2/ultimate order", (hero) => {
    expect(hero.skills.map((s) => s.type)).toEqual(['passive', 'skill1', 'skill2', 'ultimate']);
    for (const skill of hero.skills) {
      expect(skill.name.length, `${hero.slug} ${skill.type} has an empty name`).toBeGreaterThan(0);
      expect(skill.description.length, `${hero.slug} ${skill.type} has an empty description`).toBeGreaterThan(0);
    }
  });
});
