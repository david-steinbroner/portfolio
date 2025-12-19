---
title: "The Bitcoin Flywheel"
company: "Fold"
date: "2024"
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

**Fold is a fintech app that lets users earn and spend bitcoin.** Over 6 months, we shipped three interconnected features that transformed Fold from a rewards app into a complete bitcoin ecosystem—enabling users to bring bitcoin in, convert it to spendable fiat, and auto-buy on every deposit.

This wasn't just feature work. It was positioning Fold to compete with major crypto and trading platforms ahead of an IPO.

## The Gap

Fold started with a simple thesis: people with bitcoin want to spend it in the real world but can't. The original product let you buy Starbucks gift cards with bitcoin.

Then we pivoted. People didn't just want to spend—they wanted to earn. So we built the first debit card that earns bitcoin back. Spend with your Fold Card, spin the wheel, stack sats.

Then we added Buy Bitcoin. And that changed everything.

The moment we offered Buy Bitcoin, we were no longer just a rewards app. We were taking a seat at the table with Robinhood, Cash App, PayPal, Coinbase, Crypto.com—massive platforms with full trading ecosystems. Users would now compare us to them. And we were missing table stakes:

- ✅ Buy bitcoin in Fold
- ✅ Earn bitcoin rewards on spending
- ✅ Send bitcoin out to another wallet
- ❌ **Missing:** Bring bitcoin *in* from elsewhere
- ❌ **Missing:** Convert bitcoin to spendable fiat
- ❌ **Missing:** Auto-accumulate without thinking about it

We'd started building a flywheel without realizing it—and it was actually a return to our original thesis. "Use bitcoin in the real world" always implied a complete ecosystem. We just hadn't built it yet.

## Understanding the Users

We were deeply embedded in the Bitcoin community. Not just observing it—living in it.

**Community feedback channels:** I'd helped build Fold's Discord to 40,000+ members. We had a "Friends of Fold" group of ~40 power users who'd QA features before general release. We ran Twitter polls. We sent surveys through email and in-app notifications. We read every piece of feedback.

**Competitive research:** We tracked what Coinbase, Robinhood, Cash App, and others offered. Once you let people buy bitcoin, receive and sell become table stakes. Auto-buy on deposits was the next differentiator.

**We were Bitcoiners ourselves.** The team understood the community because we were part of it. We knew what features mattered because we wanted them too.

### Building With the Community: Get on Zero

One of my most valuable research partnerships was with Sahil—a friend of our CEO's and a friend of mine—who was documenting the "Get on Zero" movement: hardcore bitcoiners who wanted to hold as little fiat as possible.

The vision: set your Fold account as your direct deposit. Auto-convert 100% to bitcoin. Sell only when you need to spend. Hold zero dollars.

This is how we build at Fold. We build with the community, not just for them. Sahil helped shape the Direct to Bitcoin feature during development, got early access, gave honest feedback, and then wrote about his experience. His Zero Dollar Manifesto documented the journey:

- [The Zero Dollar Manifesto - Part One](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-one)
- [The Zero Dollar Manifesto - Part Two](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-two)
- [The Zero Dollar Manifesto - Part Three](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-three)

Direct to Bitcoin + Sell Bitcoin made Get on Zero possible. For Fold+ members, with no fees.

### The Full Spectrum

But Get on Zero was one end of the spectrum. We also had users putting 1% of their deposits into bitcoin—just dipping their toes in. Curious newcomers who might buy $5 of bitcoin and never touch it again.

The features needed to serve both extremes and everyone in between. That's why Direct to Bitcoin offered 25%, 50%, 100%, or custom percentage options. Power users could go all-in. Newcomers could start small.

## What We Built

![Bitcoin home screen showing Buy/Sell/Transfer buttons and Automations section](/case-studies/bitcoin-flywheel/bitcoin-home.png)

**Sell Bitcoin** — Convert bitcoin to USD and automatically fund the Fold Card. No intermediate account, no manual transfer. The money goes exactly where users need it to spend.

![Full breakdown modal before confirmation](/case-studies/bitcoin-flywheel/sell-bitcoin-confirm.png)

**Receive Bitcoin** — Bring bitcoin from any external wallet into Fold. QR code, truncated address display, one-tap copy. Table stakes for any bitcoin wallet.

![QR code with truncated address and View details](/case-studies/bitcoin-flywheel/receive-bitcoin.png)

**Direct to Bitcoin** — Auto-convert 1-100% of every deposit into bitcoin. 25%, 50%, 100%, or custom percentage. No fees for premium members. Removes the friction of timing and decision fatigue.

## Product Decisions

| Decision | Why |
|----------|-----|
| Auto-fund Fold Card on sell | Only logical destination. Reinforces the spend loop. Solves the funding problem that plagues every fintech. |
| 25/50/100/Custom for Direct to Bitcoin | Serve the full spectrum—from 1% curious newcomers to 100% Get on Zero power users. |
| QR + copy + truncated address | Table stakes for any bitcoin wallet. Non-negotiable. |
| In-progress status for Receive | Two custodians with different webhook capabilities. Used the common denominator so everyone got the same UX. Showed "in progress" when it hit the blockchain waiting for confirmations, plus a push notification. Users needed to know their bitcoin wasn't lost. |
| $10 minimum for everyone | One custodian had $5 minimum, one had $10. Rather than different experiences based on which state you lived in, we set everyone at the higher minimum for consistent UX. |
| No fees for premium members | I pushed hard for this. Most competitive fees on the market. Huge differentiator for Fold+. |
| Fee transparency pill | You can give people value but you need to show them they're getting it. That "$0.00 fee" pill made the value visible. For free users, it became an upgrade path. |

## The Tradeoffs

**Launching separately, not all at once.** Ideally we would have launched buy, sell, and withdraw together—a clean in-and-out experience. But bandwidth meant we shipped them one at a time. We had to figure out the right order so each release still added standalone value.

The positive: our community knew we were scrappy. We were transparent about the roadmap and what was coming. People were excited we were shipping and willing to wait for the next piece.

**Settlement time for selling.** When you're selling bitcoin to spend on your Fold Card, you're doing it in the moment. You can't wait until end of day for settlement. I pushed compliance and finance to accept more risk and give users faster settlement. It meant Fold taking on more risk upfront, working with our banking partners and card issuing platform to make it happen. But it was necessary for the experience to work—and it was absolutely worth it.

**In-progress status limitations.** With bitcoin, if you send to the wrong address, it's gone forever. Users transferring bitcoin into Fold needed to know their funds weren't lost. But our two custodians had different webhook capabilities. We couldn't show live confirmation updates for everyone, so we used the common denominator: show "in progress" when it hit the blockchain, send a push notification. Not perfect, but enough to maintain trust.

**Entry point confusion.** We initially launched with separate Buy, Sell, Receive, Send buttons. User feedback was clear: too many options, confusing entry points. We consolidated to Buy, Sell, and a Transfer button containing Send/Receive. Entry point design matters as much as the features themselves.

## What I Learned

**Adding one feature can change your competitive set.** The moment we offered Buy Bitcoin, we were compared to Coinbase and Robinhood. That meant table stakes we didn't have suddenly became urgent.

**Serve the spectrum, not just the power user.** Get on Zero was compelling, but most users weren't ready for 100%. The same features needed to work for someone putting in 1%.

**Build with the community, not just for them.** Sahil helped shape the feature, got early access, gave feedback, wrote about it. That's how you build products people actually want.

**Show the value, don't just provide it.** Users need to feel the value they're getting. A "$0.00 fee" pill does more than just not charging fees—it makes the benefit visible.

**In regulated fintech, speed requires trust.** Faster settlement meant more risk. Getting compliance, finance, banking partners, and card platforms aligned required telling the product story clearly to all of them.

**Partners need the story too.** In regulated industries, compliance partners are stakeholders in your product story. Clarity builds trust and speeds things up.
