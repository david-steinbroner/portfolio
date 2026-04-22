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

## Homepage feature order

`FEATURE_ORDER` in `lib/markdown.ts` is the **single source of truth** for the order features appear on the homepage and in prev/next navigation on feature detail pages. When adding a feature, add its slug to that array.

## Routing

- `/` — homepage (`app/page.tsx` → `components/PortfolioClient.tsx`)
- `/case-studies/[slug]` — case study detail (dynamic)
- `/features/[slug]` — feature detail (dynamic)
- `/letters/<name>` — individual cover letters (static folders under `app/letters/`)
- `/case-studies/bitcoin-flywheel` — redirect stub → `/case-studies/fiat-bitcoin-ecosystem` (kept for backwards compat)

## Deploy

Push to `main` → Cloudflare Pages builds and deploys in ~2–3 min. Build command: `npm run build`, output directory: `out`. No env vars needed.

## Commit style

Short, imperative, describe the *why*. No ticket IDs, no AI-authorship trailers.

## Build & test

```bash
npm run dev     # local dev at localhost:3000
npm run build   # static export into ./out
npm run lint
```
