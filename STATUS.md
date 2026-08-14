# portfolio-site — status (resume here)

> Snapshot for picking up across sessions. Update on **"wrap up"**. For *where code lives*, see `CLAUDE.md`.

**State:** v0.7.1 shipped and pushed to `main` (auto-deployed to Cloudflare Pages). Three pieces of previously-hidden work are now surfaced: the Slought Foundation client contract on the homepage grid, paid client work in the bio + all four meta descriptions, and the 2023 Fold internal chatbot in the bio.
**Next step:** Optional - em dash / voice sweep of three content bodies (see Notes). Nothing is blocking.
**Last touched (last commit):** 2026-08-13 — `568f744`

## Resume from
- Read `README.md` and `CLAUDE.md`
- `git log --oneline -3` — last two commits are the surfacing work

## Notes

### Shipped 2026-08-13 (v0.7.0 → v0.7.1)

- **Fairytale Project on the homepage.** Added `{ type: 'feature', slug: 'fairytale-project' }` to `SELECTED_WORK_ORDER` in `lib/markdown.ts` at **position 3**, directly after `marketlark`. Rationale: 3 of 12 clears the top third; positions 1-2 are the strongest lane openers and weren't worth displacing; sitting next to `marketlark` groups the two post-Fold entries so the recent-work block reads together. It is the only paid client work on the site and the only thing covering the gap between leaving Fold (Jul 2025) and now. Needed no content edit — its existing self-referencing `homepageTags` matches the convention `card-reissuance` already uses.
- **Bio covers client work.** `components/PortfolioClient.tsx` and all four descriptions in `app/layout.tsx` (metadata, openGraph, twitter, personSchema) now end `...spec to deployed - my own projects and paid client work.`
- **Bio dates the AI work to 2023.** New sentence in `PortfolioClient.tsx` only (deliberately *not* in the meta descriptions — they're near the length limit and the date wouldn't survive SERP truncation): "I've been building with AI since 2023, when I made an internal chatbot that let our team at Fold look up past decisions and the reasoning behind them." Sourced strictly from the single sentence in `content/letters/hume.md` — no invented stack, adoption numbers, or outcomes. Do not embellish this without a new source.
- **Typo fix.** `content/features/fairytale-project.md` frontmatter description had a stray "of" that rendered on the homepage.

### Constraints reaffirmed this session (treat as canonical)

- **Do not change existing metrics anywhere on this site.** The TaxBit numbers and the spin wheel numbers were confirmed canonical; other documents were corrected to match *this site*, not the reverse.
- **Do not change** "Senior PM" or "a startup I helped take public" in the bio or meta descriptions. Both approved.
- MarketLark may keep its name on this site.

### Open (optional, not blocking)

Em dash / voice sweep of three content **bodies** — `content/features/fairytale-project.md` (highest priority: now homepage-linked and em dash heavy), `content/case-studies/fiat-bitcoin-ecosystem.md`, `content/features/card-reissuance.md`. Earlier passes only touched frontmatter, so the bodies still carry em dashes and a few "X, not Y" negations. Apply the voice rules in `CLAUDE.md`: em/en dashes → " - ", rewrite negations as "rather than" / "instead of" / "beyond", break rule-of-three, keep bitcoin lowercase as the currency but leave proper product names capitalized. Worth batching all three into one pass.
