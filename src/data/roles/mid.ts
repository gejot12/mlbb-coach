import type { RoleGuide } from '@/lib/types/role-guide';

export const roleGuide: RoleGuide = {
  lane: 'mid',
  title: 'Rotasi Mid Lane (Mage/Assassin)',
  overview:
    'Mid laner biasanya mage atau assassin burst yang mengandalkan rotasi cepat ke side lane setelah power spike pertama untuk snowball map.',
  phases: [
    {
      minuteRange: '0-4',
      focus: 'Farm & level lead',
      details: [
        'Fokus clear minion cepat untuk dapat level advantage dibanding lane lain.',
        'Waspada gank dari kedua sisi jungle karena posisi mid lane terbuka.',
      ],
    },
    {
      minuteRange: '5-8',
      focus: 'Rotasi pertama',
      details: [
        'Begitu combo/skill kunci tersedia, rotasi ke exp atau gold lane untuk bantu kill.',
        'Kembali ke mid untuk farm setelah rotasi selesai.',
      ],
    },
    {
      minuteRange: '9-13',
      focus: 'Kontrol map',
      details: [
        'Ikut kontes turtle, manfaatkan burst damage untuk menang fight singkat di objective.',
        'Terus cari peluang pick-off ke carry musuh yang lengah.',
      ],
    },
    {
      minuteRange: '14-18',
      focus: 'Grouping',
      details: [
        'Grouping dengan tim, posisikan diri sesuai kebutuhan: mage di belakang, assassin siap flank.',
      ],
    },
    {
      minuteRange: '19+',
      focus: 'Late game burst',
      details: [
        'Jadi penentu teamfight lewat burst combo ke target priority begitu peluang terbuka.',
      ],
    },
  ],
};
