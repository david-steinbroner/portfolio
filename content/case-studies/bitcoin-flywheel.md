---
title: "The Bitcoin Flywheel"
company: "Fold"
date: "January 2024"
description: "Three features. One ecosystem. 50% more trade volume."
impact:
  - "50% MoM increase in trade volume"
  - "40% adoption of Direct to Bitcoin"
  - "25% adoption of Sell Bitcoin"
  - "20% decrease in premium subscription churn"
  - "~10% revenue increase from interchange"
status: "Shipped"
tags: ["Product Strategy", "Bitcoin", "Fintech", "Feature Development"]
category: "case-study"
features:
  - name: "Selling Bitcoin"
    slug: "selling-bitcoin"
  - name: "Receiving Bitcoin"
    slug: "receiving-bitcoin"
  - name: "Direct to Bitcoin"
    slug: "direct-to-bitcoin"
---

Over six months, I shipped three features that completed Fold's Bitcoin flywheel: Sell Bitcoin, Receive Bitcoin, and Direct to Bitcoin.

Fold already had Buy Bitcoin and scheduled auto-buy (DCA). What was missing was the ability to bring bitcoin in from elsewhere, convert it to spendable cash, and auto-accumulate on every deposit. These three features closed those gaps.

I built the Figma prototypes myself, coordinated across two custodians with different APIs and settlement requirements, and worked with finance to structure a zero-fee model that drove user stickiness. The result: Fold earned a seat at the table with Strike, Robinhood, Cash App, Crypto.com, and Coinbase.

---

## The Gap

Fold started with a simple thesis: people with bitcoin want to spend it in the real world. The original product let you buy Starbucks gift cards with bitcoin.

Then we pivoted. People didn't just want to spend; they wanted to earn. So we built the first debit card that earns bitcoin back. Spend with your Fold Card, spin the wheel, stack sats.

Then we added Buy Bitcoin. That changed everything.

The moment we offered Buy Bitcoin, we were no longer just a rewards app. We were competing with Strike, Robinhood, Cash App, PayPal, Coinbase, Crypto.com. Users would compare us to platforms with full trading ecosystems. And we were missing table stakes:

- ✅ Buy bitcoin in Fold
- ✅ Earn bitcoin rewards on spending
- ✅ Send bitcoin out to another wallet
- ✅ Auto-buy on a schedule (DCA)
- ❌ **Missing:** Bring bitcoin *in* from elsewhere
- ❌ **Missing:** Convert bitcoin to spendable fiat
- ❌ **Missing:** Auto-accumulate on every deposit without thinking

We'd started building a flywheel without realizing it. We just hadn't finished it yet.

---

## Understanding the User Spectrum

Being embedded in the Bitcoin community gave me insight into the full range of users we needed to serve.

Bitcoin attracts people for different reasons. Some are hardcore believers who want to hold zero fiat. Some are curious newcomers who heard about it from a friend and want to put in $5 to see what happens. Some are pragmatic savers who like the idea of passive accumulation. Some are traders looking for the best fees.

Fold needed to serve all of them. Not by building separate products, but by designing features flexible enough to work across the entire spectrum.

**How we gathered signal:**

**Community channels.** I'd helped build Fold's Discord to 40,000+ members. We had a "Friends of Fold" group of roughly 40 power users who'd QA features before general release. We ran polls on Twitter, sent surveys through email and in-app, and read every piece of feedback.

**Industry relationships.** Bitcoin is a small world once you're in it. We attended conferences, knew people at competitor companies, and maintained relationships across the ecosystem. Our CEO knew other CEOs. This wasn't just competitive research from the outside; it was genuine industry participation.

**We were the users.** The team understood the community because we were part of it. We knew what features mattered because we wanted them too.

---

## The Get on Zero Movement

One segment of our user base was particularly vocal: the "Get on Zero" movement. These were hardcore bitcoiners who wanted to hold as little fiat as possible.

I partnered with Sahil, a friend of our CEO's and a community researcher documenting this movement. He was writing about the philosophy and practicality of living on zero dollars.

The vision: set your Fold account as your direct deposit. Auto-convert 100% to bitcoin. Sell only when you need to spend. Hold zero dollars.

Sahil helped shape the Direct to Bitcoin feature during development. He got early access, gave honest feedback, and wrote about his experience. His Zero Dollar Manifesto documented the journey:

- [The Zero Dollar Manifesto - Part One](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-one)
- [The Zero Dollar Manifesto - Part Two](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-two)
- [The Zero Dollar Manifesto - Part Three](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-three)

Direct to Bitcoin plus Sell Bitcoin made Get on Zero possible. For Fold+ members, with no fees.

But here's the key insight: Get on Zero was a loud, influential minority. They shaped discourse, they advocated for features, they were power users we wanted to serve. But they weren't the majority.

Most users weren't ready for 100%. They wanted 10%, or 25%, or maybe just to try it once with a small deposit. The same features needed to serve the person putting in 1% and the person going all-in. That's why Direct to Bitcoin offered 25%, 50%, 100%, or custom percentage options.

---

## How I Built It

**Prototyping to accelerate alignment.** For each of the three features, I built prototypes in Figma using our existing design system components. I'd build new pages, new buttons, updated screens showing entry points and confirmation flows.

When I walked into kickoff meetings, I had something to show. Not just a doc to talk through, but a visual prototype that design, engineering, support, and the CEO could react to. We could iterate from something concrete instead of starting from scratch. It also demonstrated that I understood what was feasible given our system and bandwidth.

**Telling the right story to the right audience.** These features touched nearly every stakeholder: two external custodians, external legal counsel, internal compliance, finance, our banking partner, and our card issuing platform. Each had different priorities.

Finance cared about risk exposure and revenue impact. Compliance cared about regulatory implications. Banking partners cared about flow of funds. Custodians cared about their own API constraints.

The product story had to be translated for each audience. Not different stories, but the same story emphasized differently. When I proposed zero fees for Direct to Bitcoin, the pitch to finance wasn't "let's be generous." It was: "Auto-buy on every deposit creates the stickiest possible behavior. Users depositing into Fold and auto-converting to bitcoin will use the platform repeatedly. The reduced spread is justified by increased lifetime value and trade volume."

That framing got buy-in. And it worked: trade volume increased significantly because users could now buy thousands of dollars of bitcoin through Direct to Bitcoin with no fees, and actually use it.

---

## Technical Complexity

**Custodian parity.** Fold worked with two bitcoin custodians depending on user location. They had different minimum buy/sell amounts, different settlement times, different webhook capabilities, and different status visibility.

One custodian had a $5 minimum; the other had $10. One settled same-day; the other settled end-of-day. One provided granular transaction status updates; the other gave us less visibility.

To users, none of this could matter. The experience needed to feel identical regardless of which custodian was handling their bitcoin. We set everyone at the $10 minimum for consistency. We designed status displays around the common denominator so no one got a degraded experience.

**Notification architecture.** When you're moving money, especially bitcoin, you need to know it worked. You can't hit "confirm" and see nothing.

Bitcoin has an advantage over traditional ACH: transactions hit the blockchain immediately, even if they're not confirmed yet. We leveraged this. When a user received bitcoin into Fold, we could see it hit the blockchain before it was fully settled. We sent push notifications immediately: "Your bitcoin is on its way. It's not confirmed yet, but you can check the status."

We linked out to block explorers so users could verify the transaction themselves. This transparency built trust.

The challenge was that our two custodians offered different visibility into transaction status. We had to design a notification system that worked across both without promising more than we could deliver.

**Accelerated settlement for Sell Bitcoin.** The whole point of Sell Bitcoin was to fund your Fold Card immediately. If users had to wait until end-of-day for settlement, the feature failed its core purpose.

I worked with finance and compliance to accept more risk and give users faster settlement. This meant Fold taking on exposure, working with our banking partners and card issuing platform to change the flow of funds. It was necessary for the experience to work.

---

## What We Built

![Bitcoin home screen showing Buy/Sell/Transfer buttons and Automations section](/case-studies/bitcoin-flywheel/bitcoin-home.png)

**Sell Bitcoin** - Convert bitcoin to USD and automatically fund the Fold Card. No intermediate account, no manual transfer. The money goes exactly where users need it to spend.

![Full breakdown modal before confirmation](/case-studies/bitcoin-flywheel/sell-bitcoin-confirm.png)

**Receive Bitcoin** - Bring bitcoin from any external wallet into Fold. QR code, truncated address display, one-tap copy. Table stakes for any bitcoin wallet.

![QR code with truncated address and View details](/case-studies/bitcoin-flywheel/receive-bitcoin.png)

**Direct to Bitcoin** - Auto-convert 1-100% of every deposit into bitcoin. 25%, 50%, 100%, or custom percentage. No fees for premium members. Removes the friction of timing and decision fatigue.

---

## Product Decisions

| Decision | Why |
| --- | --- |
| Auto-fund Fold Card on sell | The only logical destination. Reinforces the spend loop. Solves the funding problem that plagues every fintech. |
| 25/50/100/Custom for Direct to Bitcoin | Serve the full spectrum, from 1% curious newcomers to 100% Get on Zero power users. |
| QR + copy + truncated address | Table stakes for any bitcoin wallet. Non-negotiable. |
| In-progress status with push notifications | Users needed to know their bitcoin wasn't lost. We showed "in progress" when it hit the blockchain and sent a push notification with a link to the block explorer. |
| $10 minimum for everyone | One custodian had $5 minimum, one had $10. Rather than different experiences based on location, we set everyone at the higher minimum for consistent UX. |
| No fees for premium members | Justified by stickiness. Auto-buy on every deposit creates recurring engagement. Finance approved because lifetime value offset the reduced spread. |
| Fee transparency pill | You can give people value but you need to show them they're getting it. That "$0.00 fee" pill made the value visible. For free users, it became an upgrade path. |
| Proactive communication before features | We prepared support documentation and in-app messaging before each launch. This reduced support tickets and set expectations. |

---

## The Tradeoffs

**Launching separately, not all at once.** Ideally we would have launched these features together as a complete ecosystem. But bandwidth meant we shipped them one at a time. We had to figure out the right sequence so each release still added standalone value.

The upside: our community knew we were scrappy. We were transparent about the roadmap and what was coming. People were excited we were shipping and willing to wait for the next piece.

**Custodian constraints we couldn't control.** More partners means more capabilities, but also more restrictions. We could offer bitcoin buying and selling because of our custodian relationships, but we were beholden to their rules. Different minimums, different settlement, different APIs.

We designed around the constraints rather than fighting them. But it meant we couldn't always offer the ideal experience.

**Entry point confusion.** We initially launched with separate Buy, Sell, Receive, Send buttons. User feedback was clear: too many options, confusing entry points. We consolidated to Buy, Sell, and a Transfer button containing Send/Receive. Entry point design matters as much as the features themselves.

---

## What I Learned

**Adding one feature can change your competitive set.** The moment Fold offered Buy Bitcoin, users compared us to Coinbase and Strike. Table stakes we didn't have suddenly became urgent.

**Serve the spectrum, not just the loud users.** Get on Zero was compelling and influential, but most users weren't ready for 100%. The same features needed to work for someone putting in 1%.

**Build with the community, not just for them.** Sahil helped shape the feature, got early access, gave feedback, and wrote about it. That's how you build products people actually want.

**Show the value, don't just provide it.** Users need to feel the value they're getting. A "$0.00 fee" pill does more than just not charging fees; it makes the benefit visible.

**Prototypes accelerate everything.** Walking into a kickoff with a Figma prototype instead of just a document changes the conversation. People can react to something concrete. It shows you understand what's feasible.

**Each stakeholder needs the story told their way.** Finance, compliance, banking partners, custodians, and engineering all have different priorities. The product story has to be translated for each audience without becoming inconsistent.

**Gather partner requirements early and completely.** The more external partners you work with, the more restrictions you inherit. Do the due diligence upfront. Understand every constraint before you're deep into development.

**Partners' rules can change.** You might be designing based on what a partner told you, but their requirements can shift because of their own partners or regulations. Design with flexibility. Have contingency plans.

**In regulated fintech, speed requires trust.** Faster settlement meant more risk. Getting compliance, finance, banking partners, and card platforms aligned required telling the product story clearly to all of them. Clarity builds trust and speeds things up.
