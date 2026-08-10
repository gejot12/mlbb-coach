import type { Emblem } from '@/lib/types/emblem';

/**
 * Nama & efek talent di sini bersifat kualitatif dan berdasarkan struktur emblem yang
 * relatif stabil selama beberapa season — Moonton cukup sering rebalance angka persisnya
 * per patch, jadi selalu cek nilai pasti di in-game sebelum menganggapnya final.
 */
export const EMBLEMS: Emblem[] = [
  {
    slug: 'physical',
    name: 'Physical Emblem',
    focus: 'Physical attack, penetration, dan lifesteal — cocok untuk fighter dan marksman.',
    bestFor: ['fighter', 'marksman'],
    talents: [
      { tier: 1, name: 'Bravery', effect: 'Physical attack + physical penetration flat, naik lagi saat HP musuh rendah.' },
      { tier: 2, name: 'Weapon Master', effect: 'Critical chance + critical damage tambahan.' },
      { tier: 3, name: 'Killing Spree', effect: 'Movement speed & physical attack meningkat sesaat setelah kill/assist.' },
    ],
  },
  {
    slug: 'magic',
    name: 'Magic Emblem',
    focus: 'Magic power dan penetration — pilihan default untuk hampir semua mage.',
    bestFor: ['mage'],
    talents: [
      { tier: 1, name: 'Impure Rage', effect: 'Magic power bertambah, extra magic power saat basic attack/skill kena musuh.' },
      { tier: 2, name: 'Mystery Shop', effect: 'Diskon harga item dari toko, mempercepat power spike awal.' },
      { tier: 3, name: 'Absolute Ban', effect: 'Damage tambahan ke target dengan magic defense tinggi.' },
    ],
  },
  {
    slug: 'tank',
    name: 'Tank Emblem',
    focus: 'HP, defense, dan sustain — inti build untuk role tank/roam.',
    bestFor: ['tank'],
    talents: [
      { tier: 1, name: 'Vein Sucker', effect: 'HP regen bertambah berdasarkan HP maksimal.' },
      { tier: 2, name: 'Unbending', effect: 'Reduce damage tambahan saat HP rendah.' },
      { tier: 3, name: 'Guardian Angel', effect: 'Shield untuk diri sendiri saat HP di bawah ambang tertentu.' },
    ],
  },
  {
    slug: 'assassin',
    name: 'Assassin Emblem',
    focus: 'Movement speed, critical, dan burst awal game — untuk hero yang perlu snowball cepat.',
    bestFor: ['assassin'],
    talents: [
      { tier: 1, name: 'Agility', effect: 'Movement speed tambahan permanen.' },
      { tier: 2, name: 'Bounty Hunter', effect: 'Gold & EXP tambahan dari kill/assist untuk mempercepat snowball.' },
      { tier: 3, name: 'Killing Spree', effect: 'Buff sementara movement speed & attack setelah kill/assist.' },
    ],
  },
  {
    slug: 'support',
    name: 'Support Emblem',
    focus: 'Cooldown reduction, mana/energy regen, dan gold pasif — untuk role roam/support.',
    bestFor: ['support'],
    talents: [
      { tier: 1, name: 'Selfless', effect: 'Efek buff/heal ke ally diperkuat, sedikit dikurangi untuk diri sendiri.' },
      { tier: 2, name: 'Talent Swift', effect: 'Cooldown reduction tambahan untuk spam skill support lebih sering.' },
      { tier: 3, name: 'Fleet Foot', effect: 'Movement speed tambahan saat berada di dekat ally.' },
    ],
  },
  {
    slug: 'marksman',
    name: 'Marksman Emblem',
    focus: 'Attack speed dan sustain jarak jauh — alternatif Physical Emblem untuk marksman murni.',
    bestFor: ['marksman'],
    talents: [
      { tier: 1, name: 'High and Dry', effect: 'Physical attack tambahan saat tidak ada ally di sekitar (solo farming).' },
      { tier: 2, name: 'Focusing Mark', effect: 'Damage tambahan ke target yang HP-nya sedang turun/di bawah ambang.' },
      { tier: 3, name: 'Weapon Master', effect: 'Critical chance + critical damage tambahan.' },
    ],
  },
];

export function getEmblem(slug: string): Emblem | undefined {
  return EMBLEMS.find((e) => e.slug === slug);
}
