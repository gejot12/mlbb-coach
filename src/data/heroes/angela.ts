import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'angela',
  name: 'Angela',
  roles: ['support', 'mage'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support unik yang bisa menyatu (link) dengan hero lain untuk memberi shield dan membantu combo/kabur. Ultimate global mengunci target dari jarak sangat jauh.',
  strongAgainst: ['alucard'],
  weakAgainst: ['chou', 'khufra'],
  synergizesWith: ['gusion', 'alucard'],
  builds: [
    {
      label: 'Core Utility',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Fokus item yang memperpanjang durasi link dan menambah survivability host.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai latih akurasi ultimate global di jarak jauh.' },
    { minute: 4, action: 'Link ke jungler/assassin untuk bantu gank lane lain.' },
    { minute: 8, action: 'Kontrol vision objective, siapkan ultimate untuk membuka fight dari jarak jauh.' },
    { minute: 13, action: 'Selalu link ke hero yang paling butuh peel/mobility saat rotasi grup.' },
    { minute: 18, action: 'Teamfight: buka fight dengan ultimate ke carry musuh sebelum tim sendiri masuk.' },
  ],
};
