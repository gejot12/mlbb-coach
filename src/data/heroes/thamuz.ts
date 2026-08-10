import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'thamuz',
  name: 'Thamuz',
  roles: ['fighter'],
  lanes: ['jungle', 'exp'],
  difficulty: 'medium',
  summary:
    'Fighter dengan regenerasi HP tinggi lewat passive dan damage area yang bertambah seiring durasi skill aktif. Kuat dalam trade berkepanjangan.',
  strongAgainst: ['zilong'],
  weakAgainst: ['karrie'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Sustain',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'endless-battle', 'blade-of-despair', 'immortality'],
      note: 'Sustain tinggi memaksimalkan regenerasi passive Thamuz dalam trade panjang.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau trade exp lane, manfaatkan regenerasi HP untuk sustain.' },
    { minute: 4, action: 'Gank lane dengan damage area yang terus bertambah selama skill aktif.' },
    { minute: 9, action: 'Kontrol turtle, menangkan war of attrition berkat sustain tinggi.' },
    { minute: 14, action: 'Split push atau rotasi grup, jadi ancaman konstan lawan sustain fighter lain.' },
    { minute: 19, action: 'Teamfight: masuk lebih dulu, manfaatkan regenerasi untuk bertahan lama di fight.' },
  ],
};
