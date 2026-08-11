import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'badang',
  name: 'Badang',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan grip yang menarik musuh mendekat dan ultimate pukulan area yang mendorong musuh menjauh. Kuat mengontrol posisi musuh melee.',
  strongAgainst: ['zilong'],
  weakAgainst: ['khufra'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Sustain dan penetration seimbang untuk trade berkelanjutan di exp lane.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, gunakan grip untuk memaksa duel jarak dekat.' },
    { minute: 4, action: 'Rotasi gank singkat dengan grip untuk kunci kill.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, gunakan grip untuk menarik target priority.' },
    { minute: 19, action: 'Teamfight: grip carry musuh mendekat, atau ultimate untuk dorong musuh menjauh dari objective.' },
  ],
};
