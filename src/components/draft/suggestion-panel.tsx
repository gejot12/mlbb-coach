import { getHero } from "@/data/heroes";
import type { Suggestion } from "@/lib/draft/suggestions";
import { Card } from "@/components/ui/card";

export function SuggestionPanel({
  suggestions,
  title = "Saran Pick",
}: {
  suggestions: Suggestion[];
  title?: string;
}) {
  if (suggestions.length === 0) {
    return (
      <Card>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-foreground-muted">
          Belum ada saran — saran muncul setelah ada hero musuh/ally yang dipilih.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="font-semibold">{title}</h2>
      <ol className="mt-3 space-y-2">
        {suggestions.map((s, i) => {
          const hero = getHero(s.heroSlug);
          if (!hero) return null;
          return (
            <li key={s.heroSlug} className="flex items-start gap-2 text-sm">
              <span className="font-mono text-foreground-muted/60">{i + 1}.</span>
              <div>
                <span className="font-medium">{hero.name}</span>
                <p className="text-xs text-foreground-muted">{s.reasons.join(" · ")}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Card>
  );
}
