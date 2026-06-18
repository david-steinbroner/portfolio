---
title: "Shipping tax season at a startup"
company: "Fold"
date: "January 2025"
description: "Shipped the integration in 10 weeks - a month ahead of the IRS deadline. 80% of eligible users pulled their 1099; 1% ticket rate"
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
homepageTags:
  - slug: tax-documents
---

**Fold started as an app that let users earn bitcoin on everyday purchases.** Over time, we expanded the ecosystem — [Sell, Receive, and Direct to Bitcoin](/features/bitcoin-transactions) — so users could bring bitcoin in, auto-convert on deposits, and [sell to fund their Fold Visa card](/features/bitcoin-transactions#selling-bitcoin). Essentially spend their bitcoin like cash.

Once users could sell bitcoin (a feature [I helped launch](/case-studies/fiat-bitcoin-ecosystem)), they were creating taxable events. That meant we needed to provide [tax documentation](/features/tax-documents). I led the integration of TaxBit, a third-party tax document provider, to deliver IRS forms to the ~5,000 users who sold bitcoin in 2024. Hard compliance requirement, mid-February deadline.

No one at Fold had done crypto tax reporting before. I became the person who figured it out — evaluating vendors, learning IRS requirements, and translating all of that into something my team could actually build against.

---

## The Gap

When Fold launched [bitcoin selling](/features/bitcoin-transactions#selling-bitcoin), we created a tax obligation for our users. Anyone who sold bitcoin through Fold in 2024 would need documentation to report it. The problem: we had no infrastructure, no internal expertise, and a hard mid-February compliance deadline.

By late December, users were already getting tax emails from Coinbase, Robinhood, and Cash App. If they didn't hear from Fold, they'd assume we weren't on top of it. Tax documents can only be generated in January since they reflect the prior year, but the communication starts in December. Silence looks like incompetence.

We had about 10 weeks, two engineers, one junior designer, and me — a PM who'd never built a tax feature.

---

## Understanding the Users

I talked to users and dug into support data to figure out what people actually needed.

**Most users want "just tell me what to report."** They don't want to think about disposition methods or cost basis calculations. They want a PDF they can upload to TurboTax and forget about.

**A smaller group wants the raw data.** They have accountants, they track their own taxes, or they want to cross-reference against their own records. They need a CSV.

**Everyone gets anxious in December.** When they see tax comms from every other crypto platform but nothing from Fold, they start worrying.

That gave us a clear approach: ship a simple default (1099-B PDF), provide an escape hatch for power users (Gain/Loss CSV), and get communication out early so people know we're on it.

---

## The Communication Strategy

Before we built anything, I shipped communication.

By mid-December, I was seeing it in Discord, on Twitter, and in support tickets — users wondering where their tax documents were. I stay close with Support and monitor our community channels, so I caught this early.

I made a call: tackle what we could handle first. The feature would get built, but I could address the anxiety immediately with zero engineering effort.

Three things went out in mid-December:

**1. Email to impacted users.** Marketing copy explaining that tax documents were coming in early 2025, ahead of the mid-February deadline. Only sent to users who had sold bitcoin in 2024. Broadcasting to everyone would cause panic from users who didn't need documents wondering where theirs were.

**2. Support article.** I wrote documentation explaining bitcoin tax reporting — what forms they'd receive, what they mean, when to expect them. I worked with TaxBit to make sure the language was consistent with theirs. This became the go-to answer for any tax-related questions.

**3. In-app "coming soon" component.** I'd previously built a reusable component for in-app messaging that I could update without engineering. I used it here to get messaging in front of impacted users immediately. It linked to the support article.

The link took users out of the app — not ideal, but building an in-app page would've required frontend time I didn't have. The tradeoff: get something in users' eyes now and accept that the experience wasn't perfect.

Support told me ticket volume about tax documents dropped right after we pushed the email and in-app component. What would've snowballed into a support problem while we were still building got caught early.

The FAQ became a living document. I gathered questions from Support as they came in and refined the docs with TaxBit. By the time the actual feature shipped, users had already been primed on the answers.

This was the first thing I completed — before any screens, before any API work. High impact, low effort.

---

## The Complexity

This feature touched a lot of people.

Internally: Legal reviewed every screen showing tax information. Compliance signed off on data flow. Finance needed to understand cost implications. Engineering needed clear requirements. Support needed training. Design iterated on the UI. Marketing reviewed copy. Growth needed visibility. The CEO had final say.

Externally: we had a banking partner, a card issuing partner, two Bitcoin custodians, external counsel reviewing our tax language, and TaxBit's integration team joining our weekly standups. That's how Fold works — anything touching Bitcoin goes through multiple external partners before it ships.

I ran weekly cross-company standups with my two engineers, our junior designer, and TaxBit. Set up the TaxBit dashboard. Trained support on the portal. Wrote all user-facing documentation.

One thing that helped a lot: in the first few days, I built a Figma prototype using existing components. It wasn't polished — everyone understood design would refine it — but having something concrete to put in front of people changed the conversations. We could react to it, poke holes in it, iterate on it. It got buy-in faster than any doc would have.

The thing I kept learning throughout this project: you have to tell the same story differently depending on who you're talking to. Don't get into the weeds with the wrong people. In regulated industries, stakeholders default to caution if they don't understand what you're building. That slows everything down. The Figma prototype helped because it made the story simple and visual for everyone.

---

## The Tradeoff

TaxBit's W-9 SDK gave us two options: pre-fill the fields (making them non-editable) or leave them blank (making them editable). We went with pre-fill.

The data should be correct — we already had it on file, verified through our onboarding process. If someone could sell bitcoin on Fold, they already had a debit card, which required their name, address, and SSN. One "Confirm and Sign" button is better UX than nine form fields. And leaving fields blank introduces user error — typos, wrong addresses, misremembered info.

The tradeoff: users who needed to make changes couldn't do it inline. So I looked at how many people that would actually be. I pulled historical support data: how many users update their name or address each year? About 0.2%. For ~5,000 eligible users, that's maybe 5-10 people.

For those users, I added a banner on the W-9 with a button that opened a pre-filled support ticket. Created a dedicated Zendesk view so support could monitor that bucket. Worked with engineering to set up a trigger: when Fold's backend updated a user's PII, it auto-pushed to TaxBit, so the next time they opened their W-9 it would show the corrected info.

There was also an architectural reason this made sense. Fold has its own PII verification processes — third-party ID verification, fraud checks. If someone randomly changes their address, it might get flagged. PII changes needed to go through Fold's internal processes anyway. The support workaround wasn't just a timeline compromise — it was the right flow.

Out of 50 total support tickets, only about 10 were actual PII changes. Right in line with what the data predicted.

---

## Product Decisions

| Decision | Why |
|----------|-----|
| **FIFO disposition** | What most users will use. Easiest to expand from if we add disposition selection later. |
| **PDF + CSV** | Serve the majority who want simple and the minority who want control. Default plus escape hatch. |
| **Educational framing** | Users shouldn't need to Google tax terminology. Explain what documents mean and when they're needed. |
| **"Taxes & Documents" section** | Built it to hold future documents too — statements, credit card docs, whatever comes next. |
| **Targeted communication only** | Only messaged users who actually needed tax documents. Broadcasting to everyone would've caused unnecessary panic. |
| **Pre-filled W-9** | Users already gave us their PII. One button beats nine form fields. |

---

## What We Built

**New "Taxes & Documents" section.** Built to hold future documents too — not just a one-off for tax forms.

**[Tax Documents](/features/tax-documents) screen with educational framing.** Explains what each document means and when you'd need it.

**Two document options.** 1099-B (PDF) for most users. Gain/Loss Summary (CSV) for users who want the raw data.

**W-9 collection flow** integrated via TaxBit's SDK, with pre-filled user data from Fold accounts.

**Conditional entry points.** Users who hadn't submitted W-9s saw one flow; users who had saw another; users who weren't eligible saw nothing.

**Support tooling and training.** Quick link from internal tools to each user's TaxBit page. Trained CS on the TaxBit portal. Created Zendesk workflows including a dedicated view for W-9 update requests.

**Proactive communication.** Targeted emails, in-app messaging, and a living FAQ — all shipped before the feature itself.

---

## What I Learned

The W-9 edit restriction could've derailed the timeline. But when I looked at the data and saw we'd get maybe 10 users needing updates, we could handle it with Support and move on. What felt like a limitation turned out to be a non-issue. I keep coming back to this: research your edge cases before you design around them.

Shipping the "coming soon" state early was one of the highest-impact things I did on this project. It prevented support tickets and set expectations before users started worrying. Sometimes acknowledging "we're on it" is the product.

The Figma prototype and the "Taxes & Documents" section both came from the same instinct — build a little more than you strictly need to, so the next person doesn't start from scratch. The prototype got buy-in fast. The section gives Fold a place to put future documents without another design sprint.

The biggest thing I took away: know your product well enough that what you ask for is already lean. If you understand the constraints — what things cost, what's feasible, what engineering is already dealing with — you don't pitch bloated features. You pitch what's needed. People see you build exactly what's needed, and that builds trust. Users don't even know you made tradeoffs. They just think the feature works.
