import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'bane',
  name: 'Bane',
  roles: ['fighter'],
  lanes: ['exp', 'jungle'],
  difficulty: 'easy',
  summary:
    'Fighter dengan damage racun dan shrimp yang bisa memberi peringatan dini serangan musuh. Kuat trading berkelanjutan lawan sustain fighter lain.',
  strongAgainst: ['zilong'],
  weakAgainst: ['saber'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Sustain tinggi memaksimalkan trade berkelanjutan berkat damage racun Bane.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane atau clear jungle, manfaatkan shrimp untuk deteksi gank.' },
    { minute: 4, action: 'Rotasi gank singkat setelah level cukup.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, jadi damage dealer sekaligus semi-frontline.' },
    { minute: 19, action: 'Teamfight: masuk untuk trade damage racun berkelanjutan ke target priority.' },
  ],
};
