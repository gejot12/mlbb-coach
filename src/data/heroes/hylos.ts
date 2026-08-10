import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hylos',
  name: 'Hylos',
  roles: ['tank'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Tank roam dengan aura yang mengurangi lifesteal musuh sekitar dan ultimate area yang memperlambat sekaligus stun. Sangat kuat melawan tim sustain tinggi.',
  strongAgainst: ['zilong'],
  weakAgainst: ['eudora'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'cursed-helmet'],
      note: 'HP tinggi memaksimalkan efektivitas aura anti-lifesteal untuk seluruh tim.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai zoning area dengan aura anti-lifesteal.' },
    { minute: 4, action: 'Roam bantu lane lain, aura membantu tim menang trade lawan sustain fighter.' },
    { minute: 9, action: 'Kontrol turtle, ultimate area untuk menang kontes damage.' },
    { minute: 14, action: 'Selalu dekat carry saat rotasi grup, siap engage duluan.' },
    { minute: 19, action: 'Teamfight: ultimate ke tengah kerumunan musuh untuk slow-stun massal.' },
  ],
};
