import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'martis',
  name: 'Martis',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan ultimate execute yang mengabaikan sebagian besar defense musuh. Sangat kuat lawan tank yang HP-nya sudah menipis.',
  strongAgainst: ['grock'],
  weakAgainst: ['khufra'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Execute',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'blade-of-despair', 'endless-battle', 'malefic-roar'],
      note: 'Damage tinggi memaksimalkan threshold execute dari ultimate Martis.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, siapkan ultimate untuk kill/objective secure.' },
    { minute: 4, action: 'Gank lane dengan fokus target HP menipis untuk execute.' },
    { minute: 9, action: 'Kontrol turtle, ultimate membantu menang kontes damage.' },
    { minute: 14, action: 'Split push atau bantu rotasi tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: fokus target HP rendah untuk execute instan dengan ultimate.' },
  ],
};
