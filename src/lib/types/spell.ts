import type { Role } from './hero';

export interface BattleSpell {
  slug: string;
  name: string;
  effect: string;
  usage: string;
  recommendedRoles: Role[];
}
