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
---

**Fold is a fintech app that lets users earn and spend bitcoin.** I led the product strategy to transform Fold from a rewards app into a complete bitcoin ecosystem—shipping three interconnected features over 6 months that enabled users to bring bitcoin in, convert it to spendable fiat, and auto-buy on every deposit.

This wasn't just feature work. It was positioning Fold to compete with Cash App and Robinhood ahead of an IPO.

## The Gap

When I assessed our product, I saw what was missing:

- Buy bitcoin in Fold
- Earn bitcoin rewards on spending
- Send bitcoin out to another wallet
- **Missing:** Bring bitcoin *in* from elsewhere
- **Missing:** Convert bitcoin to spendable fiat
- **Missing:** Auto-accumulate without thinking about it

We had half an ecosystem. Users who already owned bitcoin elsewhere couldn't bring it to Fold. Users who wanted to spend their bitcoin had no way to convert it to dollars for their Fold Card. The flywheel was broken.

## Understanding the Users

I partnered with Sahil, a prominent voice in the bitcoin community who was documenting the "Get on Zero" movement—hardcore bitcoiners who wanted to hold as little fiat as possible. They wanted to deposit their entire paycheck as bitcoin and only convert to fiat when absolutely necessary.

- [The Zero Dollar Manifesto - Part One](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-one)
- [The Zero Dollar Manifesto - Part Two](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-two)
- [The Zero Dollar Manifesto - Part Three](https://sahildesign.substack.com/p/the-zero-dollar-manifesto-part-three)

But that was one end of the spectrum. We also had users putting 1% of their deposits into bitcoin—just dipping their toes in. The features needed to serve both extremes and everyone in between.

I also leveraged the Discord community I'd helped build, including a "Friends of Fold" group of ~30 power users who would QA features before general release.

## What We Built

![Bitcoin home screen showing Buy/Sell/Transfer buttons and Automations section](/case-studies/bitcoin-flywheel/bitcoin-home.png)

![Send or receive modal with grouped options](/case-studies/bitcoin-flywheel/send-receive-modal.png)

**Sell Bitcoin** — Convert bitcoin to USD and automatically fund the Fold Card. No intermediate account, no manual transfer. The money goes exactly where users need it to spend.

<div class="screenshot-group">
  <img src="/case-studies/bitcoin-flywheel/sell-bitcoin-entry.png" alt="Sell bitcoin entry state showing fee transparency" />
  <img src="/case-studies/bitcoin-flywheel/sell-bitcoin-amount.png" alt="Real-time sat/dollar conversion showing $10 example" />
  <img src="/case-studies/bitcoin-flywheel/sell-bitcoin-confirm.png" alt="Full breakdown modal before confirmation" />
</div>

**Receive Bitcoin** — Bring bitcoin from any external wallet into Fold. QR code, truncated address display, one-tap copy. These were must-haves I fought for—table stakes for any bitcoin wallet.

<div class="screenshot-group">
  <img src="/case-studies/bitcoin-flywheel/receive-bitcoin.png" alt="QR code with truncated address and View details" />
  <img src="/case-studies/bitcoin-flywheel/receive-bitcoin-expanded.png" alt="Full address revealed with Copy button" />
</div>

**Direct to Bitcoin** — Auto-convert 1-100% of every deposit into bitcoin. 25%, 50%, 100%, or custom percentage. No fees for premium members. Removes the friction of timing and decision fatigue.

## Product Decisions

| Decision | Why |
|----------|-----|
| Auto-fund Fold Card on sell | Only logical destination. Reinforces the spend loop. Solves the funding problem that plagues every fintech. |
| 25/50/100/Other for Direct to Bitcoin | Encourage usage with clear options, but serve the full 1% to 100% user spectrum. |
| QR + copy + truncated address | Must-haves for any bitcoin wallet. I pushed hard for these. |
| Fee transparency component | Reusable across app. Shows "$0.00 processing fee" for Fold+ members, or "Upgrade for no fees" if not. Drives premium conversions. |

## The Complexity

Every feature touched multiple external partners:

- **Two bitcoin custodians** with different minimums, insurance coverage, and state restrictions
- **Banking partner** for all fiat movement
- **Card issuing platform** that needed sign-off on how fiat lands in accounts
- **Compliance & Legal** review on every screen showing bitcoin to fiat conversion

I learned that you have to tell the product story to partners as clearly as you tell it to users. If they don't understand what you're building, they default to caution—and that slows everything down.

## The Tradeoff

We initially launched with separate Buy, Sell, Receive, Send buttons. User feedback was clear: the entry points were confusing. We eventually consolidated to Buy, Sell, and a Transfer button containing Send/Receive.

I would have launched with that structure if we'd had more time for upfront research. Entry point design matters as much as the features themselves.

## What I Learned

**Entry points are product decisions.** Moving buttons changed adoption rates without changing the underlying features. UX isn't decoration—it's strategy.

**Less is more.** If explaining a feature takes longer than a few seconds, redesign it.

**Partners need the story too.** In regulated industries, compliance partners are stakeholders in your product story. Clarity builds trust and speeds things up.

**Connected features need connected marketing.** The flywheel only works if users understand how the pieces fit together.
