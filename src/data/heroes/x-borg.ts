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
  skills: [
    {
      type: 'passive',
      name: 'Overheat',
      description:
        'Menyerang musuh menumpuk panas; pada level panas maksimal, X.Borg mendapat bonus true damage tambahan pada serangannya.',
    },
    {
      type: 'skill1',
      name: 'Grenade Throw',
      description:
        'Melemparkan granat ke area target yang meledak setelah delay, memberi damage ke semua musuh di sekitar titik jatuh.',
    },
    {
      type: 'skill2',
      name: 'Anti-Gravity Armor Technique',
      description:
        'Mengaktifkan armor khusus yang memberi perlindungan dari crowd control sekaligus mempercepat pergerakan untuk sementara.',
    },
    {
      type: 'ultimate',
      name: 'Overdrive Cannon',
      description:
        'Menyemburkan api dari senjata di area kerucut di depannya secara terus-menerus, memberi damage true damage berkelanjutan ke semua musuh yang terkena.',
    },
  ],
};
