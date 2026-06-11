# Life Momentum Score

Measure the direction of your life. Most habit trackers reward streaks; Life Momentum Score
measures the **net effect** of your good and bad habits — are your daily actions creating positive
or negative momentum?

This is **Version 1 (MVP)**: no accounts, no backend, no database. All data lives in your browser's
`localStorage`, so the app works instantly and persists across refreshes.

## Tech

- **Astro** (MPA, static output) + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite`, CSS-first `@theme` tokens
- Dark-mode-only, Vercel-inspired design language (polarity-flipped to dark)
- `@astrojs/sitemap` for SEO

## Pages

| Route | Purpose |
| :--- | :--- |
| `/` | Home — product messaging + category ladder |
| `/features` | Tracking modes + capabilities |
| `/about` | Philosophy: momentum vs streaks, delayed reveals |
| `/dashboard` | Live momentum, quick-add logging, weekly progress, previous scores |
| `/habits` | Habit library — edit scores, enable/disable, add/delete custom |
| `/calendar` | Month grid + per-day entry add/edit/delete |
| `/review` | Reveal the score; Live shows totals, Weekly/Monthly unlock at period end |

## Architecture

All persistence flows through one module — `src/lib/store.ts` — the only code that touches
`localStorage` (key `lms.v1`). It seeds the default habit library on first load, exposes typed CRUD,
and emits a `lms:change` event (plus cross-tab `storage` sync) so each page re-renders.

```
src/lib/
  types.ts      data models (Habit, Entry, Settings, DB)
  defaults.ts   default habit library + default settings
  store.ts      localStorage read/write + CRUD + change events
  score.ts      totals + six momentum categories
  date.ts       local-timezone date helpers
  periods.ts    current/past week & month aggregation
```

Pages render a static shell in `.astro` and hydrate from the store via a bundled `<script>` module
(no UI framework).

## Tracking modes

- **Live** — current score, positive/negative points, running totals (default).
- **Weekly Reveal** — current week's score hidden; shows entries logged + days tracked. Unlocks when
  the week ends (visible on `/review`).
- **Monthly Reveal** — same mechanic across a full month.

> Delayed score reveals help reduce daily bias and encourage more honest self-reflection.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build |
| `npx astro check` | Type-check |

## Roadmap (future versions)

Accounts, authentication, and cloud sync — kept out of v1 by design so the concept can be validated
with a polished, fully working, private-by-default app.
