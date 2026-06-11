import type { Habit, Settings } from './types';

/** Stable id for default habits so re-seeding never duplicates them. */
function def(name: string, score: number): Habit {
  return {
    id: 'def-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    score,
    type: score >= 0 ? 'positive' : 'negative',
    enabled: true,
    custom: false,
  };
}

export const DEFAULT_HABITS: Habit[] = [
  // Positive
  def('Exercise', 10),
  def('Deep Work', 9),
  def('Studying', 8),
  def('Early Sleep', 6),
  def('Meditation', 6),
  def('Reading', 5),
  def('Healthy Eating', 5),
  def('Walking', 4),
  def('Drinking Water', 2),
  // Negative
  def('Smoking', -10),
  def('Skipping Exercise', -7),
  def('Procrastination', -6),
  def('Excessive Social Media', -5),
  def('Excessive Gaming', -5),
  def('Doomscrolling', -5),
  def('Junk Food', -4),
  def('Oversleeping', -4),
];

export const DEFAULT_SETTINGS: Settings = {
  trackingMode: 'live',
  weekStartsOn: 1,
};
