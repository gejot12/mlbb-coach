import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'claude',
  name: 'Claude',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman dengan pendamping yang menggandakan damage dan membantu farm super cepat. Sangat kuat lawan tank berkat damage ganda dari passive.',
  strongAgainst: ['atlas', 'baxia'],
  weakAgainst: ['saber'],
  synergizesWith: ['floryn'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Attack speed tinggi memaksimalkan jumlah serangan ganda dari pendamping.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane super cepat berkat bantuan pendamping.' },
    { minute: 5, action: 'Push turret gold lane lebih awal karena item pertama selesai lebih cepat dari marksman lain.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, manfaatkan ultimate untuk kabur dari dive.' },
    { minute: 20, action: 'Teamfight: fokus damage ke tank/frontline musuh yang biasanya susah ditembus marksman lain.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Circuit Break',
      description:
        'Basic attack Claude memicu pendamping (Dexter) untuk ikut menyerang target yang sama, menggandakan sebagian damage yang dikeluarkan.',
    },
    {
      type: 'skill1',
      name: 'Battle Mirror Image',
      description:
        'Menembakkan proyektil ke area yang dipilih, memberi damage ke musuh sekaligus menukar posisi Claude dengan pendampingnya.',
    },
    {
      type: 'skill2',
      name: 'Art of Windtalker',
      description:
        'Memberi buff attack speed pada Claude dan pendampingnya untuk sementara waktu, mempercepat farm dan damage output.',
    },
    {
      type: 'ultimate',
      name: 'Down With A Blast',
      description:
        'Menembakkan proyektil jarak jauh yang memberi damage besar sekaligus efek slow ke musuh yang terkena, membantu kabur dari dive.',
    },
  ],
};
