import type { BattleSpell } from '@/lib/types/spell';

export const BATTLE_SPELLS: BattleSpell[] = [
  {
    slug: 'retribution',
    name: 'Retribution',
    effect: 'Damage besar ke jungle monster + eksekusi monster HP rendah, sekilas reveal musuh tak terlihat di sekitar.',
    usage: 'Wajib untuk role jungler — mempercepat clear dan rebutan buff/objective.',
    recommendedRoles: ['tank', 'fighter', 'assassin', 'mage'],
  },
  {
    slug: 'flicker',
    name: 'Flicker',
    effect: 'Blink jarak pendek instan, bisa dipakai untuk kabur atau masuk mendadak, menembus banyak efek crowd control.',
    usage: 'Spell paling fleksibel — cocok hampir semua role yang butuh mobilitas ekstra untuk engage atau escape.',
    recommendedRoles: ['assassin', 'mage', 'marksman', 'fighter'],
  },
  {
    slug: 'purify',
    name: 'Purify',
    effect: 'Menghapus efek crowd control aktif dan memberi resistensi CC sementara plus speed boost singkat.',
    usage: 'Kuat lawan tim dengan banyak CC chain, terutama untuk hero carry yang jadi target utama kunci lawan.',
    recommendedRoles: ['marksman', 'mage'],
  },
  {
    slug: 'flame-shot',
    name: 'Flame Shot',
    effect: 'Proyektil jarak jauh yang memberi damage dan slow, sekaligus reveal musuh tak terlihat yang terkena.',
    usage: 'Bagus untuk poke jarak jauh dan berburu hero stealth/invisible.',
    recommendedRoles: ['mage', 'marksman', 'support'],
  },
  {
    slug: 'petrify',
    name: 'Petrify',
    effect: 'Stun area singkat ke musuh sekitar, sekaligus reveal musuh tak terlihat di dekatnya.',
    usage: 'Bagus untuk roam/tank membuka fight atau menangkap hero stealth yang sedang mengintai.',
    recommendedRoles: ['tank', 'support'],
  },
  {
    slug: 'execute',
    name: 'Execute',
    effect: 'True damage instan ke satu target, efektif untuk menghabisi musuh HP rendah tanpa perlu skill combo lagi.',
    usage: 'Finisher untuk hero tanpa dash/burst instan yang sering kehilangan kill di HP tersisa sedikit.',
    recommendedRoles: ['marksman', 'assassin'],
  },
  {
    slug: 'inspire',
    name: 'Inspire',
    effect: 'Buff attack speed dan movement speed ke diri sendiri dan ally sekitar selama beberapa detik.',
    usage: 'Kuat untuk marksman yang ingin memaksimalkan DPS di teamfight berkepanjangan.',
    recommendedRoles: ['marksman'],
  },
  {
    slug: 'revitalize',
    name: 'Revitalize',
    effect: 'Heal over time ke diri sendiri dan ally terdekat, plus shield burst di akhir durasi.',
    usage: 'Menambah sustain tim di teamfight, cocok untuk roam/support yang ingin memperkuat heal.',
    recommendedRoles: ['support', 'tank'],
  },
  {
    slug: 'arrival',
    name: 'Arrival',
    effect: 'Teleport instan ke lokasi ally yang dipilih, tanpa batas jarak di map.',
    usage: 'Membantu roam/tank ikut fight atau membantu lane lain secepat mungkin dari mana saja.',
    recommendedRoles: ['tank', 'support'],
  },
  {
    slug: 'aegis',
    name: 'Aegis',
    effect: 'Shield untuk diri sendiri dan ally sekitar, sebagian juga meredam crowd control masuk.',
    usage: 'Melindungi carry dari burst combo atau CC chain saat teamfight dimulai.',
    recommendedRoles: ['tank', 'support'],
  },
  {
    slug: 'sprint',
    name: 'Sprint',
    effect: 'Movement speed besar yang berkurang bertahap, menghapus efek slow saat diaktifkan.',
    usage: 'Bagus untuk split push dan rotasi cepat antar lane, atau kabur dari kondisi terkepung.',
    recommendedRoles: ['fighter', 'assassin'],
  },
];

export function getBattleSpell(slug: string): BattleSpell | undefined {
  return BATTLE_SPELLS.find((s) => s.slug === slug);
}
