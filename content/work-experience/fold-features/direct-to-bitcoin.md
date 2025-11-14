---
title: "Direct to Bitcoin - Buy Bitcoin"
status: "Shipped"
tags: ["Trading", "Bitcoin", "Payments", "Conversion Optimization"]
date: "2023-11"
company: "Fold"
image: "/images/buy-bitcoin.png"
category: "feature"
description: "Launched Bitcoin buying feature with ACH integration, driving $2M+ monthly trading volume and 50% MoM growth."
impact:
  - "$2M+ monthly trading volume"
  - "50% month-over-month growth"
  - "85% buy completion rate"
  - "Average purchase: $250"
---

## Overview

Enabled users to buy Bitcoin directly within Fold using ACH bank transfers. This was a foundational feature that transformed Fold from a rewards-only app into a complete Bitcoin financial platform.

## The Problem

Users were earning Bitcoin through Fold's rewards program but had no way to buy additional Bitcoin within the app. They had to:
1. Transfer money out of Fold
2. Buy Bitcoin on another platform (Coinbase, Cash App)
3. Transfer Bitcoin back to Fold

This created massive friction and lost revenue opportunity.

## The Solution

One-tap Bitcoin buying:
- Link bank account via Plaid
- Enter USD amount
- Instant Bitcoin credit (for verified users)
- Settle ACH in background (3-5 days)

## My Role

- Defined product requirements and user flows
- Coordinated with Banking Partner and custody provider
- Designed conversion-optimized purchase flow
- Built fraud prevention and risk management rules
- Launched and iterated based on conversion data

## Impact

- **$2M+ monthly trading volume** within 6 months
- **50% month-over-month growth** in first 4 months
- **85% purchase completion rate** (industry avg: 65%)
- **Average purchase size**: $250
- **Repeat purchase rate**: 60% of buyers made 2+ purchases

## Key Features

### Instant Credit (for Trusted Users)
- Verified users got Bitcoin immediately (not waiting 3-5 days for ACH)
- Built risk model to determine eligible users
- Drove 35% increase in conversion vs. delayed credit

### Recurring Buys (Dollar-Cost Averaging)
- Set up automatic weekly/monthly Bitcoin purchases
- 40% of users who enabled recurring became long-term retained users
- Average recurring amount: $100/week

### Price Alerts
- Push notification when Bitcoin hit target price
- "Buy the dip" messaging drove impulse purchases
- 28% of price alert recipients made purchase within 1 hour

## Technical Highlights

- **Plaid Integration**: Secure bank account linking
- **ACH Processing**: Payment rails integration
- **Fraud Prevention**: Velocity limits, device fingerprinting
- **Price Feeds**: Real-time Bitcoin price updates (sub-second latency)
- **Custody Integration**: Secure Bitcoin settlement

## What I Learned

- **Conversion optimization**: A/B tested 12 variations of purchase flow
- **Payment rails**: Deep understanding of ACH, wire transfers, instant settlement
- **Fraud patterns**: Learned common attack vectors and prevention
- **Bitcoin trading psychology**: When users buy, how much, what triggers purchases

---

## Skills Demonstrated

- Payments & Financial Infrastructure
- ACH & Banking Integration (Plaid)
- Conversion Rate Optimization
- Fraud Prevention & Risk Management
- Bitcoin Trading & Custody
- A/B Testing & Experimentation
- Real-Time Price Feeds
- Mobile Commerce UX
