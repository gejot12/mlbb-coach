import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'khaleed',
  name: 'Khaleed',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan dash pasir yang memberi sustain dan mobilitas. Kuat trading berkepanjangan berkat regenerasi dari passive.',
  strongAgainst: ['zilong'],
  weakAgainst: ['khufra'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Sustain tinggi memaksimalkan trade berkelanjutan berkat passive regenerasi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, manfaatkan dash pasir untuk sustain dan mobilitas.' },
    { minute: 4, action: 'Rotasi gank singkat setelah level cukup untuk combo dash.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, jadi damage dealer sekaligus semi-frontline.' },
    { minute: 19, action: 'Teamfight: masuk dengan dash combo, manfaatkan sustain untuk bertahan lama di fight.' },
  ],
};
