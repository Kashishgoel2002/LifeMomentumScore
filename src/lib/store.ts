import type { DB, Entry, Habit, Settings, TrackingMode } from './types';
import { DEFAULT_HABITS, DEFAULT_SETTINGS } from './defaults';
import { toISODate, toTime } from './date';

const KEY = 'lms.v1';
const CHANGE_EVENT = 'lms:change';

/** Browser-only id generator (no crypto dependency required, but use it when present). */
function uid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return 'id-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function freshDB(): DB {
  return {
    version: 1,
    habits: DEFAULT_HABITS.map((h) => ({ ...h })),
    entries: [],
    settings: { ...DEFAULT_SETTINGS },
  };
}

function read(): DB {
  if (typeof localStorage === 'undefined') return freshDB();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const seeded = freshDB();
      write(seeded);
      return seeded;
    }
    const parsed = JSON.parse(raw) as DB;
    // Minimal shape guard — fall back to a fresh seed if corrupted.
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.habits)) {
      const seeded = freshDB();
      write(seeded);
      return seeded;
    }
    parsed.settings = { ...DEFAULT_SETTINGS, ...parsed.settings };
    parsed.entries ??= [];
    return parsed;
  } catch {
    return freshDB();
  }
}

function write(db: DB): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(db));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export const store = {
  /** Subscribe to any data change. Returns an unsubscribe fn. */
  onChange(fn: () => void): () => void {
    window.addEventListener(CHANGE_EVENT, fn);
    // Cross-tab sync.
    const storageFn = (e: StorageEvent) => { if (e.key === KEY) fn(); };
    window.addEventListener('storage', storageFn);
    return () => {
      window.removeEventListener(CHANGE_EVENT, fn);
      window.removeEventListener('storage', storageFn);
    };
  },

  getDB(): DB {
    return read();
  },

  // ---- Habits ----
  getHabits(): Habit[] {
    return read().habits;
  },

  getEnabledHabits(): Habit[] {
    return read().habits.filter((h) => h.enabled);
  },

  addHabit(name: string, score: number): Habit {
    const db = read();
    const habit: Habit = {
      id: uid(),
      name: name.trim(),
      score,
      type: score >= 0 ? 'positive' : 'negative',
      enabled: true,
      custom: true,
    };
    db.habits.push(habit);
    write(db);
    return habit;
  },

  updateHabit(id: string, patch: Partial<Pick<Habit, 'name' | 'score' | 'enabled'>>): void {
    const db = read();
    const h = db.habits.find((x) => x.id === id);
    if (!h) return;
    if (patch.name !== undefined) h.name = patch.name.trim();
    if (patch.score !== undefined) {
      h.score = patch.score;
      h.type = patch.score >= 0 ? 'positive' : 'negative';
    }
    if (patch.enabled !== undefined) h.enabled = patch.enabled;
    write(db);
  },

  deleteHabit(id: string): void {
    const db = read();
    const h = db.habits.find((x) => x.id === id);
    if (!h || !h.custom) return; // only custom habits are deletable
    db.habits = db.habits.filter((x) => x.id !== id);
    write(db);
  },

  resetHabits(): void {
    const db = read();
    db.habits = DEFAULT_HABITS.map((h) => ({ ...h }));
    write(db);
  },

  // ---- Entries ----
  getEntries(): Entry[] {
    return read().entries;
  },

  getEntriesForDate(date: string): Entry[] {
    return read().entries
      .filter((e) => e.date === date)
      .sort((a, b) => b.createdAt - a.createdAt);
  },

  /** Log a habit. Date defaults to today; time/now derived from the clock. */
  logHabit(habitId: string, date?: string): Entry | null {
    const db = read();
    const habit = db.habits.find((h) => h.id === habitId);
    if (!habit) return null;
    const now = new Date();
    const entry: Entry = {
      id: uid(),
      habitId: habit.id,
      habitName: habit.name,
      score: habit.score,
      type: habit.type,
      date: date ?? toISODate(now),
      time: toTime(now),
      createdAt: now.getTime(),
    };
    db.entries.push(entry);
    write(db);
    return entry;
  },

  updateEntry(id: string, patch: Partial<Pick<Entry, 'score' | 'date' | 'time' | 'habitName'>>): void {
    const db = read();
    const e = db.entries.find((x) => x.id === id);
    if (!e) return;
    Object.assign(e, patch);
    if (patch.score !== undefined) e.type = patch.score >= 0 ? 'positive' : 'negative';
    write(db);
  },

  deleteEntry(id: string): void {
    const db = read();
    db.entries = db.entries.filter((x) => x.id !== id);
    write(db);
  },

  // ---- Settings ----
  getSettings(): Settings {
    return read().settings;
  },

  setMode(mode: TrackingMode): void {
    const db = read();
    db.settings.trackingMode = mode;
    write(db);
  },
};
