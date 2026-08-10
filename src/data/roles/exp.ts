import type { RoleGuide } from '@/lib/types/role-guide';

export const roleGuide: RoleGuide = {
  lane: 'exp',
  title: 'Rotasi Exp Lane (Fighter/Tank)',
  overview:
    'Exp laner biasanya fighter atau tank yang bertugas menyerap tekanan solo lane, cari kill lane, lalu jadi frontline di teamfight.',
  phases: [
    {
      minuteRange: '0-4',
      focus: 'Trade & farm',
      details: [
        'Manfaatkan minion wave untuk trade damage dengan aman, jangan asal all-in tanpa keunggulan HP.',
        'Perhatikan jungler musuh, siapkan skill defensif kalau kemungkinan di-gank.',
      ],
    },
    {
      minuteRange: '5-8',
      focus: 'Snowball lane',
      details: [
        'Kalau menang lane, push turret dan cari peluang roam sebentar ke mid/jungle.',
        'Kalau kalah lane, fokus farm aman dan tunggu bantuan jungler.',
      ],
    },
    {
      minuteRange: '9-13',
      focus: 'Split push / rotasi',
      details: [
        'Hero split push kuat bisa terus tekan exp lane sendirian sambil tim rotasi objective lain.',
        'Hero tank sebaiknya mulai gabung tim untuk kontrol turtle/lord.',
      ],
    },
    {
      minuteRange: '14-18',
      focus: 'Frontline teamfight',
      details: [
        'Jadi inisiator atau frontline utama, tahan damage musuh supaya carry tim bisa deal damage aman.',
        'Gunakan crowd control untuk membuka atau mengunci target priority.',
      ],
    },
    {
      minuteRange: '19+',
      focus: 'Late game presence',
      details: [
        'Terus jadi ancaman split push atau tembok pertahanan utama tim di setiap objective besar.',
      ],
    },
  ],
};
