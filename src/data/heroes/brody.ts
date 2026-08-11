import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'brody',
  name: 'Brody',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan passive critical yang memberi true damage tambahan lewat critical hit. Sangat kuat lawan tank tebal berkat true damage-nya.',
  strongAgainst: ['grock'],
  weakAgainst: ['saber'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Crit Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Build crit maksimal untuk memicu true damage tambahan dari passive Brody.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, bangun crit chance secepat mungkin.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh berkat true damage critical.' },
  ],
};
