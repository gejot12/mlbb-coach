import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'arlott',
  name: 'Arlott',
  roles: ['fighter'],
  lanes: ['jungle', 'exp'],
  difficulty: 'hard',
  summary:
    'Fighter dengan combo dash udara yang bisa menjuggling musuh terus-menerus. Sangat berbahaya di tangan yang mahir mengatur ritme combo.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Sustain dan penetration seimbang supaya combo juggling tetap efektif sepanjang game.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau trade exp lane, latih ritme combo dash udara.' },
    { minute: 4, action: 'Gank lane dengan combo juggling untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Split push atau ikut rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: masuk dari flank, juggling target priority selama mungkin.' },
  ],
};
