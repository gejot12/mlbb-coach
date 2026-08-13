import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'melissa',
  name: 'Melissa',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman dengan shield dan doll yang menahan burst assassin. Sangat kuat menghadapi dive combo cepat, tapi kesulitan lawan poke berkelanjutan.',
  strongAgainst: ['lancelot', 'fanny'],
  weakAgainst: ['cecilion'],
  synergizesWith: ['mathilda'],
  builds: [
    {
      label: 'Core Anti-Dive',
      itemSlugs: ['rapid-boots', 'windtalker', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair'],
      note: 'Windtalker menambah kontrol jarak untuk menjaga assassin tetap di luar jangkauan.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan shield untuk trade lebih agresif dari marksman lain.' },
    { minute: 5, action: 'Push turret gold lane bersama roam.' },
    { minute: 10, action: 'Ikut rotasi objective, shield membantu bertahan dari initial engage musuh.' },
    { minute: 15, action: 'Grouping dengan tim, lebih berani posisi semi-agresif berkat shield.' },
    { minute: 20, action: 'Teamfight: jangan takut jadi target dive assassin, shield menyerap combo awal mereka.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Master Puppeteer',
      description:
        'Boneka Doll yang mengikuti Melissa memberinya shield tambahan ketika berada di dekatnya, dan basic attack yang mengenai musuh menambah stack.',
    },
    {
      type: 'skill1',
      name: 'Butterfly Bullet',
      description:
        'Melempar pisau ke arah target garis lurus yang bisa mengenai beberapa musuh sekaligus, memberi damage.',
    },
    {
      type: 'skill2',
      name: 'Fluorescent Spikes',
      description:
        'Doll bergerak ke posisi tertentu membentuk tali cahaya dengan Melissa; musuh yang menyentuh tali terkena damage dan slow.',
    },
    {
      type: 'ultimate',
      name: 'Starlium Blast',
      description:
        'Menembakkan sinar energi jarak sangat jauh berbentuk garis lurus yang memberi damage besar ke semua musuh yang terkena.',
    },
  ],
};
