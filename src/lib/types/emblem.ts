import type { Role } from './hero';

export interface EmblemTalent {
  tier: 1 | 2 | 3;
  name: string;
  effect: string;
}

export interface Emblem {
  slug: string;
  name: string;
  focus: string;
  bestFor: Role[];
  talents: EmblemTalent[];
}
