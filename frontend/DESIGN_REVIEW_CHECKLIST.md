# Frontend Design Review Checklist

Run this checklist before marking any Job Discovery Platform page or component complete.

## Product consistency
- [ ] Uses the shared AppShell from app/components/shell/app-shell.tsx.
- [ ] Primary navigation is in the horizontal top header; no persistent left sidebar remains.
- [ ] Active navigation matches the current route and uses aria-current=page.
- [ ] Mobile navigation opens, closes with Escape, and returns focus to its trigger.
- [ ] Mobile navigation remains usable with keyboard and touch.
- [ ] Uses the same active, hover, focus, and disabled interaction language.
- [ ] All user-facing labels are Vietnamese-first; technical terms and proper product names remain consistent.
- [ ] Link text colors remain readable on active navigation and primary buttons.

## Visual tokens
- [ ] Uses the canonical color variables; no page-local brand hex colors.
- [ ] Uses semantic typography utilities from app/globals.css where applicable.
- [ ] Geist Sans and Geist Mono load both latin and vietnamese subsets.
- [ ] Vietnamese diacritics render correctly with the selected font/fallback stack.
- [ ] Uses Geist Sans for UI and Geist Mono only for technical/tabular content.
- [ ] Uses the shared type scale and heading hierarchy (one H1).
- [ ] Uses the 4px spacing scale and approved radius/elevation values.
- [ ] Uses the shared max-w-content container instead of page-specific max widths.
- [ ] Uses shared Tailwind radius utilities and the approved chart color tokens.
- [ ] Cards, inputs, buttons, badges, tables, and chart typography match shared primitives.
- [ ] No unapproved gradients, heavy shadows, decorative effects, raw one-off brand colors, or dark theme.

## Home / overview
- [ ] Header and public-facing brand use the “GomViệc” wordmark; “Job Discovery Platform” remains only a technical project identity.
- [ ] Home hero uses one large H1 level only, with no eyebrow label or secondary description.
- [ ] The H1 rotates through the approved three messages; the third message is “Tốn thời gian tìm kiếm công việc từ nhiều nền tảng?”.
- [ ] A restrained letter-style card below the H1 contains “Hiểu được những khó khăn đó.” and the approved GomViệc summary sentence; no extra eyebrow or decorative illustration is added.
- [ ] The H1 cycles through all three approved Vietnamese messages by typing, pausing, deleting, then repeating.
- [ ] The hero reserves height for the longest message and respects `prefers-reduced-motion`.
- [ ] Home uses one vertically stacked layout; no split hero, content columns, or left sidebar.
- [ ] Keyword search and all six filters submit their values to the Jobs route.
- [ ] Dropdown default labels omit “Tất cả” while retaining the underlying unfiltered value.
- [ ] The gap from the Home search/filter card to “Khám phá theo lĩnh vực” is 36px on mobile and 40px at desktop widths.
- [ ] The category section has no explanatory paragraph and its text-only chips have no trailing arrows.
- [ ] Category shortcuts open Jobs with the selected category pre-applied.
- [ ] TopCV and VietnamWorks are the only named recruitment sources.
- [ ] Home contains no ETL explanation, pipeline diagram/status, or technical portfolio pitch.
- [ ] No fabricated KPIs, job counts, salary averages, match percentages, testimonials, or AI claims are shown.
- [ ] Latest jobs are omitted until backed by a real API; demo fixtures are not presented as live jobs.

## Market Insights
- [ ] The page is organized around job-seeker decisions, not decorative KPI cards or chart count.
- [ ] Filters distinguish category, career level, location, work mode (On-site / Hybrid / Remote), and employment type (Full-time / Part-time / Internship).
- [ ] Remote is classified as a work mode, never as a location.
- [ ] Opportunity counts are grouped by category and career level, with unclassified levels shown separately.
- [ ] The opportunity matrix is readable on desktop and becomes category cards on mobile without page-level horizontal overflow.
- [ ] Skill frequencies show the eligible-description denominator and do not imply a skill is mandatory unless the source data explicitly says so.
- [ ] Location, work mode, and employment type are distinct dimensions.
- [ ] Salary metrics only use comparable normalized values; P25–P75, median, salary-disclosing record count, and calculation scope are explained.
- [ ] Negotiated or non-comparable salary records are not converted to zero or silently included.
- [ ] Each unavailable section has a clear state; missing data is never presented as zero.
- [ ] Jobs demo fixtures are not reused as market analytics data.
- [ ] The current scope names TopCV and VietnamWorks and does not claim to represent the entire Vietnamese IT labor market.
- [ ] Historical trend charts and market predictions remain omitted until historical coverage and data quality are validated.
- [ ] Filters are visibly unavailable until a verified analysis dataset/API is connected.

## Responsive
- [ ] Checked at 360px and 390px mobile widths.
- [ ] Checked at 768px tablet width.
- [ ] Checked at 1024px and 1440px desktop widths.
- [ ] No accidental page-level horizontal overflow.
- [ ] Filters, navigation, charts, and tables remain usable on touch devices.

## Data and states
- [ ] Loading, empty, error, and unavailable states are distinct and clear.
- [ ] Zero is not confused with missing/unavailable data.
- [ ] No fabricated counts, salary values, timestamps, pipeline status, or quality scores.
- [ ] Demo/sample data is visibly labeled and isolated from API-backed data.
- [ ] Search appears before the horizontal dropdown filter row.
- [ ] Jobs search input and action button use a compact, consistent 40px control height.
- [ ] Search panel uses compact padding and does not visually dominate the results.
- [ ] Job cards use a concise desktop metadata layout with no decorative location/source icons.
- [ ] Filters cover career level, salary, location, employment type, category, and posting date.
- [ ] Search and filters update results predictably; clearing filters restores the default result set.
- [ ] Filter layout wraps cleanly on tablet and mobile without forcing page-level horizontal scrolling.
- [ ] Expandable job details and no-results state are keyboard accessible.
- [ ] Chart title, units, labels, legend, and tooltip are understandable.

## Accessibility and behavior
- [ ] All controls have labels and keyboard operation.
- [ ] Focus-visible states are obvious.
- [ ] Status is not conveyed by color alone.
- [ ] Contrast is sufficient; meaningful images have alt text.
- [ ] Reduced-motion preference is respected.
- [ ] Buttons and links perform the action their labels promise.

## Engineering
- [ ] Shared components were reused rather than duplicated.
- [ ] No backend, ETL, schema, or API contract was changed for presentation convenience.
- [ ] Relevant local Next.js 16.4.3 documentation was read before changing framework code.
- [ ] Global CSS is imported once from the root layout; no global stylesheet imports are scattered across pages/components.
- [ ] Global element resets are inside @layer base and do not override Tailwind utilities.
- [ ] Root document uses lang=vi and has product metadata.
- [ ] Lint/build checks pass, or the exact blocker is documented.


## Brand and decorative restraint
- [ ] Header brand displays only the GomViệc wordmark, with “Gom” in foreground and “Việc” in primary blue; no oversized monogram or decorative logo icon.
- [ ] Filter dropdowns and category chips use text labels without icons.
- [ ] Recruitment-source strip has no database icon or decorative data symbol.
