# David Steinbroner — Portfolio

Personal portfolio site for a senior product manager. Case studies, feature write-ups, and a handful of cover letters, all driven by markdown. Live at [davidsteinbroner.com](https://davidsteinbroner.com).

## Tech stack

- **Framework**: Next.js 16 (App Router), static export
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Typography**: Geist Sans + Geist Mono
- **Content**: Markdown via `remark` / `rehype`, frontmatter via `gray-matter`
- **Validation**: `zod` schemas for every piece of content
- **Deployment**: Cloudflare Pages

## Architecture notes

- **Markdown-driven content with zod validation.** Every case study, feature, and letter has its frontmatter parsed and validated against a zod schema in `lib/schema.ts`. Invalid frontmatter fails the build with a line-by-line diff of what's wrong, so bad content can't ship.
- **Two ordering arrays, distinct jobs.** `SELECTED_WORK_ORDER` in `lib/markdown.ts` is the single source of truth for the homepage "Selected Work" grid - a hand-curated mix of case studies and features. `FEATURE_ORDER` (same file) governs only the prev/next navigation on feature detail pages and must list every slug under `content/features/`; drift between it and the filesystem logs a warning at build time. Only `SELECTED_WORK_ORDER` decides what renders on `/`.
- **Stable heading anchors out of the box.** The markdown pipeline chains `rehype-slug` and `rehype-autolink-headings` so every `##` gets a predictable, linkable ID without any per-file boilerplate.
- **Lazy-loaded images baked into the pipeline.** A small custom rehype plugin walks the HAST tree and adds `loading="lazy"` + `decoding="async"` to every `<img>` before render. No per-post manual tagging.
- **Paired content types.** Case studies (narrative) and features (tactical specs) cross-reference each other via frontmatter. A feature page can link back to its parent case study, and vice versa, from data alone.
- **Letters are markdown too.** Cover letters used to live as hand-rolled TSX files per letter. They were migrated to markdown under `content/letters/` with a shared dynamic route at `/letters/[slug]`, collapsing ~6 duplicated layouts into one.
- **URL preservation via Cloudflare `_redirects`.** When a case study gets renamed, the old slug stays live as a 301 to the new one. `public/_redirects` is the canonical list.

## Content model

All content is markdown under `content/`:

```
content/
  case-studies/   narrative, first-person write-ups
  features/       tactical specs of what was built
  letters/        cover letters for specific roles
```

Case studies and features are paired. They cross-reference each other via frontmatter:

```yaml
# content/case-studies/spin-wheel.md
features:
  - name: "Spin Wheel"
    slug: "spin-wheel"

# content/features/spin-wheel.md
caseStudy:
  name: "The Most Public Feature at the Company..."
  slug: "spin-wheel"
```

Slugs on the two sides of a pair don't have to match, but they should. A feature's detail page pulls its parent case study by slug and renders a link back.

The homepage "Selected Work" grid is controlled by `SELECTED_WORK_ORDER` in `lib/markdown.ts` - a hand-curated, ordered mix of case studies and features. `FEATURE_ORDER` (same file) controls only the prev/next links on feature detail pages and must list every feature slug; the build warns on drift. Adding a content file doesn't put it on the homepage - add a `{ type, slug }` entry to `SELECTED_WORK_ORDER` for that.

## Local development

```bash
npm install
npm run dev         # http://localhost:3000
npm run build       # static export into ./out
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
```

Node version is pinned in `.node-version` (Node 20 LTS). If you use `nvm` or `fnm`, they'll pick it up automatically.

## Deploy

Push to `main`. Cloudflare Pages picks up the change, runs `npm run build`, and deploys the contents of `./out`. Typical turnaround is 2–3 minutes. There are no environment variables and no build-time secrets.

## Adding content

### A new case study

1. Create `content/case-studies/<slug>.md` with this frontmatter:

   ```yaml
   ---
   title: "Case Study Title"
   company: "Company"
   date: "2025"
   description: "One-line summary for cards and meta tags."
   impact:
     - "Bullet 1"
     - "Bullet 2"
   tldr: "Optional one-paragraph summary."
   status: "Shipped"
   tags: ["Product Strategy", "GTM"]
   category: "case-study"
   features:
     - name: "Feature Name"
       slug: "feature-slug"
   ---
   ```

2. Write the body in markdown. `##` headings auto-get anchor IDs. Don't repeat the title as a heading - `title` already renders as the `<h1>`.
3. If this case study has a paired feature, make sure the feature's frontmatter points back via `caseStudy.slug`.
4. To feature it on the homepage, add `{ type: 'case-study', slug: '<slug>' }` to `SELECTED_WORK_ORDER` in `lib/markdown.ts` at the desired position, and give the frontmatter a `homepageTags` chip (inline `label` + `color`, or the `slug` of a paired feature).

### A new feature

1. Create `content/features/<slug>.md` with feature frontmatter (mirror of a case study, minus `features`, plus `caseStudy`).
2. Add the slug to `FEATURE_ORDER` in `lib/markdown.ts` (required - it governs feature prev/next nav, and the build warns if a feature is missing). To also show the feature on the homepage, add a `{ type: 'feature', slug }` entry to `SELECTED_WORK_ORDER`.

### A new letter

Create `content/letters/<slug>.md`. It'll be live at `/letters/<slug>` on the next build — no route wiring needed.

## Structure

```
portfolio-site/
├── .github/workflows/ci.yml        # Lint, typecheck, build on every PR and branch push
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout, fonts, theme provider
│   ├── case-studies/[slug]/        # Case study detail (dynamic)
│   ├── features/[slug]/            # Feature detail (dynamic)
│   ├── letters/[slug]/             # Cover letter detail (dynamic)
│   ├── sitemap.ts                  # Generated sitemap.xml
│   └── robots.ts                   # Generated robots.txt
├── components/
│   ├── PortfolioClient.tsx         # Homepage client component
│   ├── CaseStudyCard.tsx           # Reusable card for case study lists
│   ├── FeatureNavigation.tsx       # Prev/next nav on feature detail pages
│   ├── TableOfContents.tsx         # Sticky TOC generated from headings
│   ├── CollapsibleImpact.tsx       # Expandable impact list
│   └── ThemeToggle.tsx             # Light/dark/system toggle
├── content/
│   ├── case-studies/*.md
│   ├── features/*.md
│   └── letters/*.md
├── lib/
│   ├── markdown.ts                 # Content loaders, FEATURE_ORDER, markdown pipeline
│   └── schema.ts                   # zod schemas for all frontmatter shapes
└── public/
    ├── _redirects                  # Cloudflare Pages redirects (old slugs → new)
    ├── images/                     # Static assets
    └── case-studies/               # Per-case-study image folders
```

## License

All rights reserved © 2026 David Steinbroner
