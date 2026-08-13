import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'odette',
  name: 'Odette',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan ultimate lingkaran area yang bisa memusnahkan seluruh tim musuh jika mereka berkumpul di dalamnya. Sangat kuat lawan komposisi yang suka mengelompok.',
  strongAgainst: ['bruno'],
  weakAgainst: ['benedetta'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Damage item standar mage, kekuatan utama datang dari positioning ultimate yang tepat.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane aman, jaga jarak dari kontak langsung.' },
    { minute: 4, action: 'Rotasi bantu lane lain setelah level dan item cukup.' },
    { minute: 9, action: 'Poke objective dari jarak jauh, hindari zona dive musuh.' },
    { minute: 14, action: 'Grouping dengan tim, cari posisi aman untuk baca pergerakan musuh.' },
    { minute: 19, action: 'Teamfight: timing ultimate saat musuh benar-benar berkumpul untuk burst maksimal.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Enchantress's Bathing",
      description:
        'Sebagian mana yang dimiliki Odette dikonversi menjadi bonus magic power tambahan, membuatnya makin kuat seiring mana pool bertambah.',
    },
    {
      type: 'skill1',
      name: 'Ripples',
      description:
        'Melepaskan gelombang riak di sekitar Odette, memberi damage dan sedikit slow ke musuh dalam radius tertentu.',
    },
    {
      type: 'skill2',
      name: 'Fabled Swan',
      description:
        'Melesat ke arah yang dipilih sambil menandai area dengan bulu angsa yang akan meledak setelah delay, memberi damage ke musuh di dalamnya.',
    },
    {
      type: 'ultimate',
      name: 'Swan Song',
      description:
        'Menciptakan lingkaran cahaya raksasa yang menyusut dan memberi damage besar berulang ke semua musuh yang terjebak di dalamnya.',
    },
  ],
};
