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

A case study's frontmatter `title` is the single source for the homepage card, the page `<h1>`, and the SEO/`<title>` - edit it there and nowhere else. Bodies don't repeat the title as a heading.

## Homepage order & tags

Two ordering arrays in `lib/markdown.ts`, with distinct jobs:

- **`SELECTED_WORK_ORDER`** is the single source of truth for the homepage "Selected Work" grid — a hand-curated, mixed list of case studies *and* features, top to bottom. To feature something, add `{ type, slug }` here. A content file can exist without appearing here (e.g. `fairytale-project`, and the `story-mode` / `poke-pal` case studies, still build at their routes but are intentionally off the grid).
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

For any homepage or case-study copy: direct, plain language, contractions. Use " - " for dashes, never an em dash; numeric ranges use a hyphen too (`1-2%`), never an en dash. No rule-of-three parallelism. No "X, not Y" negation mechanic - rewrite as "rather than" / "instead of" / "beyond." Plain verbs, no marketing fluff, no "passion."

Keep "bitcoin" lowercase when it's the currency (bitcoin price, bitcoin custodians). Leave proper product/feature names (Buy Bitcoin, Sell Bitcoin, Direct to Bitcoin) and sentence-starts capitalized.

Positioning: frame the work as a general senior full-stack PM with range across lanes - community, growth, regulated compliance, a fully integrated bitcoin-and-fiat platform, and AI-assisted building - so a connector sees David fits several kinds of PM roles. The homepage grid leads with a different lane in each of the top entries. Match the tone of the existing case-study writing. Testimonials are verbatim quotes - don't edit their wording.

## Versioning

Bump `version` in `package.json` and the visible footer tag in `components/PortfolioClient.tsx` (`v0.x.y`) together on every meaningful site change - the tag is how David confirms the deployed version matches what we shipped. Doc-only changes don't need a bump (the tag tracks the rendered site).

## Commit style

Short, imperative, describe the *why*. No ticket IDs, no AI-authorship trailers.

## Build & test

```bash
npm run dev     # local dev at localhost:3000
npm run build   # static export into ./out
npm run lint
```
