export type Role = 'tank' | 'fighter' | 'assassin' | 'mage' | 'marksman' | 'support';

export type Lane = 'exp' | 'jungle' | 'mid' | 'gold' | 'roam';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface ItemBuild {
  label: string;
  itemSlugs: string[];
  note?: string;
}

export interface RotationNote {
  minute: number;
  action: string;
}

export type SkillType = 'passive' | 'skill1' | 'skill2' | 'ultimate';

export interface HeroSkill {
  type: SkillType;
  /** In-game skill name. */
  name: string;
  description: string;
}

export interface Hero {
  slug: string;
  name: string;
  roles: Role[];
  lanes: Lane[];
  difficulty: Difficulty;
  summary: string;
  /** Hero slugs this hero tends to beat in lane/fights. */
  strongAgainst: string[];
  /** Hero slugs that tend to beat this hero. */
  weakAgainst: string[];
  /** Hero slugs that combo well with this hero. */
  synergizesWith: string[];
  builds: ItemBuild[];
  rotation: RotationNote[];
  /** Passive + Skill 1 + Skill 2 + Ultimate, in that order. */
  skills: HeroSkill[];
}
