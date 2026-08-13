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
  skills: [
    {
      type: 'passive',
      name: 'Hard Skin',
      description:
        'Belerick memantulkan sebagian damage basic attack yang diterimanya kembali ke penyerang, menghukum hero yang mengandalkan basic attack.',
    },
    {
      type: 'skill1',
      name: 'Nature\'s Beckon',
      description:
        'Belerick menyerang area di depannya sambil menghisap sedikit sustain HP dari musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: "Purest Anger / Overlord's Might",
      description:
        'Melemparkan akar ke musuh yang menarik mereka mendekat sekaligus memberi damage dan sedikit hambatan gerak.',
    },
    {
      type: 'ultimate',
      name: 'Wrath of Nature',
      description:
        'Belerick memanggil kekuatan alam di sekitarnya, memberi damage area dan meningkatkan reflect damage-nya untuk sementara — bagus jadi tank frontline penuh.',
    },
  ],
};
