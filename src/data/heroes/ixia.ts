import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'ixia',
  name: 'Ixia',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman dengan dua mode senjata (single-target dan area) yang bisa ditukar sesuai kebutuhan fight. Sangat fleksibel lawan tank maupun grup musuh.',
  strongAgainst: ['grock'],
  weakAgainst: ['saber'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Attack speed tinggi memaksimalkan kedua mode senjata Ixia.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, latih transisi mode senjata sesuai situasi.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective, pilih mode senjata sesuai formasi musuh.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi fleksibel ganti mode.' },
    { minute: 20, action: 'Teamfight: mode area kalau musuh berkumpul, mode single-target untuk fokus carry.' },
  ],
};
