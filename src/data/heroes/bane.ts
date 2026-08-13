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
  skills: [
    {
      type: 'passive',
      name: 'Shrimp Pet',
      description:
        'Bane memiliki shrimp peliharaan yang berjaga di sekitarnya dan memberi peringatan dini saat ada musuh mendekat dari semak.',
    },
    {
      type: 'skill1',
      name: 'Concussive Blast',
      description:
        'Menembakkan tombak garis lurus ke musuh, memberi damage fisik ke target yang terkena dalam jangkauan menengah.',
    },
    {
      type: 'skill2',
      name: "Coral Blessing / Bane's Roar",
      description:
        'Memberi buff area ke sekitar Bane yang meningkatkan damage dan sedikit sustain untuk dirinya dan hero terdekat.',
    },
    {
      type: 'ultimate',
      name: "King's Roar",
      description:
        'Bane meraung dan menyerang area di sekitarnya, memberi damage racun berkelanjutan yang terus menggerogoti HP musuh di dalamnya.',
    },
  ],
};
