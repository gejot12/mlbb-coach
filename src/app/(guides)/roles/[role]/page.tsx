import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ROLE_GUIDES, getRoleGuide } from "@/data/roles";
import { getHeroesByLane } from "@/data/heroes";
import type { Lane } from "@/lib/types/hero";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return ROLE_GUIDES.map((guide) => ({ role: guide.lane }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role } = await params;
  const guide = getRoleGuide(role as Lane);
  if (!guide) return {};
  return {
    title: `${guide.title} — MLBB Coach`,
    description: guide.overview,
  };
}

export default async function RoleDetailPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  const guide = getRoleGuide(role as Lane);
  if (!guide) notFound();
  const heroes = getHeroesByLane(guide.lane);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/roles" className="text-sm text-foreground/60 hover:text-amber-500">
        ← Semua Role
      </Link>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">{guide.title}</h1>
      <p className="mt-4 text-foreground/70">{guide.overview}</p>

      <ol className="mt-8 space-y-5 border-l-2 border-amber-500/30 pl-5">
        {guide.phases.map((phase) => (
          <li key={phase.minuteRange}>
            <span className="font-mono text-sm font-semibold text-amber-500">Menit {phase.minuteRange}</span>
            <h2 className="font-medium">{phase.focus}</h2>
            <ul className="mt-1.5 list-inside list-disc space-y-1 text-sm text-foreground/70">
              {phase.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {heroes.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Hero populer di role ini</h2>
          <Card className="mt-4">
            <div className="flex flex-wrap gap-2">
              {heroes.map((hero) => (
                <Link
                  key={hero.slug}
                  href={`/heroes/${hero.slug}`}
                  className="rounded-md border border-black/10 px-2.5 py-1 text-sm font-medium hover:border-amber-500/50 hover:text-amber-500 dark:border-white/10"
                >
                  {hero.name}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
