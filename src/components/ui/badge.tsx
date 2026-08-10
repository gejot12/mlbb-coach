import type { ReactNode } from 'react';

const TONE_CLASSES = {
  neutral: 'bg-black/5 text-foreground/80 dark:bg-white/10',
  good: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  bad: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
  accent: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
} as const;

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: keyof typeof TONE_CLASSES;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${TONE_CLASSES[tone]}`}>
      {children}
    </span>
  );
}
