---
title: "Taking payments without ever holding the money"
company: "Personal Projects"
date: "2026"
description: "Booth fees for a vendor marketplace, designed so the platform never touches the funds. Two rails split by whether the money can identify itself, a deadline the database enforces, and three regulatory obligations closed by structure instead of process."
status: "Building"
tags: ["Payments", "Marketplace", "Compliance", "Stripe Connect", "PayPal", "Schema Design"]
category: "feature"
tag:
  label: "Payment Rails"
  color: "pink"
caseStudy:
  name: "Building a marketplace for a customer who runs it on a spreadsheet"
  slug: "marketlark"
---

**A market organizer's real bottleneck isn't collecting booth fees. It's reconciling them.**

Money reaches her over Venmo, Zelle and Cash App, from handles that don't match the names on her roster, with no note saying which booth it's for. She matches payments to vendors by hand, chases the ones that never arrive, and refunds one at a time when someone drops. That reconciliation loop is what the payment system had to remove.

---

## The Axis That Actually Mattered

My first instinct was to pick a wallet. Stripe or PayPal or Venmo, decide, build it.

That's the wrong axis. Vendors here are 18 to 40 and live in whatever app their friends use, so the wallet is theirs to choose and it will keep changing. The organizer told me she'd link a bank account for automatic payments, and separately that only *some* of her vendors would pay by card. Both were true. When I demoed the working product she told me around 95% of her vendors are on PayPal.

So the product splits on a different question: **can this payment vouch for itself?**

- **Self-reporting.** The money arrives with enough context that the software knows the vendor and the booth. Nobody confirms anything. The booth locks on its own.
- **Self-reported.** The money arrives somewhere the software can't see. A human has to say it landed.

Every rail falls on one side or the other, and that distinction is what the schema stores - a `stripe` or `offline` axis, rather than a list of wallet brands that would need a migration every time a new one shows up.

---

## What I Built

**The self-reporting rail - Stripe Connect direct charges.** The organizer onboards through Stripe's own hosted flow, so Stripe owns identity verification and its regulatory upkeep rather than me. Charges go direct, settling into her account. A webhook is what marks a booth paid, so the fact that money moved comes from the payment processor rather than from anything the browser claims.

**The self-reported rail - a PayPal.Me link.** She creates a PayPal.Me handle in about a minute and pastes it into her market settings. The app builds a public URL with the amount pre-filled. A vendor taps "Pay with PayPal," pays, comes back, and taps "I've paid." She sees the claim and confirms it landed.

That rail needs no developer account, no API key, and no approval, because the app never talks to PayPal at all. It's just a link. That's why it could ship for the trial while the automated version waits.

**The claim, which exists because of a format limitation.** PayPal.Me carries no reference field. What lands in her account is "$45.00 from Sam Rivera" with nothing naming the booth. So the vendor's claim and her receipt are the matching pair - the app tells the vendor to put their business name in the PayPal note, and her confirmation is what closes the loop. I'd rather build the honest two-step than pretend the payment identified itself.

**Marking a payment received by hand is a per-market opt-in.** The default assumes the self-reporting rail. An organizer whose vendors won't use cards turns hand-marking on for her market. Nobody is forced onto card-only, and nobody who *is* on cards inherits a manual step they don't need.

**Integer cents, in one module.** Currency math lives in a single library that the UI can't reach around. Components receive formatted strings and never do arithmetic on money.

---

## The Deadline the Database Enforces

Booth fees need a due date, and the organizer wanted two different mental models for it. Some markets should give a vendor a fixed number of days after acceptance. Others should collect everything by a hard cutoff before load-in. She wanted both.

The rule that came out of it: **due N days after acceptance, or a fixed ceiling date, whichever comes first.** One formula covers both models, and an organizer who only wants one just leaves the other blank.

Two things I'd carry to any similar problem:

**The clock stops on a claim, in a trigger.** When a vendor says they've paid, the countdown stops immediately, before the organizer has confirmed anything. Otherwise a vendor who paid on time gets nagged, or auto-released, while waiting on a human. That's enforced in the database rather than in the app, because the app isn't the only thing that can write to that row.

**I proved the migration before applying it.** The trigger logic went into a test that splices the migration into its own transaction and rolls it back, run against the real hosted schema. One case in that proof goes red against the naive version of the rule, which is the only reason I trust the test at all - a test that passes against both the broken and fixed implementation isn't testing anything. Mutation-testing the new tests also caught a false claim in my own migration comment, which I corrected rather than leave standing.

I also found that the "Not received" button on the organizer's side was fully rendered, fully styled, and wired to nothing. It had been live for weeks. Nothing failed, because a button that does nothing throws no errors.

---

## The Three Obligations This Design Closes

Deciding where the money sits is a compliance decision, so I made it before writing the checkout.

**Money transmission.** The platform never holds vendor funds. The organizer is merchant of record, Stripe settles to her account, and the PayPal rail never touches us. State money-transmitter licensing attaches to holding a balance, escrow, or a delayed payout - none of which exist here. I wrote those three down as the triggers that would flip it.

**PCI.** Card data never reaches our origin. Checkout is hosted and there's no embedded card field anywhere in the codebase, which is the difference between the shortest self-assessment and a real program. The trigger is any card field we render ourselves.

**Marketplace facilitator sales tax.** A booth fee is rent for space rather than a taxable sale, so the platform isn't facilitating taxable sales. This is the bright line in the entire product: the day it sells a ticket or a paid admission, that row flips and pulls 1099-K reporting with it. It's written down as a trigger because "let's add ticketing" sounds like a small feature request.

Each of those is closed by structure rather than managed by process. The obligation doesn't apply because the product doesn't do the thing - and the condition that would change that is recorded next to it.

---

## What's Still Open

**The automated PayPal rail is gated on someone else's approval.** The model where the fee goes to her account and the platform never holds it requires PayPal partner approval. Sandbox works immediately; live calls return 401 until a PayPal representative signs off, and there's no published lead time. That clock isn't mine to compress, which is exactly why the trial runs on the link-and-claim rail instead of waiting on it.

**Refunds are still the organizer's job on the self-reported rail.** One-click refund only exists where the platform can see the payment.

**No real money has moved yet.** The rails are live in production, and every account so far is mine or a seeded test persona. Until a real vendor pays a real booth fee, this is a design I believe in rather than a result I can point at.

---

## Skills

Payments architecture, Stripe Connect, regulatory scoping, schema design, database triggers, migration testing, working from customer research
