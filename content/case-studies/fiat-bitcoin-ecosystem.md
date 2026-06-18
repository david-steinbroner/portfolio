---
title: "Completing the flywheel and paving the way for IPO"
company: "Fold"
date: "January 2024"
description: "Shipped three features over six months across two custodians with incompatible APIs. Trade volume up 50%; Direct to Bitcoin hit 20% adoption month one"
impact:
  - "50% MoM increase in trade volume"
  - "40% adoption of Direct to Bitcoin"
  - "25% adoption of Sell Bitcoin"
  - "20% decrease in premium subscription churn"
  - "~10% revenue increase from interchange"
tldr: "Users could earn bitcoin on Fold but couldn't bring it in, sell it, or auto-accumulate on deposits. I shipped the three features that closed those gaps and completed the ecosystem."
status: "Shipped"
tags: ["Product Strategy", "Bitcoin", "Fintech", "Feature Development"]
category: "case-study"
features:
  - name: "Bitcoin Transactions"
    slug: "bitcoin-transactions"
homepageTags:
  - slug: bitcoin-transactions
---

**Fold started as the first debit card that earns bitcoin back.** Spend with your Fold Card, earn sats. Then we added Buy Bitcoin, and everything changed. The moment users could buy bitcoin through Fold, we were competing with Strike, Robinhood, Cash App, and Coinbase. And we were missing table stakes.

Over six months, I helped ship three features that closed the gaps: [Sell Bitcoin](/features/bitcoin-transactions#selling-bitcoin), [Receive Bitcoin](/features/bitcoin-transactions#receiving-bitcoin), and [Direct to Bitcoin](/features/bitcoin-transactions#direct-to-bitcoin). I built the Figma prototypes, coordinated across two custodians with completely different APIs, and worked with finance on a zero-fee model for premium members that made the product sticky enough to justify it. Trade volume jumped 50%.

---

## The Gap

Fold had built a great earn-and-buy loop. But once we offered Buy Bitcoin, users compared us to platforms with full trading ecosystems. And we were missing obvious things:

- Buy bitcoin in Fold ✓
- Earn bitcoin rewards on spending ✓
- Send bitcoin out to another wallet ✓
- Auto-buy on a schedule (DCA) ✓
- Bring bitcoin *in* from elsewhere ✗
- Convert bitcoin to spendable cash ✗
- Auto-accumulate on every deposit without thinking ✗

We'd started building a flywheel without realizing it. We just hadn't finished it yet.

---

## Understanding the Users

I'd helped build Fold's Discord to 40,000+ members. We had a "Friends of Fold" group of about 40 power users who'd QA features before general release. We ran polls on Twitter, sent surveys through email and in-app, and read every piece of feedback. Bitcoin is a small world once you're in it — we attended conferences, knew people at competitor companies, and maintained relationships across the ecosystem.

The important thing: we were the users too. The team understood the community because we were part of it. We knew what features mattered because we wanted them ourselves.

Bitcoin attracts people for different reasons. Some are hardcore believers who want to hold zero fiat. Some are curious newcomers who want to put in $5 to see what happens. Some are pragmatic savers who like passive accumulation. Some are comparing fees across platforms.

Fold needed to serve all of them — not by building separate products, but by designing features flexible enough to work across the whole range.

---

## The Get on Zero Movement

One group was particularly vocal: the "Get on Zero" crowd. Hardcore bitcoiners who wanted to hold as little fiat as possible.

I partnered with Sahil, a community researcher documenting this movement. He was writing about the philosophy and practicality of living on zero dollars. The vision: set your Fold account as your direct deposit. Auto-convert 100% to bitcoin. Sell only when you need to spend. Hold zero dollars.

Sahil helped shape [Direct to Bitcoin](/features/bitcoin-transactions#direct-to-bitcoin) during development — early access, honest feedback, and he wrote about his experience in his Zero Dollar Manifesto:

- [Part One](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-one)
- [Part Two](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-two)
- [Part Three](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-three)

Direct to Bitcoin plus [Sell Bitcoin](/features/bitcoin-transactions#selling-bitcoin) made Get on Zero possible. For Fold+ members, with no fees.

But Get on Zero was a loud, influential minority. They shaped discourse and advocated for features, but they weren't the majority. Most users weren't ready for 100%. They wanted 10%, or 25%, or maybe just to try it once. The same features needed to work for someone putting in 1% and someone going all-in. That's why Direct to Bitcoin offered 25%, 50%, 100%, or custom percentage options.

---

## How We Built It

For each of the three features, I built prototypes in Figma using our existing design system. New pages, new buttons, updated screens showing entry points and confirmation flows. When I walked into kickoff meetings, I had something to show — not just a doc to talk through. We could iterate from something concrete instead of starting from scratch.

These features touched nearly every stakeholder: two external custodians, external legal counsel, internal compliance, finance, our banking partner, and our card issuing platform. Each had different priorities. Finance cared about risk exposure and revenue impact. Compliance cared about regulatory implications. Banking partners cared about flow of funds. Custodians cared about their own API constraints.

The same story had to be told differently to each audience. When I proposed zero fees for [Direct to Bitcoin](/features/bitcoin-transactions#direct-to-bitcoin), the pitch to finance wasn't "let's be generous." It was: auto-buy on every deposit creates recurring behavior. Users depositing into Fold and auto-converting to bitcoin will use the platform repeatedly. The reduced spread is justified by lifetime value and trade volume. That framing worked — and the numbers backed it up.

---

## Technical Complexity

**Custodian parity.** Fold worked with two bitcoin custodians depending on user location. Different minimum buy/sell amounts, different settlement times, different webhook capabilities. One had a $5 minimum, the other $10. One settled same-day, the other end-of-day. One gave us granular transaction status, the other gave us less visibility.

None of that could be visible to users. The experience had to feel identical. We set everyone at the $10 minimum for consistency and designed status displays around the common denominator.

**Notifications.** When you're moving money, you need to know it worked. With bitcoin, transactions hit the blockchain immediately even before they're fully confirmed. We leveraged that — when a user [received bitcoin](/features/bitcoin-transactions#receiving-bitcoin) into Fold, we sent push notifications right away: "Your bitcoin is on its way." We linked out to block explorers so users could verify the transaction themselves. The challenge was designing a notification system that worked across both custodians without promising more than we could deliver.

**Faster settlement for [Sell Bitcoin](/features/bitcoin-transactions#selling-bitcoin).** The whole point was to fund your Fold Card immediately. If users had to wait until end-of-day, the feature fails its purpose. I worked with finance and compliance to accept more risk and give users faster settlement. That meant Fold taking on exposure and working with our banking partners to change the flow of funds.

---

## What We Built

![Bitcoin home screen showing Buy/Sell/Transfer buttons and Automations section](/case-studies/bitcoin-flywheel/bitcoin-home.png)

**[Sell Bitcoin](/features/bitcoin-transactions#selling-bitcoin)** — Convert bitcoin to USD and automatically fund the Fold Card. No intermediate account, no manual transfer. The money goes where users need it to spend.

![Full breakdown modal before confirmation](/case-studies/bitcoin-flywheel/sell-bitcoin-confirm.png)

**[Receive Bitcoin](/features/bitcoin-transactions#receiving-bitcoin)** — Bring bitcoin from any external wallet into Fold. QR code, truncated address, one-tap copy.

![QR code with truncated address and View details](/case-studies/bitcoin-flywheel/receive-bitcoin.png)

**[Direct to Bitcoin](/features/bitcoin-transactions#direct-to-bitcoin)** — Auto-convert 1-100% of every deposit into bitcoin. 25%, 50%, 100%, or custom. No fees for premium members.

---

## Product Decisions

| Decision | Why |
| --- | --- |
| Auto-fund Fold Card on sell | The only logical destination. Reinforces the spend loop. |
| 25/50/100/Custom for Direct to Bitcoin | Serve the full range — 1% curious newcomers to 100% Get on Zero users. |
| QR + copy + truncated address | Standard for any bitcoin wallet. Users expect it. |
| In-progress status with push notifications | Users need to know their bitcoin isn't lost. Show "in progress" when it hits the blockchain, push a notification with a block explorer link. |
| $10 minimum for everyone | One custodian had $5, one had $10. Consistent UX beats different experiences by location. |
| No fees for premium members | Auto-buy on every deposit creates recurring engagement. Finance approved because lifetime value offset the reduced spread. |
| Fee transparency pill | "$0.00 fee" makes the value visible. For free users, it's an upgrade path. |
| Proactive communication before launches | Support docs and in-app messaging went out before each feature. Reduced tickets and set expectations. |

---

## The Tradeoffs

**Launching separately, not all at once.** Ideally we would've launched these as a complete ecosystem. But bandwidth meant we shipped them one at a time. We had to sequence so each release still added standalone value.

The upside: our community knew we were scrappy. We were transparent about the roadmap, and people were excited we were shipping and willing to wait for the next piece.

**Custodian constraints we couldn't control.** More partners means more capabilities but also more restrictions. Different minimums, different settlement, different APIs. We designed around the constraints rather than fighting them, but it meant we couldn't always offer the ideal experience.

**Entry point confusion.** We initially launched with separate Buy, Sell, Receive, Send buttons. User feedback was clear: too many options. We consolidated to Buy, Sell, and a Transfer button containing Send/Receive. Entry point design matters as much as the features themselves.

---

## What I Learned

Adding Buy Bitcoin changed our competitive set overnight. Users compared us to Coinbase and Strike, and features we didn't have suddenly became urgent. One feature can redefine what "table stakes" means for your product.

The Get on Zero crowd was compelling and vocal, but most users weren't ready for 100%. I kept reminding myself: build for the spectrum, not just the loudest users. The same feature needs to work for someone putting in 1% and someone going all-in.

Working with Sahil taught me something about building with your community rather than just for them. He got early access, gave real feedback, shaped the feature, and wrote about it. That's how you build things people actually want.

The more external partners you work with, the more constraints you inherit. Our two custodians had different rules for everything. And those rules can change — their own partners or regulations shift, and suddenly your specs are wrong. I learned to get requirements early, design with flexibility, and have contingency plans.

The zero-fee model for Direct to Bitcoin only happened because I told the story in terms finance cared about. It wasn't "let's be generous" — it was "this creates the stickiest possible behavior and the lifetime value justifies it." Same product decision, different framing. Getting comfortable translating the same idea for different audiences was probably the most useful skill I developed across all three of these features.
