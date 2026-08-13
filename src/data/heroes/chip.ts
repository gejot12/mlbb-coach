import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'chip',
  name: 'Chip',
  roles: ['tank', 'support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support robot dengan mobilitas tinggi lewat portal dan speed buff, plus shield untuk melindungi diri saat berinisiasi di depan tim.',
  strongAgainst: ['karina'],
  weakAgainst: ['pharsa'],
  synergizesWith: ['karrie'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['tough-boots', 'enchanted-talisman', 'antique-cuirass', 'immortality', 'athenas-shield'],
      note: 'Hybrid defense supaya bisa menyerap serangan untuk carry secara efektif.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai kunci vision area rawan gank.' },
    { minute: 4, action: 'Roam bantu lane lain, kunci musuh yang mengganggu carry.' },
    { minute: 9, action: 'Kontrol turtle, siap serap serangan saat kontes objective.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap lindungi dari dive assassin.' },
    { minute: 19, action: 'Teamfight: kunci/serap serangan ke carry musuh yang paling berbahaya.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Snack Time!',
      description:
        'Saat tidak dalam pertarungan, Chip ngemil keripik kentang secara bertahap dan memulihkan sejumlah HP setelah selesai satu bungkus.',
    },
    {
      type: 'skill1',
      name: 'Crash Course',
      description:
        'Chip menghantamkan hovercraft-nya ke tanah, memberi damage magic ke musuh sekitar dan menandai hero musuh yang terkena; Chip mendapat shield jika mengenai hero musuh.',
    },
    {
      type: 'skill2',
      name: 'Overtime',
      description:
        'Chip melaju sambil bertahap menambah movement speed hingga mencapai kecepatan maksimal untuk beberapa saat.',
    },
    {
      type: 'ultimate',
      name: 'Shortcut',
      description:
        'Chip membuat portal utama di lokasi musuh yang memberi damage magic dan slow, sekaligus portal penghubung di dekat rekan tim untuk mobilitas instan ke lokasi tersebut.',
    },
  ],
};
