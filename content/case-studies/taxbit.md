---
title: "Shipping Tax Season at a Startup"
company: "Fold"
date: "January 2025"
description: "Integrating TaxBit to ship crypto tax compliance at Fold"
impact:
  - "Shipped in 10 weeks with a team of 2 engineers and 1 junior designer"
  - "Coordinated 8+ stakeholder groups: Legal, Compliance, Finance, Engineering, Support, Design, Marketing, and Growth internally; plus external counsel, banking partner, card issuing partner, two Bitcoin custodians, and TaxBit"
  - "Met mid-February compliance deadline with a month to spare; shipped mid-January so Fold launched alongside competitors, not behind them"
  - "50 support tickets across 5,000 eligible users (1% rate); only ~10 were actual issues, the rest were general questions"
  - "Delivered both 1099-Bs and Gain/Loss Summaries; served the full user spectrum, not just the majority"
tldr: "We needed to provide tax documents for users by early 2025, but we had no bandwidth to build it ourselves. I coordinated 8+ stakeholder groups, integrated TaxBit into the app, and shipped in 10 weeks."
status: "Shipped"
tags: ["Product Management", "Tax Compliance", "API Integration", "Fintech"]
category: "case-study"
features:
  - name: "Tax Documents"
    slug: "tax-documents"
---

**Fold is a fintech app that lets users earn and spend bitcoin.** I led the integration of TaxBit, a third-party tax document provider, to deliver IRS forms to users who sold bitcoin; a hard compliance requirement with a mid-February deadline.

No one at Fold had built crypto tax reporting before. I became the subject matter expert: evaluating vendors, learning IRS requirements, and translating regulatory complexity into requirements my team could execute against.

---

## The Gap

When Fold launched bitcoin selling, we created a tax obligation for our users. Anyone who sold bitcoin through Fold in 2024 would need documentation to report it on their taxes. The problem: we had no infrastructure for this, no internal expertise, and a hard mid-February compliance deadline.

Users expected communication about tax documents. By late December, they were already seeing emails from Coinbase, Robinhood, Cash App, and other crypto platforms explaining that tax forms were coming. Tax documents themselves can only be generated in January since they reflect the previous year's activity; but the communication starts in December. If users didn't hear from Fold, they'd assume we weren't on top of it. That's brand damage.

We had about 10 weeks, two engineers, one junior designer, and a product manager (me) who'd never built a tax feature.

---

## Understanding the Users

I talked to users and analyzed support data to understand what they actually needed. The picture was clear.

**Most users want "just tell me what to report."** They don't want to think about disposition methods or cost basis calculations. They want a PDF they can upload to TurboTax and forget about.

**A minority want the raw data.** They have accountants, they track their own taxes, or they want to cross-reference against their own records. These users need a CSV they can manipulate.

**Users get anxious in December.** When they see communication from Coinbase and other crypto platforms about upcoming tax documents but hear nothing from Fold, they assume something is wrong. They're already anxious about taxes.

This shaped our full-spectrum approach: ship a simple default (1099-B PDF with FIFO disposition), provide an escape hatch (Gain/Loss CSV for power users), and communicate early (December "coming soon" state to set expectations).

---

## The Communication Strategy

Before building anything, I shipped communication.

By mid-December, users were already getting tax emails from Coinbase, Robinhood, Cash App, and other crypto platforms. I stay close with Support, monitor our Discord, and watch Twitter; I could see users in the community wondering: "When am I getting my tax documents?" Users were getting anxious, and we hadn't shipped anything to address it yet.

I made a deliberate call: tackle what we could handle first. The feature would get built, but I could message about it immediately with zero engineering effort.

I shipped three things in mid-December:

**1. Email to impacted users.** Marketing copy explaining that tax documents were coming in early 2025, well ahead of the mid-February deadline. Only sent to users who had sold bitcoin in 2024. Broadcasting to everyone would cause panic from users who didn't need tax documents wondering where theirs were.

**2. Support article.** I wrote documentation explaining bitcoin tax reporting: what forms they'd receive, what they mean, and when to expect them. This became the canonical answer for any tax-related queries. I worked with TaxBit to ensure the language I used was consistent with theirs.

**3. In-app "coming soon" component.** I had previously built a reusable component for in-app messaging that didn't require engineering to update; I could push changes live myself. I leveraged it here to ship messaging to impacted users immediately. It said tax documents were coming and linked to the support article. I targeted users who had sold bitcoin in 2024; this wasn't homepage copy that everyone saw, it was a component only those users saw.

The link took users out of the app to the support article; not ideal UX, but it was a deliberate tradeoff. Building an in-app page would require front-end engineering time I didn't have. The tradeoff: get copy in users' eyes before they needed documents, and accept that the experience wasn't perfect.

**The impact was immediate.** Support let me know that tickets asking about tax documents dropped dramatically after we shipped the email and in-app component. What would've become ticket volume while the feature was still in dev got caught before it snowballed.

**The FAQ became a living document.** I gathered questions from Support as they came in and worked with TaxBit to refine the support documentation. By the time documents shipped, users had already been primed on the answers.

This was the first thing I completed; before any screens, before any API integration, before any backend work. High impact, low effort, immediate value.

---

## The Complexity

Every feature touched multiple stakeholders. I was the connective tissue.

**Internal stakeholders.** Legal needed to review every screen showing tax information. Compliance needed sign-off on the data flow. Finance needed to understand the cost implications. Engineering needed clear requirements. Support needed training and tooling. Design needed to iterate on the UI. Marketing needed to review user-facing copy. Growth needed visibility. The CEO had final say.

**External stakeholders.** This was normal for Fold. We had a banking partner and a card issuing platform partner. For anything touching Bitcoin, we had two custodians; that's four external sign-offs before we even got to TaxBit. Plus external counsel reviewed our tax language since we didn't have internal counsel at the time. TaxBit's team joined our weekly standups.

**Eight-plus stakeholder groups total.** I led weekly cross-company standups with my two engineers, our junior designer, and TaxBit's integration team. Set up the TaxBit dashboard. Trained support on the portal. Wrote all user-facing documentation.

**The Figma prototype saved time.** In the first few days after picking up this feature, I built a prototype in Figma using existing components. It wasn't waiting for design to build one for me; I just built it. Everyone understood it would be adjusted and tweaked by design, but at least we had something concrete to put in front of stakeholders. We could talk about it, react to it, iterate on it. This helped us move fast and got buy-in early.

**The learning: tell the product story differently to each audience.** You have to tell the same story in ways that make sense to each stakeholder group. Don't get into the weeds with the wrong people. The goal isn't just buy-in; it's making sure they understand what you're building and that you're checking all the boxes they bring to the table. In regulated industries, especially anything involving finance or sensitive data, stakeholders default to caution if they don't understand. That slows everything down. You need to explain and display things simply; which is why the Figma prototype was so valuable.

---

## The Tradeoff

TaxBit's W-9 SDK gave us two options: pre-fill the fields (making them non-editable) or leave them blank (making them editable). I chose pre-fill.

**Why pre-fill was the right UX choice.** The data should be correct; we already have it on file, verified through our onboarding process. If someone could sell Bitcoin on Fold, they already had a full debit card, which required their name, address, and SSN. Users just hit "Confirm and Sign" instead of typing out nine fields. Leaving fields blank increases user error risk; typos, wrong addresses, misremembered info. One button is better UX than nine form fields.

The trade-off: users who needed to make changes couldn't do it inline. But how many users would actually need that?

**I researched the actual expected impact.** I pulled historical support data: how many users update their name or address each year? The answer: about 0.2% annually. For ~5,000 eligible users, that meant about 5-10 people would hit this edge case.

**I designed a support-assisted workaround.** Added a banner on the W-9 that said if users need to update their information, reach out to support. Added a button that opened a pre-filled support ticket with "W-9 update" already selected as the reason; one less step for the user.

I created a dedicated Zendesk view for these tickets so support could monitor that bucket. Support agreed to treat them as high-priority during tax season. I also worked with engineering to set up a trigger: when Fold's backend updated a user's PII, it would auto-push to TaxBit. So if support made a change, the next time the user opened their W-9, it would show the corrected info.

**The architectural rationale.** Even if the fields could have been editable, Fold has its own PII verification processes. We use third-party ID verification. If someone randomly changes their address, it might get flagged for fraud. Compliance has processes for that. So PII changes needed to go through Fold's internal processes anyway; the support workaround wasn't just a timeline compromise, it was architecturally correct.

**Out of 50 total tickets, only ~10 were actual PII changes.** Exactly as predicted.

---

## Product Decisions

| Decision | Why |
|----------|-----|
| **FIFO disposition** | What most users will use. Also easiest to expand from if we add disposition selection later. |
| **PDF + CSV (not just one)** | Serve the 80% who want simple AND the 20% who want control. Classic "default + escape hatch" pattern. |
| **Educational framing** | Users shouldn't need to Google tax terminology. Explain what documents mean and when they're needed. |
| **Architected for future docs** | Built "Taxes & Documents" section, not "Tax Documents" screen. Future-proofed for statements and other financial documents. |
| **Targeted communication only** | Marketing copy only went to impacted users. Broadcasting to everyone would cause panic from users who didn't need documents. |
| **Pre-filled W-9** | Users already gave us their PII for debit card onboarding. Pre-fill the W-9 so they just hit "Confirm and Sign" instead of typing nine fields. Reduces user error and friction. |

---

## What We Built

**New "Taxes & Documents" section.** Architected this to house future documents; not just a one-off for tax docs. Reusable for statements, credit card docs, or anything else users need access to.

**Tax Documents screen with educational framing.** Explains what each document means and when you'd need it. Users shouldn't have to Google "what is a 1099-B."

**Two document options.** 1099-B (PDF) for the 80% who want simple. Gain/Loss Summary (CSV) for the 20% who want control.

**W-9 collection flow** integrated via TaxBit's SDK, with pre-filled user data from Fold accounts.

**Conditional entry points.** Users who hadn't submitted W-9s saw one flow; users who had saw another; users who weren't eligible saw nothing. Necessary for compliance; users needed "ample time" to access documents.

**Support tooling and training.** Quick link from internal tools to each user's TaxBit page. Trained CS team on TaxBit portal. Created Zendesk workflows including a dedicated view for W-9 update requests.

**Support FAQ article with proactive communication.** I wrote the tax documentation, shipped targeted emails to impacted users, and leveraged an in-app component I had built previously to set user expectations before launch. This reduced support tickets dramatically while we built the actual implementation.

---

## What I Learned

**Research your edge cases before you design around them.** The W-9 edit restriction could have derailed the timeline. But when the data showed we'd see maybe 10 users needing updates, I knew we could handle it with Support and move on. What felt like a limitation became a non-issue.

**"Buying time" is a strategy.** A "coming soon" state is friction, right? But I was able to proactively set expectations before users started wondering where their documents were. It prevented support tickets and preserved trust. When you know users track their experience across platforms, sometimes acknowledging "we're on it" is the product.

**Build for extensibility when you can.** The "Taxes & Documents" section I designed is reusable. I built it that way on purpose. Fold now has an empty slot in the menu for statements, credit card docs, or any document we need to surface later. The marginal cost of building for extensibility was low.

**Tell the product story differently to each audience.** In regulated industries, your compliance partners are stakeholders. I spent as much time selling the product story internally as I did to users. But I told it differently to Legal than I did to Engineering than I did to Support. They each needed to understand the "why" in their own terms so they could move quickly.

**Sequence by impact, not by dependency.** The communication work could ship immediately; high impact, zero engineering cost. I shipped that while the feature was still being built. By the time documents were ready, users had already been primed.

**Know your product so you can build lean.** You always have an idea of the ideal product with infinite time and resources. My experience at Fold was building what you can with what you have. If you know your product inside and out, you know what things take, what's feasible, what to ask for. What you conceptualize is already lean because you already know the constraints. You whittle down to core value; what you ask for isn't bloated. This increases trust. People see you build exactly what's needed. And here's the trick: users don't even know you made tradeoffs. They just think this is the feature and it works.

**Document your tradeoffs for future iteration.** You don't just make tradeoffs; you document them. Capture them in your PRD, design file, internal documentation, and tickets. For example: we chose FIFO because it was easiest, but TaxBit can generate multiple disposition methods. I documented how that might look and captured it in a ticket. If and when there's allocation to iterate, we're ready. It's not just about building lean; it's about documenting everything for who comes next.
