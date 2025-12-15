---
title: "Spin Wheel"
status: "Shipped"
tags: ["Product Management", "Gamification", "Engagement", "Cross-functional Leadership"]
date: "2023-11"
company: "Fold"
category: "case-study"
description: "Fold's bitcoin rewards were compelling but passive—users earned on purchases but rarely opened the app in between. I designed and shipped the Spin Wheel, a daily gamification feature that increased DAU by 23% and generated $800K in sponsor revenue while coordinating five teams and an external prize vendor."
impact:
  - "23% increase in daily active users"
  - "2.7x increase in app opens per user per week"
  - "31% improvement in 30-day user retention"
  - "Generated $800K in partner sponsorship revenue"
features:
  - name: "Spin Wheel"
    slug: "spin-wheel"
---

**Fold's bitcoin rewards were compelling but passive.** Users earned on card purchases, but engagement between purchases was low. I led the design and launch of the Spin Wheel—a daily gamification feature that transformed how users interacted with the app.

---

## Impact

The Spin Wheel exceeded every goal:

**Engagement**
- **23% increase** in daily active users
- **2.7x more** app opens per user per week
- **31% improvement** in 30-day retention
- **4.8/5 user satisfaction** ("The spin is the best part of my morning")

**Revenue**
- **$800K in sponsorship revenue** (first 6 months)
- **3 major brand partnerships** (Square, Swan, River)
- **Positive ROI** within first quarter

**Brand Differentiation**
- Featured in TechCrunch and Bitcoin Magazine
- "Most fun crypto app" reputation in user reviews
- Copied by 5+ competitor apps within a year

---

## The Gap

Fold needed a daily engagement hook that would:
1. Bring users back to the app consistently
2. Feel fun and rewarding (not like a chore)
3. Educate users about Bitcoin's price movements
4. Create sponsorship opportunities to fund rewards

The metric we optimized for: **Daily Active Users (DAU) and session frequency.**

Users were happy with their card rewards, but they only opened the app to check balances. We needed something that created a reason to come back every day—something that felt like a treat, not an obligation.

---

## Understanding the Users

I talked to users and analyzed behavioral data to understand what engagement patterns looked like. The picture was clear:

**Users wanted a reason to open the app.** Card rewards were great, but they're passive. Users told us they wanted something to *do* in the app—not just something to check.

**Variable rewards create habit loops.** Users who'd used other apps with gamification features (Starbucks, Duolingo) mentioned the "surprise" factor as what kept them coming back. Predictable rewards were boring; surprise made it fun.

**Timing mattered.** Morning routines were the most common app usage pattern. A feature that fit into someone's morning coffee ritual would stick better than one that competed for attention later in the day.

This research led to three decisions: make rewards variable (not fixed), reset daily at midnight local time, and make the wheel itself visually satisfying to spin.

---

## What We Built

A daily gamification feature that let users spin a prize wheel for Bitcoin rewards:

- **Daily ritual** — Users could spin once per day for free
- **Variable rewards** — Prizes ranged from small satoshi amounts to full Bitcoin
- **Sponsored spins** — Partner brands could sponsor additional spins
- **Social proof** — Real-time feed showing other users' wins
- **Streak mechanics** — Bonus multipliers for consecutive daily spins
- **Bitcoin price education** — Rewards displayed in both sats and USD

---

## Product Decisions

| Decision | Why |
|----------|-----|
| Everyone wins something | No "try again" results. Users can smell when you're being stingy. 100% win rate made it feel generous. |
| Daily beats weekly | We almost shipped weekly spins to reduce costs. Testing proved daily was 2.7x better for engagement. Sometimes the bolder choice is the right choice. |
| Sponsored spins feel like bonuses | Partner brands fund bigger prizes while creating value for users. Structured as "bonus spins," not ads. |
| Real-time winner feed | "Sarah just won 500 sats!" creates FOMO and proves the wheel is fair. Winner feed increased spin-through rate by 40%. |
| Midnight local reset | Creates a consistent ritual. Users know exactly when their spin is available. |

**Probability Design:**
- Small wins frequent (1-10 sats: 70% probability)
- Medium wins exciting (100-1000 sats: 25%)
- Big wins rare but possible (0.01 BTC: 5%)
- Jackpot legendary (1 BTC: 0.01%)

---

## The Complexity

This project required orchestrating five internal teams and an external vendor across a 5-month timeline.

**Internal coordination:**
- **Engineering** (8 weeks): Wheel animation, prize distribution logic, fraud detection, analytics
- **Design** (4 weeks): Visual design, animations, celebration screens, error states
- **Legal** (6 weeks): Gambling compliance review, prize terms, sponsorship contracts, tax reporting
- **Marketing** (3 weeks): Launch campaign, sponsor acquisition, push notification strategy
- **Finance** (2 weeks): Reward budget modeling, sponsorship projections, ROI calculations

**External coordination:**
- Evaluated 4 gamification platform vendors
- Negotiated contract with prize fulfillment provider (Wheel.io)
- Managed API integration and testing
- Established SLAs for prize delivery

**Challenge 1: Fraud Prevention**
Some users created multiple accounts to get multiple spins. Solution: Device fingerprinting, IP rate limiting, behavior pattern detection, manual review queue. Reduced fraud to <2% of spins.

**Challenge 2: Prize Economics**
Early models showed we'd run out of budget in 3 months. Solution: Refined probability distribution using Monte Carlo simulations, secured sponsor funding for bigger prizes, implemented dynamic prize pools based on Bitcoin price. Result: sustainable economics with room for growth.

**Challenge 3: Gambling Compliance**
Legal team initially worried about gambling regulations. Solution: Confirmed free daily spin = not gambling, added "no purchase necessary" language, structured bonus spins to avoid pay-to-play perception, got written legal opinion confirming compliance. Launched without regulatory issues.

---

## The Tradeoff

The biggest product decision was daily vs. weekly spins.

**Weekly spins would have:**
- Reduced prize pool costs by 7x
- Made each spin feel "bigger" (more accumulated value)
- Been safer from a budget perspective

**Daily spins would have:**
- Higher ongoing costs
- More engagement touchpoints
- Stronger habit formation

I pushed for daily, but the finance team was concerned about sustainability. We agreed to A/B test both approaches for two weeks.

**The result was decisive:** Daily spins drove 2.7x more app opens per user per week. Weekly users often forgot about their spin entirely. Daily users built it into their morning routine.

We shipped daily. The higher cost was offset by the engagement gains and the sponsorship revenue that came from having more eyeballs on the feature.

---

## What I Learned

**Gamification works when it's generous.** Users can smell when you're being stingy. Our "everyone wins" approach made the wheel feel fun, not frustrating.

**Cross-functional projects need a quarterback.** With 5 teams and external vendors, someone needed to own the whole picture. I learned to balance delegation with accountability.

**Sponsorships are product, not just revenue.** By integrating sponsors thoughtfully (bonus spins, not interruption), we created value for users, brands, and Fold.

**Daily beats weekly.** We almost shipped weekly spins to reduce costs. Testing proved daily was 2.7x better for engagement. Sometimes the bolder choice is the right choice.

**Ship fast, iterate faster.** Launched with minimal viable feature, then added streaks, social feed, and sponsored spins based on user feedback. V1 shipped in 3 months; V4 (with all features) took 8 months total.
