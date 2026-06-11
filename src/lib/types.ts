export type HabitType = 'positive' | 'negative';

export type TrackingMode = 'live' | 'weekly' | 'monthly';

export interface Habit {
  id: string;
  name: string;
  /** Signed score. Positive habits are > 0, negative habits are < 0. */
  score: number;
  type: HabitType;
  enabled: boolean;
  /** True for user-created habits (deletable). Defaults are not deletable. */
  custom: boolean;
}

export interface Entry {
  id: string;
  habitId: string;
  /** Snapshot of habit name at log time, so edits to the library don't rewrite history. */
  habitName: string;
  /** Snapshot of the signed score at log time. */
  score: number;
  type: HabitType;
  /** Local calendar date, YYYY-MM-DD. */
  date: string;
  /** Local time, HH:mm. */
  time: string;
  /** Epoch ms, for stable ordering. */
  createdAt: number;
}

export interface Settings {
  trackingMode: TrackingMode;
  /** 0 = Sunday, 1 = Monday. */
  weekStartsOn: 0 | 1;
}

export interface DB {
  version: 1;
  habits: Habit[];
  entries: Entry[];
  settings: Settings;
}
