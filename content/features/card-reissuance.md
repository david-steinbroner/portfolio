---
title: "Card Reissuance"
company: "Fold"
date: "2024"
description: "Proactive card replacement system preventing mass expiration disruption"
status: "Shipped"
tags: ["Operations", "User Experience", "Fintech", "Communication"]
category: "feature"
---

**The Fold Card was our only physical product, and we'd never built a process for when cards expire.**

When we launched cards, expiration dates were years away. Easy enough for support to manually handle the occasional lost or stolen card. But Year 3 was approaching, and legacy user cards were about to start expiring—first a trickle, then thousands per month. Without a system, we'd have overwhelmed support, killed card volume (our interchange revenue), and looked unprofessional.

---

## What I Built

**Expiration identification system** - Worked with engineering to surface card expiration dates as actionable data. This let us segment users by when their card would expire and trigger the entire communication and reissuance flow.

**Multi-channel notification strategy** - Research showed many expiring cards had no recent activity. Users weren't opening the app, so in-app notifications alone wouldn't reach them. I built a layered approach: push notifications, emails, and in-app banners. Notifications started 60 days before expiration, with escalating urgency at 30 days and a final "Your card has expired" state. All notifications stopped once users took action.

**Deep linking for mobile-only app** - Every email needed dynamic links: if opened on mobile, it deep-linked directly to the reissuance flow in-app. If opened on desktop, it instructed users to open the app. This was critical since Fold is mobile-only.

**Reissuance flow UX** - Users confirmed their name and address. If unchanged, one tap to order. If they needed updates, the flow routed them to our existing PII change process (with third-party verification). The card page showed real-time status: Expiring → Ordered → Shipped (with ETA) → Activate.

**Card issuer coordination** - Worked with our external card issuing and banking partners to understand shipping timelines, build in buffer time, and update the physical mailer copy. The old mailers said "Welcome to Fold"—wrong message for returning users. I got the copy changed to "Here's your replacement card."

**Internal enablement** - Wrote support articles, linked them in outbound emails, created a one-pager for internal teams, and trained support on the new flow.

---

## Key Product Decision

Most card companies just ship you a new card automatically. We didn't.

The card was our only physical product and cost money to produce and ship. My research showed many expiring cards belonged to inactive users—people who might have moved, might not want the card anymore, might never use it. Shipping cards to all of them was wasteful.

So I required users to confirm they wanted a replacement. Unorthodox, but intentional: it saved money on cards that would never be used, updated addresses for users who had moved, and re-engaged dormant users who did want to continue.

---

## Impact

- **Zero disruption** at launch—the goal was for this to go unnoticed, and it did
- **~5 support tickets/month** related to reissuance (1-2% rate)
- Built to scale for all ~50,000 current cardholders and all future cardholders
- Foundation for upcoming credit card reissuance (same infrastructure, different product)
- Shipped with one junior designer, one backend engineer, one frontend engineer
- Protected interchange revenue by keeping cards active
- Prevented what would have been thousands of support tickets per month

---

## Skills

Cross-functional coordination, external partner management, communication strategy, operations thinking, UX design
