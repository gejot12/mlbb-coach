import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'obsidian',
  name: 'Obsidian',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman berbasis kristal dengan damage area dan kemampuan menembus formasi. Kuat lawan tank tebal berkat damage tambahan berbasis kristal.',
  strongAgainst: ['uranus'],
  weakAgainst: ['saber'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Penetration tinggi memaksimalkan damage kristal lawan tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, bangun stack kristal untuk damage tambahan.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh berkat damage tambahan kristal.' },
  ],
};
