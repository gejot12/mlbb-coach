import Link from "next/link";
import type { Metadata } from "next";
import { ROLE_GUIDES } from "@/data/roles";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Rotasi Role — MLBB Coach",
  description: "Panduan rotasi per menit untuk role EXP, Jungle, Mid, Gold, dan Roam.",
};

export default function RolesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Rotasi Role</h1>
      <p className="mt-2 text-foreground/70">
        Pelajari kapan harus farm, gank, rebutan objective, dan grouping untuk tiap role — per menit.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ROLE_GUIDES.map((guide) => (
          <Link key={guide.lane} href={`/roles/${guide.lane}`} className="group">
            <Card className="h-full transition-colors group-hover:border-amber-500/50">
              <h2 className="font-semibold group-hover:text-amber-500">{guide.title}</h2>
              <p className="mt-1.5 text-sm text-foreground/70">{guide.overview}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
