import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'freya',
  name: 'Freya',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'hard',
  summary:
    'Fighter exp lane dengan dua mode senjata (pedang dan tombak) yang bisa dikombinasikan untuk burst combo tinggi. Sangat kuat lawan mage immobile.',
  strongAgainst: ['zhuxin'],
  weakAgainst: ['khufra'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Sustain dan penetration seimbang supaya combo mode senjata tetap relevan sepanjang game.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, latih transisi mode pedang-tombak untuk combo maksimal.' },
    { minute: 4, action: 'Rotasi gank singkat setelah ultimate tersedia untuk burst combo penuh.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, jadi damage dealer sekaligus semi-frontline.' },
    { minute: 19, action: 'Teamfight: cari 1v1 atau flank, combo penuh untuk burst target priority.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Combat Master',
      description:
        'Menggunakan skill pedang dan tombak secara bergantian memberi Freya buff stack combo yang meningkatkan damage skill berikutnya.',
    },
    {
      type: 'skill1',
      name: 'Crush Impact / Spear Sweep',
      description:
        'Menyerang musuh di depan dengan pedang (damage single target) atau tombak (area sekitar), tergantung mode senjata yang aktif.',
    },
    {
      type: 'skill2',
      name: 'Iron Blood Wolf / Piercing Strike',
      description:
        'Melesat mendekat ke musuh dengan mode pedang atau menusuk lurus ke depan dengan mode tombak, memberi damage dan sedikit CC.',
    },
    {
      type: 'ultimate',
      name: "Valkyrie's Descent",
      description:
        'Melompat ke area target dan mengubah semua skill dasar sementara jadi versi upgrade damage besar dengan efek tambahan.',
    },
  ],
};
