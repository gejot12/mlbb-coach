export const SESSION_SLOTS = ['19:00-21:00', '21:00-23:00'] as const;
export type SessionSlot = (typeof SESSION_SLOTS)[number];

export const SESSION_SLOT_CAPACITY = 10;
export const CALENDAR_DAYS_AHEAD = 14;

/** Session dates are always in the future, in WIB (Asia/Jakarta) — coaching is IRL-scheduled. */
const JAKARTA_TZ = 'Asia/Jakarta';

function jakartaDateParts(date: Date): { year: number; month: number; day: number } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: JAKARTA_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { year: get('year'), month: get('month'), day: get('day') };
}

/** YYYY-MM-DD for "today" in Jakarta time, regardless of the server's own timezone. */
export function todayInJakarta(): string {
  const { year, month, day } = jakartaDateParts(new Date());
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/** The next `CALENDAR_DAYS_AHEAD` dates (including today), as YYYY-MM-DD strings in WIB. */
export function upcomingSessionDates(daysAhead: number = CALENDAR_DAYS_AHEAD): string[] {
  const { year, month, day } = jakartaDateParts(new Date());
  // Build from UTC noon on the Jakarta calendar day to sidestep any DST/offset edge cases
  // when adding days — WIB doesn't observe DST, but this keeps the math timezone-agnostic.
  const base = Date.UTC(year, month - 1, day, 12);
  return Array.from({ length: daysAhead }, (_, i) => {
    const d = new Date(base + i * 86_400_000);
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  });
}

export function formatSessionDateLabel(isoDate: string): string {
  // isoDate is a plain YYYY-MM-DD (no time), so parse it as UTC noon to avoid the browser's
  // local timezone shifting it to the previous/next day.
  const date = new Date(`${isoDate}T12:00:00Z`);
  return new Intl.DateTimeFormat('id-ID', {
    timeZone: JAKARTA_TZ,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(date);
}

export function formatSessionScheduleText(isoDate: string, slot: SessionSlot): string {
  return `${formatSessionDateLabel(isoDate)} · ${slot} WIB`;
}
