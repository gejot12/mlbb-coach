import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'silvanna',
  name: 'Silvanna',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan pedang keadilan yang bisa dilempar dan ditarik kembali untuk kombo pukulan area. Kuat mengunci beberapa musuh sekaligus.',
  strongAgainst: ['zilong'],
  weakAgainst: ['khufra'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Bruiser',
      itemSlugs: ['warrior-boots', 'blade-of-despair', 'endless-battle', 'wind-of-nature', 'immortality'],
      note: 'Sustain dan penetration seimbang untuk combo pedang berkelanjutan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, lempar pedang untuk poke/last-hit.' },
    { minute: 4, action: 'Rotasi gank dengan combo tarik pedang untuk kunci kill.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, cari peluang combo pedang ke beberapa musuh sekaligus.' },
    { minute: 19, action: 'Teamfight: lempar pedang ke tengah kerumunan musuh, tarik untuk kunci combo area.' },
  ],
};
