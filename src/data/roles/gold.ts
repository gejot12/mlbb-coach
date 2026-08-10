import type { RoleGuide } from '@/lib/types/role-guide';

export const roleGuide: RoleGuide = {
  lane: 'gold',
  title: 'Rotasi Gold Lane (Marksman)',
  overview:
    'Gold laner (biasanya marksman) fokus farm aman di awal game untuk jadi damage dealer utama di late game. Positioning adalah skill terpenting role ini.',
  phases: [
    {
      minuteRange: '0-4',
      focus: 'Farm aman',
      details: [
        'Prioritaskan last-hit minion di atas segalanya, hindari trade tidak perlu.',
        'Minta roam untuk ward area rawan gank sejak awal.',
      ],
    },
    {
      minuteRange: '5-8',
      focus: 'Push turret lane',
      details: [
        'Setelah item pertama selesai dan roam mendampingi, mulai push turret gold lane.',
        'Jangan overextend tanpa vision sungai.',
      ],
    },
    {
      minuteRange: '9-13',
      focus: 'Rotasi objective terbatas',
      details: [
        'Ikut kontes turtle hanya jika dijaga tim, jangan tinggalkan lane terlalu lama tanpa alasan kuat.',
        'Terus bangun item core untuk siap teamfight pertama.',
      ],
    },
    {
      minuteRange: '14-18',
      focus: 'Grouping dengan tim',
      details: [
        'Mulai grouping penuh dengan tim, posisikan diri di belakang formasi.',
        'Fokus damage konsisten, hindari menjadi orang pertama yang terlihat musuh saat fight dimulai.',
      ],
    },
    {
      minuteRange: '19+',
      focus: 'Late game carry',
      details: [
        'Jadi sumber damage utama tim di setiap teamfight/objective (lord, turret akhir).',
        'Selalu punya jalur mundur, jangan pernah posisi paling depan.',
      ],
    },
  ],
};
