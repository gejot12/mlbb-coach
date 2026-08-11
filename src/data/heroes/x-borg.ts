import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'x-borg',
  name: 'X.Borg',
  roles: ['fighter'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Fighter exp lane dengan mekanik overheat yang memberi true damage tambahan saat HP musuh rendah. Kuat lawan tank tebal berkat true damage-nya.',
  strongAgainst: ['grock'],
  weakAgainst: ['eudora'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['warrior-boots', 'blade-of-despair', 'malefic-roar', 'wind-of-nature', 'immortality'],
      note: 'Penetration tinggi memaksimalkan true damage dari mode overheat X.Borg.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Trade di exp lane, kelola overheat supaya tidak kehabisan energi.' },
    { minute: 4, action: 'Rotasi gank dengan mode overheat untuk burst combo.' },
    { minute: 9, action: 'Split push atau bantu kontrol turtle tergantung situasi lane.' },
    { minute: 14, action: 'Ikut grouping, jadi damage dealer sekaligus semi-frontline.' },
    { minute: 19, action: 'Teamfight: aktifkan overheat, fokus tank/frontline musuh untuk true damage maksimal.' },
  ],
};
