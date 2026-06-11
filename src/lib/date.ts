/** All helpers operate in the user's local timezone. */

export function pad(n: number): string {
  return n < 10 ? '0' + n : String(n);
}

/** Local YYYY-MM-DD for a Date. */
export function toISODate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Local HH:mm for a Date. */
export function toTime(d: Date): string {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function todayISO(): string {
  return toISODate(new Date());
}

/** Parse YYYY-MM-DD into a local Date at midnight. */
export function parseISO(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

/** Start of the week containing `d`, respecting weekStartsOn (0=Sun,1=Mon). */
export function startOfWeek(d: Date, weekStartsOn: 0 | 1 = 1): Date {
  const r = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = r.getDay();
  const diff = (day - weekStartsOn + 7) % 7;
  return addDays(r, -diff);
}

export function endOfWeek(d: Date, weekStartsOn: 0 | 1 = 1): Date {
  return addDays(startOfWeek(d, weekStartsOn), 6);
}

export function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function endOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function monthName(d: Date): string {
  return MONTHS[d.getMonth()];
}

export function weekdayLabels(weekStartsOn: 0 | 1 = 1): string[] {
  const base = WEEKDAYS_SHORT.slice();
  return base.slice(weekStartsOn).concat(base.slice(0, weekStartsOn));
}

/** Human label like "Mon, Jun 8, 2026". */
export function prettyDate(iso: string): string {
  const d = parseISO(iso);
  return `${WEEKDAYS_SHORT[d.getDay()]}, ${monthName(d).slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}

/** "Jun 8 – Jun 14" style range label. */
export function rangeLabel(start: Date, end: Date): string {
  const s = `${monthName(start).slice(0, 3)} ${start.getDate()}`;
  const e = `${monthName(end).slice(0, 3)} ${end.getDate()}`;
  return `${s} – ${e}`;
}

/** Whether `iso` falls within [start, end] inclusive (date-only). */
export function isWithin(iso: string, start: Date, end: Date): boolean {
  const t = parseISO(iso).getTime();
  return t >= startOfDay(start).getTime() && t <= startOfDay(end).getTime();
}

export function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
