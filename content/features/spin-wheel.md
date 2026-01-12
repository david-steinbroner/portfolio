---
title: "Spin Wheel"
company: "Fold"
date: "2024"
description: "Fold's flagship engagement feature - evolved from unsustainable beloved reward mechanic to a sustainable model that works at any Bitcoin price"
status: "Shipped"
tags: ["Product Strategy", "Pricing Models", "Community", "Engagement", "Rewards"]
category: "feature"
caseStudy:
  name: "The Most Public Feature at the Company, and I Had to Make It Worse"
  slug: "spin-wheel"
---

The Spin Wheel was Fold's most beloved feature and its biggest financial liability. I inherited it and spent 18 months evolving it from an unsustainable reward mechanic (3.5% average rewards tied to Bitcoin price) to a sustainable engagement engine that still drives 50k daily spins.

## What It Is

A daily spin wheel where users win sats (bitcoin). Simple on the surface, but the journey to get here was anything but.

The wheel started as a purchase-tied reward system: buy something with your Fold Card, spin for rewards up to 100% back. Users loved it. The problem was that as Bitcoin's price rose, our reward costs scaled with it. We were on track to reward ourselves out of existence.

## What I Did

I owned this feature end-to-end for 18 months: product strategy, pricing models, community communication, GTM, and internal tooling.

**Iterated through multiple reward models** - from purchase-tied spins to base rate plus wheel, to choose-your-own-reward, to action-based earning, and finally to simple daily free spins. Each iteration taught us something about what users actually valued versus what we thought they valued.

**Built self-service admin tooling** - spec'd and shipped an internal tool that let me control odds, prizes, scheduling, and design components without engineering. This enabled monthly themed wheel launches, seasonal campaigns, and sponsorship integrations.

**Created a sponsorship program** - turned the wheel from a cost center into a revenue stream. Built tiered packages ($10k-$20k), sales collateral with engagement metrics, and managed sponsor relationships end-to-end.

**Built a sustainable pricing model** - replaced a legacy VM-based simulation (15-minute runs) with a Google Sheets model that pulls live Bitcoin price and works at any price up to $1M. Target cost per spin: ~$0.01.

**Shipped winner notifications** - push alerts when someone wins 100k+ sats (roughly every 1.5 days) drive engagement through FOMO rather than complexity.

## The Key Insight

Users don't build spreadsheets to maximize rewards on a debit card. Every layer of complexity we added - 3x3 earning mechanics, spin banks, tiered wheels - made the product feel less like a reward and more like homework.

The final model is the simplest: one free spin per day, flat sat prizes, 24-hour expiration, daily push reminders. Spin+ users get all wedges including a chance at 1 BTC. Free users see locked wedges with an upgrade CTA.

## Current State

- ~50k daily spins
- Sustainable at any Bitcoin price up to $1M
- Spins used as promotional currency for feature launches
- Winner notifications drive regular engagement spikes
- One wheel (retired the separate Purchase Wheel entirely)

![Daily free spins wheel - the final, simplified model](/case-studies/spin-wheel/spin-wheel-daily-spins.png)

[Read the full case study →](/case-studies/spin-wheel)
