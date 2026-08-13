import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'lapu-lapu',
  name: 'Lapu-Lapu',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan dua pedang dan mode marah yang menambah damage besar. Sangat kuat memburu marksman squishy dalam mode rage.',
  strongAgainst: ['miya'],
  weakAgainst: ['khufra'],
  synergizesWith: ['angela'],
  builds: [
    {
      label: 'Core Burst',
      itemSlugs: ['warrior-boots', 'endless-battle', 'blade-of-despair', 'wind-of-nature', 'berserkers-fury'],
      note: 'Attack speed dan penetration tinggi untuk memaksimalkan mode rage.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, bangun mode rage lewat basic attack dan skill.' },
    { minute: 4, action: 'Rotasi gank dengan mode rage untuk burst combo.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, cari peluang mode rage penuh sebelum fight.' },
    { minute: 19, action: 'Teamfight: aktifkan mode rage, fokus damage ke marksman/mage musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Sun and Moon Blade',
      description:
        'Setiap skill yang dipakai bergantian menggunakan pedang matahari atau bulan, masing-masing memberi efek tambahan berbeda.',
    },
    {
      type: 'skill1',
      name: 'Sun Sword',
      description:
        'Menebas ke depan dengan pedang matahari, memberi damage fisik ke musuh di area jangkauan.',
    },
    {
      type: 'skill2',
      name: 'Moon Sword',
      description:
        'Berputar dengan pedang bulan, memberi damage ke semua musuh di sekitarnya sekaligus.',
    },
    {
      type: 'ultimate',
      name: 'Ancestor\'s Might',
      description:
        'Masuk ke mode marah (rage) yang meningkatkan attack speed dan damage Lapu-Lapu untuk sementara — sangat berbahaya bagi hero squishy.',
    },
  ],
};
