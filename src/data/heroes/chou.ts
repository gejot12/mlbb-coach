import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'chou',
  name: 'Chou',
  roles: ['fighter'],
  lanes: ['exp', 'roam'],
  difficulty: 'hard',
  summary:
    'Fighter dengan mobilitas tinggi dan kick ultimate yang bisa mengganggu combo musuh. Fleksibel di exp lane maupun roam.',
  strongAgainst: ['alucard'],
  weakAgainst: ['karrie', 'kagura'],
  synergizesWith: ['khufra'],
  builds: [
    {
      label: 'Core Fighter',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'antique-cuirass', 'immortality', 'wind-of-nature'],
      note: 'Endless Battle untuk sustain awal, transisi ke damage item saat lead.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm exp lane, gunakan skill 1 untuk poke/last-hit.' },
    { minute: 3, action: 'Cari peluang gank ke mid/jungle setelah level 4 dengan combo stun-kick.' },
    { minute: 8, action: 'Split push exp lane atau ikut rotasi grup tergantung kebutuhan tim.' },
    { minute: 13, action: 'Gunakan ultimate untuk kick target musuh keluar dari posisi aman (peel/isolate).' },
    { minute: 18, action: 'Teamfight: cari kesempatan kick carry musuh menjauh dari tim sebelum engage utama.' },
  ],
};
