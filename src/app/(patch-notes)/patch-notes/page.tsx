import Link from "next/link";
import type { Metadata } from "next";
import { isSupabaseConfigured, createSupabaseServerClient } from "@/lib/supabase/server";
import type { PatchNote } from "@/lib/types/patch-note";
import { Card } from "@/components/ui/card";
import { SupabaseSetupNotice } from "@/components/ui/supabase-setup-notice";

export const metadata: Metadata = {
  title: "Patch Notes — MLBB Coach",
  description: "Update balance hero & item dari patch terbaru Mobile Legends: Bang Bang.",
};

export const revalidate = 3600;

async function getPatchNotes(): Promise<PatchNote[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("patch_notes")
    .select("*")
    .order("release_date", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export default async function PatchNotesPage() {
  const configured = isSupabaseConfigured();
  const patchNotes = configured ? await getPatchNotes() : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Patch Notes</h1>
      <p className="mt-2 text-foreground/70">Ringkasan perubahan balance hero dan item dari tiap update MLBB.</p>

      <div className="mt-8">
        {!configured ? (
          <SupabaseSetupNotice />
        ) : patchNotes.length === 0 ? (
          <p className="text-foreground/60">Belum ada data patch notes.</p>
        ) : (
          <div className="space-y-3">
            {patchNotes.map((patch) => (
              <Link key={patch.id} href={`/patch-notes/${patch.version}`} className="group block">
                <Card className="transition-colors group-hover:border-amber-500/50">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-semibold group-hover:text-amber-500">
                      Patch {patch.version}
                      {patch.title && <span className="font-normal text-foreground/60"> — {patch.title}</span>}
                    </h2>
                    <span className="text-sm text-foreground/50">{patch.release_date}</span>
                  </div>
                  {patch.summary && <p className="mt-2 text-sm text-foreground/70">{patch.summary}</p>}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
