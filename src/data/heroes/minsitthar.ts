import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'minsitthar',
  name: 'Minsitthar',
  roles: ['fighter', 'support'],
  lanes: ['jungle', 'roam'],
  difficulty: 'medium',
  summary:
    'Fighter-support hybrid dengan rantai crowd control lewat lasso dan area stun. Sangat kuat mengunci carry musuh dalam teamfight.',
  strongAgainst: ['miya'],
  weakAgainst: ['khufra'],
  synergizesWith: ['aulus'],
  builds: [
    {
      label: 'Core Bruiser CC',
      itemSlugs: ['tough-boots', 'antique-cuirass', 'immortality', 'dominance-ice', 'blade-of-despair'],
      note: 'Hybrid tank-damage supaya CC chain tetap berguna sekaligus tahan lama di fight.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Clear jungle atau jaga roam, latih timing lasso untuk pick-off.' },
    { minute: 4, action: 'Gank lane dengan kombinasi lasso-stun untuk kunci kill.' },
    { minute: 9, action: 'Kontrol turtle, buka kontes dengan CC chain ke carry musuh.' },
    { minute: 14, action: 'Selalu siap engage duluan saat rotasi grup dengan tim.' },
    { minute: 19, action: 'Teamfight: buka fight dengan lasso ke carry, lanjut ultimate area untuk kunci sisa tim musuh.' },
  ],
  skills: [
    {
      type: 'passive',
      name: "Warrior's Will",
      description:
        'Setelah menggunakan skill, basic attack berikutnya memberi damage tambahan dan mengurangi pertahanan fisik musuh yang terkena.',
    },
    {
      type: 'skill1',
      name: 'Blazing Lance',
      description:
        'Melontarkan tombak ke target garis lurus yang menarik Minsitthar ke musuh pertama yang terkena sekaligus memberi damage.',
    },
    {
      type: 'skill2',
      name: 'Golden Wave',
      description:
        'Menghantam tanah di depan membentuk gelombang yang memberi damage dan sedikit slow ke musuh yang terkena.',
    },
    {
      type: 'ultimate',
      name: 'Absolute Order',
      description:
        'Menghentakkan tombak ke area luas, men-stun semua musuh di dalamnya secara bersamaan — kunci utama membuka teamfight.',
    },
  ],
};
