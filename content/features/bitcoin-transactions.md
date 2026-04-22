---
title: "Bridging Fiat and Bitcoin"
company: "Fold"
date: "2024"
description: "Three features over six months across two custodians with incompatible APIs: Direct to Bitcoin, Receiving Bitcoin, and Selling Bitcoin."
status: "Shipped"
category: "feature"
tags:
  - "Fintech"
  - "Bitcoin"
  - "Multi-custodian integration"
tag:
  label: "Bitcoin Transactions"
  color: "purple"
caseStudy:
  name: "Completing the flywheel and paving the way for IPO"
  slug: "fiat-bitcoin-ecosystem"
---

Fold had a Bitcoin rewards card and a Buy flow, but users couldn't bring bitcoin in, sell it to spend, or auto-accumulate on every deposit. Over six months I shipped the three features that closed those gaps — across two custodians with incompatible APIs.

## Direct to Bitcoin

**Most people want to stack Bitcoin but forget to do it.** They have good intentions, but manual buying requires opening the app, deciding how much, and executing—friction that kills follow-through.

Direct to Bitcoin removed the friction entirely. Users could set a percentage of every deposit—paycheck, transfer, any inbound funds—to automatically convert to Bitcoin. Set it once, forget it, stack sats forever.

This was the final piece of Fold's Bitcoin ecosystem. Combined with Sell Bitcoin and Receive Bitcoin, users now had a complete financial loop: money comes in, automatically converts to Bitcoin, and can be sent or sold whenever needed.

**The key insight:** People don't want to think about buying Bitcoin. They want to *have* bought Bitcoin. Auto-buy turns intention into action without requiring ongoing decisions.

**The impact:**

- **20% adoption** in the first month after launch
- Contributed to a **50% MoM increase** in Bitcoin trade volume across the ecosystem
- Enabled passive Bitcoin accumulation for users who'd never manually bought
- Completed the Bitcoin financial ecosystem alongside Sell and Receive features

## Receiving Bitcoin

**Deposit bitcoin from anywhere.** Receiving Bitcoin let users move bitcoin from external wallets into Fold—turning Fold from a closed rewards system into a real bitcoin wallet.

**Deposit address generation flow.** Designed the UX for generating and displaying deposit addresses. Key decisions included showing QR codes for easy mobile-to-mobile transfers, copy-to-clipboard functionality, and clear confirmation messaging when deposits arrived.

**Transaction status tracking.** Bitcoin transactions require network confirmations before they're final. Built the status UI showing pending, confirming, and completed states so users always knew where their deposit stood.

**Custodian coordination.** Worked with our bitcoin custodian partner to implement the deposit infrastructure. This involved API integration, security requirements, and transaction monitoring.

**Key product decision: on-chain only at launch.** The big question was whether to support Lightning Network deposits (instant, low-fee) or only on-chain deposits (slower, higher fees but more universal). We launched with on-chain only. Our target users were moving bitcoin from exchanges like Coinbase and Kraken, which primarily support on-chain withdrawals. Lightning would have added complexity for a use case most of our users didn't have yet.

## Selling Bitcoin

**Sell bitcoin, fund your card, spend dollars—all in one app.** No waiting for bank transfers, no external exchanges.

The ability to sell bitcoin and instantly fund your Fold Card was the third feature that completed the Bitcoin flywheel—turning Fold from a place to earn bitcoin into a complete bitcoin financial ecosystem.

**The sell flow UX.** Designed the end-to-end experience from initiating a sale to confirmation. Key decisions included showing real-time BTC/USD conversion, displaying fee breakdowns transparently, and making the Fold Card the default destination for funds.

**Fee transparency component.** Created a reusable component showing fee breakdowns for any transaction. For Spin+ members paying no fees, it reinforces their membership value. For free users, it serves as an upgrade entry point with a path back to the flow after upgrading.

**Auto-fund to Fold Card.** Rather than offering multiple destinations (bank account, hold as USD, etc.), I pushed for the Fold Card as the only option. This keeps users in the Fold ecosystem and reinforces the flywheel. Every bitcoin sold becomes spending power on the card, which earns more bitcoin.

**Key product decision: Fold Card as the only destination.** We could have offered bank transfers or holding USD in-app. But every option you add is friction, and every off-ramp out of the ecosystem breaks the flywheel. By making the card the only destination, we made the simplest possible flow while keeping users engaged in the earn-hold-spend cycle.

---

## Skills

Product ownership, user research, ecosystem thinking, technical coordination, UX design, fintech execution
