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


Improvement 1 prompt:

# Life Momentum Score — Version 1.1 Improvement Pass

Read this entire prompt before making any changes.

---

# CRITICAL RULES

This is NOT a redesign.

The current website structure, dark theme, layout, scoring system, and overall aesthetic are already approved.

Preserve all existing functionality.

Do NOT:

* Rewrite the application
* Change scoring logic
* Change momentum calculations
* Change dashboard calculations
* Change review calculations
* Change calendar functionality
* Change habit tracking functionality
* Change local storage architecture
* Change page URLs
* Change SEO setup
* Change dark-mode design language
* Change Vercel-inspired visual style
* Change responsive layout unless required for a listed fix
* Add new pages unless explicitly requested
* Add unnecessary animations
* Add unnecessary complexity

Only implement the changes listed below.

Before writing any code:

1. Show implementation plan.
2. List files that will be modified.
3. Wait for approval.

---

# ISSUE 1: Navigation Clarity

Current problem:

The website opens on the landing page.

However the navigation begins with Dashboard, causing confusion because users naturally assume Dashboard is the first page.

Required solution:

Add a dedicated Home navigation item.

Navigation order:

Home
Dashboard
Habits
Calendar
Review
Features
About

Requirements:

* Home must always return to landing page.
* Existing logo must remain.
* Logo must also continue linking to Home.
* Do not remove landing page.

---

# ISSUE 2: Improve Visibility Of Section Labels

Affected labels include:

* THE PROBLEM
* THE SCALE
* ABOUT
* DASHBOARD
* REVIEW
* PRODUCT
* LEARN
* NEW CUSTOM HABIT
* Similar labels throughout the site

Current issue:

Labels are too dim and easy to miss.

Required solution:

Create one consistent label style:

* Slightly larger
* Slightly brighter
* Improved contrast
* Better visual hierarchy

Maintain premium dark aesthetic.

Do not make labels oversized.

---

# ISSUE 3: Improve The Problem Section

Current issue:

The ending statement lacks emotional impact.

Replace:

"Are your daily actions creating positive or negative momentum?"

With:

"Where is your life actually heading?"

Keep surrounding content.

Ensure capitalization and typography are correct.

---

# ISSUE 4: Improve Feature Cards

Cards:

* Net Momentum
* Delayed Reveal
* A Behavioral Record

Current issues:

* Headings are too subtle.
* Descriptions are forgettable.
* Cards appear interactive but feel static.

Required solution:

* Improve heading visibility.
* Rewrite descriptions to be more memorable.
* Add a subtle hover effect only.

Do NOT:

* Add modals
* Add click actions
* Add expandable content
* Add dropdowns
* Add heavy animations

Keep them lightweight.

---

# ISSUE 5: Footer Hierarchy

Current issue:

PRODUCT and LEARN appear to be clickable links.

Required solution:

Clearly differentiate:

* Footer section headings
* Footer navigation links

Keep current layout.

---

# ISSUE 6: Custom Habits Improvements

Required changes:

1. Display custom habits above default habits.
2. Add visible CUSTOM badge beside custom habits.
3. Ensure badge styling matches dark theme.

Goal:

Users should instantly identify habits they created.

---

# ISSUE 7: Improve Custom Habit Form Visibility

Section:

NEW CUSTOM HABIT

Improve visibility of:

* Labels
* Placeholder text
* Instruction text

Especially:

"Use a negative number for a habit that subtracts momentum."

This instruction should be clearly readable.

---

# ISSUE 8: Rewrite About Page

Current issue:

The About page feels like documentation.

Rewrite the entire About page.

Requirements:

* More engaging
* More memorable
* More emotional
* Easier to read
* Less text-heavy
* More human

Writing style:

Conversational.

Goal:

Users should think:

"I've never looked at my habits this way before."

Keep underlying philosophy unchanged.

---

# ISSUE 9: Remove Hero Badge

Remove:

"No account needed · Data stays on your device"

Reason:

This is implementation detail and weakens the first impression.

Privacy is already mentioned elsewhere.

Do not replace it.

Simply remove it.

---

# ISSUE 10: Logo And Favicon Update

Keep the existing Life Momentum icon.

Do NOT change:

* Gradient colors
* Shape
* Background
* Brand identity
* Overall appearance

Only change:

The internal white line.

Current issue:

It resembles a stock market graph.

Replace it with:

A clean upward momentum arrow.

Requirements:

* Minimal
* Modern
* Visible at small sizes
* Represents growth and progress

After updating:

Generate:

* favicon.ico
* favicon-16x16.png
* favicon-32x32.png

Update favicon references.

---

# ISSUE 11: Add FAQ Section

Add FAQ near bottom of homepage.

Placement:

Features
↓
FAQ
↓
Footer

Do NOT create a separate FAQ page.

Use accordion layout.

Requirements:

* Questions visible initially.
* Answers expand on click.
* Answers collapse on click.
* Lightweight interaction.
* Mobile friendly.
* Dark theme consistent.
* Subtle animation only.

Questions:

1. What is a habit tracker?
2. How is Life Momentum Score different from a habit tracker?
3. Can I track bad habits as well as good habits?
4. What is delayed score reveal?
5. Does my data stay private?
6. Can I create custom habits?
7. What is a momentum score?
8. Is Life Momentum Score free?

Write concise SEO-friendly answers.

Avoid keyword stuffing.

Goal:

Improve SEO without making homepage feel long or cluttered.

---

# ISSUE 12: Mobile-First Review

This product is primarily used on mobile devices.

Review every page:

* Home
* Dashboard
* Habits
* Calendar
* Review
* Features
* About

Focus on:

* Readability
* Touch targets
* Forms
* Habit logging workflow
* Navigation usability
* Scrolling experience

Make only lightweight improvements.

Do not redesign the application.

---

# ISSUE 13: General Readability Pass

Throughout entire website:

Improve:

* Low-contrast labels
* Low-contrast helper text
* Low-contrast secondary text

Several sections currently feel too dim.

Maintain dark theme.

Do not make text excessively bright.

---

# ISSUE 14: Daily Breakdown In Review Page

Current problem:

Users can see a weekly or monthly score but cannot quickly identify which specific days contributed most to the result.

Example:

Week Score = -11

The user immediately wants to know:

* Which days were positive?
* Which days were negative?
* Which day helped most?
* Which day hurt most?

Currently users must manually inspect calendar entries.

Required solution:

Add a Daily Breakdown section directly below the main score card.

Example:

Monday +8
Tuesday +5
Wednesday -12
Thursday -7
Friday +3
Saturday 0
Sunday -8

Requirements:

* Show every day in selected period.
* Show net score for each day.
* Positive values use existing positive styling.
* Negative values use existing negative styling.
* Zero values use neutral styling.
* Match existing design language.
* Mobile friendly.
* Lightweight.

Do NOT:

* Add charts.
* Add graphs.
* Add analytics dashboards.

Purpose:

Users should immediately understand where momentum was gained or lost before drilling into Calendar.

---

# ISSUE 15: Validation

After all changes:

1. Run Astro build.
2. Run Astro type checks.
3. Fix all warnings.
4. Fix all errors.
5. Verify mobile layouts.
6. Verify FAQ accordion.
7. Verify favicon update.
8. Verify custom habit ordering.
9. Verify daily breakdown calculations.
10. Provide summary of completed changes.
11. List every modified file.

Wait for approval before making any additional improvements not listed in this prompt.



Improvement Version 1.2

# Life Momentum Score — Version 1.2 Improvements

Read this entire prompt before making any changes.

---

# CRITICAL RULES

This is NOT a redesign.

The current Version 1.1 layout, navigation, scoring logic, review logic, calendar system, habits system, FAQ system, favicon concept, dark theme, and overall design language are approved.

Do NOT:

* Change scoring calculations
* Change momentum logic
* Change delayed reveal logic
* Change calendar functionality
* Change habit tracking functionality
* Change localStorage architecture
* Change page URLs
* Change SEO setup
* Change FAQ content
* Change responsive structure
* Change the dark Vercel-inspired design language
* Add heavy animations
* Add unnecessary dependencies

Only implement the issues listed below.

Before writing any code:

1. Show implementation plan.
2. List files that will be modified.
3. Wait for approval.

---

# ISSUE 1: Make Favicon And Brand Logo Identical

Current problem:

The favicon and the Life Momentum logo are visually similar but not identical.

Even though both use the same gradient background and upward arrow concept, they appear to be generated from different source assets.

This creates an inconsistency in branding.

Required solution:

Create a single master icon.

Use that exact icon source for:

* Navbar logo
* Footer logo
* favicon.ico
* favicon-16x16.png
* favicon-32x32.png

Requirements:

* Keep existing gradient background.
* Keep existing shape.
* Keep existing upward arrow concept.
* Do not redesign the brand.
* Do not introduce new colors.

Goal:

The browser favicon and the logo displayed in the website should look like the same icon at different sizes.

---

# ISSUE 2: Historical Daily Breakdown For Completed Review Periods

Current problem:

The current review period correctly shows Daily Breakdown.

Completed periods only show:

Week → Score

without showing which specific days created that result.

Users may want to understand:

* Why a previous week was positive.
* Why a previous week was negative.
* Which specific days affected the score.

Required solution:

Add a lightweight expandable breakdown to completed period cards.

Example:

Jun 1 – Jun 7      +18

[View Daily Breakdown]

Monday       +8
Tuesday      -2
Wednesday    +5
Thursday     +1
Friday       +4
Saturday      0
Sunday       +2

Requirements:

* Collapsed by default.
* Expand on click.
* Collapse on second click.
* Mobile friendly.
* Match existing design language.
* Lightweight implementation.

Do NOT:

* Add charts.
* Add graphs.
* Add analytics dashboards.

Purpose:

Allow users to understand historical periods without cluttering the page.

---

# ISSUE 3: Information Design And Storytelling Pass

Current problem:

The About page is improved compared to Version 1.0, but it still feels like documentation.

The issue is not the dark theme.

The issue is not the color palette.

The issue is not typography.

The issue is that information is still presented mostly as:

Heading
→ Paragraph
→ Paragraph
→ Heading
→ Paragraph

This creates a reading experience rather than a memorable experience.

The content communicates information but does not create enough emotional impact.

Required solution:

Apply an information-design and storytelling pass to the About page.

Important:

Do NOT simply rewrite paragraphs.

Instead, redesign how information is presented.

Use techniques such as:

* Visual comparisons
* Contrasts
* Examples
* Short impactful statements
* Quote blocks
* Callout sections
* Mini scenarios
* Structured examples
* Strategic use of positive and negative momentum colors
* Better visual hierarchy
* Better spacing and pacing

Example direction:

Instead of explaining the concept entirely through paragraphs:

Most habit trackers:

✓ Workout
✓ Reading
✓ Meditation

Result:
"Great week."

Life Momentum:

✓ Workout
✓ Reading
✓ Meditation
✗ Doomscrolling
✗ Gambling
✗ Poor sleep

Result:
"Mixed week."

This type of information design is preferred over large blocks of text.

Goal:

Users should think:

"I understand this immediately."

and

"I have never looked at my habits this way before."

Inspiration:

The presentation quality should feel closer to modern SaaS companies such as:

* Linear
* Stripe
* Vercel
* Notion

without copying their designs.

Requirements:

* Keep content concise.
* Improve emotional impact.
* Improve scannability.
* Improve mobile readability.
* Reduce dependence on large paragraphs.
* Increase use of visual storytelling.

Do NOT:

* Add illustrations.
* Add large graphics.
* Add videos.
* Add heavy animations.
* Add excessive colors.

Focus on information design rather than decoration.

---

# VALIDATION

After implementation:

1. Run Astro build.
2. Run Astro check.
3. Fix all errors.
4. Fix all warnings.
5. Verify mobile layouts.
6. Verify favicon consistency.
7. Verify historical breakdown functionality.
8. Verify About page readability and storytelling improvements.
9. Provide a summary of all completed changes.
10. List all modified files.

Wait for approval before making any changes.



Changes version 1.3


# Life Momentum Score — Version 1.3 (Launch Readiness, SEO & Trust)

Read this entire prompt before making any changes.

## Important Rules

1. Do NOT redesign the website.
2. Do NOT change scoring logic.
3. Do NOT change momentum calculations.
4. Do NOT change habit storage/localStorage.
5. Do NOT change dashboard, calendar, review, or habits workflows.
6. Do NOT add login, signup, backend, database, cloud sync, or accounts.
7. Preserve the current dark design system and visual identity.
8. Make only the changes listed below.
9. Run astro build and astro check after implementation.
10. Do NOT commit or push changes.
11. Provide a complete summary of all modified files after implementation.
12. Wait for approval before any commit.

---

# Goal

Prepare the website for:

* Public launch
* Search engine indexing
* AdSense readiness
* User trust
* Social sharing
* Technical SEO best practices

This is not a feature release.

This is a launch-readiness release.

---

# Issue 1 — Privacy Policy Page

Create:

/privacy

Requirements:

* Match the current design language.
* Explain that all habit data is stored locally on the user's device.
* No account required.
* No login required.
* No personal information collected.
* No analytics currently used.
* No advertising currently used.
* Explain that the policy may be updated in the future.

Write in plain English, not legal jargon.

---

# Issue 2 — Terms & Conditions Page

Create:

/terms

Requirements:

* Productivity and self-improvement tool.
* No guarantees regarding results.
* Users are responsible for their own decisions and actions.
* Service may evolve over time.
* No warranties.
* Clean, professional structure.

Keep it simple and readable.

---

# Issue 3 — Contact Us Page

Create:

/contact

Use this email:

[lifemomentumscore@gmail.com](mailto:lifemomentumscore@gmail.com)

Include:

* Feedback requests
* Bug reports
* Feature suggestions
* General inquiries

Do NOT create a contact form.

Email only.

Keep the page friendly and welcoming.

---

# Issue 4 — About Page Refinement

The About page has already improved significantly.

Do NOT rewrite it from scratch.

Instead:

* Improve spacing where helpful.
* Improve hierarchy where helpful.
* Improve mobile readability.
* Make comparison examples easier to scan.
* Keep the comparison cards.
* Keep the delayed reveal section.
* Keep the privacy section.

No major content rewrite.

Focus on polish, readability, and presentation.

---

# Issue 5 — On-Page SEO Optimization

Perform a complete SEO pass.

Primary keyword:

Life Momentum Score

Supporting keywords:

* habit tracker
* habit tracking app
* daily habit tracker
* daily habits tracker
* productivity tracker
* self improvement tracker
* personal growth tracker
* momentum tracker
* habit score
* behavior tracker
* daily accountability tracker
* positive and negative habits
* goal tracking app
* self discipline tracker

Requirements:

* Improve title tags.
* Improve meta descriptions.
* Improve canonical tags.
* Improve heading hierarchy.
* Improve metadata quality.
* Improve keyword coverage naturally.

Avoid keyword stuffing.

Write for humans first.

---

# Issue 6 — Homepage Philosophy Section

Add a small section near the bottom of the homepage.

Length:

150–250 words.

This section is NOT a FAQ.

Do NOT repeat the existing FAQ content.

Do NOT use question-answer format.

Purpose:

Explain the philosophy behind the product.

Example themes:

* Most habit trackers measure completion.
* Life Momentum Score measures direction.
* Positive habits help.
* Negative habits matter too.
* Momentum comes from net behavior.

Think of it as a short article.

It should feel insightful and useful, not like SEO spam.

---

# Issue 7 — Open Graph & Social Sharing

Add complete social sharing support.

Requirements:

* OG title
* OG description
* OG image
* Twitter card support

Create a branded OG image using the existing visual identity.

Verify that when someone shares the website URL on:

* WhatsApp
* Facebook
* LinkedIn
* X/Twitter
* Telegram
* Discord

a professional preview appears automatically.

No share buttons are required.

No user interaction is required.

---

# Issue 8 — Structured Data

Add:

1. SoftwareApplication Schema

Tell search engines that this website is a productivity software application.

2. WebSite Schema

Tell search engines that this is the official website.

Keep:

* Existing FAQ schema

Validate all schema.

---

# Issue 9 — Sitemap & Robots Verification

Check whether:

* sitemap.xml
* robots.txt

already exist.

If they already exist:

* Verify correctness.
* Improve if necessary.

If they are missing:

* Create them.

Requirements:

* Robots references sitemap.
* Sitemap includes all public SEO pages.
* Everything works after build.

---

# Issue 10 — Custom Error Pages

Create:

* 404 page
* 500 page

Requirements:

* Match current branding.
* Friendly messaging.
* Button to Home.
* Button to Dashboard.
* Mobile friendly.

Example:

404

Page Not Found

The page you're looking for doesn't exist.

[Go Home]
[Open Dashboard]

Keep it clean and lightweight.

---

# Issue 11 — Footer Trust Links

Add footer links:

* About Us
* Privacy Policy
* Terms & Conditions
* Contact Us

Do NOT add these to the main navigation.

Keep them in the footer.

Maintain current footer design.

---

# Issue 12 — Copyright

Add:

© 2026 Life Momentum Score. All rights reserved.

to the footer.

Keep styling subtle and professional.

---

# Validation Requirements

After implementation:

1. Run astro check.
2. Run astro build.
3. Verify all routes.
4. Verify sitemap.
5. Verify robots.txt.
6. Verify structured data.
7. Verify OG tags.
8. Verify mobile layout.
9. Provide a complete modified-file list.
10. Provide a complete implementation summary.
11. Wait for approval before committing anything.

Do not commit.
Do not push.
Wait for approval after implementation.


Improvement in email:

# Contact Page Improvement — Email Fallback

The Contact page email implementation is already correct and should remain unchanged.

Current implementation:

```html
mailto:lifemomentumscore@gmail.com
```

Do NOT remove or modify the existing mailto functionality.

---

## Issue

Some users may not have a properly configured email handler.

In those cases:

* Clicking the email address may not open a compose window.
* Clicking the "Send an email" button may not open a compose window.
* Users may not know how to contact us despite the email being visible.

---

## Solution

Add a secondary fallback option.

### New Button

Add:

```text
Copy Email
```

next to the existing:

```text
Send an email
```

button.

Maintain the current design language.

The button should feel secondary and subtle.

---

## Behavior

When clicked:

1. Copy:

```text
lifemomentumscore@gmail.com
```

to the clipboard.

2. Show a lightweight success confirmation.

Example:

```text
Email copied
```

or

```text
Copied to clipboard
```

3. Success message should disappear automatically after a few seconds.

No page reload.

No modal.

No alert popup.

---

## Important

Keep the existing:

```text
mailto:lifemomentumscore@gmail.com
```

implementation exactly as it is.

This is an addition, not a replacement.

Users should have both options:

* Send Email
* Copy Email

---

## Validation

After implementation:

1. Verify Send Email still works.
2. Verify Copy Email copies:
   [lifemomentumscore@gmail.com](mailto:lifemomentumscore@gmail.com)
3. Verify success message appears.
4. Verify success message disappears automatically.
5. Verify mobile layout remains clean.
6. Report modified files.

Do not make any other design or content changes.
