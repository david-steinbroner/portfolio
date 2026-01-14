---
title: "Receiving Bitcoin"
company: "Fold"
date: "2024"
description: "External Bitcoin deposits into Fold wallets"
status: "Shipped"
tags: ["Bitcoin", "Fintech", "Product Strategy"]
category: "feature"
caseStudy:
  name: "The Bitcoin Flywheel"
  slug: "bitcoin-flywheel"
---

**Deposit bitcoin from anywhere.** Receiving Bitcoin let users move bitcoin from external wallets into Fold—turning Fold from a closed rewards system into a real bitcoin wallet.

---

## What I Built

**Deposit address generation flow** - Designed the UX for generating and displaying deposit addresses. Key decisions included showing QR codes for easy mobile-to-mobile transfers, copy-to-clipboard functionality, and clear confirmation messaging when deposits arrive.

**Transaction status tracking** - Bitcoin transactions require network confirmations before they're final. Built the status UI showing pending, confirming, and completed states so users always knew where their deposit stood.

**Custodian coordination** - Worked with our bitcoin custodian partner to implement the deposit infrastructure. This involved API integration, security requirements, and transaction monitoring.

---

## Key Product Decision

The big question was whether to support Lightning Network deposits (instant, low-fee) or only on-chain deposits (slower, higher fees but more universal). We launched with on-chain only. Why? Our target users were moving bitcoin from exchanges like Coinbase and Kraken, which primarily support on-chain withdrawals. Lightning would have added complexity for a use case most of our users didn't have yet.

---

## Skills

Product ownership, technical coordination, UX design, fintech execution
