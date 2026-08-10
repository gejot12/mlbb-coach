import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'hayabusa',
  name: 'Hayabusa',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin jungler dengan shadow clone yang bisa menyerang dari banyak titik sekaligus. Sangat kuat memburu backline squishy.',
  strongAgainst: ['layla', 'cecilion'],
  weakAgainst: ['khufra', 'tigreal'],
  synergizesWith: ['mathilda'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['blade-of-despair', 'malefic-roar', 'endless-battle', 'wind-of-nature', 'berserkers-fury'],
      note: 'Damage per shadow strike butuh penetration tinggi supaya tetap relevan lawan tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle secepat mungkin, latih pola shadow untuk kill musuh.' },
    { minute: 4, action: 'Gank lane dengan shadow combo begitu ultimate pertama tersedia.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Split push sendiri, kembali cepat ke fight lewat mobility shadow.' },
    { minute: 18, action: 'Teamfight: masuk dari sisi yang tidak terlihat, fokus backline musuh.' },
  ],
};
