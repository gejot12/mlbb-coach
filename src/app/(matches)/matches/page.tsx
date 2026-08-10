import Link from "next/link";
import type { Metadata } from "next";
import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import type { MatchWithLeague } from "@/lib/types/match";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SupabaseSetupNotice } from "@/components/ui/supabase-setup-notice";

export const metadata: Metadata = {
  title: "Match & Turnamen — MLBB Coach",
  description: "Jadwal dan hasil M Series, MPL Indonesia, MPL Philippines, dan MPL Malaysia.",
};

export const revalidate = 300;

const LEAGUE_FILTERS = [
  { slug: "all", label: "Semua" },
  { slug: "m-series", label: "M Series" },
  { slug: "mpl-id", label: "MPL ID" },
  { slug: "mpl-ph", label: "MPL PH" },
  { slug: "mpl-my", label: "MPL MY" },
];

const STATUS_TONE = {
  scheduled: "neutral",
  live: "accent",
  completed: "good",
  postponed: "bad",
  cancelled: "bad",
} as const;

async function getMatches(leagueSlug?: string): Promise<MatchWithLeague[]> {
  const supabase = createSupabaseServerClient();
  let query = supabase
    .from("matches")
    .select("*, leagues!inner(*)")
    .order("scheduled_at", { ascending: true });

  if (leagueSlug && leagueSlug !== "all") {
    query = query.eq("leagues.slug", leagueSlug);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as unknown as MatchWithLeague[];
}

function MatchRow({ match }: { match: MatchWithLeague }) {
  const date = new Date(match.scheduled_at);
  const dateLabel = date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  return (
    <Link href={`/matches/${match.id}`} className="group block">
      <Card className="transition-colors group-hover:border-amber-500/50">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-foreground/50">
            <span>{match.leagues.name}</span>
            {match.stage && <span>· {match.stage}</span>}
            <span>· {dateLabel} WIB</span>
          </div>
          <Badge tone={STATUS_TONE[match.status]}>{match.status}</Badge>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className={`font-medium ${match.winner === match.team_a ? "text-amber-500" : ""}`}>{match.team_a}</span>
          <span className="text-sm text-foreground/50">
            {match.status === "completed" ? `${match.score_a} — ${match.score_b}` : "vs"}
          </span>
          <span className={`font-medium ${match.winner === match.team_b ? "text-amber-500" : ""}`}>{match.team_b}</span>
        </div>
      </Card>
    </Link>
  );
}

export default async function MatchesPage({
  searchParams,
}: {
  searchParams: Promise<{ league?: string }>;
}) {
  const { league } = await searchParams;
  const configured = isSupabaseConfigured();
  const matches = configured ? await getMatches(league) : [];
  const hasScrapedData = matches.some((m) => m.source === "scraper");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Match & Turnamen</h1>
      <p className="mt-2 text-foreground/70">Jadwal dan hasil M Series, MPL Indonesia, MPL Philippines, dan MPL Malaysia.</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {LEAGUE_FILTERS.map((f) => (
          <Link
            key={f.slug}
            href={f.slug === "all" ? "/matches" : `/matches?league=${f.slug}`}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              (league ?? "all") === f.slug ? "bg-amber-500 text-black" : "bg-black/5 dark:bg-white/10"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        {!configured ? (
          <SupabaseSetupNotice />
        ) : matches.length === 0 ? (
          <p className="text-foreground/60">Belum ada match untuk filter ini.</p>
        ) : (
          <div className="space-y-3">
            {matches.map((match) => (
              <MatchRow key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>

      {hasScrapedData && (
        <p className="mt-8 text-xs text-foreground/40">
          Sebagian data pertandingan disinkron dari{" "}
          <a href="https://liquipedia.net/mobilelegends" target="_blank" rel="noreferrer" className="underline">
            Liquipedia
          </a>{" "}
          (CC-BY-SA 3.0).
        </p>
      )}
    </div>
  );
}
