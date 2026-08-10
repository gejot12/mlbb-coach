import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { PatchNoteWithChanges, PatchNoteChangeType } from "@/lib/types/patch-note";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const revalidate = 3600;

const CHANGE_TYPE_LABEL: Record<PatchNoteChangeType, string> = {
  hero_buff: "Buff",
  hero_nerf: "Nerf",
  hero_adjust: "Adjust",
  item_change: "Item",
  system_change: "Sistem",
};

const CHANGE_TYPE_TONE: Record<PatchNoteChangeType, "good" | "bad" | "neutral" | "accent"> = {
  hero_buff: "good",
  hero_nerf: "bad",
  hero_adjust: "neutral",
  item_change: "accent",
  system_change: "neutral",
};

async function getPatchNote(version: string): Promise<PatchNoteWithChanges | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("patch_notes")
    .select("*, patch_note_changes(*)")
    .eq("version", version)
    .order("sort_order", { referencedTable: "patch_note_changes", ascending: true })
    .maybeSingle();
  if (error) throw error;
  return data as PatchNoteWithChanges | null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  return { title: `Patch ${version} — MLBB Coach` };
}

export default async function PatchNoteDetailPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const patch = await getPatchNote(version);
  if (!patch) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/patch-notes" className="text-sm text-foreground/60 hover:text-amber-500">
        ← Semua Patch Notes
      </Link>

      <h1 className="mt-3 text-3xl font-bold tracking-tight">Patch {patch.version}</h1>
      {patch.title && <p className="mt-1 text-foreground/70">{patch.title}</p>}
      <p className="mt-1 text-sm text-foreground/50">Rilis: {patch.release_date}</p>
      {patch.summary && <p className="mt-4 text-foreground/80">{patch.summary}</p>}

      <div className="mt-8 space-y-3">
        {patch.patch_note_changes.map((change) => (
          <Card key={change.id} className="flex items-start gap-3">
            <Badge tone={CHANGE_TYPE_TONE[change.change_type]}>{CHANGE_TYPE_LABEL[change.change_type]}</Badge>
            <div>
              {change.subject_slug ? (
                <Link href={`/heroes/${change.subject_slug}`} className="font-medium hover:text-amber-500">
                  {change.subject_name}
                </Link>
              ) : (
                <span className="font-medium">{change.subject_name}</span>
              )}
              <p className="text-sm text-foreground/70">{change.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {patch.source_url && (
        <p className="mt-8 text-sm text-foreground/50">
          Sumber:{" "}
          <a href={patch.source_url} target="_blank" rel="noreferrer" className="underline hover:text-amber-500">
            {patch.source_url}
          </a>
        </p>
      )}
    </div>
  );
}
