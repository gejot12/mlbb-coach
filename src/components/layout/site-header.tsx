"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const NAV_LINKS = [
  { href: "/heroes", label: "Hero Guide" },
  { href: "/roles", label: "Rotasi Role" },
  { href: "/loadout", label: "Emblem/Spell/Item" },
  { href: "/draft-simulator", label: "Draft Simulator" },
  { href: "/patch-notes", label: "Patch Notes" },
  { href: "/matches", label: "Match" },
  { href: "/coach", label: "Coach" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    // Sticky wrapper must stay transform-free — a `transform` on a `position: sticky`
    // element (e.g. from a Motion `y` animation) breaks sticky positioning entirely. The
    // entrance animation lives on the inner div instead.
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/70 backdrop-blur-md">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4"
      >
        <Link href="/" className="group flex items-center gap-1 font-display text-xl font-bold tracking-tight">
          <span>MLBB</span>
          <span className="text-gradient-brand transition-[filter] group-hover:brightness-125">Coach</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {NAV_LINKS.map((link) => {
            const active = pathname?.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} className="group relative rounded-md px-3 py-1.5 font-medium">
                <span className={active ? "text-foreground" : "text-foreground-muted group-hover:text-foreground"}>
                  {link.label}
                </span>
                <span
                  className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-violet via-accent-fuchsia to-accent-amber transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
}
