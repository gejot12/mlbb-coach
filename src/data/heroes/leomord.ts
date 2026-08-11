import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'leomord',
  name: 'Leomord',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan kuda hantu yang bisa dipanggil untuk damage tambahan dan mobilitas. Kuat memburu backline squishy dengan bantuan kuda.',
  strongAgainst: ['layla'],
  weakAgainst: ['akai'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Sustain dan penetration seimbang untuk combo bersama kuda hantu.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, panggil kuda untuk bantu clear lebih cepat.' },
    { minute: 4, action: 'Gank lane dengan bantuan kuda untuk burst combo.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off dengan kuda.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: masuk bersama kuda untuk burst combo ke backline musuh.' },
  ],
};
