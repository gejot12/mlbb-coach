import type { RoleGuide } from '@/lib/types/role-guide';

export const roleGuide: RoleGuide = {
  lane: 'jungle',
  title: 'Rotasi Jungler',
  overview:
    'Jungler bertanggung jawab atas farm jungle, tempo gank, dan kontrol objective (turtle/lord). Efisiensi rotasi menentukan seberapa cepat tim bisa snowball.',
  phases: [
    {
      minuteRange: '0-2',
      focus: 'Clear jungle awal',
      details: [
        'Mulai dari buff/camp yang paling aman sesuai hero (top atau bottom jungle).',
        'Beri tahu tim posisi buff musuh yang terlihat untuk kontes/invade jika memungkinkan.',
      ],
    },
    {
      minuteRange: '3-5',
      focus: 'Gank pertama',
      details: [
        'Cari lane yang sudah unggul level atau sudah di-stun/root duluan oleh laner.',
        'Pastikan skill kunci (stun/CC) sudah tersedia sebelum masuk gank.',
      ],
    },
    {
      minuteRange: '6-9',
      focus: 'Kontrol turtle',
      details: [
        'Turtle pertama biasanya spawn sekitar menit ke-2, tapi fokus rebutan mulai terasa di fase ini setelah level cukup.',
        'Bawa minimal 2 hero untuk menang kontes turtle, jangan solo lawan tim musuh full.',
      ],
    },
    {
      minuteRange: '10-15',
      focus: 'Rotasi grup & split push',
      details: [
        'Gabung dengan tim untuk push turret bersama, atau split push jika hero cocok untuk itu.',
        'Terus pantau minimap, jangan sampai jungle musuh farm bebas tanpa ada tekanan.',
      ],
    },
    {
      minuteRange: '16+',
      focus: 'Lord & teamfight',
      details: [
        'Prioritaskan kontrol lord begitu tersedia, gunakan sebagai bait untuk memancing teamfight menguntungkan.',
        'Perankan sesuai hero: engage duluan jika tank/fighter, atau tunggu CC sebelum masuk jika assassin.',
      ],
    },
  ],
};
