import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'valir',
  name: 'Valir',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan dinding api dan knockup yang efektif mengontrol jalur masuk musuh. Kuat menahan melee diver dengan zoning api.',
  strongAgainst: ['zilong'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk sustain mana karena Valir sering spam skill untuk zoning.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, pasang dinding api di jalur rawan gank.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan zoning api.' },
    { minute: 9, action: 'Kontrol objective, gunakan dinding api untuk blokir jalur musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: dinding api di jalur masuk musuh sebelum fight utama dimulai.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Blaze',
      description:
        'Setiap skill yang mengenai musuh menambah stack terbakar; setelah cukup stack, musuh terkena ledakan damage tambahan.',
    },
    {
      type: 'skill1',
      name: 'Fireball',
      description:
        'Melemparkan bola api ke target area yang meledak setelah delay singkat, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Wall of Flame',
      description:
        'Memasang dinding api yang menghalangi jalur, memberi damage dan knock-up ke musuh yang menerjangnya.',
    },
    {
      type: 'ultimate',
      name: "Valir's Domain",
      description:
        'Memunculkan pilar-pilar api di area luas secara berurutan, memberi damage berulang pada musuh yang terjebak di dalamnya.',
    },
  ],
};
