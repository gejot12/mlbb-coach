import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeClient } from "./home-client";

export const revalidate = 300;

// Falls back to the seed.sql league count (supabase/seed.sql) if Supabase is unreachable,
// so the landing page never breaks over a stat that isn't the point of the page.
const FALLBACK_LEAGUE_COUNT = 4;

async function getLeagueCount(): Promise<number> {
  if (!isSupabaseConfigured()) return FALLBACK_LEAGUE_COUNT;

  try {
    const supabase = createSupabaseServerClient();
    const { count, error } = await supabase
      .from("leagues")
      .select("*", { count: "exact", head: true });
    if (error || count === null) return FALLBACK_LEAGUE_COUNT;
    return count;
  } catch {
    return FALLBACK_LEAGUE_COUNT;
  }
}

export default async function Home() {
  const leagueCount = await getLeagueCount();
  return <HomeClient leagueCount={leagueCount} />;
}
