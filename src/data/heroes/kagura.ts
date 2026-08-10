import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'kagura',
  name: 'Kagura',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'hard',
  summary:
    'Mage mid dengan payung sebagai proyektil dan zoning tool. Sangat kuat melawan fighter/assassin melee lewat kontrol jarak.',
  strongAgainst: ['alucard', 'chou'],
  weakAgainst: ['fanny'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Poke/Burst',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'lightning-truncheon', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny bagus untuk scaling mana + power di game panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane, latih lempar-tarik payung untuk poke aman.' },
    { minute: 4, action: 'Rotasi bantu side lane setelah mendapat item power pertama.' },
    { minute: 8, action: 'Kontrol objective dari jarak jauh, hindari kontak langsung dengan jungler musuh.' },
    { minute: 13, action: 'Posisi di belakang saat grouping, poke terus sebelum teamfight besar.' },
    { minute: 18, action: 'Teamfight: gunakan ultimate untuk zoning/burst carry musuh dari jarak aman.' },
  ],
};
