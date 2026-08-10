import type { RoleGuide } from '@/lib/types/role-guide';

export const roleGuide: RoleGuide = {
  lane: 'roam',
  title: 'Rotasi Roam (Tank/Support)',
  overview:
    'Roamer bertugas jaga vision, buka teamfight, dan melindungi carry. Keputusan rotasi roamer sering menentukan tempo permainan tim secara keseluruhan.',
  phases: [
    {
      minuteRange: '0-4',
      focus: 'Support gold lane',
      details: [
        'Bantu jaga gold lane sambil pasang ward di titik rawan gank.',
        'Poke musuh jika hero punya kemampuan itu, tapi jangan korbankan farm gold laner.',
      ],
    },
    {
      minuteRange: '5-8',
      focus: 'Roam ke lane lain',
      details: [
        'Setelah gold lane cukup aman, mulai roam bantu exp/mid untuk kill tambahan.',
        'Update vision map secara rutin, terutama river dan jungle musuh.',
      ],
    },
    {
      minuteRange: '9-13',
      focus: 'Objective control',
      details: [
        'Jadi orang pertama yang mengunci vision di sekitar turtle sebelum tim datang kontes.',
        'Siapkan engage/peel tergantung kebutuhan tim saat itu.',
      ],
    },
    {
      minuteRange: '14-18',
      focus: 'Grouping penuh',
      details: [
        'Selalu dekat dengan carry utama tim, siap CC musuh yang mendekat atau buka fight duluan.',
      ],
    },
    {
      minuteRange: '19+',
      focus: 'Teamfight decisive',
      details: [
        'Baca posisi musuh sebelum engage, jangan buang ultimate/skill kunci sembarangan di late game.',
      ],
    },
  ],
};
