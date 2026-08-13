import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zetian',
  name: 'Zetian',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan puppet/ilusi yang membingungkan target musuh dan burst combo dari jarak aman. Kuat lawan hero yang mengandalkan dive langsung.',
  strongAgainst: ['zilong'],
  weakAgainst: ['nolan'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk scaling magic power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, jaga jarak aman dari kontak langsung.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan combo puppet untuk burst.' },
    { minute: 9, action: 'Kontrol objective dari jarak aman, gunakan puppet untuk mengecoh musuh.' },
    { minute: 14, action: 'Grouping dengan tim, tetap di posisi paling belakang.' },
    { minute: 19, action: 'Teamfight: gunakan puppet untuk membingungkan fokus musuh sebelum burst combo.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Celestial Armament',
      description:
        'Zetian bisa mendorong mundur musuh yang mendekat terlalu dekat dan mendapat shield sementara sebagai proteksi.',
    },
    {
      type: 'skill1',
      name: 'Phoenix Strike',
      description:
        'Melepaskan gelombang phoenix ke arah target; jika mengenai musuh, gelombang berikutnya otomatis menyusul hingga beberapa kali dengan damage yang makin besar.',
    },
    {
      type: 'skill2',
      name: 'Phoenix Descent',
      description:
        'Memerintahkan spirit phoenix yang aktif untuk menerjang ke lokasi yang dipilih, memberi damage sekaligus efek slow singkat pada musuh yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Fury of the Phoenix',
      description:
        'Memberi bonus movement speed sementara ke seluruh tim sekaligus menjatuhkan damage dan stun ke semua hero musuh di sekitarnya, dengan bonus vision terhadap mereka.',
    },
  ],
};
