# Job Discovery Platform — Frontend Design System

> **Status:** v1.0 · **Scope:** all frontend routes and shared components  
> **Product direction:** Modern Data Product — clear, trustworthy, data-focused, Vietnamese-first.

This document is the single source of truth for visual and interaction decisions. Home, Jobs, Market Insights, and Data Pipeline must feel like one product. Page-specific variation is allowed only where it improves the task; it must not create a separate visual language.

## 1. Non-negotiable rules

1. **One design system:** use the semantic tokens in `app/globals.css` (or their approved equivalent) rather than page-local hex values.
2. **One typography system:** use the project’s configured Geist sans font for UI and Geist Mono only for technical values, IDs, timestamps, code, and tabular data. Do not introduce another font without updating this document and getting approval.
3. **One spacing and radius scale:** use the scales below. Avoid arbitrary one-off values.
4. **One shared shell:** navigation, page width, page header, content spacing, and footer behavior must be consistent across routes.
5. **Reusable primitives:** use shared Button, Input, Select, Badge, Card, Table, Skeleton, and Alert primitives when available. Extend a primitive instead of creating a visually competing version.
6. **Data truthfulness:** never invent live job counts, ETL runs, freshness, quality scores, salary statistics, or source status. If sample data is used for a visual prototype, label it clearly as demo/sample data.
7. **No surprise theme changes:** v1 is light theme only. Do not add dark mode styling or automatic system dark mode until deliberately designed and tested.
8. **Responsive by default:** every page and component must work at 360px, 768px, 1024px, and 1440px widths.
9. **Accessible states:** visible focus, keyboard operation, sufficient contrast, semantic HTML, and non-color status cues are mandatory.
10. **No template mixing:** references may inform UX, but imported template styles must not override this system.

## 2. Brand and visual direction

- Personality: professional, calm, precise, helpful, credible.
- Product impression: a real Vietnamese job-market discovery product with a data platform behind it.
- Visual balance: product-first, not generic admin dashboard; charts and operational details support the product story.
- Decoration: restrained. Prefer whitespace, alignment, clear hierarchy, and subtle borders over gradients, glassmorphism, oversized shadows, or decorative blobs.
- Copy: Vietnamese for user-facing interface. Keep technical identifiers and common industry terms where clearer (ETL, API, Data Pipeline, SQL).

## 3. Color tokens

Use semantic CSS variables, not raw colors inside page components.

| Token | Light value | Intended use |
|---|---|---|
| `--background` | `#F7F9FC` | App canvas |
| `--surface` | `#FFFFFF` | Cards, panels, menus |
| `--surface-muted` | `#F1F5F9` | Subtle inset areas, table header |
| `--foreground` | `#172033` | Main text |
| `--muted-foreground` | `#64748B` | Secondary text, descriptions |
| `--subtle-foreground` | `#94A3B8` | Tertiary metadata only |
| `--border` | `#E2E8F0` | Default borders and dividers |
| `--border-strong` | `#CBD5E1` | Emphasized separators |
| `--primary` | `#2563EB` | Primary actions, active navigation, links |
| `--primary-hover` | `#1D4ED8` | Primary hover |
| `--primary-soft` | `#EFF6FF` | Selected states, subtle emphasis |
| `--primary-foreground` | `#FFFFFF` | Text on primary |
| `--accent` | `#0F766E` | Secondary data accent, sparingly |
| `--success` | `#15803D` | Successful/healthy states |
| `--success-soft` | `#F0FDF4` | Success background |
| `--warning` | `#B45309` | Warning/degraded states |
| `--warning-soft` | `#FFFBEB` | Warning background |
| `--danger` | `#B91C1C` | Error/failed/destructive states |
| `--danger-soft` | `#FEF2F2` | Error background |
| `--info` | `#0369A1` | Informational states |
| `--info-soft` | `#F0F9FF` | Informational background |

### Color usage constraints

- Primary blue is the only dominant brand/action color. Teal is a supporting data accent, not a second primary.
- Green, amber, and red communicate meaning only; do not use them as decoration.
- Do not encode status using color alone. Pair with text and/or an icon.
- Charts use a restrained palette: primary blue, teal, violet, amber, slate. Keep the same series-to-color mapping across pages. Avoid rainbow charts.
- Use muted text for metadata, not for essential labels or important data.
- Do not add gradients to buttons, cards, or the app background.

## 4. Typography

**Font family**
- UI and headings: Geist Sans via the existing Next font setup.
- Technical/tabular values: Geist Mono via the existing Next font setup.
- Do not use Arial, system font stacks, or a new Google font as a page-level override.

**Type scale**

| Role | Size / line height | Weight | Typical use |
|---|---:|---:|---|
| Display | 36 / 44 px | 700 | Landing hero only |
| Page title | 30 / 38 px | 650–700 | Main route heading |
| Section title | 20 / 28 px | 600 | Section/card group heading |
| Card title | 16 / 24 px | 600 | Card and job title |
| Body | 14 / 22 px | 400 | Default interface copy |
| Body emphasis | 14 / 22 px | 500–600 | Labels and emphasized text |
| Small | 12 / 18 px | 400–500 | Metadata, timestamps |
| KPI value | 28 / 34 px | 650–700 | Key metrics |
| Technical | 12–14 / 18–20 px | 400–500 | IDs, code, raw values |

Rules:
- Use sentence case, not all caps, for headings and labels.
- Use a consistent heading hierarchy: one H1 per page, then H2/H3 in order.
- Do not shrink important job titles or chart labels to fit; wrap or adjust layout.
- Use tabular numerals for counts, salary, percentages, and timestamps where supported.
- Body copy should normally be 14px; avoid 10–11px text.

## 5. Spacing, sizing, and layout

Use a 4px base spacing scale:

| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

Layout rules:
- Desktop content max width: 1200px; center it with 24px minimum horizontal gutters.
- Tablet gutters: 20px. Mobile gutters: 16px.
- Standard page section gap: 24–32px. Related controls: 8–16px.
- Use a 12-column grid at wide desktop when useful; collapse progressively instead of squeezing.
- Job search/filter layouts may use a 280px filter rail plus flexible results on wide screens; stack filters above results on mobile.
- Dashboard KPI cards: 4 columns on wide desktop, 2 on tablet, 1–2 on mobile depending on label length.
- Avoid horizontal scrolling for the whole page. Only data tables may use a contained horizontal scroll when absolutely necessary.

## 6. Surfaces, borders, radius, and elevation

| Token | Value | Use |
|---|---:|---|
| `--radius-sm` | 6px | Compact controls, badges |
| `--radius-md` | 10px | Inputs, buttons, cards |
| `--radius-lg` | 14px | Large panels, dialogs |
| `--radius-xl` | 18px | Hero/featured surface only |

- Default card: white surface, 1px border, 10–14px radius, no heavy shadow.
- Default input/button height: 40px; compact control: 32px; prominent action: 44px.
- Use subtle elevation only for popovers, menus, and dialogs. Cards should rely on border and spacing.
- Keep card padding consistent: 20–24px desktop, 16px mobile.
- Avoid nested cards unless there is a clear information hierarchy.

## 7. Shared application shell

All routes must reuse the same:
- Header/brand placement and navigation behavior.
- Main content max width and responsive gutters.
- Page heading pattern (title, optional description, optional primary action).
- Active navigation treatment.
- Footer or bottom spacing behavior.
- Loading, empty, error, and unavailable states.

Navigation labels are fixed for v1:
- Tổng quan
- Việc làm
- Phân tích thị trường
- Data Pipeline

Use the same active state, icon size, spacing, and hover/focus treatment on every route. Do not create a different header for analytics or pipeline pages.

## 8. Component rules

### Buttons
- Variants: primary, secondary/outline, ghost, destructive.
- Primary is reserved for the main action in a region.
- Avoid multiple visually dominant primary buttons next to one another.
- Include hover, focus-visible, disabled, and loading states.
- Icons do not replace accessible text for important actions.

### Inputs and filters
- Labels remain visible; placeholders are examples, not labels.
- Search input, select, date filter, and clear/reset action share heights and radii.
- Show active filter chips and a clear-all affordance when filters are applied.
- Preserve filter state when moving between pagination pages if the API supports it.

### Cards
- Cards use the same surface, border, padding, and title hierarchy.
- Job cards prioritize job title, company, location, salary, and posted date; optional metadata is subordinate.
- KPI cards use a small label, prominent value, and optional comparison/context. Do not invent trend indicators.

### Tables
- Use consistent row height, header treatment, alignment, and empty state.
- Right-align numeric columns; use tabular numerals.
- Keep column labels explicit and avoid truncating essential values.
- On narrow screens, use a deliberate responsive transformation or contained scroll.

### Badges and status
- Use neutral badges for categories and metadata.
- Use semantic success/warning/danger/info tokens only for actual statuses.
- Always include a readable status label, not only a colored dot.

### Charts
- Every chart needs a title, clear unit/axis labels, and a useful empty state.
- Keep chart typography, legend, tooltip, gridline, and spacing consistent.
- Use the same metric colors across routes.
- Do not use 3D charts, excessive animation, or decorative chart junk.
- Do not imply a time series if the backend only provides a snapshot.

### Pipeline visualization
- Represent only real pipeline stages, statuses, timestamps, and counts supported by backend/ETL records.
- If run history, task status, freshness, or quality metrics are not exposed, state that the information is unavailable rather than simulating a live monitor.
- A static architecture explanation is acceptable when clearly distinguished from runtime observability.

## 9. Interaction and motion

- Transitions: 150–200ms for hover/focus and small state changes.
- Use motion to clarify state, never as decoration.
- Respect `prefers-reduced-motion`.
- All interactive controls must have hover, focus-visible, disabled, and (where relevant) loading states.
- Provide clear feedback for filter application, pagination, refresh, and errors.
- Avoid auto-rotating carousels and distracting entrance animations.

## 10. Responsive behavior

| Breakpoint | Width | Expected behavior |
|---|---:|---|
| Mobile | < 640px | Single-column content, compact header/menu, stacked controls |
| Tablet | 640–1023px | 2-column cards where useful, collapsible filter rail |
| Desktop | 1024–1279px | Full navigation, adaptive 2–3 column layouts |
| Wide | ≥ 1280px | Max-width content, full data dashboard layout |

Test at 360px, 390px, 768px, 1024px, 1280px, and 1440px. Do not rely on hover for mobile interactions.

## 11. Accessibility and content

- Meet WCAG AA contrast for normal text and controls.
- Use semantic landmarks, labels, headings, table semantics, and button/link semantics.
- Keyboard users must be able to reach and operate every interactive element.
- Focus rings must be clearly visible and must not be removed without replacement.
- Provide meaningful alt text for informative images; decorative images use empty alt text.
- Display dates and salaries in consistent Vietnamese-friendly formats; retain original source values where normalization is uncertain.
- Distinguish unavailable, empty, zero, and loading values. They are not interchangeable.
- User-facing error messages should be concise Vietnamese and explain the next action where possible.

## 12. Engineering implementation rules

- CSS variables in the global theme are the canonical source for color and design tokens.
- Components must consume semantic tokens (for example `bg-background`, `text-foreground`, `border-border`, or approved CSS variable equivalents), not repeat raw hex values.
- Keep shared UI primitives in the existing component structure; inspect before creating duplicates.
- Avoid page-specific global CSS. Prefer component-level classes and shared primitives.
- Do not add a component library, icon pack, charting package, font, or paid service without checking compatibility and obtaining approval where cost is involved.
- Do not change API contracts, backend, ETL, schema, or data ingestion to make a UI state look better.
- Before changing Next.js code, read the relevant version-specific documentation under `frontend/node_modules/next/dist/docs/` as required by `AGENTS.md`. Do not assume older Next.js conventions.

## 13. Definition of done for every route

A route is not complete until:
- It uses the shared shell and tokens.
- Typography, spacing, card, control, and status styles match the other routes.
- Desktop and mobile layouts are checked.
- Loading, empty, error, and unavailable states are handled.
- All displayed metrics and statuses are traceable to real API data or explicitly labeled sample data.
- Keyboard focus and accessible labels are present.
- No new one-off color, font, radius, shadow, or spacing system has been introduced.
- The route passes the project lint/build checks when the local environment and required Next.js docs are available.
