import { getHero } from "@/data/heroes";
import type { DraftTeam } from "@/data/draft-format";
import { HeroAvatar } from "@/components/ui/hero-avatar";

function Slot({ slug, kind }: { slug?: string; kind: "ban" | "pick" }) {
  const hero = slug ? getHero(slug) : undefined;
  const isBan = kind === "ban";
  return (
    <div
      className={`flex h-10 items-center gap-2 rounded-md border px-2 text-sm ${
        hero
          ? isBan
            ? "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400"
            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-dashed border-black/15 text-foreground/30 dark:border-white/15"
      }`}
    >
      {hero && (
        <HeroAvatar slug={hero.slug} name={hero.name} size={22} className={`rounded ${isBan ? "grayscale" : ""}`} />
      )}
      {hero ? (isBan ? `🚫 ${hero.name}` : hero.name) : isBan ? "Ban…" : "Pick…"}
    </div>
  );
}

export function TeamPanel({
  team,
  label,
  bans,
  picks,
  activeTeam,
  align = "left",
  banSlots = 5,
}: {
  team: DraftTeam;
  label?: string;
  bans: string[];
  picks: string[];
  activeTeam?: DraftTeam;
  align?: "left" | "right";
  banSlots?: number;
}) {
  const isActive = activeTeam === team;
  const slots = (arr: string[], kind: "ban" | "pick") =>
    Array.from({ length: kind === "ban" ? banSlots : 5 }).map((_, i) => (
      <Slot key={i} slug={arr[i]} kind={kind} />
    ));

  return (
    <div
      className={`rounded-xl border p-4 ${
        isActive ? "border-accent-amber/60 bg-accent-amber/5" : "border-border-subtle"
      } ${align === "right" ? "text-right" : ""}`}
    >
      <h2 className="font-semibold">
        {label ?? `Tim ${team}`} {isActive && <span className="text-accent-amber">(giliran)</span>}
      </h2>
      <div className="mt-3">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">Ban</p>
        <div className="mt-1.5 grid grid-cols-1 gap-1.5">{slots(bans, "ban")}</div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-foreground/50">Pick</p>
        <div className="mt-1.5 grid grid-cols-1 gap-1.5">{slots(picks, "pick")}</div>
      </div>
    </div>
  );
}
