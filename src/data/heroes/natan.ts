import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'natan',
  name: 'Natan',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman berbasis cahaya dengan dash mobilitas tinggi dan damage area. Kuat lawan tank berkat damage tambahan berbasis cahaya.',
  strongAgainst: ['grock'],
  weakAgainst: ['saber'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Penetration tinggi memaksimalkan damage cahaya lawan tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan dash untuk trade dan kabur aman.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh berkat damage tambahan cahaya.' },
  ],
};
