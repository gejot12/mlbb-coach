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
  skills: [
    {
      type: 'passive',
      name: 'Shadow Strike',
      description:
        'Serangan berturut-turut ke target yang sama memberi bonus damage tambahan pada hit tertentu dalam rangkaian combo.',
    },
    {
      type: 'skill1',
      name: 'Shuriken Fan',
      description:
        'Melempar beberapa shuriken menyebar ke depan, memberi damage ke semua musuh yang terkena dan menandai mereka.',
    },
    {
      type: 'skill2',
      name: 'Phantom Shuriken',
      description:
        'Melesat cepat ke arah yang dipilih sambil melempar shuriken, memberi damage dan reposisi instan.',
    },
    {
      type: 'ultimate',
      name: 'Ninjutsu: Quadraslash',
      description:
        'Memanggil bayangan yang menyerang serentak semua musuh yang sudah ditandai di sekitarnya, memberi damage besar ke banyak target sekaligus.',
    },
  ],
};
