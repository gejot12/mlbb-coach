import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'bruno',
  name: 'Bruno',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Direvamp di patch 2.2.16 (Season 42, 16 Sep 2026): identitas powerball-kicking marksman-nya dipertahankan, tapi kontrol dan mekanik skill dioptimalkan — sekarang bisa punya 2 powerball sekaligus dan ultimate-nya jadi hook jarak jauh, bukan bounce penutup fight.',
  strongAgainst: ['grock'],
  weakAgainst: ['karina'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Attack speed tinggi tetap penting untuk stack crit chance dari passive Mecha Legs dan memaksimalkan basic attack powerball.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, jaga dua powerball tetap aktif (dari Skill 1 dan Skill 2) untuk damage maksimal.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim — sekarang bisa buka fight dari jarak jauh lewat hook Worldie, bukan cuma finisher.' },
    { minute: 20, action: 'Teamfight: pakai Worldie untuk hook carry/roamer musuh ke jangkauan tim, lanjut basic attack powerball ganda.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Mecha Legs',
      description:
        'Tiap skill yang kena musuh menambah stack critical chance (sekitar 2-2.5% per stack, maksimal 8 stack ≈ 20% tambahan), tapi Bruno hanya dapat sebagian bonus attack speed dari item yang dibeli.',
    },
    {
      type: 'skill1',
      name: 'Volley Shot',
      description:
        'Menendang powerball ke depan yang bisa diambil lagi; sekarang menghasilkan powerball sendiri (tidak menarik powerball terdekat), jadi Bruno bisa punya 2 powerball aktif sekaligus. Mengambil tiap powerball memangkas cooldown Skill 2 satu detik.',
    },
    {
      type: 'skill2',
      name: 'Slide',
      description:
        'Dash sesuai arah joystick yang otomatis menghasilkan powerball baru begitu dash selesai — sekarang murni alat reposisi/reload powerball, bukan skill damage/stun lagi.',
    },
    {
      type: 'ultimate',
      name: 'Worldie',
      description:
        'Menembakkan powerball besar jarak jauh yang men-stun hero musuh pertama yang terkena dan menyeretnya ke tepi jangkauan serang Bruno — sekarang alat inisiasi dari jauh, bukan bounce penutup fight seperti versi lama.',
    },
  ],
};
