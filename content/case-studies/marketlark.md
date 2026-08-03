---
title: "Building a marketplace for a customer who runs it on a spreadsheet"
company: "Personal Projects"
date: "2026"
description: "A two-sided marketplace for recurring vendor markets, built solo against one real Austin organizer's actual workflow - IG DMs for intake, Venmo for money, a spreadsheet for the roster, Canva for the booth map. Live in production behind an invite gate."
impact:
  - "Ran discovery with a working market organizer and built against her real workflow rather than a category assumption - the two things she told me contradicted each other, and reconciling them set the payment architecture"
  - "Designed the money so the platform never holds funds: the organizer is merchant of record, checkout is hosted, and booth fees stay non-taxable - three structural decisions that keep money-transmitter, PCI and marketplace-facilitator obligations off the product"
  - "Turned a legal-research pass into a scope cut: an exemption rule I'd assumed would need a branching document workflow collapsed into a single permit-number check"
  - "Shipped 129 releases in about four weeks as a solo PM - 34 migrations, 805 tests, a production Postgres schema with row-level security, and live payment rails"
  - "Built the anti-drift tooling first, after the docs and the deploy pipeline both lied to me in the same week"
tldr: "A working Austin market organizer runs a few recurring markets a year on Instagram DMs, Venmo, a spreadsheet and a Canva map, and loses most of a week each cycle to chasing booth fees. I built her a two-sided marketplace solo. The interesting decisions weren't features - they were where to put the money, how much compliance to build, and how to keep an AI-assisted codebase from quietly lying to me."
status: "Building"
tags: ["0 to 1", "Marketplace", "Payments", "Compliance", "Solo Build", "AI-Assisted"]
category: "case-study"
features:
  - name: "Taking payments without ever holding the money"
    slug: "marketplace-payments-rails"
  - name: "The checks I built because I don't write the code"
    slug: "shipping-with-ai-guardrails"
homepageTags:
  - label: "Marketplace 0 to 1"
    color: red
  - slug: marketplace-payments-rails
---

She runs a few recurring markets a year in Austin. Craft fairs, pop-ups, the kind of thing where forty vendors set up tables in a parking lot on a Sunday.

Here's how that actually works. Vendors ask about a booth in her Instagram DMs. She keeps the roster in a spreadsheet. She draws the booth map in Canva. When she accepts someone, she tells them to send the fee over Venmo, or Zelle, or Cash App, whichever they have. Then she waits.

The waiting is the product. Her booth fees arrive over days, from usernames that don't match the names in her spreadsheet, with no note saying which booth they're for. So she cross-references payment handles against DM threads, types confirmation messages by hand, chases the people who haven't paid, and sends refunds one at a time when someone drops. She described it as roughly 72 hours of pay-then-nag per market.

That's the job I set out to remove.

---

## The thing she told me twice, differently

I ran a written discovery pass with her before building anything. One of the questions was about payments, and she gave a clear answer: yes, she'd link a bank account and do an ID step to get automatic payments and refunds. That's a Stripe answer, and it's the answer I wanted.

In the same set of responses she also said only *some* of her vendors would pay by card instead of Venmo.

I built toward Stripe. Then I put the working product in front of her, and she told me that around 95% of her vendors are on PayPal.

It would have been easy to read that as her contradicting herself, or as new information that invalidated the first answer. It was neither. Both answers were true and they were about different things. Her willingness to link a bank account is about *her*. Her vendors' wallets are about *them*. I'd collapsed two questions into one because they both had the word "payment" in them.

So I stopped asking which wallet to support. The question that actually mattered was **can the money vouch for itself** - does a payment arrive with enough context that the software knows which vendor and which booth it belongs to, or does a human have to look at it and decide?

That reframe is the spine of the whole payment system, and it's the subject of [its own writeup](/features/marketplace-payments-rails). The short version: the app carries a self-reporting rail and a self-reported one, a market offers whichever its organizer has set up, and the platform never touches the money in either case.

---

## Where I put the money, and why that was the first decision

Before writing the checkout, I wrote down what MarketLark would owe a regulator under each design. That sounds like something you do later. It's cheaper up front, because the answers change the schema.

Three decisions came out of it, and each one closes an obligation rather than managing it:

**The platform never holds funds.** The organizer is merchant of record. Stripe Connect settles directly into her account and the PayPal rail never touches us at all. Holding a balance, escrow, or a delayed payout would each open state money-transmitter licensing. Since none of those exist in the product, the obligation doesn't apply - and I wrote down the trigger that would flip it, so a future feature can't wander across the line without someone noticing.

**Card data never reaches our origin.** Checkout is hosted. There is no embedded card field anywhere in the codebase. That's the difference between the shortest PCI self-assessment and a real compliance program.

**Booth fees are rent for space rather than a taxable sale**, so the platform isn't a marketplace facilitator for sales tax. I marked this one as the bright line in the product: the day MarketLark sells a ticket or a paid admission, that row flips and drags 1099-K reporting with it. It's written down as a trigger precisely because "let's add ticketing" sounds like a small feature request.

The pattern I'd repeat: **writing down that something doesn't apply is compliance work.** A blank row and a reasoned "no" look identical from the outside, and only one of them is a decision.

---

## Research that made the build smaller

The organizer-liability picture in Texas is genuinely sharp. At a market where vendors pay a fee to participate, every vendor selling taxable goods has to hold an active sales-and-use-tax permit - the occasional-sale exemption explicitly doesn't apply once a fee is involved. Unpermitted vendors' taxable sales become the *organizer's* liability, and she's required to keep records for four years.

I went in expecting that to grow the product. I'd scoped a document center that would branch: collect permits from some vendors, exemption letters from others, route each type through its own review.

The research killed the branch. Because the exemption is dead at fee-based markets, there's no second path to build. Version one of the document center is one question per vendor: active permit number and expiry. What I'd scoped as a workflow engine became a field.

The second finding pointed the other way. The existing tools in this category do generic document upload - they store a file without knowing what it means. Nobody does jurisdiction-aware requirement mapping, permit validation, or deadline logic. A vendor selling food inside Austin answers to Austin Public Health with its own permit classes. A vendor pouring alcohol needs a TABC filing at least ten business days out, which is an automatable reminder. A tattoo artist needs a state temporary-location license that costs several times the booth fee, which is something an organizer would want to know *before* booking one.

So the defensible version of this feature is a thing that knows what the documents mean. I didn't build that. I built the field, wrote down what the real version is, and left the sequencing question open until the organizer tells me whether she feels this pain today. If she already collects permits, I'm removing a chore. If she doesn't, I'm introducing a duty she currently skips, and that's a completely different product to sell.

---

## How it got built

I'm a PM. I don't write production code. I built this the way I build everything now: I make the architecture and product calls, an AI writes the implementation, and I review, test, and direct.

What that produced in about four weeks: a React and TypeScript PWA on 61 hand-rolled UI primitives, a Postgres schema at 34 migrations with row-level security, live authentication, photo uploads, an application and approval flow, messaging, and two payment rails. 129 releases. 805 tests passing. It's deployed to production and running against real infrastructure, behind an invite gate.

The most useful thing I learned has nothing to do with prompting. **An AI-assisted codebase drifts in a specific way: the code stays fine and the claims about it rot.** A doc says there are seven migrations when there are thirty. A comment describes a security filter that was never written. A version number in a status file says one thing while production serves another.

I hit all three of those. So I built tooling whose entire job is to make that class of lie fail loudly, and I wrote it up [separately](/features/shipping-with-ai-guardrails), because it's the part of this project I'd bring to any team.

---

## Three things that went wrong

**The mock world was one browser.** I built the whole product against local state first, which was the right call for iteration speed. But every feature where one user tells another user something - notifications, messaging, an organizer accepting an application - worked in the mock only because both users were the same browser tab. When I flipped to real infrastructure, those features silently stopped working. Nothing threw an error. Row-level security returns zero rows rather than a permission failure, so a reader with no writer just looks empty. I now assume that any feature crossing between two accounts is untested until I've watched both halves meet.

**Green checks say nothing about a phone.** Type-checking passed, 800 tests passed, and my own lint tooling passed on a build where seven real defects were sitting on screens I hadn't touched on a device. Static checks are real evidence about logic and data, and no evidence at all about feel. A stale config, a safe-area calculation, and a layout that ran past the bottom of an iPhone all shipped through a fully green pipeline. Tapping the screen is now a required step after any deploy that changed one.

**My tracker rotted faster than my code.** Open work lived in a markdown table in the repo. The table stayed accurate; the prose around it went stale, and at one point the status doc had grown to 561 lines with fourteen stacked "resume here" sections and a header that was simply false. I moved the backlog out to Linear and added a check that fails the build if a backlog table ever reappears in the repo. The lesson generalizes past this project: **never restate a checkable fact in prose**, because the copy is what drifts.

---

## Where it stands

Live in production, gated, with no public users. The invited-vendor trial is paused for reasons on the business side rather than the build side. The name is provisional.

That's an honest place to be a month in, and I'd rather say it than dress it up. What I have is a working product, a customer whose actual workflow I understand, a payment architecture that survives contact with a regulator, and a clear read on which of the remaining questions are product problems and which aren't.

---

## What I'd tell another PM

**Two true answers from the same person can contradict each other, and that usually means your question was wrong.** "Yes, I'll link a bank account" and "only some of my vendors would use a card" are both true. Reconciling them gave me a better architecture than either answer alone would have.

**Do the boring legal reading before the schema, since it's cheaper there.** It closed three obligations permanently and cut a workflow down to a single field. Both of those are worth more than the week it cost.

**Put the rule where it can't be bypassed.** I hid a button from the wrong user and called that a guard. A deep link walked straight past it, and the database policy underneath only asked whether the row belonged to you - so an organizer could apply to their own market, accept themselves, and invoice themselves, with every layer agreeing it was fine. A screen is not a guard. That one now lives in the database.

**Ship to learn, then go touch it.** The fastest thing I did was put a rough working product in front of a real user. The 95%-of-vendors-use-PayPal fact was worth more than every assumption I'd built on, and I only got it by handing her something she could tap.
