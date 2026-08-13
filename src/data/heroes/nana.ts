import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'nana',
  name: 'Nana',
  roles: ['support', 'mage'],
  lanes: ['roam'],
  difficulty: 'easy',
  summary:
    'Support-mage dengan kemampuan mengubah musuh jadi Molina lucu yang tak bisa menyerang. Sangat kuat melumpuhkan hero melee yang mendekat.',
  strongAgainst: ['yin'],
  weakAgainst: ['eudora'],
  synergizesWith: ['bruno'],
  builds: [
    {
      label: 'Core Utility',
      itemSlugs: ['arcane-boots', 'enchanted-talisman', 'concentrated-energy', 'athenas-shield', 'divine-glaive'],
      note: 'Item hybrid magic-utility supaya tetap survive sambil terus mengganggu musuh.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Jaga lane roam, gunakan peri untuk poke/harass ringan.' },
    { minute: 4, action: 'Roam bantu lane lain, transform musuh yang mengganggu carry.' },
    { minute: 9, action: 'Kontrol turtle, transform target priority saat kontes objective.' },
    { minute: 14, action: 'Selalu dekat carry utama, siap melumpuhkan musuh yang mendekat.' },
    { minute: 19, action: 'Teamfight: transform carry/assassin musuh yang paling berbahaya sebelum fight utama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Molina Summon',
      description:
        'Secara berkala memanggil peri Molina yang menyerang musuh terdekat secara otomatis, memberi damage tambahan.',
    },
    {
      type: 'skill1',
      name: 'Sacred Ground',
      description:
        'Melempar Molina ke titik yang dipilih, memberi damage dan memperlambat musuh yang terkena di area tersebut.',
    },
    {
      type: 'skill2',
      name: 'Molina Incantation',
      description:
        'Mengubah satu hero musuh menjadi Molina lucu untuk sementara, membuatnya tidak bisa menggunakan skill atau basic attack.',
    },
    {
      type: 'ultimate',
      name: 'Play Together',
      description:
        'Menciptakan area magis yang memberi damage berkelanjutan dan menarik musuh di dalamnya sedikit demi sedikit ke arah pusat.',
    },
  ],
};
