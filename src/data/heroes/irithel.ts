import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'irithel',
  name: 'Irithel',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman tanpa basic attack biasa — semua serangan berbasis skill dengan crossbow ganda. Sangat kuat kiting lawan hero melee.',
  strongAgainst: ['zilong'],
  weakAgainst: ['helcurt'],
  synergizesWith: ['estes'],
  builds: [
    {
      label: 'Core Crit',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'wind-of-nature', 'blade-of-despair', 'windtalker'],
      note: 'Build crit standar tetap efektif karena skill dasar Irithel scaling dari attack stats.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, manfaatkan jangkauan serangan untuk trade aman.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective dengan dukungan tim.' },
    { minute: 15, action: 'Grouping dengan tim, kiting terus musuh melee yang mendekat.' },
    { minute: 20, action: 'Teamfight: jaga jarak dan terus kiting, fokus damage ke target terdekat yang aman.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Frenzy',
      description:
        'Setiap beberapa kali basic attack, Irithel melepaskan tembakan tambahan yang memberi bonus damage.',
    },
    {
      type: 'skill1',
      name: 'Spider Move',
      description:
        'Melompat mundur menjauh dari musuh sambil menembakkan anak panah ke musuh terdekat selama melayang di udara.',
    },
    {
      type: 'skill2',
      name: 'Explosive Trap',
      description:
        'Melempar jebakan ke area yang dipilih, memberi damage dan slow ke musuh yang menyentuhnya.',
    },
    {
      type: 'ultimate',
      name: 'Ballista',
      description:
        'Menembakkan busur panah besar garis lurus yang menembus musuh, memberi damage besar ke semua yang terkena.',
    },
  ],
};
