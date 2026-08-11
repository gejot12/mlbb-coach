import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'irithel',
  name: 'Irithel',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman tanpa basic attack biasa — semua serangan berbasis skill dengan crossbow ganda. Sangat kuat kiting lawan hero melee.',
  strongAgainst: ['zilong'],
  weakAgainst: ['helcurt'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Build crit standar tetap efektif karena skill dasar Irithel scaling dari attack stats.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan jangkauan serangan untuk trade aman.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan dukungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, kiting terus musuh melee yang mendekat.' },
    { minute: 20, action: 'Teamfight: jaga jarak dan terus kiting, fokus damage ke target terdekat yang aman.' },
  ],
};
