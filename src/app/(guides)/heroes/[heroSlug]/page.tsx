import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HEROES, getHero } from "@/data/heroes";
import { getItem } from "@/data/items";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HeroAvatar } from "@/components/ui/hero-avatar";

export function generateStaticParams() {
  return HEROES.map((hero) => ({ heroSlug: hero.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ heroSlug: string }>;
}): Promise<Metadata> {
  const { heroSlug } = await params;
  const hero = getHero(heroSlug);
  if (!hero) return {};
  return {
    title: `${hero.name} — Build, Counter & Rotasi | MLBB Coach`,
    description: hero.summary,
  };
}

function HeroLinkList({ slugs }: { slugs: string[] }) {
  if (slugs.length === 0) {
    return <p className="text-sm text-foreground/50">Belum ada data.</p>;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {slugs.map((slug) => {
        const other = getHero(slug);
        if (!other) return null;
        return (
          <Link
            key={slug}
            href={`/heroes/${slug}`}
            className="rounded-md border border-black/10 px-2.5 py-1 text-sm font-medium hover:border-amber-500/50 hover:text-amber-500 dark:border-white/10"
          >
            {other.name}
          </Link>
        );
      })}
    </div>
  );
}

export default async function HeroDetailPage({
  params,
}: {
  params: Promise<{ heroSlug: string }>;
}) {
  const { heroSlug } = await params;
  const hero = getHero(heroSlug);
  if (!hero) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/heroes" className="text-sm text-foreground/60 hover:text-amber-500">
        ← Semua Hero
      </Link>

      <div className="mt-3 flex flex-wrap items-center gap-4">
        <HeroAvatar slug={hero.slug} name={hero.name} size={72} className="shrink-0 rounded-2xl" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{hero.name}</h1>
            <Badge tone="accent">{hero.difficulty}</Badge>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {hero.roles.map((role) => (
          <Badge key={role}>{role}</Badge>
        ))}
        {hero.lanes.map((lane) => (
          <Badge key={lane} tone="neutral">
            {lane}
          </Badge>
        ))}
      </div>
      <p className="mt-4 text-foreground/70">{hero.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <h2 className="font-semibold text-emerald-600 dark:text-emerald-400">Counter (kuat lawan)</h2>
          <div className="mt-3">
            <HeroLinkList slugs={hero.strongAgainst} />
          </div>
        </Card>
        <Card>
          <h2 className="font-semibold text-rose-600 dark:text-rose-400">Di-counter oleh</h2>
          <div className="mt-3">
            <HeroLinkList slugs={hero.weakAgainst} />
          </div>
        </Card>
        <Card className="sm:col-span-2">
          <h2 className="font-semibold text-amber-600 dark:text-amber-400">Sinergi bagus dengan</h2>
          <div className="mt-3">
            <HeroLinkList slugs={hero.synergizesWith} />
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Item Build</h2>
        <div className="mt-4 space-y-4">
          {hero.builds.map((build) => (
            <Card key={build.label}>
              <h3 className="font-medium">{build.label}</h3>
              {build.note && <p className="mt-1 text-sm text-foreground/60">{build.note}</p>}
              <ol className="mt-3 flex flex-wrap gap-2">
                {build.itemSlugs.map((slug, index) => {
                  const item = getItem(slug);
                  if (!item) return null;
                  return (
                    <li
                      key={slug}
                      className="flex items-center gap-2 rounded-md border border-black/10 px-2.5 py-1 text-sm dark:border-white/10"
                      title={item.effect}
                    >
                      <span className="text-xs text-foreground/40">{index + 1}.</span>
                      {item.name}
                    </li>
                  );
                })}
              </ol>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Rotasi</h2>
        <ol className="mt-4 space-y-3 border-l-2 border-amber-500/30 pl-4">
          {hero.rotation.map((note) => (
            <li key={note.minute}>
              <span className="font-mono text-sm font-semibold text-amber-500">Menit {note.minute}</span>
              <p className="text-sm text-foreground/70">{note.action}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
