import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'clint',
  name: 'Clint',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'easy',
  summary:
    'Marksman gunslinger dengan dash mobilitas dan damage cepat. Sangat mudah dipelajari, kuat kiting lawan melee diver.',
  strongAgainst: ['zilong'],
  weakAgainst: ['helcurt'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Build crit standar, dash bawaan Clint sudah memberi mobilitas cukup untuk kiting.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan dash untuk trade dan kabur aman.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan dukungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, dash untuk reposisi cepat saat terancam.' },
    { minute: 20, action: 'Teamfight: kiting terus musuh melee, dash keluar kalau di-dive.' },
  ],
};
