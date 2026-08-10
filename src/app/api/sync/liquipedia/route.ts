import { NextResponse } from "next/server";
import { syncAllLeagues } from "@/lib/liquipedia/sync-matches";

/**
 * Triggered by Vercel Cron (see vercel.json) — protected by a shared secret so it can't be
 * invoked by the public internet. Vercel Cron always sends GET, and automatically adds
 * `Authorization: Bearer <value>` using the env var literally named CRON_SECRET (Vercel's
 * own convention, not configurable per-cron in vercel.json) — so that's what we check here.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const results = await syncAllLeagues();
    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
