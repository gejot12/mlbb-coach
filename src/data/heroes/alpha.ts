import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'alpha',
  name: 'Alpha',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan clone Beta yang bisa dipanggil untuk burst tambahan. Kuat memburu backline squishy dengan bantuan clone.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'blade-of-despair', 'endless-battle', 'malefic-roar'],
      note: 'Penetration tinggi supaya combo Alpha-Beta tetap efektif lawan tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih combo absorb-release Beta.' },
    { minute: 4, action: 'Gank lane dengan bantuan Beta untuk burst combo.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off dengan Beta.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: masuk bersama Beta untuk burst combo ke backline musuh.' },
  ],
};
