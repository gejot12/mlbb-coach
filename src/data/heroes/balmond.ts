import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'balmond',
  name: 'Balmond',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Fighter jungler klasik dengan ultimate true damage berbasis persentase HP musuh. Sangat kuat lawan tank stacking HP tebal.',
  strongAgainst: ['atlas', 'baxia'],
  weakAgainst: ['valentina'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'blade-of-despair', 'endless-battle', 'malefic-roar'],
      note: 'True damage ultimate sudah kuat lawan tank, item lain fokus sustain dan damage tambahan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, manfaatkan lifesteal passive untuk sustain.' },
    { minute: 4, action: 'Gank lane dengan fokus target HP tebal untuk maksimalkan true damage.' },
    { minute: 9, action: 'Kontrol turtle, ultimate membantu menang kontes damage race.' },
    { minute: 14, action: 'Split push atau bantu rotasi tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: fokus tank/frontline musuh dengan true damage ultimate.' },
  ],
};
