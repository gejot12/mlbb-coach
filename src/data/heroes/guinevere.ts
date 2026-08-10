import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'guinevere',
  name: 'Guinevere',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'hard',
  summary:
    'Fighter magic damage dengan dash gelombang dan ultimate yang mengunci total pergerakan musuh. Sangat kuat lawan mage/marksman squishy.',
  strongAgainst: ['valentina'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Magic Bruiser',
      itemSlugs: ['arcane-boots', 'holy-crystal', 'lightning-truncheon', 'genius-wand', 'concentrated-energy'],
      note: 'Build magic damage penuh karena semua skill Guinevere scaling dari magic power.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, latih timing dash gelombang untuk kontrol jarak.' },
    { minute: 4, action: 'Gank lane dengan kombinasi dash-stun untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, simpan ultimate untuk mengunci carry musuh.' },
    { minute: 14, action: 'Terus cari peluang pick-off ke backline squishy musuh.' },
    { minute: 19, action: 'Teamfight: masuk dari flank, kunci carry musuh dengan ultimate sebelum fight utama.' },
  ],
};
