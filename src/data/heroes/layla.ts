import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'layla',
  name: 'Layla',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'easy',
  summary:
    'Marksman gold lane paling mudah dipelajari, damage stabil dari jarak jauh. Sangat rentan lawan assassin dive karena tanpa mobility.',
  strongAgainst: ['kagura'],
  weakAgainst: ['fanny', 'gusion', 'ling'],
  synergizesWith: ['tigreal', 'franco'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'windtalker', 'blade-of-despair', 'wind-of-nature', 'malefic-roar'],
      note: 'Bangun crit + attack speed secepat mungkin karena Layla tidak punya mobility skill.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane fokus penuh, jangan overextend tanpa vision.' },
    { minute: 5, action: 'Push turret gold lane bareng roam setelah item pertama selesai.' },
    { minute: 10, action: 'Rotasi ke objective (turtle/lord) hanya setelah dilindungi tim.' },
    { minute: 15, action: 'Grouping dengan tim, selalu posisi paling belakang saat teamfight.' },
    { minute: 20, action: 'Teamfight: fokus damage target terdekat yang aman dijangkau, kabur duluan kalau di-dive.' },
  ],
};
