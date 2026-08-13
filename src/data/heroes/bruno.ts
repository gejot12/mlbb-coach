import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'bruno',
  name: 'Bruno',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan bola sepak yang memberi true damage tambahan tiap beberapa serangan. Sangat kuat lawan tank berkat damage tambahan yang stabil.',
  strongAgainst: ['grock'],
  weakAgainst: ['karina'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Attack speed tinggi memaksimalkan frekuensi true damage dari passive bola sepak.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, bangun attack speed untuk memicu passive lebih sering.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh berkat true damage tambahan dari passive.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Firmiana Simplex',
      description:
        'Setiap beberapa basic attack, Bruno melepaskan bola sepak tambahan yang memberi true damage ke target yang diserang.',
    },
    {
      type: 'skill1',
      name: 'Fatal Strike',
      description:
        'Menendang bola sepak garis lurus ke musuh, memberi damage fisik ke semua yang terkena dalam lintasan.',
    },
    {
      type: 'skill2',
      name: 'Flying Tackle',
      description:
        'Bruno meningkatkan attack speed sementara dan mendapat tambahan jangkauan serang, mempermudah trade jarak jauh.',
    },
    {
      type: 'ultimate',
      name: "Puskas' Kick",
      description:
        'Menendang bola sepak besar ke arah musuh, memberi damage tinggi dan sedikit stun ke target dan musuh di sekitarnya.',
    },
  ],
};
