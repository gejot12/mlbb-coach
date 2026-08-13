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
  skills: [
    {
      type: 'passive',
      name: 'Rhapsody',
      description:
        'Granger memiliki jumlah peluru terbatas yang reload otomatis seiring waktu; salah satu peluru dalam siklus memberi bonus damage tambahan.',
    },
    {
      type: 'skill1',
      name: 'Rhapsody Vale',
      description:
        'Menembakkan rentetan peluru ke area di depannya secara menyebar, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Dancing Note',
      description:
        'Melompat/dash ke arah yang dipilih sambil langsung mengisi ulang sebagian peluru, berguna untuk reposisi sekaligus reload cepat.',
    },
    {
      type: 'ultimate',
      name: 'Death Sonata',
      description:
        'Menembakkan seluruh sisa peluru dalam garis lurus panjang, memberi damage besar berturut-turut ke semua musuh yang terkena — combo eksekusi utama.',
    },
  ],
};
