import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'zhask',
  name: 'Zhask',
  roles: ['mage'],
  lanes: ['mid'],
  difficulty: 'medium',
  summary:
    'Mage mid dengan kemampuan memanggil kepala monster untuk bantu farm dan zoning, plus ultimate yang menciptakan minion tambahan.',
  strongAgainst: ['thamuz'],
  weakAgainst: ['saber'],
  synergizesWith: ['franco'],
  builds: [
    {
      label: 'Core Zoning',
      itemSlugs: ['clock-of-destiny', 'holy-crystal', 'genius-wand', 'divine-glaive', 'concentrated-energy'],
      note: 'Clock of Destiny cocok untuk scaling magic power dengan gaya main zoning Zhask.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm mid lane dibantu kepala monster, jaga jarak aman.' },
    { minute: 4, action: 'Rotasi bantu lane lain dengan kepala monster sebagai zoning tambahan.' },
    { minute: 9, action: 'Kontrol objective dengan bantuan kepala monster untuk menang kontes damage.' },
    { minute: 14, action: 'Grouping dengan tim, gunakan kepala monster untuk zoning area fight.' },
    { minute: 19, action: 'Teamfight: gunakan ultimate untuk tambahan minion sebagai distraksi/damage.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Nightmaric Spawn',
      description:
        'Zhask memanggil Nightmaric Spawn yang mewarisi sebagian atribut miliknya dan otomatis menyerang musuh terdekat dengan damage plus efek slow.',
    },
    {
      type: 'skill1',
      name: 'Mind Eater',
      description:
        'Menembakkan proyektil mental yang menembus ke arah yang dipilih; musuh yang terkena kemudian ikut diserang dan distun oleh Nightmaric Spawn.',
    },
    {
      type: 'skill2',
      name: 'Hive Clones',
      description:
        'Melepaskan gerombolan klon kecil ke arah target yang meledak dan memperlambat musuh saat kontak, atau bersembunyi di tanah untuk menyergap musuh yang lewat.',
    },
    {
      type: 'ultimate',
      name: "Dominator's Descent",
      description:
        'Zhask menyatu dengan Nightmaric Spawn miliknya, membuatnya jauh lebih besar dan kuat sekaligus memperkuat semua skill Zhask, dengan efek blink untuk reposisi atau dive ke backline musuh.',
    },
  ],
};
