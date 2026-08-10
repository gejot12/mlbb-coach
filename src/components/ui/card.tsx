import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border-subtle bg-background-elevated/60 p-5 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
