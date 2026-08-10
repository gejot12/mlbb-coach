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
};
