import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lukas',
  name: 'Lukas',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler bergaya petinju dengan combo pukulan cepat dan mobilitas tinggi. Kuat memburu backline squishy dengan tekanan combo terus-menerus.',
  strongAgainst: ['layla'],
  weakAgainst: ['akai'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Sustain dan penetration seimbang untuk combo pukulan berkelanjutan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih ritme combo pukulan untuk burst maksimal.' },
    { minute: 4, action: 'Gank lane dengan combo pukulan untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: masuk dari flank, rangkaian combo ke target priority.' },
  ],
};
