import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'argus',
  name: 'Argus',
  roles: ['fighter'],
  lanes: ['jungle', 'exp'],
  difficulty: 'medium',
  summary:
    'Fighter dengan kemampuan revive sekali lewat ultimate, membuatnya sangat sulit dibunuh permanen dalam satu fight. Kuat trading berkepanjangan.',
  strongAgainst: ['aulus'],
  weakAgainst: ['zhuxin'],
  synergizesWith: ['esmeralda'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'immortality'],
      note: 'Sustain tinggi untuk memaksimalkan trade sebelum dan sesudah revive ultimate.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau trade exp lane, manfaatkan sustain untuk menang war of attrition.' },
    { minute: 4, action: 'Gank agresif karena revive ultimate mengurangi risiko mati sia-sia.' },
    { minute: 9, action: 'Kontrol turtle, jangan takut all-in karena ada nyawa cadangan.' },
    { minute: 14, action: 'Split push atau rotasi grup, jadi ancaman konstan di map.' },
    { minute: 19, action: 'Teamfight: all-in agresif ke carry musuh, manfaatkan revive untuk fight kedua.' },
  ],
};
