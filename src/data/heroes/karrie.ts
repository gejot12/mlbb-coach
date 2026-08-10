import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'karrie',
  name: 'Karrie',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan true damage passive dan kemampuan menembus unit lewat ultimate. Sangat kuat lawan tank tebal, rentan lawan dive assassin.',
  strongAgainst: ['tigreal', 'franco', 'khufra'],
  weakAgainst: ['ling', 'fanny'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'malefic-roar', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair'],
      note: 'True damage passive Karrie makin mematikan dengan attack speed tinggi.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane maksimal, prioritas item pertama secepat mungkin.' },
    { minute: 5, action: 'Push turret gold lane, manfaatkan passive untuk clear minion cepat.' },
    { minute: 10, action: 'Ikut rotasi objective setelah mendapat 2 item core.' },
    { minute: 15, action: 'Cari peluang split push karena Karrie kuat 1v1 lawan tank penjaga lane.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh dengan true damage, biarkan tim lain handle backline.' },
  ],
};
