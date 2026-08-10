import type { ReactNode } from 'react';

const TONE_CLASSES = {
  neutral: 'bg-white/10 text-foreground/80',
  good: 'bg-emerald-500/15 text-emerald-400',
  bad: 'bg-rose-500/15 text-rose-400',
  accent: 'bg-accent-amber/15 text-accent-amber',
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
