import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'mathilda',
  name: 'Mathilda',
  roles: ['support'],
  lanes: ['roam'],
  difficulty: 'medium',
  summary:
    'Support roam dengan mobilitas tinggi lewat dash yang bisa membawa ally. Sangat kuat membantu inisiasi maupun evakuasi ally yang terjebak.',
  strongAgainst: ['fanny'],
  weakAgainst: ['khufra'],
  synergizesWith: ['harith', 'hayabusa'],
  builds: [
    {
      label: 'Core Mobility',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Fokus item yang menambah survivability karena Mathilda sering jadi orang pertama yang masuk fight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, mulai latih timing dash assist untuk kabur/masuk fight.' },
    { minute: 4, action: 'Roam bantu lane lain dengan mobility tinggi.' },
    { minute: 8, action: 'Kontrol vision objective, siap dash membantu ally yang terjebak.' },
    { minute: 13, action: 'Selalu dekat carry utama untuk assist mobility saat rotasi grup.' },
    { minute: 18, action: 'Teamfight: gunakan dash untuk membuka fight atau menyelamatkan ally yang di-fokus.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Moonlit Encounter',
      description:
        'Setelah menggunakan skill, basic attack berikutnya memberi damage tambahan dan memperlambat musuh yang terkena.',
    },
    {
      type: 'skill1',
      name: 'Lively Encounter',
      description:
        'Mathilda melesat ke arah yang dituju, bisa membawa satu hero ally ikut terbang bersamanya; musuh yang dilewati terkena damage.',
    },
    {
      type: 'skill2',
      name: 'Suave Encounter',
      description:
        'Melempar senjata bulan sabit ke arah target garis lurus yang memberi damage dan sedikit efek kontrol ke musuh yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Vitality Encounter',
      description:
        'Menciptakan zona area di sekitar Mathilda yang memberi regen HP, shield, dan tambahan movement speed berkelanjutan ke semua ally di dalamnya.',
    },
  ],
};
