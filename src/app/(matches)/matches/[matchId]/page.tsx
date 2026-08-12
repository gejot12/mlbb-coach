import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { MatchWithLeague } from "@/lib/types/match";
import { Badge } from "@/components/ui/badge";

export const revalidate = 300;

async function getMatch(id: string): Promise<MatchWithLeague | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("matches")
    .select("*, leagues(*)")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data as MatchWithLeague | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ matchId: string }>;
}): Promise<Metadata> {
  const { matchId } = await params;
  const match = await getMatch(matchId);
  if (!match) return {};
  return { title: `${match.team_a} vs ${match.team_b} — MLBB Coach` };
}

export default async function MatchDetailPage({
  params,
}: {
  params: Promise<{ matchId: string }>;
}) {
  const { matchId } = await params;
  const match = await getMatch(matchId);
  if (!match) notFound();

  const date = new Date(match.scheduled_at);
  const dateLabel = date.toLocaleString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <Link href="/matches" className="text-sm text-foreground/60 hover:text-amber-500">
        ← Semua Match
      </Link>

      <div className="mt-3 flex items-center gap-2 text-sm text-foreground/50">
        <span>{match.leagues.name}</span>
        {match.stage && <span>· {match.stage}</span>}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <h1 className={`text-2xl font-bold ${match.winner === match.team_a ? "text-amber-500" : ""}`}>{match.team_a}</h1>
        <span className="text-xl font-semibold text-foreground/40">
          {match.status === "completed" ? `${match.score_a} — ${match.score_b}` : "VS"}
        </span>
        <h1 className={`text-2xl font-bold ${match.winner === match.team_b ? "text-amber-500" : ""}`}>{match.team_b}</h1>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge tone={match.status === "completed" ? "good" : "neutral"}>{match.status}</Badge>
        {match.best_of && <Badge>Best of {match.best_of}</Badge>}
      </div>

      <p className="mt-4 text-foreground/70">{dateLabel} WIB</p>

      {match.winner && <p className="mt-2 font-medium text-amber-500">Pemenang: {match.winner}</p>}

      {match.vod_url && (
        <a
          href={match.vod_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-500"
        >
          ▶ Tonton di YouTube
        </a>
      )}

      {match.source_url && (
        <p className="mt-8 text-sm text-foreground/50">
          Sumber:{" "}
          <a href={match.source_url} target="_blank" rel="noreferrer" className="underline hover:text-amber-500">
            {match.source_url}
          </a>
        </p>
      )}

      {match.source === "scraper" && (
        <p className="mt-2 text-xs text-foreground/40">
          Data disinkron dari{" "}
          <a href="https://liquipedia.net/mobilelegends" target="_blank" rel="noreferrer" className="underline">
            Liquipedia
          </a>{" "}
          (CC-BY-SA 3.0).
        </p>
      )}
    </div>
  );
}
