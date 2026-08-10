import { Card } from "./card";

export function SupabaseSetupNotice() {
  return (
    <Card className="border-amber-500/30 bg-amber-500/5">
      <h2 className="font-semibold text-amber-600 dark:text-amber-400">Belum terhubung ke database</h2>
      <p className="mt-2 text-sm text-foreground/70">
        Halaman ini butuh Supabase. Isi <code className="rounded bg-black/10 px-1 dark:bg-white/10">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
        dan <code className="rounded bg-black/10 px-1 dark:bg-white/10">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> di{" "}
        <code className="rounded bg-black/10 px-1 dark:bg-white/10">.env.local</code> (lihat{" "}
        <code className="rounded bg-black/10 px-1 dark:bg-white/10">.env.local.example</code>), lalu jalankan migration
        dan seed di <code className="rounded bg-black/10 px-1 dark:bg-white/10">supabase/</code>.
      </p>
    </Card>
  );
}
