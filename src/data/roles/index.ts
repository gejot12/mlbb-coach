import type { Lane } from '@/lib/types/hero';
import type { RoleGuide } from '@/lib/types/role-guide';

import { roleGuide as jungle } from './jungle';
import { roleGuide as gold } from './gold';
import { roleGuide as exp } from './exp';
import { roleGuide as mid } from './mid';
import { roleGuide as roam } from './roam';

export const ROLE_GUIDES: RoleGuide[] = [exp, jungle, mid, gold, roam];

const ROLE_GUIDES_BY_LANE = new Map(ROLE_GUIDES.map((g) => [g.lane, g]));

export function getRoleGuide(lane: Lane): RoleGuide | undefined {
  return ROLE_GUIDES_BY_LANE.get(lane);
}
