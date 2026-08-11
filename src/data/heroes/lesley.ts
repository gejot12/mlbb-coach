import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lesley',
  name: 'Lesley',
  roles: ['marksman', 'assassin'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman-assassin hybrid dengan kemampuan stealth dan critical damage tinggi untuk snipe dari jarak jauh. Sangat kuat membunuh backline musuh yang lengah.',
  strongAgainst: ['pharsa'],
  weakAgainst: ['akai'],
  synergizesWith: ['diggie'],
  builds: [
    {
      label: 'Core Crit Snipe',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Build crit maksimal untuk memaksimalkan burst snipe dari stealth.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane aman, latih akurasi skillshot untuk snipe.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective, manfaatkan stealth untuk posisi aman.' },
    { minute: 15, action: 'Grouping dengan tim, cari sudut aman untuk snipe backline musuh.' },
    { minute: 20, action: 'Teamfight: stealth dan cari posisi snipe, fokus target HP rendah dari jarak jauh.' },
  ],
};
