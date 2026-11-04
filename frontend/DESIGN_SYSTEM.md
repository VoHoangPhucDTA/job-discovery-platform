# Job Discovery Platform — Frontend Design System

> **Status:** v1.5 · **Scope:** all frontend routes and shared components  
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
- Copy: Vietnamese for user-facing interface, including navigation labels, section eyebrows, badges, and helper text. Keep established technical terms and product names where clearer (ETL, API, Data Pipeline, Data Warehouse, SQL, TopCV, VietnamWorks). Avoid mixing English decorative labels into otherwise Vietnamese sections.

## 3. Color tokens

Use semantic CSS variables, not raw colors inside page components. The canonical variables are implemented in app/globals.css and exposed to Tailwind through @theme inline.

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
| `--danger-hover` | `#991B1B` | Destructive action hover state |
| `--danger-soft` | `#FEF2F2` | Error background |
| `--info` | `#0369A1` | Informational states |
| `--info-soft` | `#F0F9FF` | Informational background |
| `--chart-1` | `#2563EB` | Primary chart series |
| `--chart-2` | `#0F766E` | Secondary chart series |
| `--chart-3` | `#7C3AED` | Tertiary chart series |
| `--chart-4` | `#D97706` | Quaternary chart series |
| `--chart-5` | `#64748B` | Neutral chart series |

### Color usage constraints

- Primary blue is the only dominant brand/action color. Teal is a supporting data accent, not a second primary.
- Green, amber, and red communicate meaning only; do not use them as decoration. Destructive action hover states use `--danger-hover` rather than one-off red utility colors.
- Do not encode status using color alone. Pair with text and/or an icon.
- Charts use the fixed `--chart-1` through `--chart-5` palette (blue, teal, violet, amber, slate). Keep the same series-to-color mapping across pages. Avoid rainbow charts.
- Use muted text for metadata, not for essential labels or important data.
- Do not add gradients to buttons, cards, or the app background.

## 4. Typography

**Font family**
- UI and headings: Geist Sans via the existing Next font setup, loading both `latin` and `vietnamese` subsets.
- Technical/tabular values: Geist Mono via the existing Next font setup, loading both `latin` and `vietnamese` subsets.
- Do not use Arial, system font stacks, or a new Google font as a page-level override.

**Type scale**

The following semantic Tailwind utilities are defined in app/globals.css: text-display, text-page-title, text-section-title, text-card-title, text-body, text-body-emphasis, text-small, text-kpi, and text-technical. Prefer these utilities over ad-hoc font sizes for recurring roles. The global body default is 14px / 22px.

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
- Desktop content max width: 1200px via the shared `max-w-content` utility; center it with 24px minimum horizontal gutters.
- Tablet gutters: 20px. Mobile gutters: 16px.
- Standard page section gap: 24–32px. Related controls: 8–16px.
- Use a 12-column grid at wide desktop when useful; collapse progressively instead of squeezing.
- Jobs uses a full-width search field followed by a horizontal filter row and a full-width results list. Never add a persistent filter rail to Jobs. At wide desktop, show six filters in one row; at laptop/tablet, wrap into two or three columns; on mobile, use two columns or stack when labels need more room.
- Dashboard KPI cards: 4 columns on wide desktop, 2 on tablet, 1–2 on mobile depending on label length.
- Avoid horizontal scrolling for the whole page. Only data tables may use a contained horizontal scroll when absolutely necessary.

## 6. Surfaces, borders, radius, and elevation

| Token | Value | Use |
|---|---:|---|
| `--radius-sm` | 6px | Compact controls, badges |
| `--radius-md` | 10px | Inputs, buttons, cards |
| `--radius-lg` | 14px | Large panels, dialogs |
| `--radius-xl` | 18px | Hero/featured surface only |

These radius values are exposed as Tailwind utilities through the global theme: `rounded-sm`, `rounded-md`, `rounded-lg`, and `rounded-xl`.

- Default card: white surface, 1px border, 10–14px radius, no heavy shadow.
- Default input/button height: 40px; compact control: 32px; prominent action: 44px.
- Use subtle elevation only for popovers, menus, and dialogs. Cards should rely on border and spacing.
- Standard content cards use 20–24px desktop and 16px mobile padding. Compact job-list cards use 16px on desktop and mobile to keep more results visible without making each row feel dense.
- Avoid nested cards unless there is a clear information hierarchy.

## 7. Shared application shell

All routes must reuse the same:
- A single horizontal top header containing the brand and primary navigation.
- No persistent left sidebar in the v1 product shell.
- A responsive navigation menu that collapses below the desktop breakpoint.
- Main content max width and responsive gutters.
- Active navigation treatment and consistent header height.
- Footer or bottom spacing behavior.
- Loading, empty, error, and unavailable states.

The desktop header places the brand on the left and the four primary navigation links on the right. On mobile, keep the brand and a menu toggle in the header; reveal the same navigation links in a compact panel below it. The active route must use the same visual state on desktop and mobile.

Navigation labels are fixed for v1:
- Tổng quan
- Việc làm
- Phân tích thị trường
- Data Pipeline

Use the same active state, icon size, spacing, and hover/focus treatment on every route. Do not create a different header for analytics or pipeline pages.

## 7.1 Shared component implementation

The first shared UI foundation lives in these locations:

| Component | Canonical file | Responsibility |
|---|---|---|
| Application shell | `app/components/shell/app-shell.tsx` | Shared top header navigation, responsive mobile menu, content area, and footer |
| Button / ButtonLink | `app/components/ui/button.tsx` | Consistent action and link treatments |
| Card | `app/components/ui/card.tsx` | Shared bordered surface and padding primitives |
| Badge | `app/components/ui/badge.tsx` | Neutral and semantic status/category labels |
| PageHeader | `app/components/ui/page-header.tsx` | Consistent page title, description, eyebrow, and actions |
| SectionPlaceholder | `app/components/ui/section-placeholder.tsx` | Explicit unavailable / in-progress page state |

The root layout mounts the App Shell. The shell is a Client Component only because it uses `usePathname` for active navigation and local state for the mobile menu. Keep page content and static primitives server-rendered where possible. The four v1 routes are static route segments; revisit the documented `Suspense` requirement if a future dynamic route with unknown params is added while Cache Components are enabled.

### Shared form controls and Jobs experience

| Component | Canonical file | Responsibility |
|---|---|---|
| Input | `app/components/ui/input.tsx` | Consistent text and search input |
| Select | `app/components/ui/select.tsx` | Consistent native select control |

The Jobs route uses a client-side interaction layer in `app/jobs/jobs-browser.tsx` and typed sample fixtures in `app/jobs/demo-jobs.ts`. Its information order is fixed: keyword search first, a compact horizontal row of dropdown filters second, then the result count, sample-data note, sorting control, and full-width job list. The filter row wraps into two columns on narrow screens and must not become a fixed left rail. The page must retain a small but visible label that results are illustrative sample data until a real jobs API contract exists. Sample fixtures must never be described as live recruitment listings or be included in production API metrics.

The v1 filter set includes career level, salary range, location, employment type, job category, and posting date. All filters must be usable together, reset together, and be applied consistently to keyword search and sorting. The Jobs search input and primary button use the shared 40px control height; keep the search card compact with 12px padding. Filter selects also use 40px height. Job-card metadata should be text-first and avoid decorative icons that do not improve recognition.

## 7.2 Home page content rules

The Home route is a job-discovery entry point for people who want to search IT vacancies aggregated from multiple recruitment platforms. The user benefit—not the ETL implementation—is the primary story.

Keep this single-column, vertically stacked content order:

1. A single-level, large H1 hero with no eyebrow label or secondary description. Rotate these three Vietnamese messages in sequence: “Loay hoay tìm kiếm các công việc từ nhiều nền tảng”, “Không biết nên ứng tuyển công việc ở đâu”, and “Ở đây tập hợp các công việc từ nhiều nền tảng giúp bạn nhanh chóng tìm được công việc thích hợp.” Use a typewriter sequence (type the full message, pause, delete it, then move to the next message and loop). Reserve enough heading height for the longest message so the search section does not jump while the text changes. Respect `prefers-reduced-motion` by showing a complete static message instead of animating.
2. One full-width keyword search for role, skill, or company.
3. A compact, responsive horizontal filter row: career level, salary, location, employment type, category, and posting date. The default visible labels are “Cấp bậc”, “Mức lương”, “Địa điểm”, “Hình thức”, “Lĩnh vực”, and “Thời gian đăng” (do not prefix them with “Tất cả”); the underlying unfiltered value remains unchanged. Submit the selected criteria to the Jobs route.
4. Clickable, text-only category shortcuts (Data, Backend, Frontend, DevOps, QA) that open Jobs with the matching category preselected. Do not add explanatory copy beneath the section title or trailing arrow glyphs to the shortcuts.
5. A restrained source strip that names only the currently supported sources: TopCV and VietnamWorks.

On Home, keep the gap between the search/filter card and the category section at 36px on mobile and 40px from the desktop breakpoint upward. Keep the other section gaps visually consistent with the existing page rhythm.

Do not split the Home hero into columns. Do not show a left sidebar, architecture diagram, ETL explanation, pipeline status, data-engineering journey cards, market KPIs, fabricated job counts, salary averages, match percentages, testimonials, or unsupported AI features on Home. Data Pipeline remains a separate navigation route for technical reviewers. Do not add a latest-jobs section until a real jobs API is available; never populate it with demo fixtures without an explicit sample-data label.

## 8. Component rules

### Buttons
- Variants: primary, secondary/outline, ghost, destructive.
- Primary is reserved for the main action in a region.
- Avoid multiple visually dominant primary buttons next to one another.
- Include hover, focus-visible, disabled, and loading states.
- Icons do not replace accessible text for important actions.

### Inputs and filters
- Search appears before filters and spans the available content width.
- Present related filters as a compact horizontal row of native dropdowns; wrap responsively rather than creating a permanent sidebar.
- Dropdowns must have accessible names through visible labels or aria-labels, and their selected values must describe the filter clearly.
- Search input, select, date filter, and clear/reset action share heights and radii.
- Show a clear-all affordance when filters are applied.
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
- Avoid auto-rotating carousels and distracting entrance animations. The Home hero's approved three-message typewriter cycle is a purposeful copy treatment, not a carousel; it must reserve its layout height and respect `prefers-reduced-motion`.

## 10. Responsive behavior

| Breakpoint | Width | Expected behavior |
|---|---:|---|
| Mobile | < 640px | Single-column content, compact header/menu, stacked controls |
| Tablet | 640–1023px | Header navigation where it fits; filter dropdowns wrap to 2–3 columns |
| Desktop | 1024–1279px | Horizontal top navigation, adaptive 2–3 column layouts |
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

- CSS variables in the global theme are the canonical source for colors, typography utilities, and shared design tokens.
- Tailwind CSS 4 is used through the existing @import tailwindcss and @theme inline setup; do not add Tailwind v3 configuration or syntax.
- Import global CSS once from the root layout. Use utilities for normal styling and CSS Modules only for isolated component styles where they are clearer.
- Put global element resets (for example, anchor defaults) inside Tailwind's `@layer base`. Do not leave unlayered tag selectors that can override utility classes such as text color on links.
- Keep the root document language as vi; define application metadata only in Server Component layouts/pages.
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


## 10. Brand and icon restraint

- The header brand is a simple **Job Discovery** wordmark. Do not add a large JD monogram, boxed initials, or a decorative brand icon.
- Filter dropdowns and category chips use text labels only; do not add leading icons.
- The recruitment-source strip is text-first and names TopCV and VietnamWorks without a database icon or decorative data symbol.
