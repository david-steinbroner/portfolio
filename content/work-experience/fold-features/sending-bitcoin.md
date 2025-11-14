---
title: "Sending Bitcoin"
status: "Shipped"
tags: ["Bitcoin", "Payments", "P2P", "Mobile"]
date: "2024-03"
company: "Fold"
image: "/images/sending-bitcoin.png"
category: "feature"
description: "Enabled peer-to-peer Bitcoin sending, completing Fold's ecosystem and driving 40% increase in active wallet usage."
impact:
  - "40% increase in active wallet usage"
  - "Completed full Bitcoin transaction cycle"
  - "25% of users sent Bitcoin within first month"
  - "Average transaction value: $180"
---

## Overview

Launched peer-to-peer Bitcoin sending functionality, allowing Fold users to send Bitcoin to any wallet address worldwide. This completed the core Bitcoin transaction loop (earn → buy → sell → send → receive) and transformed Fold from a savings app into a true Bitcoin wallet.

## The Problem

**Incomplete Ecosystem**: Users could earn and buy Bitcoin in Fold, but couldn't send it anywhere. This created a "walled garden" feeling that limited Fold's utility.

**User Demand**: #1 requested feature with 5,000+ support requests and 200+ App Store reviews asking for send functionality.

**Competitive Pressure**: Every other Bitcoin app (Cash App, Coinbase, Strike) offered sending. Fold was falling behind.

**Strategic Gap**: To position as a full Bitcoin wallet (not just rewards app), sending was non-negotiable.

## The Solution

Built a simple, secure Bitcoin sending flow:
- Enter amount (USD or BTC)
- Paste or scan recipient address
- Review transaction details
- Confirm with biometric auth
- Track transaction on blockchain

### Key Design Principles

**Security First**: Multi-layer verification to prevent user error and fraud
**Speed Matters**: On-chain transactions in < 10 minutes
**Education Built-In**: Helped users understand Bitcoin transactions
**Mobile-Optimized**: QR code scanning for easy address entry

## My Role

- **Product Strategy**: Defined feature requirements and competitive positioning
- **Risk Management**: Worked with Security and Compliance to prevent fraud
- **Technical Coordination**: Led Engineering on blockchain integration and fee estimation
- **User Education**: Created in-app guides and help center content
- **Launch Planning**: Coordinated phased rollout and monitored for issues

## Impact

- **40% increase in active wallet usage** within 60 days
- **25% of users** sent Bitcoin within first month of launch
- **Average transaction value**: $180 (higher than industry average of $120)
- **App Store rating improvement**: 4.2 → 4.6 stars
- **Support request reduction**: Eliminated 200+ monthly "when can I send?" requests

## Technical Highlights

### Smart Fee Estimation
Built dynamic fee calculator that:
- Estimated confirmation time based on current mempool
- Offered three fee tiers (Economy, Standard, Priority)
- Showed USD cost of each tier
- Updated in real-time as network conditions changed

### Address Validation
Implemented comprehensive validation:
- Checksum verification to prevent typos
- Address format detection (Legacy, SegWit, Taproot)
- Warning for address reuse
- Saved address book for frequent recipients

### Transaction Monitoring
Real-time transaction tracking:
- Push notifications at each confirmation
- Blockchain explorer deep links
- Clear explanation of confirmation process
- Support for RBF (Replace-By-Fee) for stuck transactions

## What I Learned

- **Bitcoin protocol**: Deep understanding of UTXOs, fees, confirmations
- **Security UX**: Balancing security with usability
- **User education**: Teaching complex concepts (blockchain confirmations) simply
- **Risk management**: Preventing fraud while maintaining good UX

---

## Skills Demonstrated

- Bitcoin Protocol & Blockchain Technology
- Security & Fraud Prevention
- Mobile Payments UX
- User Education & Onboarding
- Risk Management
- Fee Estimation & Optimization
- QR Code Integration
- Real-Time Data Updates
