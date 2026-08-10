import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'belerick',
  name: 'Belerick',
  roles: ['tank'],
  lanes: ['exp'],
  difficulty: 'easy',
  summary:
    'Tank exp lane dengan passive reflect damage yang menghukum hero basic-attack reliant. Sangat tahan lama di lane 1v1.',
  strongAgainst: ['alucard'],
  weakAgainst: ['gusion'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'dominance-ice', 'immortality', 'athenas-shield', 'cursed-helmet'],
      note: 'Reflect damage Belerick makin efektif dengan HP dan defense tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane sendirian, manfaatkan reflect damage untuk trade aman.' },
    { minute: 4, action: 'Bertahan solo tanpa perlu bantuan, kirim sinyal jungler untuk fokus lane lain.' },
    { minute: 9, action: 'Mulai rotasi bantu kontrol turtle setelah exp lane aman/menang.' },
    { minute: 14, action: 'Jadi frontline utama saat grouping, tarik perhatian musuh sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: berdiri di depan formasi, serap damage sebanyak-banyaknya untuk carry.' },
  ],
};
