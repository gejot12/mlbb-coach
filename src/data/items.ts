import type { Item } from '@/lib/types/item';

export const ITEMS: Item[] = [
  // Attack (physical)
  {
    slug: 'blade-of-despair',
    name: 'Blade of Despair',
    category: 'attack',
    price: 3010,
    effect: 'Physical attack + physical penetration besar, damage naik ke musuh HP rendah. Core item fighter/marksman late game.',
  },
  {
    slug: 'malefic-roar',
    name: "Malefic Roar",
    category: 'attack',
    price: 2030,
    effect: 'Physical attack + true damage passive terhadap target dengan armor tinggi. Wajib lawan tank tebal.',
  },
  {
    slug: 'wind-of-nature',
    name: 'Wind of Nature',
    category: 'attack',
    price: 2110,
    effect: 'Physical penetration + gain penetration tambahan tiap basic attack. Anti-tank untuk marksman/fighter.',
  },
  {
    slug: 'endless-battle',
    name: 'Endless Battle',
    category: 'attack',
    price: 2030,
    effect: 'Physical attack + spell vamp + true damage burst tiap beberapa detik. Cocok untuk fighter/marksman hybrid.',
  },
  {
    slug: 'berserkers-fury',
    name: "Berserker's Fury",
    category: 'attack',
    price: 2380,
    effect: 'Critical chance + critical damage besar. Core crit-build marksman.',
  },
  {
    slug: 'windtalker',
    name: 'Windtalker',
    category: 'attack',
    price: 2180,
    effect: 'Critical chance + slow area saat crit. Bagus untuk marksman yang butuh kontrol jarak.',
  },

  // Magic
  {
    slug: 'lightning-truncheon',
    name: 'Lightning Truncheon',
    category: 'magic',
    price: 2100,
    effect: 'Magic power + burst chain lightning ke musuh sekitar tiap skill kena. Kuat untuk poke/burst mage.',
  },
  {
    slug: 'genius-wand',
    name: 'Genius Wand',
    category: 'magic',
    price: 2030,
    effect: 'Magic power + magic penetration mengikuti persentase HP musuh yang hilang. Anti-tank magic damage.',
  },
  {
    slug: 'holy-crystal',
    name: 'Holy Crystal',
    category: 'magic',
    price: 2260,
    effect: 'Magic power tinggi + magic penetration flat. Core damage item hampir semua mage.',
  },
  {
    slug: 'clock-of-destiny',
    name: 'Clock of Destiny',
    category: 'magic',
    price: 2180,
    effect: 'Magic power bertumbuh seiring waktu + mana regen. Cocok mage late game / mid lane yang butuh mana.',
  },
  {
    slug: 'divine-glaive',
    name: 'Divine Glaive',
    category: 'magic',
    price: 2150,
    effect: 'Magic power + magic penetration persentase tinggi. Wajib lawan tim dengan magic resist tebal.',
  },
  {
    slug: 'concentrated-energy',
    name: 'Concentrated Energy',
    category: 'magic',
    price: 2030,
    effect: 'Magic power + HP + shield saat HP rendah. Survivability untuk mage yang sering dive.',
  },

  // Defense
  {
    slug: 'antique-cuirass',
    name: 'Antique Cuirass',
    category: 'defense',
    price: 2030,
    effect: 'Physical defense + reduce physical attack musuh sekitar. Anti physical burst/marksman.',
  },
  {
    slug: 'athenas-shield',
    name: "Athena's Shield",
    category: 'defense',
    price: 2050,
    effect: 'Magic defense + shield periodik. Anti magic burst/mage.',
  },
  {
    slug: 'immortality',
    name: 'Immortality',
    category: 'defense',
    price: 2110,
    effect: 'HP + hybrid defense + revive sekali dengan shield saat mati. Item wajib banyak tank/fighter.',
  },
  {
    slug: 'dominance-ice',
    name: 'Dominance Ice',
    category: 'defense',
    price: 2050,
    effect: 'Physical defense + slow aura + reduce cooldown reduction musuh sekitar. Kuat lawan tim combo cepat.',
  },
  {
    slug: 'blade-armor',
    name: 'Blade Armor',
    category: 'defense',
    price: 2030,
    effect: 'Physical defense + reflect damage basic attack. Anti marksman/fighter basic-attack reliant.',
  },
  {
    slug: 'cursed-helmet',
    name: 'Cursed Helmet',
    category: 'defense',
    price: 1960,
    effect: 'Magic defense + HP regen + damage aura ke musuh sekitar berbasis mana/energy. Bagus untuk tank roam.',
  },

  // Movement
  {
    slug: 'rapid-boots',
    name: 'Rapid Boots',
    category: 'movement',
    price: 730,
    effect: 'Movement speed tertinggi di antara sepatu. Default pilihan aman untuk banyak role.',
  },
  {
    slug: 'warrior-boots',
    name: 'Warrior Boots',
    category: 'movement',
    price: 730,
    effect: 'Movement speed + physical defense. Cocok fighter/tank exp lane.',
  },
  {
    slug: 'tough-boots',
    name: 'Tough Boots',
    category: 'movement',
    price: 730,
    effect: 'Movement speed + reduce durasi crowd control. Anti tim dengan banyak CC.',
  },
  {
    slug: 'arcane-boots',
    name: 'Arcane Boots',
    category: 'movement',
    price: 730,
    effect: 'Movement speed + magic penetration. Default sepatu mage/hero magic damage.',
  },

  // Jungle
  {
    slug: 'raptor-machete',
    name: 'Raptor Machete / Hunter Line',
    category: 'jungle',
    price: 750,
    effect: 'Item awal jungler: bonus damage ke jungle monster + true damage stack ke hero. Wajib untuk role jungle.',
  },

  // Roam / support
  {
    slug: 'enchanted-talisman',
    name: 'Enchanted Talisman',
    category: 'roam',
    price: 750,
    effect: 'Item awal roam: mana regen + cooldown reduction + gold pasif tambahan untuk role support/roam.',
  },
];

export function getItem(slug: string): Item | undefined {
  return ITEMS.find((item) => item.slug === slug);
}
