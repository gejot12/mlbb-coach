import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gatotkaca',
  name: 'Gatotkaca',
  roles: ['tank'],
  lanes: ['exp', 'jungle'],
  difficulty: 'medium',
  summary:
    'Tank dengan kulit baja dan ultimate yang memantulkan sebagian damage ke penyerang. Sangat kuat menghukum musuh basic-attack reliant.',
  strongAgainst: ['zilong'],
  weakAgainst: ['eudora'],
  synergizesWith: ['miya'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'antique-cuirass', 'immortality', 'dominance-ice'],
      note: 'HP dan physical defense tinggi memaksimalkan efek reflect damage ultimate.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane atau clear jungle, manfaatkan kulit baja untuk trade aman.' },
    { minute: 4, action: 'Rotasi gank atau bantu lane lain setelah level cukup.' },
    { minute: 9, action: 'Kontrol turtle, ultimate reflect membantu menang kontes damage.' },
    { minute: 14, action: 'Jadi frontline saat grouping, tarik perhatian musuh sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: berdiri di depan formasi, ultimate reflect damage basic attack musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Kuda Sembrani's Power",
      description:
        'Gatotkaca mendapat tambahan physical defense secara permanen setiap kali level bertambah.',
    },
    {
      type: 'skill1',
      name: 'Iron Fist',
      description:
        'Menghantamkan tinju ke area di depan Gatotkaca, memberi damage dan sedikit knock-up ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Sacred Bull Rush',
      description:
        'Meluncur ke arah target, memberi damage dan menahan pergerakan (immobilize) musuh yang tertabrak.',
    },
    {
      type: 'ultimate',
      name: "Steel-Cast Bunker's Wrath",
      description:
        'Melapisi diri dengan armor baja yang memantulkan sebagian damage basic attack musuh kembali kepada mereka selama durasi aktif.',
    },
  ],
};
