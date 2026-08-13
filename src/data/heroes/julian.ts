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
  skills: [
    {
      type: 'passive',
      name: 'Froststep',
      description:
        'Setelah menggunakan skill mobilitas, serangan Julian berikutnya ke musuh yang sama memberi bonus damage tambahan.',
    },
    {
      type: 'skill1',
      name: 'Frost Blade',
      description:
        'Menebaskan pedang ke arah yang dipilih, memberi damage ke musuh yang terkena sekaligus memperlambat mereka.',
    },
    {
      type: 'skill2',
      name: 'Glacial Surge',
      description:
        'Melesat cepat ke arah target dari berbagai sudut, memberi damage dan reposisi instan untuk melanjutkan combo.',
    },
    {
      type: 'ultimate',
      name: 'Winter Reaper',
      description:
        'Melancarkan rangkaian serangan combo cepat ke target yang dipilih, memberi damage besar berturut-turut — combo eksekusi utama untuk memburu carry musuh.',
    },
  ],
};
