<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Job Discovery Platform — Frontend Development Rules

These rules apply to every UI change in this frontend. They complement (and do not replace) `DESIGN_SYSTEM.md` and `DESIGN_REVIEW_CHECKLIST.md`.

## 1. Read the local Next.js documentation first

- The installed version is Next.js 16.4.3. Do not rely on remembered APIs or examples from older releases.
- Before changing framework code, read the relevant local guide under `node_modules/next/dist/docs/01-app/`.
- For the current shared UI foundation, the reviewed references are:
  - `01-getting-started/03-layouts-and-pages.md`
  - `01-getting-started/04-linking-and-navigating.md`
  - `01-getting-started/05-server-and-client-components.md`
  - `01-getting-started/11-css.md`
  - `01-getting-started/13-fonts.md`
  - `01-getting-started/14-metadata-and-og-images.md`
- Read additional references when a change touches another Next.js feature, such as route handlers, caching, image handling, or configuration.

## 2. Design authority

- `DESIGN_SYSTEM.md` is the canonical visual specification.
- `app/globals.css` is the canonical implementation of semantic color, font, and global style tokens.
- `DESIGN_REVIEW_CHECKLIST.md` is mandatory before considering a page or shared component complete.
- Do not add page-local brand colors, fonts, radii, shadows, or arbitrary spacing values.
- UI copy must be Vietnamese-first. Use established technical terms such as ETL, Data Warehouse, API, SQL, and Data Pipeline when they are clearer.

## 3. Next.js App Router architecture

- Use the App Router and file-system route conventions under `app/`.
- Keep the root layout responsible for `html`, `body`, global CSS, global fonts, and application-wide metadata.
- Use nested layouts for UI shared by a route segment; shared layouts should remain stable during navigation.
- Use `next/link` for internal navigation. Use ordinary anchors for external destinations.
- Prefer Server Components. Pages and layouts remain Server Components unless they need state, event handlers, lifecycle hooks, browser APIs, or client-only custom hooks.
- Put `"use client"` on the smallest interactive component boundary. Do not mark an entire page or application shell as client-only merely to support one interactive control.
- Pass serializable data from Server Components to Client Components. Keep secrets and server-only modules out of client imports.
- Use the documented Next.js route props and async `params`/`searchParams` conventions for the installed version.

## 4. CSS and styling

- Keep the Tailwind CSS import and global design tokens in `app/globals.css`, imported once from the root layout.
- Use the installed Tailwind CSS 4 conventions. Do not add Tailwind v3 configuration or syntax unless a migration is explicitly approved.
- Use Tailwind utilities for normal layout and component styling. Use CSS Modules only when component-specific styling is materially clearer than utilities.
- Do not import global stylesheets from individual pages or scattered components.
- Prefer semantic classes/tokens such as `bg-background`, `text-foreground`, `border-border`, and approved CSS variable equivalents.
- Avoid raw hex colors in component markup. Add a token to the design system first when a genuinely new semantic color is required.
- Respect the documented 4px spacing scale and radius scale.
- Check production CSS behavior with `npm run build`, because CSS chunking/order may differ from development.

## 5. Fonts and metadata

- Keep Geist Sans for interface text and Geist Mono for technical or tabular values, using the existing `next/font` setup.
- Do not add remote runtime font requests or another font family without approval and a design-system update.
- Keep application language set to Vietnamese (`lang="vi"`).
- Define static metadata in Server Component layouts/pages with the Next.js `Metadata` type. Do not export metadata from a Client Component.
- Do not invent a canonical production URL or Open Graph image before one exists.

## 6. Product and data boundaries

- The approved v1 routes are Tổng quan, Việc làm, Phân tích thị trường, and Data Pipeline.
- Do not add authentication, CV matching, saved jobs, direct applications, AI chat, notifications, or admin features without explicit approval.
- Current job data sources are TopCV and VietnamWorks. Do not add another source without approval.
- Never fabricate job counts, salaries, market metrics, ETL runs, freshness, quality scores, timestamps, or source health.
- Clearly label sample/demo content. Distinguish zero, empty, loading, error, and unavailable states.
- Preserve the existing backend proxy at `app/api/backend/[...path]/route.ts` and its `API_BASE_URL` server environment variable.
- Do not modify backend code, ETL, ingestion, database schemas, API contracts, or deployment configuration as part of UI work.

## 7. Dependencies and assets

- Reuse installed dependencies before considering new packages.
- Do not add a paid service, paid API, component library, icon package, chart library, animation library, or font without first checking compatibility and obtaining approval.
- Prefer small reusable components and accessible inline SVG icons when no suitable icon package is already installed.
- Use local/static assets where practical. Provide meaningful alternative text for informative images.

## 8. Required validation

Before a page or shared UI component is complete:

1. Run `npm run lint`.
2. Run `npm run build` when the environment permits.
3. Check at 360px, 390px, 768px, 1024px, 1280px, and 1440px widths.
4. Check keyboard navigation, visible focus, loading, empty, error, and unavailable states.
5. Confirm every displayed factual value comes from a real source or is explicitly labeled as sample data.
6. Complete `DESIGN_REVIEW_CHECKLIST.md`.

Do not claim a build, test, or deployment passed unless it was actually run and its result was observed.
