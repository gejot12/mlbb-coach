import Link from 'next/link';

const NAV_LINKS = [
  { href: '/heroes', label: 'Hero Guide' },
  { href: '/roles', label: 'Rotasi Role' },
  { href: '/draft-simulator', label: 'Draft Simulator' },
  { href: '/patch-notes', label: 'Patch Notes' },
  { href: '/matches', label: 'Match' },
  { href: '/coach', label: 'Coach' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          MLBB<span className="text-amber-500">Coach</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 font-medium text-foreground/80 transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
