import type { Hero, Lane, Role } from '@/lib/types/hero';

import { hero as tigreal } from './tigreal';
import { hero as franco } from './franco';
import { hero as khufra } from './khufra';
import { hero as chou } from './chou';
import { hero as alucard } from './alucard';
import { hero as fanny } from './fanny';
import { hero as ling } from './ling';
import { hero as gusion } from './gusion';
import { hero as kagura } from './kagura';
import { hero as lunox } from './lunox';
import { hero as layla } from './layla';
import { hero as karrie } from './karrie';
import { hero as estes } from './estes';
import { hero as angela } from './angela';
import { hero as belerick } from './belerick';
import { hero as yuZhong } from './yu-zhong';
import { hero as lancelot } from './lancelot';
import { hero as hayabusa } from './hayabusa';
import { hero as cecilion } from './cecilion';
import { hero as harith } from './harith';
import { hero as beatrix } from './beatrix';
import { hero as melissa } from './melissa';
import { hero as mathilda } from './mathilda';
import { hero as diggie } from './diggie';

export const HEROES: Hero[] = [
  tigreal,
  franco,
  khufra,
  chou,
  alucard,
  fanny,
  ling,
  gusion,
  kagura,
  lunox,
  layla,
  karrie,
  estes,
  angela,
  belerick,
  yuZhong,
  lancelot,
  hayabusa,
  cecilion,
  harith,
  beatrix,
  melissa,
  mathilda,
  diggie,
];

const HEROES_BY_SLUG = new Map(HEROES.map((h) => [h.slug, h]));

export function getHero(slug: string): Hero | undefined {
  return HEROES_BY_SLUG.get(slug);
}

export function getHeroesByRole(role: Role): Hero[] {
  return HEROES.filter((h) => h.roles.includes(role));
}

export function getHeroesByLane(lane: Lane): Hero[] {
  return HEROES.filter((h) => h.lanes.includes(lane));
}

export const ALL_ROLES: Role[] = ['tank', 'fighter', 'assassin', 'mage', 'marksman', 'support'];
export const ALL_LANES: Lane[] = ['exp', 'jungle', 'mid', 'gold', 'roam'];
