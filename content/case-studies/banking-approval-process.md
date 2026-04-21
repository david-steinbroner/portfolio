---
title: "The Most Effective Product Team Is the Conduit"
company: "Fold"
date: "2024"
description: "Rebuilding a 4-week banking partner approval process by recognizing what nobody had named: product was the only function with line of sight to every team and every partner."
impact:
  - "Reduced approval timeline by 75% (4+ weeks to days)"
  - "Eliminated surprise scrambles from partners discovering unapproved changes in the live app"
  - "Built a living Figma app map that became a critical asset across product, design, support, compliance, and finance"
  - "Every partner relationship benefited: banking, card processing, network, custodians, and the vendor stack all moved faster"
  - "Reframed compliance from a bottleneck into a checkpoint built into design"
tldr: "The fastest fix for a regulated company isn't faster approvals. It's making product the translation layer between everyone who can say no."
status: "Shipped"
tags: ["Product Strategy", "Process Design", "Cross-Functional Coordination", "Compliance", "Partner Management", "Fintech"]
category: "case-study"
features:
  - name: "Banking Partner Approval Process"
    slug: "banking-partner-approval"
---

## The Gap

Every payment-related feature at Fold passed through a wall of partners with veto power. The wall was tall, the wall was slow, and I was supposed to ship through it weekly.

The wall was: our sponsor bank (Sutton), card issuer processor (Marqeta), card network (Visa), two Bitcoin custodians, and a stack of vendors spanning fraud, KYC, payments, and tax compliance (Persona, Unit21, Sardine, TaxBit, and others). The approval cycle took 4+ weeks per pass: submit materials, wait, get questions, answer them, wait again. The roadmap stalled.

But the slow cycle wasn't even the worst part.

The worst part was the surprise scrambles. Partners would *discover* unapproved changes already live in the app and demand same-day fixes. Those asks landed on a compliance function that had no protocol or translation layer to product. The pattern looked like: "Sutton does not approve, change this today." Engineering would drop everything to ship a copy fix, or worse, an emergency design or UX change with hours of notice. We were operating reactively in a context that punished reactive operation.

I joined Fold as employee ~11. I wasn't formally a product person at the time. But I was the closest thing to a translator the company had: between users and product, between marketing and engineering, between design and reality. So when this became my problem, I figured it out as I went.

## What I Inherited

Three structural gaps:

1. **No single source of truth for what the app actually did.** Compliance reviewed materials they couldn't fully contextualize. Banking partners asked questions about flows nobody had documented end to end. New hires onboarded into a product nobody could draw a map of.

2. **No translation layer between product and partners.** Compliance owned the relationship, but compliance didn't speak product. Product spoke product, but product didn't have direct lines to the partners. Everything flowed through a layer that couldn't translate in either direction.

3. **No forward-looking process.** Partners only ever saw things after they shipped, which meant every "discovery" felt like a gotcha. They reacted defensively. We reacted scrambling. Neither side trusted the other to give them runway.

The cumulative effect was a stalled roadmap, exhausted engineers, and a partner-relationship debt that compounded with every release.

## The Reframe

The instinct in regulated environments is to fix the approval cycle: faster reviews, better SLAs, more responsive contacts. That's the obvious move. It's also incomplete.

The deeper move is to recognize that product is the only function with line of sight to every team and every partner. Engineering knows what's being built. Design knows what it looks like. Compliance knows what regulators care about. Banking partners know what their auditors care about. Support knows what users hit. Finance knows what it costs.

Product sits in the middle of all of them. That's the job.

The fastest way to ship in a regulated environment is to make product the conduit between everyone who has veto power. That's not a process change. It's a structural change.

So that's what I did.

## The App Map

The first thing I built was a Figma file that mapped the entire app: every screen, every flow, every compliance-relevant touchpoint. It was the first time anyone at Fold had documented the full app surface end to end.

I maintained it. Every time we shipped something, the map updated. Every time we proposed something, the map showed where it would slot in.

This was supposed to be a tool for one job: giving banking partners a level-set artifact so they could see what we were doing without me re-explaining the product every conversation.

It became something much bigger.

Compliance started using it to onboard outside counsel. Design referenced it to see how new flows would fit into existing patterns. Support used it as a training reference for new agents. Finance used it to understand which features touched which cost centers. Engineering used it to scope work without having to dig through old PRDs.

The map turned into the first living document the whole company shared. The original purpose (banking partner level-setting) was almost an afterthought once the map existed.

This is the thing I tell other PMs when they're operating in a context with too many stakeholders: build the artifact that compounds. The thing nobody asked for that everyone ends up using.

## Rebuilding the Relationships

The relational rebuild took longer than the artifact, and it mattered more.

I established direct compliance contacts at each banking partner, bypassing the slow account-management layers that previously sat between us and the people actually making approval calls. This sounds simple. It was politically delicate. Account management exists for a reason: they protect partner time. But they also slow conversations that need to happen quickly. The compromise was that account management stayed in the loop, but the substantive conversation happened directly between product and the partner's compliance team.

I documented approval requirements explicitly: annotated wireframes, user flows, compliance justifications, copy variants. Partners stopped having to ask for context because we provided it from the start. The first few cycles were slower because I was over-documenting. By the fourth cycle, the documentation was the standard, and partners reviewed faster than they ever had.

I built anticipatory templates from the patterns of past reviews. The fifth time a partner asked the same question about the same kind of feature, the answer became a template line in the next submission.

I replaced async back-and-forth with scheduled touchpoints. A 15-minute weekly call with each partner caught more friction than 20 emails ever did. People flag uncertainty in conversation that they would never put in writing.

And I built a forward-looking pipeline: a shared view of what was coming, what was in design, what was in build, what was approved, what was shipped. Partners always knew what was on the horizon. The "discovery" pattern ended.

## The Internal Compliance Guide

The other half of the rebuild was internal.

I wrote a guide that documented the patterns partners cared about, in language designers and engineers could actually use. Examples of copy that had been flagged before. Examples of flows that had been approved. Specific phrases that were off-limits. Specific UI patterns that triggered scrutiny.

The goal was to make compliance a design input, not an approval gate. Designers could reference the guide when creating new flows. Engineers could reference it when implementing copy. PMs could reference it when writing specs. Compliance stopped being something that happened to features after they were built. It became something the team built into features from the start.

This was the structural change that made the relationship rebuild sustainable. Without it, I would have spent forever sitting in the translation layer myself. With it, the company learned to translate without me.

## What Changed for Everyone

- **75% reduction** in approval timeline (4+ weeks to days)
- **Zero surprise scrambles** from partners discovering unapproved changes in the wild
- The Figma app map became a critical internal asset across product, design, support, compliance, and finance
- Every partner relationship benefited: banking, card processing, network, custodians, and the vendor stack all moved faster
- Compliance shifted from bottleneck to checkpoint, built into design rather than imposed after the fact
- Multiple stalled roadmap features unblocked

The work compounded. Every cycle was faster than the last because the documentation got better, the templates got tighter, and the relationships got warmer.

## Where Else This Applies

The banking partner approval rebuild is the most legible proof of this lesson, but it's not the only one. The same conduit pattern showed up across other parts of my work at Fold: in vendor selection, in cross-functional shipping, in stakeholder management for the [Bitcoin Flywheel](/case-studies/fiat-bitcoin-ecosystem), in the [TaxBit integration](/case-studies/taxbit). I'll write more about those over time.

What stays constant: when product owns the translation layer, the company unblocks. The work is recognizing where the layer is missing and building it before anyone asks.

## What I Learned

**Process problems are relationship problems.** The 75% reduction wasn't about better templates. It was about partners trusting that I would keep them informed, so they could move fast when I needed them to.

**Build the artifact that compounds.** The Figma app map outlived its original purpose by an order of magnitude. The thing nobody asked for that everyone ends up using is usually the highest-leverage thing you can build in a cross-functional environment.

**Compliance is a design input, not an approval gate.** When you treat it as a gate, you ship slower and create surprises. When you treat it as an input, you ship faster and partners trust you more. The Internal Compliance Guide was the move that made this possible.

**Product is the natural conduit because product has line of sight to everyone.** Engineering, design, compliance, banking partners, support, finance: they don't all talk to each other directly. They all talk to product. The product team that recognizes this and builds the translation infrastructure around it is the product team that unblocks the company.

**Own the translation layer.** In regulated industries, the person who can tell the product story to compliance partners in their language is the person who unblocks the roadmap. I spent as much time selling the product story to banking partners as I did to users. I told it completely differently each time.

That's the version of product I want to keep doing.
