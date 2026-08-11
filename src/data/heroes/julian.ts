import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'julian',
  name: 'Julian',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan mobilitas tinggi dan combo burst yang bisa dilakukan dari berbagai sudut. Kuat memburu backline squishy yang lengah.',
  strongAgainst: ['layla'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'berserkers-fury', 'endless-battle', 'malefic-roar', 'windtalker'],
      note: 'Fokus penetration dan critical untuk memaksimalkan combo burst dari berbagai sudut.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih variasi combo dari berbagai sudut.' },
    { minute: 4, action: 'Gank lane dengan combo burst untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank setelah CC utama musuh terpakai.' },
  ],
};
