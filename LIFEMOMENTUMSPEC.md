I have initialized a new AstroJS project.

Use the astro-docs MCP, tailwind-4-docs skill, web-design-guidelines skill, and @DESIGN.md.

Build a production-quality MVP for the following project.

# Project Name

Life Momentum Score

Working Domain:
LifeMomentumScore.com

# Tech Requirements

* AstroJS
* Tailwind CSS v4
* TypeScript
* Mobile-first responsive design
* MPA (Multi-Page Application) architecture
* SEO-friendly pages
* Dark mode only
* Vercel-inspired design language
* Fast loading
* Clean component architecture

# IMPORTANT MVP CONSTRAINT

This is Version 1.

Keep the project intentionally simple.

Do NOT implement:

* User accounts
* Login
* Signup
* Authentication
* Password reset
* Email verification
* Database
* Backend APIs
* AI features
* Social features
* Payment systems

Store all data in browser localStorage.

The goal is to validate the concept and build a polished working MVP.

Future versions can add authentication and cloud storage.

# Product Vision

Life Momentum Score is not a traditional habit tracker.

Most habit trackers focus on streaks and completion percentages.

Life Momentum Score focuses on one question:

"Are my daily actions creating positive momentum or negative momentum in my life?"

The goal is to help users understand the cumulative impact of both good and bad habits.

Positive habits add momentum.

Negative habits subtract momentum.

The website should feel analytical, reflective, modern, and premium.

Avoid making it feel childish, overly gamified, or motivational.

# Core Concept

Users log actions throughout the week.

Each action has a positive or negative score.

The system calculates a Life Momentum Score.

The score represents the net effect of the user's actions over time.

Examples:

Exercise = +10

Studying = +8

Reading = +5

Junk Food = -4

Smoking = -10

Excessive Social Media = -5

The user should immediately understand:

"I thought I was having a productive week, but my negative habits cancelled out most of my progress."

# Data Storage

Use browser localStorage.

Persist:

* Habits
* Habit scores
* User settings
* Tracking mode
* Daily entries
* Historical entries

The application should continue working after page refreshes.

# Habit Library

Provide a default habit library.

Positive habits:

* Exercise
* Walking
* Reading
* Studying
* Meditation
* Healthy Eating
* Early Sleep
* Deep Work
* Drinking Water

Negative habits:

* Junk Food
* Smoking
* Excessive Social Media
* Excessive Gaming
* Procrastination
* Skipping Exercise
* Oversleeping
* Doomscrolling

Every habit should have a default score.

# Custom Habits

Users must be able to:

* Create custom habits
* Set custom scores
* Edit default habit scores
* Disable habits they don't use
* Delete custom habits

The system should respect personal preferences.

# Logging System

Users can log habits every day.

For every entry store:

* Habit name
* Score
* Date
* Time
* Type (positive or negative)

Users must be able to:

* Add entries
* Edit entries
* Delete entries

# Calendar & History

Create a calendar page.

Users can:

* Click any day
* View entries for that day
* Edit entries
* Delete entries

The app should function as a historical record of behavior.

# Life Momentum Modes

Create 3 modes.

## Live Mode

Show:

* Current score
* Positive points
* Negative points
* Running totals

This is the default mode.

## Weekly Reveal Mode

Hide the actual score.

Show:

* Number of entries
* Days tracked
* Activity summaries

Reveal the score only at the end of the week.

## Monthly Reveal Mode

Hide the actual score.

Show:

* Number of entries
* Days tracked
* Activity summaries

Reveal the score only at the end of the month.

Add an explanation:

"Delayed score reveals help reduce daily bias and encourage more honest self-reflection."

# Dashboard

Create a dashboard showing:

* Current tracking mode
* Habits logged today
* Calendar summary
* Positive actions count
* Negative actions count
* Weekly progress
* Previous scores
* Trend chart placeholder
* Quick add habit buttons

# Score Categories

+100 and above:
Thriving

+50 to +99:
Strong Momentum

0 to +49:
Moving Forward

-1 to -49:
Stagnating

-50 to -99:
Declining

Below -100:
Negative Momentum

Display these categories visually.

# Pages

Create:

* Home Page
* Features Page
* About Page
* Dashboard
* Habit Management Page
* Calendar Page
* Weekly Review Page

# Home Page Messaging

Headline:

Measure the direction of your life.

Subheadline:

Most people track good habits.
Few measure the impact of bad ones.
Life Momentum Score helps you understand your true trajectory.

CTA:

Start Tracking

# Design Requirements

Use Vercel as inspiration.

Requirements:

* Dark theme
* Minimal UI
* Premium appearance
* Excellent typography
* Responsive layout
* Modern spacing system
* Smooth animations
* Accessible components
* Clean cards
* Professional dashboard

Avoid:

* Bright colors
* Cartoon illustrations
* Excessive gradients
* Gamification overload
* Cluttered dashboards

# MVP Goal

The user should be able to:

1. Open the website.
2. Create or edit habits.
3. Log daily actions.
4. View calendar history.
5. Select:

   * Live Mode
   * Weekly Reveal Mode
   * Monthly Reveal Mode
6. See their Life Momentum results.
7. Return later and continue using the app because data persists via localStorage.

The website should feel complete even without accounts or a backend.

# Build Order

Build in this order:

Phase 1:

* Layout
* Navigation
* Home page
* Features page
* About page

Phase 2:

* Habit library
* Custom habits
* Habit management

Phase 3:

* Daily logging system
* Score calculations

Phase 4:

* Dashboard
* Calendar
* History views

Phase 5:

* Tracking modes
* Weekly reveal
* Monthly reveal

Phase 6:

* Polish UI
* Animations
* Mobile optimization
* SEO improvements

Before implementing code, generate:

1. Folder structure
2. Component architecture
3. Data models
4. Page structure
5. Implementation plan

Wait for approval before writing any code.
