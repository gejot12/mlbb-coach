import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'aamon',
  name: 'Aamon',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan shadow clone yang bisa teleport berulang untuk combo burst instan. Sangat berbahaya di tangan yang mahir mengatur teleport.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'berserkers-fury', 'windtalker'],
      note: 'Penetration dan critical tinggi untuk memaksimalkan combo teleport burst.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rangkaian teleport shadow clone.' },
    { minute: 4, action: 'Gank lane dengan combo teleport untuk burst instan.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 18, action: 'Teamfight: masuk dari sisi tak terduga lewat teleport, burst combo cepat lalu kabur.' },
  ],
};
