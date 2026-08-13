import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'wanwan',
  name: 'Wanwan',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'hard',
  summary:
    'Marksman dengan mobilitas dash tinggi dan panah tembus yang efektif lawan formasi berbaris. Sangat kuat menghindari CC single-target.',
  strongAgainst: ['zilong', 'aulus'],
  weakAgainst: ['minsitthar'],
  synergizesWith: ['rafaela'],
  builds: [
    {
      label: 'Core Crit Mobility',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'malefic-roar'],
      note: 'Fokus attack speed dan crit karena mobilitas dash sudah memberi survivability cukup.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, latih timing dash untuk hindari skillshot musuh.' },
    { minute: 5, action: 'Push turret gold lane, manfaatkan mobilitas untuk kabur dari gank.' },
    { minute: 10, action: 'Ikut rotasi objective hanya jika dash cooldown siap untuk kabur.' },
    { minute: 15, action: 'Grouping dengan tim, mobilitas tinggi bikin lebih berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: dash masuk-keluar cepat, fokus target yang formasinya sejajar untuk panah tembus.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Squirrel Battle Uniform',
      description:
        'Basic attack Wanwan menumpuk stack; pada stack maksimal, serangan berikutnya melepaskan ledakan energi tambahan.',
    },
    {
      type: 'skill1',
      name: 'Rolling the Shuttle',
      description:
        'Melompat dan berputar sambil menembakkan panah ke sekeliling, memberi damage ke musuh terdekat sekaligus reposisi.',
    },
    {
      type: 'skill2',
      name: 'Gale of Blades',
      description:
        'Melakukan dash cepat ke arah yang dipilih sambil meninggalkan bayangan, membantu menghindari skillshot dan CC musuh.',
    },
    {
      type: 'ultimate',
      name: "Nature's Punishment",
      description:
        'Menembakkan tiga panah energi lurus yang menembus semua musuh sejajar di jalurnya, memberi damage besar berturut-turut.',
    },
  ],
};
