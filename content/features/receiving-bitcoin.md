---
title: "Receiving Bitcoin"
company: "Fold"
date: "2024"
description: "Bring bitcoin from any external wallet into Fold"
status: "Shipped"
tags: ["Bitcoin", "Fintech", "Product Strategy"]
category: "feature"
caseStudy:
  name: "The Bitcoin Flywheel"
  slug: "bitcoin-flywheel"
---

The ability to receive bitcoin from external wallets was table stakes for any bitcoin wallet - and a feature I fought hard to prioritize. Without it, users who already owned bitcoin elsewhere couldn't fully participate in the Fold ecosystem.

## What It Is

A deposit flow that lets users send bitcoin from any external wallet (Coinbase, hardware wallets, other exchanges) into their Fold account. Features include QR code display, truncated address with one-tap copy, and full address reveal.

## What I Built

**QR code generation** - Standard for any crypto receive flow, but important to get right. The QR code needed to be scannable from other wallet apps and sized appropriately for mobile screens.

**Address display UX** - Bitcoin addresses are long and error-prone. I designed a truncated display (first and last characters visible) with one-tap copy to clipboard, plus an option to reveal the full address for users who want to verify manually.

**Confirmation flow** - Clear feedback when bitcoin is detected on the network, pending confirmations, and final deposit confirmation. Users needed to understand why deposits aren't instant (blockchain confirmation times) without us over-explaining.

## Why It Matters

This was a must-have I advocated for internally. The Fold Card was great for earning bitcoin on purchases, but we were excluding anyone who already held bitcoin elsewhere. They couldn't participate in the flywheel because they couldn't bring their existing holdings in.

With Receiving Bitcoin in place, users could consolidate their bitcoin in Fold, then use Selling Bitcoin to liquidate when needed, or just hold and continue stacking through card rewards.

## Skills Demonstrated

- Advocating for user needs against competing priorities
- Designing crypto UX that balances security with usability
- Understanding table-stakes features vs. differentiators
- Fitting features into a larger product ecosystem strategy

*Screenshots available upon request*

[Read the full case study: The Bitcoin Flywheel →](/case-studies/bitcoin-flywheel)
