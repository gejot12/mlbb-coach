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
  skills: [
    {
      type: 'passive',
      name: 'Blade of Heaven',
      description:
        'Skill yang mengenai musuh memberi Martis sedikit lifesteal, membantunya bertahan lama saat trading.',
    },
    {
      type: 'skill1',
      name: 'Iron Leg',
      description:
        'Menendang target ke arah tertentu, memberi damage dan menarik musuh di sekitarnya berkumpul ke satu titik.',
    },
    {
      type: 'skill2',
      name: 'Ambush',
      description:
        'Melesat cepat ke arah target, memberi damage dan mendekatkan Martis ke musuh untuk combo lanjutan.',
    },
    {
      type: 'ultimate',
      name: 'Rising Dragon Strike',
      description:
        'Melancarkan rangkaian pukulan beruntun yang diakhiri true damage besar, sangat mematikan untuk musuh yang HP-nya sudah menipis.',
    },
  ],
};
