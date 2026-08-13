import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'fredrinn',
  name: 'Fredrinn',
  roles: ['tank', 'fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Tank-fighter hybrid jungler dengan dua mode combo (charge dan finisher) yang fleksibel untuk inisiasi maupun damage berkelanjutan.',
  strongAgainst: ['zilong'],
  weakAgainst: ['khufra', 'atlas'],
  synergizesWith: ['floryn'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'antique-cuirass', 'immortality', 'blade-of-despair', 'wind-of-nature'],
      note: 'Campuran item tank dan damage supaya tetap relevan di fase manapun.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle dengan combo charge untuk efisiensi maksimal.' },
    { minute: 4, action: 'Gank lane begitu combo penuh tersedia untuk burst awal.' },
    { minute: 9, action: 'Kontrol turtle, manfaatkan mode tank untuk menang kontes damage.' },
    { minute: 14, action: 'Rotasi bebas antara frontline dan damage dealer sesuai kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: buka dengan combo charge, lanjut finisher ke target yang sudah lemah.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Golden Right Hook',
      description:
        'Fredrinn mengumpulkan energi dari basic attack dan skill; saat penuh, serangan berikutnya memberi bonus damage besar dan heal.',
    },
    {
      type: 'skill1',
      name: 'Ring of Fire / Falling Comet',
      description:
        'Menghantam area di sekitar atau di depan Fredrinn tergantung mode combo, memberi damage ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Vanguard Fist / Extreme Force',
      description:
        'Menyerang ke depan dengan mode charge (tank, sedikit CC) atau mode finisher (damage tinggi), tergantung combo yang sedang aktif.',
    },
    {
      type: 'ultimate',
      name: 'Wrath of the Beast',
      description:
        'Melompat ke area target, memberi damage dan crowd control ke musuh di sekitar titik pendaratan sebagai pembuka inisiasi.',
    },
  ],
};
