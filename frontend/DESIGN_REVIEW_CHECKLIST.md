# Frontend Design Review Checklist

Run this checklist before marking any Job Discovery Platform page or component complete.

## Product consistency
- [ ] Uses the shared AppShell from app/components/shell/app-shell.tsx.
- [ ] Active navigation matches the current route and uses aria-current=page.
- [ ] Mobile navigation opens, closes, and remains keyboard accessible.
- [ ] Uses the same active, hover, focus, and disabled interaction language.
- [ ] User-facing copy is Vietnamese-first and uses consistent terminology.

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
- [ ] Demo/sample data is visibly labeled.
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
- [ ] Root document uses lang=vi and has product metadata.
- [ ] Lint/build checks pass, or the exact blocker is documented.
