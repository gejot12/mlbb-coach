import type { Hero } from '@/lib/types/hero';

export const hero: Hero = {
  slug: 'obsidia',
  name: 'Obsidia',
  roles: ['marksman'],
  lanes: ['gold'],
  difficulty: 'medium',
  summary:
    'Marksman "Bone Energy" yang mengumpulkan Bone Shard dari basic attack/skill untuk damage fisik tambahan, dengan burst mobility untuk reposisi. Kuat lawan tank tebal berkat damage tambahan yang menembus formasi.',
  strongAgainst: ['uranus'],
  weakAgainst: ['saber'],
  synergizesWith: ['nana'],
  builds: [
    {
      label: 'Core Anti-Tank',
      itemSlugs: ['rapid-boots', 'berserkers-fury', 'malefic-roar', 'wind-of-nature', 'blade-of-despair'],
      note: 'Penetration tinggi memaksimalkan damage kristal lawan tank.',
    },
  ],
  rotation: [
    { minute: 0, action: 'Farm gold lane, kumpulkan Bone Energy dari basic attack untuk damage tambahan.' },
    { minute: 5, action: 'Push turret gold lane setelah item pertama selesai.' },
    { minute: 10, action: 'Ikut rotasi objective setelah dua item core selesai.' },
    { minute: 15, action: 'Grouping dengan tim, posisi belakang tapi berani semi-agresif.' },
    { minute: 20, action: 'Teamfight: fokus tank/frontline musuh berkat damage tambahan Bone Shard.' },
  ],
  skills: [
    {
      type: 'passive',
      name: 'Return to the Bone',
      description:
        'Obsidia mengumpulkan Bone Energy dari basic attack dan skill yang lalu berubah menjadi Bone Shard; saat basic attack, seluruh Bone Shard yang tersimpan ikut menghantam target untuk damage fisik tambahan, dan membunuh hero musuh langsung memberi shard instan.',
    },
    {
      type: 'skill1',
      name: 'Abyssal Bone Needle',
      description:
        'Menembus musuh pertama yang terkena dengan damage fisik, sekaligus memicu pengumpulan Bone Energy — cocok untuk poke, wave control, dan menyiapkan Bone Shard.',
    },
    {
      type: 'skill2',
      name: 'Phantom Shadowmeld',
      description:
        'Memberi ledakan movement speed sangat besar sesaat, dipakai untuk reposisi cepat, kabur, atau mengejar target.',
    },
    {
      type: 'ultimate',
      name: 'Hunt of Bone',
      description:
        'Menembakkan tulang yang menarik Obsidian ke arah musuh dan mengikatnya untuk beberapa saat, mencegah target menggunakan skill perpindahan posisi selama tertahan.',
    },
  ],
};
