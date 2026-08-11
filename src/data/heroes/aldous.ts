import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'aldous',
  name: 'Aldous',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Fighter jungler dengan stack pukulan yang terus bertambah tiap kill/assist, membuat damage-nya makin mengerikan di late game. Sangat kuat lawan tank yang stack HP tinggi.',
  strongAgainst: ['baxia', 'atlas'],
  weakAgainst: ['valentina'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Stack Damage',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature'],
      note: 'Sustain dan penetration penting supaya stack pukulan terus bertambah tanpa mati duluan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle cepat, bangun stack dari tiap kill/assist yang didapat.' },
    { minute: 4, action: 'Gank lane untuk tambah stack dan snowball damage ultimate.' },
    { minute: 9, action: 'Kontrol turtle, stack tinggi membantu menang kontes damage.' },
    { minute: 14, action: 'Split push atau bantu rotasi grup tergantung kebutuhan tim.' },
    { minute: 19, action: 'Teamfight: ultimate pukulan ke target HP tebal, stack tinggi bikin damage tetap relevan.' },
  ],
};
