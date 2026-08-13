import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'gusion',
  name: 'Gusion',
  roles: ['assassin', 'mage'],
  lanes: ['jungle', 'mid'],
  difficulty: 'hard',
  summary:
    'Assassin/mage hybrid dengan burst combo cepat lewat dagger reset. Sangat kuat membunuh marksman/mage musuh dalam sekejap.',
  strongAgainst: ['karrie', 'layla'],
  weakAgainst: ['tigreal', 'franco'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['lightning-truncheon', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Lightning Truncheon sangat sinergi dengan combo dagger multi-hit Gusion.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid/jungle, kumpulkan mana dan level secepat mungkin.' },
    { minute: 4, action: 'Rotasi gank ke lane lain setelah combo ultimate tersedia.' },
    { minute: 8, action: 'Objective control (turtle) sambil terus cari pick-off ke carry musuh.' },
    { minute: 13, action: 'Snowball dengan terus memburu target priority, hindari inisiasi ke tank duluan.' },
    { minute: 18, action: 'Teamfight: tunggu CC utama musuh terpakai baru dive ke backline.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Font of Rage',
      description:
        'Berhasil mengenai musuh dengan skill mempercepat cooldown Sword Dance, memungkinkan Gusion melempar dagger berulang kali dalam combo cepat.',
    },
    {
      type: 'skill1',
      name: 'Sword Dance',
      description:
        'Melesat ke arah target sambil melempar dagger, memberi damage ke musuh yang dilewati.',
    },
    {
      type: 'skill2',
      name: 'Multiple Sword',
      description:
        'Melempar dagger ke beberapa arah sekitar Gusion sekaligus, memberi damage ke semua musuh yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Dominance',
      description:
        'Melempar dagger portal yang bisa diambil kembali untuk melakukan dash-burst berulang ke target dalam durasi singkat, combo utama eksekusi carry musuh.',
    },
  ],
};
