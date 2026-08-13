import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'moskov',
  name: 'Moskov',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan tombak tembus yang mengenai semua unit segaris dan ultimate global untuk membantu lane lain. Sangat efektif war poke dan split push.',
  strongAgainst: ['grock'],
  weakAgainst: ['helcurt'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Poke',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Attack range panjang Moskov cocok dengan build crit-poke standar marksman.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane dengan jangkauan tombak yang panjang untuk trade aman.' },
    { minute: 5, action: 'Push turret gold lane, manfaatkan tombak tembus untuk clear cepat.' },
    { minute: 10, action: 'Gunakan ultimate global untuk bantu kill di lane lain sambil tetap farm.' },
    { minute: 15, action: 'Grouping dengan tim, war poke dari jarak jauh sebelum kontes langsung.' },
    { minute: 20, action: 'Teamfight: poke formasi musuh yang sejajar dengan tombak tembus.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Abyssal Wave',
      description:
        'Basic attack Moskov menembus dan mengenai semua musuh yang berada segaris di belakang target utama.',
    },
    {
      type: 'skill1',
      name: 'Spear of Misery',
      description:
        'Melempar tombak ke arah garis lurus yang memberi damage sekaligus mengurangi pertahanan fisik musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Rushing Thunder',
      description:
        'Meningkatkan movement speed dan attack speed Moskov untuk sementara waktu, membantu kiting maupun mengejar musuh.',
    },
    {
      type: 'ultimate',
      name: 'Abyssal Spear',
      description:
        'Melontarkan tombak raksasa ke jarak sangat jauh (bisa lintas map di level maksimal) yang menembus dan memberi damage besar ke semua musuh segaris.',
    },
  ],
};
