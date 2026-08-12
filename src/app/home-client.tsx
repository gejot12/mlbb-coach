"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { HEROES } from "@/data/heroes";
import { MLBB_DRAFT_SEQUENCE } from "@/data/draft-format";

const FEATURES = [
  {
    href: "/heroes",
    icon: "⚔️",
    title: "Hero Guide",
    description: "Item build, counter hero, dan sinergi untuk tiap hero.",
  },
  {
    href: "/roles",
    icon: "🧭",
    title: "Rotasi Role",
    description: "Belajar rotasi per menit untuk role EXP, Jungle, Mid, Gold, dan Roam.",
  },
  {
    href: "/draft-simulator",
    icon: "🎯",
    title: "Draft Simulator",
    description: "Latihan ban/pick ala turnamen lengkap dengan saran counter-pick.",
  },
  {
    href: "/patch-notes",
    icon: "📜",
    title: "Patch Notes",
    description: "Update balance hero & item dari patch terbaru MLBB.",
  },
  {
    href: "/matches",
    icon: "🏆",
    title: "Match & Turnamen",
    description: "Jadwal dan hasil M Series, MPL ID, MPL PH, dan MPL MY.",
  },
  {
    href: "/coach",
    icon: "🎮",
    title: "Coach Online",
    description: "Ajukan sesi coaching sesuai role dan jadwal yang kamu mau.",
  },
];

export function HomeClient({ leagueCount }: { leagueCount: number }) {
  const stats = [
    { value: String(HEROES.length), label: "Hero guide" },
    { value: String(leagueCount), label: "Liga kompetitif" },
    { value: String(MLBB_DRAFT_SEQUENCE.length), label: "Langkah draft" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Floating glow orbs — decorative, purely visual */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-violet/25 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-10rem] h-[24rem] w-[24rem] rounded-full bg-accent-cyan/20 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-elevated/60 px-4 py-1.5 text-sm font-medium text-foreground-muted backdrop-blur-sm"
        >
          🎮 <span>Mobile Legends: Bang Bang</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Naik rank lebih cepat,{" "}
          <span className="text-gradient-brand">main lebih pintar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg text-foreground-muted"
        >
          Panduan item, counter hero, rotasi per menit, simulator draft pick turnamen,
          serta update patch dan match kompetitif MPL/M Series — semua dalam satu tempat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link href="/draft-simulator">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="glow-violet inline-block rounded-full bg-gradient-to-r from-accent-violet via-accent-fuchsia to-accent-amber px-6 py-3 font-display text-base font-semibold text-white"
            >
              Coba Draft Simulator →
            </motion.span>
          </Link>
          <Link href="/heroes">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block rounded-full border border-border-subtle px-6 py-3 font-display text-base font-semibold text-foreground hover:border-white/30"
            >
              Lihat Hero Guide
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-gradient-brand">{stat.value}</p>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <Link href={feature.href} className="group block h-full">
                <Card className="h-full transition-colors group-hover:border-accent-violet/50">
                  <span className="text-2xl">{feature.icon}</span>
                  <h2 className="mt-2 font-display font-semibold text-lg group-hover:text-gradient-brand">
                    {feature.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-foreground-muted">{feature.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
