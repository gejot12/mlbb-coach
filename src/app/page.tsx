import Link from "next/link";
import { Card } from "@/components/ui/card";

const FEATURES = [
  {
    href: "/heroes",
    title: "Hero Guide",
    description: "Item build, counter hero, dan sinergi untuk tiap hero.",
  },
  {
    href: "/roles",
    title: "Rotasi Role",
    description: "Belajar rotasi per menit untuk role EXP, Jungle, Mid, Gold, dan Roam.",
  },
  {
    href: "/draft-simulator",
    title: "Draft Simulator",
    description: "Latihan ban/pick ala turnamen lengkap dengan saran counter-pick.",
  },
  {
    href: "/patch-notes",
    title: "Patch Notes",
    description: "Update balance hero & item dari patch terbaru MLBB.",
  },
  {
    href: "/matches",
    title: "Match & Turnamen",
    description: "Jadwal dan hasil M Series, MPL ID, MPL PH, dan MPL MY.",
  },
  {
    href: "/coach",
    title: "Coach Online",
    description: "Ajukan sesi coaching sesuai role dan jadwal yang kamu mau.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">
          Mobile Legends: Bang Bang
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Naik rank lebih cepat dengan coaching &amp; data yang tepat
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Panduan item, counter hero, rotasi per menit, simulator draft pick turnamen,
          serta update patch dan match kompetitif MPL/M Series dalam satu tempat.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Link key={feature.href} href={feature.href} className="group">
            <Card className="h-full transition-colors group-hover:border-amber-500/50">
              <h2 className="font-semibold group-hover:text-amber-500">{feature.title}</h2>
              <p className="mt-1.5 text-sm text-foreground/70">{feature.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
