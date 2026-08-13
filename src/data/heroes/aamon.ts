import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'aamon',
  name: 'Aamon',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan shadow clone yang bisa teleport berulang untuk combo burst instan. Sangat berbahaya di tangan yang mahir mengatur teleport.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'windtalker'],
      note: 'Penetration dan critical tinggi untuk memaksimalkan combo teleport burst.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rangkaian teleport shadow clone.' },
    { minute: 4, action: 'Gank lane dengan combo teleport untuk burst instan.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 18, action: 'Teamfight: masuk dari sisi tak terduga lewat teleport, burst combo cepat lalu kabur.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Assassinate',
      description:
        'Setelah beberapa saat tidak terkena damage, Aamon masuk mode stealth dan basic attack berikutnya jadi critical strike bonus damage.',
    },
    {
      type: 'skill1',
      name: 'Shadow Grasp',
      description:
        'Melempar bayangan ke area yang dipilih, meledak setelah delay singkat dan memberi damage ke semua musuh di area tersebut.',
    },
    {
      type: 'skill2',
      name: 'Shadow Escape',
      description:
        'Menyebar beberapa shadow clone di sekitar; Aamon bisa teleport instan ke salah satu clone untuk reposisi cepat saat combo atau kabur.',
    },
    {
      type: 'ultimate',
      name: "Assassin's Fury",
      description:
        'Melancarkan rentetan serangan cepat ke target yang dipilih dari jarak jauh lewat teleport clone, memberi damage besar berturut-turut — combo utama untuk eksekusi target squishy.',
    },
  ],
};
