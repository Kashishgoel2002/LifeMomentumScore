import type { Entry } from './types';

export interface ScoreCategory {
  key: string;
  label: string;
  /** Lower bound (inclusive). Use -Infinity for the floor. */
  min: number;
  tone: 'positive' | 'neutral' | 'negative';
  blurb: string;
}

/** Ordered high → low. */
export const SCORE_CATEGORIES: ScoreCategory[] = [
  { key: 'thriving', label: 'Thriving', min: 100, tone: 'positive', blurb: 'Compounding positive momentum.' },
  { key: 'strong', label: 'Strong Momentum', min: 50, tone: 'positive', blurb: 'Clear forward direction.' },
  { key: 'forward', label: 'Moving Forward', min: 0, tone: 'neutral', blurb: 'Net positive, room to grow.' },
  { key: 'stagnating', label: 'Stagnating', min: -49, tone: 'neutral', blurb: 'Good and bad cancelling out.' },
  { key: 'declining', label: 'Declining', min: -99, tone: 'negative', blurb: 'Negative habits taking over.' },
  { key: 'negative', label: 'Negative Momentum', min: -Infinity, tone: 'negative', blurb: 'Trajectory needs a reset.' },
];

export function categoryFor(score: number): ScoreCategory {
  return SCORE_CATEGORIES.find((c) => score >= c.min) ?? SCORE_CATEGORIES[SCORE_CATEGORIES.length - 1];
}

export interface Totals {
  net: number;
  positive: number;
  negative: number;
  positiveCount: number;
  negativeCount: number;
  count: number;
}

export function totals(entries: Entry[]): Totals {
  let positive = 0, negative = 0, positiveCount = 0, negativeCount = 0;
  for (const e of entries) {
    if (e.score >= 0) { positive += e.score; positiveCount++; }
    else { negative += e.score; negativeCount++; }
  }
  return {
    net: positive + negative,
    positive,
    negative,
    positiveCount,
    negativeCount,
    count: entries.length,
  };
}

export function signed(n: number): string {
  return n > 0 ? `+${n}` : String(n);
}
