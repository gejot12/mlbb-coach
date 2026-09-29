import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'masha',
  name: 'Masha',
  roles: ['fighter'],
  lanes: ['jungle'],
  difficulty: 'medium',
  summary:
    'Direvamp total di patch 2.2.16 (Season 42, 16 Sep 2026): dari attack-speed split-pusher jadi teamfight brawler dengan 3 HP bar. Baru mati kalau ketiga bar HP-nya habis, dan basic attack-nya sekarang area damage, bukan single-target lagi.',
  strongAgainst: ['baxia', 'akai', 'atlas'],
  weakAgainst: ['minsitthar'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Brawler (post-revamp)',
      itemSlugs: ['raptor-machete', 'warrior-boots', 'blade-of-despair', 'endless-battle', 'wind-of-nature', 'immortality'],
      note: 'Attack speed dan sustain tetap relevan untuk uptime Feral, tapi sekarang Masha lebih sering nyemplung teamfight daripada split push sendirian.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle, latih timing Wound → basic attack untuk masuk Feral secepat mungkin.' },
    { minute: 4, action: 'Gank lane, buka dengan Feral Swipe untuk pasang Wound sebelum masuk combo.' },
    { minute: 9, action: 'Kontrol turtle — 3 HP bar bikin dia unggul menang kontes 1v1/2v2 di objective.' },
    { minute: 14, action: 'Grouping dengan tim, jangan split push sendirian lagi seperti versi lama.' },
    { minute: 19, action: 'Teamfight: masuk duluan, pakai Claw Strike buat reposisi tiap kehilangan 1 bar HP, tutup dengan Savage Maul ke carry musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Bear's Blessing",
      description:
        'Masha punya 3 HP bar terpisah — kehilangan satu bar menghapus efek CC (kecuali Suppress) dan memblok damage sesaat, bukan langsung mati. Damage ke musuh mengisi energi Feral yang berubah jadi HP saat keluar combat. Skill yang kena musuh meninggalkan Wound; basic attack yang memecahkan Wound memicu mode Feral (bonus resilience, attack speed, movement speed, basic attack jadi area damage).',
    },
    {
      type: 'skill1',
      name: 'Feral Swipe',
      description:
        'Melepaskan serangan energi lurus ke depan, memberi damage fisik dan slow 50% selama 1 detik ke musuh yang kena — cara utama masang Wound sebelum combo.',
    },
    {
      type: 'skill2',
      name: 'Claw Strike',
      description:
        'Dash ke arah yang dipilih, memberi damage ke musuh yang dilewati dan bisa tembus tembok tipis. Cooldown-nya langsung reset tiap kali Masha kehilangan satu bar HP, jadi makin lama fight makin mobile dia.',
    },
    {
      type: 'ultimate',
      name: 'Savage Maul',
      description:
        'Melompat dan menerkam target hero musuh, memberi damage besar plus stun 1 detik, sekaligus knockback musuh di sekitar target.',
    },
  ],
};
