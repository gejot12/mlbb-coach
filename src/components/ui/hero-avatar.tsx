/**
 * Deterministic, generated-by-code hero portrait — a gradient tile + initials derived from
 * the hero slug. Not official Moonton artwork (using that without a license would be a
 * copyright risk on a public site); this is fully original and free to render at any scale.
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string): string {
  const parts = name.split(/[\s-]+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function HeroAvatar({
  slug,
  name,
  size = 64,
  className = "",
}: {
  slug: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const hue = hashString(slug) % 360;
  const hue2 = (hue + 45) % 360;
  const initials = getInitials(name);
  const gradientId = `hero-avatar-${slug}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={name}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`hsl(${hue} 85% 55%)`} />
          <stop offset="100%" stopColor={`hsl(${hue2} 85% 45%)`} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={`url(#${gradientId})`} />
      <rect width="64" height="64" rx="14" fill="black" fillOpacity="0.08" />
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="24"
        fontWeight="700"
        fill="white"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        {initials}
      </text>
    </svg>
  );
}
