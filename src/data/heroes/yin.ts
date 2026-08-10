import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'yin',
  name: 'Yin',
  roles: ['fighter', 'assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Fighter-assassin hybrid dengan combo clone dan damage true berbasis maksimal HP musuh. Sangat kuat membantai tank tebal dalam sekejap.',
  strongAgainst: ['grock'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['raptor-machete', 'blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury'],
      note: 'Damage persentase dari ultimate sudah kuat lawan tank, item lain fokus attack speed dan sustain.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih timing combo clone untuk burst maksimal.' },
    { minute: 4, action: 'Gank lane dengan fokus target HP tebal untuk maksimalkan true damage.' },
    { minute: 9, action: 'Kontrol turtle, combo membantu menang kontes damage race lawan tank.' },
    { minute: 14, action: 'Terus cari peluang 1v1 lawan tank/fighter HP besar.' },
    { minute: 19, action: 'Teamfight: fokus tank/frontline musuh dengan combo true damage.' },
  ],
};
