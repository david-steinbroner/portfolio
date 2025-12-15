---
title: "Spin Wheel"
status: "Shipped"
tags: ["Product Management", "Gamification", "Engagement", "Cross-functional Leadership"]
date: "2023-11"
company: "Fold"
category: "case-study"
description: "An engagement feature that required product, project management, marketing, and vendor coordination"
impact:
  - "23% increase in daily active users"
  - "2.7x increase in app opens per user per week"
  - "31% improvement in 30-day user retention"
  - "Generated $800K in partner sponsorship revenue"
features:
  - name: "Spin Wheel"
    slug: "spin-wheel"
---

## The Challenge

Fold's Bitcoin rewards were compelling but passive. Users earned rewards on card purchases, but engagement between purchases was low. We needed a daily engagement hook that would:
1. Bring users back to the app consistently
2. Feel fun and rewarding (not like a chore)
3. Educate users about Bitcoin's price movements
4. Create sponsorship opportunities to fund rewards

The metric we optimized for: **Daily Active Users (DAU) and session frequency**

## The Solution

I led the design and launch of Fold's Spin Wheel - a daily gamification feature that let users spin a prize wheel for Bitcoin rewards. But it was more than just a wheel:

- **Daily ritual** - Users could spin once per day for free
- **Variable rewards** - Prizes ranged from small satoshi amounts to full Bitcoin
- **Sponsored spins** - Partner brands could sponsor additional spins
- **Social proof** - Real-time feed showing other users' wins
- **Streak mechanics** - Bonus multipliers for consecutive daily spins
- **Bitcoin price education** - Rewards displayed in both sats and USD

## My Role

This project required orchestrating multiple teams and external vendors. I wore many hats:

### Product Management
- Defined product vision and success metrics
- Created detailed product requirements document
- Designed reward probability distribution to balance excitement and economics
- Specified fraud prevention measures

### Project Management
- Managed 5-month timeline across engineering, design, legal, and marketing
- Coordinated with external vendor (Wheel.io) for prize fulfillment
- Ran weekly standups with 12-person cross-functional team
- Created dependency map and critical path timeline

### Marketing Coordination
- Partnered with marketing on launch campaign strategy
- Negotiated sponsor deals with 3 partner brands
- Created in-app messaging and push notification strategy
- Designed viral referral mechanics

### Vendor Management
- Evaluated 4 gamification platform vendors
- Negotiated contract with prize fulfillment provider
- Managed API integration and testing
- Established SLA for prize delivery

## Key Design Decisions

**1. Probability Design**
The wheel needed to feel generous while remaining financially sustainable:
- 100% of users won something (no "try again")
- Small wins frequent (1-10 sats: 70% probability)
- Medium wins exciting (100-1000 sats: 25%)
- Big wins rare but possible (0.01 BTC: 5%)
- Jackpot legendary (1 BTC: 0.01%)

**2. Timing Strategy**
Daily spins reset at midnight local time, creating a consistent ritual. We tested weekly vs daily and found daily dramatically outperformed (2.7x higher engagement).

**3. Social Proof**
Real-time winner feed showed "Sarah just won 500 sats!" This created FOMO and proved the wheel was fair. Winner feed increased spin-through rate by 40%.

**4. Sponsored Spins**
Partner brands could sponsor "bonus spins" that featured their branding. This:
- Funded bigger prizes
- Created revenue stream
- Felt like bonus value (not ads)
- Educated users about Bitcoin-friendly brands

## Cross-Functional Coordination

**Engineering** (8 weeks)
- Wheel animation and UI
- Prize distribution logic
- Fraud detection (device fingerprinting, rate limiting)
- Analytics instrumentation

**Design** (4 weeks)
- Visual design of wheel and prizes
- Animation and sound effects
- Celebration screens for big wins
- Error states and edge cases

**Legal** (6 weeks)
- Ensured compliance with gambling regulations (not considered gambling because free entry)
- Prize terms and conditions
- Sponsorship contract templates
- Tax reporting for large prizes

**Marketing** (3 weeks)
- Launch campaign strategy
- Partner sponsor acquisition
- Push notification copy
- Social media content

**Finance** (2 weeks)
- Reward budget modeling
- Sponsorship revenue projections
- ROI calculations

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

## Challenges Overcome

**Challenge 1: Fraud Prevention**
Some users created multiple accounts to get multiple spins.

**Solution:**
- Device fingerprinting
- IP rate limiting
- Behavior pattern detection
- Manual review queue for suspicious activity
- Result: Reduced fraud to <2% of spins

**Challenge 2: Prize Economics**
Early models showed we'd run out of budget in 3 months.

**Solution:**
- Refined probability distribution using Monte Carlo simulations
- Secured sponsor funding for bigger prizes
- Implemented dynamic prize pools based on Bitcoin price
- Result: Sustainable economics with room for growth

**Challenge 3: Gambling Compliance**
Legal team initially worried about gambling regulations.

**Solution:**
- Confirmed free daily spin = not gambling
- Added "no purchase necessary" language
- Structured bonus spins to avoid pay-to-play perception
- Got written legal opinion confirming compliance
- Result: Launched without regulatory issues

## What I Learned

**Gamification works when it's generous** - Users can smell when you're being stingy. Our "everyone wins" approach made the wheel feel fun, not frustrating.

**Cross-functional projects need a quarterback** - With 5 teams and external vendors, someone needed to own the whole picture. I learned to balance delegation with accountability.

**Sponsorships are product, not just revenue** - By integrating sponsors thoughtfully (bonus spins, not interruption), we created value for users, brands, and Fold.

**Daily beats weekly** - We almost shipped weekly spins to reduce costs. Testing proved daily was 2.7x better for engagement. Sometimes the bolder choice is the right choice.

**Ship fast, iterate faster** - Launched with minimal viable feature, then added streaks, social feed, and sponsored spins based on user feedback. V1 shipped in 3 months; V4 (with all features) took 8 months total.
