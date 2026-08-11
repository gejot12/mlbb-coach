import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hilda',
  name: 'Hilda',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Fighter jungler dengan sulur yang memberi heal dan mobilitas ekstra. Salah satu jungler paling mudah dipelajari, kuat menang kontes jungle awal.',
  strongAgainst: ['zilong'],
  weakAgainst: ['eudora'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'immortality'],
      note: 'Sustain tinggi memaksimalkan heal dari sulur untuk menang war of attrition.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, manfaatkan sulur untuk sustain dan mobilitas.' },
    { minute: 4, action: 'Gank lane dengan combo sulur untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, menang kontes damage berkat sustain tinggi.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: masuk dengan sulur untuk mobilitas, manfaatkan heal untuk bertahan lama.' },
  ],
};
