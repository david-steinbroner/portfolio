# Portfolio Site — Project Context

Personal portfolio at [davidsteinbroner.com](https://davidsteinbroner.com). Next.js 16 (App Router) static export, deployed to Cloudflare Pages.

## Content model

Two paired content types, both live as markdown under `content/`:

- **Case studies** (`content/case-studies/*.md`) — narrative, first-person stories about the work.
- **Features** (`content/features/*.md`) — shorter, tactical specs of what was built.

Case studies and features cross-reference each other via frontmatter:

```yaml
# In a case study
features:
  - name: "Spin Wheel"
    slug: "spin-wheel"

# In a feature
caseStudy:
  name: "The Most Public Feature at the Company"
  slug: "spin-wheel"
```

Slugs on the two sides of a pair don't have to match, but they should (e.g. `banking-approval-process` ↔ `banking-partner-approval` works but is confusing).

## Homepage order & tags

Two ordering arrays in `lib/markdown.ts`, with distinct jobs:

- **`SELECTED_WORK_ORDER`** is the single source of truth for the homepage "Selected Work" grid — a hand-curated, mixed list of case studies *and* features, top to bottom. To feature something, add `{ type, slug }` here. A content file can exist without appearing here (e.g. `fairytale-project` still builds at `/features/fairytale-project` but is intentionally not in the grid).
- **`FEATURE_ORDER`** only governs prev/next navigation on feature detail pages. It must list every slug under `content/features/` (the build warns on drift). It does **not** decide the homepage.

Homepage cards show colored tag chips, declared per entry via `homepageTags` frontmatter. Two shapes:

```yaml
# Feature-backed: pulls label/color from the referenced feature's `tag`
# frontmatter and links to that feature page.
homepageTags:
  - slug: spin-wheel

# Inline: defines the chip directly (for entries with no paired feature,
# like a standalone case study). Links to the entry's own page.
homepageTags:
  - label: "Referral & Activation"
    color: green
```

Colors are the seven named values in `lib/schema.ts` (`blue`, `orange`, `purple`, `pink`, `yellow`, `red`, `green`).

## Routing

- `/` — homepage (`app/page.tsx` → `components/PortfolioClient.tsx`)
- `/case-studies/[slug]` — case study detail (dynamic)
- `/features/[slug]` — feature detail (dynamic)
- `/letters/<name>` — individual cover letters (static folders under `app/letters/`)
- `/case-studies/bitcoin-flywheel` — redirect stub → `/case-studies/fiat-bitcoin-ecosystem` (kept for backwards compat)

## Deploy

Push to `main` → Cloudflare Pages builds and deploys in ~2–3 min. Build command: `npm run build`, output directory: `out`. No env vars needed.

## Copy & voice

For any homepage or case-study copy: direct, plain language, contractions. No em dashes anywhere — use " - " instead (numeric ranges too: `1-2%`, not `1–2%`). No rule-of-three parallelism, no marketing fluff, no "passion." Frame the work as a senior growth/product PM in regulated consumer fintech, not a scrappy builder. Match the tone of the existing case-study writing. Testimonials are verbatim quotes — don't edit their wording.

## Commit style

Short, imperative, describe the *why*. No ticket IDs, no AI-authorship trailers.

## Build & test

```bash
npm run dev     # local dev at localhost:3000
npm run build   # static export into ./out
npm run lint
```
