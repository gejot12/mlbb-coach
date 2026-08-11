import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'cici',
  name: 'Cici',
  roles: ['fighter', 'assassin'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter-assassin dengan rangkaian tendangan bela diri yang cepat dan mobilitas tinggi. Kuat memburu mage squishy di jungle/mid.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['raptor-machete', 'blade-of-despair', 'endless-battle', 'berserkers-fury', 'wind-of-nature'],
      note: 'Attack speed dan penetration untuk memaksimalkan rangkaian tendangan combo.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih rangkaian combo tendangan untuk burst maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo penuh tersedia untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, rangkaian combo ke target priority.' },
  ],
};
