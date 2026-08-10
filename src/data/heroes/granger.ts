import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'granger',
  name: 'Granger',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan peluru terbatas yang reload tiap beberapa detik, damage burst tinggi per peluru. Kuat dalam war poke jarak jauh.',
  strongAgainst: ['pharsa'],
  weakAgainst: ['nolan'],
  synergizesWith: ['minotaur'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Critical damage tinggi penting karena tiap peluru Granger sudah burst by design.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, latih ritme reload untuk trade damage maksimal.' },
    { minute: 5, action: 'Push turret gold lane, manfaatkan burst damage untuk clear cepat.' },
    { minute: 10, action: 'Ikut rotasi objective, war poke jarak jauh sebelum kontes langsung.' },
    { minute: 15, action: 'Grouping dengan tim, jaga jarak aman sambil terus reload.' },
    { minute: 20, action: 'Teamfight: burst target priority dari jarak jauh begitu peluru penuh.' },
  ],
};
