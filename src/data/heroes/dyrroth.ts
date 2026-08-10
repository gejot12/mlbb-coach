import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'dyrroth',
  name: 'Dyrroth',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan passive anti-shield yang mengabaikan sebagian shield musuh. Sangat efektif lawan hero yang mengandalkan shield untuk bertahan.',
  strongAgainst: ['esmeralda'],
  weakAgainst: ['uranus'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Anti-Shield',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'malefic-roar'],
      note: 'Penetration tinggi memaksimalkan efek anti-shield dari passive Dyrroth.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, poke musuh dengan tombak jarak jauh.' },
    { minute: 4, action: 'Rotasi gank singkat setelah level cukup untuk combo burst.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung kebutuhan tim.' },
    { minute: 14, action: 'Ikut grouping, incar hero shield musuh untuk maksimalkan passive.' },
    { minute: 19, action: 'Teamfight: fokus hero shield/sustain musuh yang biasanya sulit ditembus fighter lain.' },
  ],
};
