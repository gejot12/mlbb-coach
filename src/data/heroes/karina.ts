import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'karina',
  name: 'Karina',
  roles: ['assassin'],
  lanes: ['jungle'],
  difficulty: 'easy',
  summary:
    'Assassin jungler dengan magic damage dan ultimate true damage berbasis persentase HP musuh yang hilang. Mudah dipelajari, sangat kuat lawan mage squishy.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['vexana'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive'],
      note: 'Genius Wand sangat sinergi karena damage Karina scaling dengan persentase HP musuh yang hilang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih combo dash-teleport untuk mobilitas maksimal.' },
    { minute: 4, action: 'Gank lane setelah combo burst tersedia untuk kill cepat.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu carry musuh yang terisolasi.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, fokus target HP rendah untuk maksimalkan true damage ultimate.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Rage',
      description:
        'Menggunakan skill mengisi stack rage; setelah penuh, basic attack berikutnya mendapat bonus damage dan efek tambahan.',
    },
    {
      type: 'skill1',
      name: 'Dancing Blade',
      description:
        'Mengayunkan bilah di sekitar Karina, memberi damage ke semua musuh dalam radius area.',
    },
    {
      type: 'skill2',
      name: 'Wave of Destruction',
      description:
        'Karina berteleport ke arah target sambil menandai musuh di sekitarnya dengan orb yang meledak setelah delay singkat.',
    },
    {
      type: 'ultimate',
      name: 'Aurora Blade',
      description:
        'Memberi true damage besar ke target tunggal yang scaling dengan persentase HP yang sudah hilang dari musuh — makin lemah musuh, makin sakit ultimate ini.',
    },
  ],
};
