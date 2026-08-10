import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'yu-zhong',
  name: 'Yu Zhong',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan ultimate dive jarak jauh dan sustain tinggi. Kuat memburu mage/marksman squishy di belakang.',
  strongAgainst: ['lunox'],
  weakAgainst: ['khufra', 'chou'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Endless Battle penting untuk sustain saat dive ke backline musuh.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, manfaatkan sustain untuk menang war of attrition.' },
    { minute: 4, action: 'Cari peluang gank singkat ke mid setelah ultimate tersedia.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Simpan ultimate untuk dive langsung ke carry musuh saat teamfight dimulai.' },
    { minute: 19, action: 'Teamfight: buka fight dengan dive ultimate ke backline, manfaatkan sustain untuk bertahan di sana.' },
  ],
};
