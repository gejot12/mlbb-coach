import type { Lane } from './hero';

export interface RolePhase {
  minuteRange: string;
  focus: string;
  details: string[];
}

export interface RoleGuide {
  lane: Lane;
  title: string;
  overview: string;
  phases: RolePhase[];
}
