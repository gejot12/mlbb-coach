import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'alice',
  name: 'Alice',
  roles: ['mage', 'tank'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Mage-tank hybrid dengan HP steal yang membuatnya sangat sulit dibunuh saat dikelilingi musuh. Kuat lawan sustained fighter dan formasi berkumpul.',
  strongAgainst: ['zilong'],
  weakAgainst: ['saber'],
  synergizesWith: ['tigreal'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['raptor-machete', 'arcane-boots', 'holy-crystal', 'concentrated-energy', 'athenas-shield'],
      note: 'HP tinggi memaksimalkan sustain dari HP steal ultimate Alice.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, manfaatkan HP steal untuk sustain di camp berat.' },
    { minute: 4, action: 'Gank lane dengan pool darah untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, HP steal membantu menang war of attrition.' },
    { minute: 14, action: 'Rotasi grup dengan tim, cari peluang masuk ke formasi musuh yang berkumpul.' },
    { minute: 19, action: 'Teamfight: masuk ke tengah kerumunan musuh, manfaatkan HP steal untuk bertahan lama.' },
  ],
};
