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
import { hero as baxia } from './baxia';
import { hero as fredrinn } from './fredrinn';
import { hero as akai } from './akai';
import { hero as esmeralda } from './esmeralda';
import { hero as nolan } from './nolan';
import { hero as aulus } from './aulus';
import { hero as minsitthar } from './minsitthar';
import { hero as argus } from './argus';
import { hero as zhuxin } from './zhuxin';
import { hero as atlas } from './atlas';
import { hero as gloo } from './gloo';
import { hero as rafaela } from './rafaela';
import { hero as masha } from './masha';
import { hero as floryn } from './floryn';
import { hero as minotaur } from './minotaur';
import { hero as popolAndKupa } from './popol-and-kupa';
import { hero as wanwan } from './wanwan';
import { hero as claude } from './claude';
import { hero as granger } from './granger';
import { hero as valentina } from './valentina';
import { hero as pharsa } from './pharsa';
import { hero as selena } from './selena';
import { hero as saber } from './saber';
import { hero as zilong } from './zilong';
import { hero as miya } from './miya';

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
  baxia,
  fredrinn,
  akai,
  esmeralda,
  nolan,
  aulus,
  minsitthar,
  argus,
  zhuxin,
  atlas,
  gloo,
  rafaela,
  masha,
  floryn,
  minotaur,
  popolAndKupa,
  wanwan,
  claude,
  granger,
  valentina,
  pharsa,
  selena,
  saber,
  zilong,
  miya,
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
