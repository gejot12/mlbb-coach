import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'karina',
  name: 'Karina',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Assassin jungler dengan magic damage dan ultimate true damage berbasis persentase HP musuh yang hilang. Mudah dipelajari, sangat kuat lawan mage squishy.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['vexana'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Genius Wand sangat sinergi karena damage Karina scaling dengan persentase HP musuh yang hilang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih combo dash-teleport untuk mobilitas maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo burst tersedia untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, fokus target HP rendah untuk maksimalkan true damage ultimate.' },
  ],
};
