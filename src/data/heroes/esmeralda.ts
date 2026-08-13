import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'esmeralda',
  name: 'Esmeralda',
  roles: ['mage', 'tank'],
  lanes: ['exp', 'jungle'],
  difficulty: 'medium',
  summary:
    'Mage-tank hybrid dengan shield yang menyerap damage berbasis persentase dan mengubahnya jadi energi ultimate. Sangat kuat lawan marksman basic-attack reliant.',
  strongAgainst: ['claude', 'granger'],
  weakAgainst: ['valentina'],
  synergizesWith: ['atlas'],
  builds: [
    {
      label: 'Core Hybrid',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'genius-wand', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Magic power tetap dibutuhkan karena damage ultimate scaling dari situ meski basisnya tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane atau clear jungle dengan shield untuk sustain aman.' },
    { minute: 4, action: 'Rotasi gank setelah shield dan ultimate cukup untuk burst.' },
    { minute: 9, action: 'Kontrol turtle, shield membantu menang damage race lawan marksman.' },
    { minute: 14, action: 'Jadi frontline saat grouping, serap basic attack musuh sebanyak mungkin.' },
    { minute: 19, action: 'Teamfight: masuk lebih dulu, ultimate saat shield sudah penuh terisi untuk burst maksimal.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Astral Attunement',
      description:
        'Sebagian damage yang diserap shield Esmeralda diubah menjadi energi ultimate, mempercepat cooldown ultimate-nya.',
    },
    {
      type: 'skill1',
      name: 'Fissure of Astral',
      description:
        'Menghantamkan bulan sabit ke area yang dipilih, memberi damage ke semua musuh yang terkena di area tersebut.',
    },
    {
      type: 'skill2',
      name: 'Astral Shield',
      description:
        'Melapisi diri dengan shield yang menyerap damage berbasis persentase HP maksimal, membantu bertahan dari basic attack musuh.',
    },
    {
      type: 'ultimate',
      name: 'Astral Blessing',
      description:
        'Melepaskan ledakan energi besar ke area sekitar, damage-nya meningkat sesuai jumlah shield yang berhasil diserap sebelumnya.',
    },
  ],
};
