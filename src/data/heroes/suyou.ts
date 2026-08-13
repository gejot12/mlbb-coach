import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'suyou',
  name: 'Suyou',
  roles: ['assassin', 'mage'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Assassin-mage hybrid dengan dua gaya bertarung (pedang dan kuas) yang bisa ditukar sesuai kebutuhan combo. Sangat fleksibel lawan berbagai komposisi.',
  strongAgainst: ['eudora'],
  weakAgainst: ['akai'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Hybrid Burst',
      itemSlugs: ['holy-crystal', 'lightning-truncheon', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Build magic damage penuh karena kedua gaya bertarung Suyou scaling dari magic power.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, latih transisi antara gaya pedang dan kuas.' },
    { minute: 4, action: 'Gank lane dengan kombinasi kedua gaya untuk burst maksimal.' },
    { minute: 8, action: 'Kontrol turtle sambil terus cari peluang pick-off.' },
    { minute: 13, action: 'Snowball dengan terus memburu mage/marksman musuh.' },
    { minute: 18, action: 'Teamfight: masuk dari flank, kombinasikan kedua gaya untuk burst maksimal.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Transient Immortal',
      description:
        'Cast singkat (tap) membuat Suyou masuk gaya Mortal yang lebih cepat menyerang, sedangkan cast tahan (hold) membuat ia masuk gaya Immortal yang lebih tanky dan memukul lebih keras.',
    },
    {
      type: 'skill1',
      name: 'Blade Surge',
      description:
        'Tap: melempar senjata lalu berkelebat ke lokasinya sambil menebas balik. Hold: menerjang lurus ke arah target dengan jarak yang bertambah sesuai lama tahan.',
    },
    {
      type: 'skill2',
      name: 'Soul Sever',
      description:
        'Tap: sabetan kipas ke area depan yang efektif menghabisi musuh HP rendah. Hold: rentetan tiga tebasan yang memulihkan HP Suyou di pukulan terakhir.',
    },
    {
      type: 'ultimate',
      name: 'Evil Queller',
      description:
        'Suyou meluncur mundur sambil menebas ke arah target, memberi damage dan efek slow; unik karena bisa dipelajari sejak level 1 dan naik level lebih fleksibel.',
    },
  ],
};
