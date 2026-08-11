import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'keryn',
  name: 'Keryn',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman dengan mobilitas tinggi dan basic attack yang bisa menembus shield musuh. Sangat merepotkan hero yang mengandalkan shield untuk bertahan.',
  strongAgainst: ['esmeralda'],
  weakAgainst: ['saber'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Anti-Shield',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Attack speed tinggi memaksimalkan efek tembus shield dari basic attack Keryn.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan mobilitas untuk trade dan kabur aman.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan dukungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, mobilitas tinggi bikin lebih berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus hero shield/sustain musuh yang biasanya sulit ditembus marksman lain.' },
  ],
};
