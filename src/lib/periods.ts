import type { Entry, Settings } from './types';
import {
  startOfWeek, endOfWeek, startOfMonth, endOfMonth,
  toISODate, parseISO, addDays, rangeLabel, monthName, isWithin, startOfDay,
} from './date';
import { totals, type Totals } from './score';

export interface Period {
  /** Inclusive bounds. */
  start: Date;
  end: Date;
  label: string;
  entries: Entry[];
  totals: Totals;
  /** Distinct YYYY-MM-DD values that have at least one entry. */
  daysTracked: number;
  /** True once the period has fully elapsed (end < today). */
  isComplete: boolean;
}

function buildPeriod(start: Date, end: Date, label: string, all: Entry[], now: Date): Period {
  const entries = all.filter((e) => isWithin(e.date, start, end));
  const days = new Set(entries.map((e) => e.date));
  return {
    start,
    end,
    label,
    entries,
    totals: totals(entries),
    daysTracked: days.size,
    isComplete: startOfDay(end).getTime() < startOfDay(now).getTime(),
  };
}

export function currentWeek(all: Entry[], settings: Settings, now = new Date()): Period {
  const s = startOfWeek(now, settings.weekStartsOn);
  const e = endOfWeek(now, settings.weekStartsOn);
  return buildPeriod(s, e, rangeLabel(s, e), all, now);
}

export function currentMonth(all: Entry[], now = new Date()): Period {
  const s = startOfMonth(now);
  const e = endOfMonth(now);
  return buildPeriod(s, e, `${monthName(s)} ${s.getFullYear()}`, all, now);
}

/** Most recent `count` weeks, newest first, excluding the current week. */
export function pastWeeks(all: Entry[], settings: Settings, count = 6, now = new Date()): Period[] {
  const out: Period[] = [];
  let cursor = startOfWeek(now, settings.weekStartsOn);
  for (let i = 0; i < count; i++) {
    cursor = addDays(cursor, -7);
    const s = cursor;
    const e = addDays(cursor, 6);
    out.push(buildPeriod(s, e, rangeLabel(s, e), all, now));
  }
  return out;
}

/** Most recent `count` months, newest first, excluding the current month. */
export function pastMonths(all: Entry[], count = 6, now = new Date()): Period[] {
  const out: Period[] = [];
  for (let i = 1; i <= count; i++) {
    const s = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const e = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
    out.push(buildPeriod(s, e, `${monthName(s)} ${s.getFullYear()}`, all, now));
  }
  return out;
}

/** Per-day net totals across a period, ordered start → end. */
export function dailyNets(period: Period): { date: string; net: number }[] {
  const out: { date: string; net: number }[] = [];
  let d = period.start;
  const endTime = startOfDay(period.end).getTime();
  while (startOfDay(d).getTime() <= endTime) {
    const iso = toISODate(d);
    const dayEntries = period.entries.filter((e) => e.date === iso);
    out.push({ date: iso, net: totals(dayEntries).net });
    d = addDays(d, 1);
  }
  return out;
}

export { parseISO };
