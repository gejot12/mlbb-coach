import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'grock',
  name: 'Grock',
  roles: ['tank'],
  lanes: ['exp'],
  difficulty: 'medium',
  summary:
    'Tank exp lane dengan tembok yang bisa memblokir jalur musuh dan stun kalau menabraknya. Sangat kuat mengontrol pergerakan hero melee.',
  strongAgainst: ['yin'],
  weakAgainst: ['granger'],
  synergizesWith: ['chou'],
  builds: [
    {
      label: 'Core Tank',
      itemSlugs: ['warrior-boots', 'antique-cuirass', 'dominance-ice', 'immortality', 'athenas-shield'],
      note: 'Fokus HP dan defense supaya tembok dan stun tetap efektif sebagai zoning tool.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Tahan exp lane, gunakan tembok untuk menghalangi minion/musuh saat perlu.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan tembok untuk memisahkan musuh saat gank.' },
    { minute: 9, action: 'Kontrol turtle, tembok membantu memblokir rotasi musuh ke objective.' },
    { minute: 14, action: 'Jadi frontline saat grouping, gunakan tembok untuk memecah formasi musuh.' },
    { minute: 19, action: 'Teamfight: pisahkan carry musuh dari tim mereka dengan tembok sebelum fight utama.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Rock Skin',
      description:
        'Damage berulang dari sumber yang sama ke Grock berkurang secara bertahap, membuatnya makin tahan lama menghadapi burst combo yang sama.',
    },
    {
      type: 'skill1',
      name: 'Wrecking Ball',
      description:
        'Menerjang ke depan dengan lompatan area, memberi damage dan slow ke musuh yang terkena.',
    },
    {
      type: 'skill2',
      name: 'Rock Formation',
      description:
        'Memunculkan tembok batu di lokasi yang dipilih untuk memblokir jalur pergerakan minion maupun musuh.',
    },
    {
      type: 'ultimate',
      name: 'Urgent Attack',
      description:
        'Menabrak maju ke arah musuh; kalau mendorong mereka menabrak tembok atau rintangan, damage dan stun yang diberikan jadi jauh lebih besar.',
    },
  ],
};
