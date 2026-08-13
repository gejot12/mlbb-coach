import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'aulus',
  name: 'Aulus',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan stack passive yang membuatnya makin kuat sepanjang game. Unggul di trade berkelanjutan, tapi rentan lawan burst combo cepat.',
  strongAgainst: ['zilong'],
  weakAgainst: ['argus'],
  synergizesWith: ['minsitthar'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Bangun sustain dan attack speed supaya stack passive terus bertambah tanpa henti.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade terus-menerus di exp lane untuk kumpulkan stack passive.' },
    { minute: 4, action: 'Tetap di lane untuk snowball stack, hanya rotasi kalau sangat aman.' },
    { minute: 9, action: 'Split push exp lane, hindari fight grup sebelum stack cukup tinggi.' },
    { minute: 14, action: 'Mulai ikut teamfight setelah stack maksimal, jadi damage dealer utama.' },
    { minute: 19, action: 'Teamfight: cari 1v1 atau flank, hindari fokus dari banyak musuh sekaligus.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Rising Blade',
      description:
        'Setiap kali menggunakan skill, Aulus mengumpulkan stack yang meningkatkan attack speed dan damage basic attack berikutnya.',
    },
    {
      type: 'skill1',
      name: 'Requiem',
      description:
        'Aulus menyerang ke depan dengan tombak, memberi damage fisik ke musuh dalam area garis pendek di depannya.',
    },
    {
      type: 'skill2',
      name: 'Ash Rain',
      description:
        'Melompat ke arah musuh dan menghantam area sekitar pendaratan, memberi damage dan sedikit slow ke target yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Wrath of Rome',
      description:
        'Aulus melancarkan rentetan serangan cepat ke musuh di sekitarnya, dengan damage yang makin besar seiring stack passive yang terkumpul.',
    },
  ],
};
