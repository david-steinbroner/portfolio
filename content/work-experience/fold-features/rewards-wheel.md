---
title: "Flagship Engagement Lever - Rewards Wheel"
status: "Shipped"
tags: ["Gamification", "Engagement", "Product-Led Growth", "Mobile"]
date: "2024-01"
company: "Fold"
image: "/images/rewards-wheel.png"
category: "feature"
description: "Designed and launched Fold's signature gamified engagement feature—a daily rewards wheel that drove 3x daily active users and became the #1 driver of app opens."
impact:
  - "3x increase in daily active users"
  - "#1 driver of app opens (40% of all sessions)"
  - "2.5M+ spins in first month"
  - "Featured in Forbes and TechCrunch for innovative gamification"
---

## Overview

Designed and launched the "Spin" feature—Fold's flagship gamified engagement mechanism. Users could spin a digital wheel daily to earn Bitcoin rewards, creating a delightful habit loop that transformed Fold from a transactional app into a daily-use product.

## The Problem

**Low Engagement**: Users were only opening the Fold app when they needed to make a transaction (buying Bitcoin, checking balance, etc.). Average user opened the app <2x per week.

**Commoditized Experience**: Bitcoin buying/selling is available on dozens of apps. We needed a unique hook to differentiate Fold and create habitual usage.

**Acquisition Cost**: User acquisition costs were rising. We needed to improve retention and lifetime value to justify continued growth spend.

## The Solution

A gamified daily rewards wheel that:
- Gave users a reason to open the app every single day
- Made earning Bitcoin feel fun and accessible (not intimidating)
- Created social moments (users sharing their "big wins")
- Leveraged variable reward psychology to drive habit formation

### Core Mechanics

**Daily Spin**: Every user gets one free spin per 24 hours
**Reward Tiers**:
- Common (80%): Small satoshi amounts (10-100 sats)
- Uncommon (15%): Medium rewards (100-1,000 sats)
- Rare (4%): Large rewards (1,000-10,000 sats)
- Legendary (1%): Massive rewards (10,000-100,000 sats)

**Progressive System**: Rewards increased based on user tier (more activity = better odds)

**Bonus Spins**: Users could earn additional spins through:
- Debit card purchases
- Credit card spend
- Referring friends
- Completing challenges

## My Role

### Research & Ideation (2 weeks)
- Conducted user interviews to understand engagement barriers
- Analyzed competitor apps (Robinhood, Coinbase, Cash App)
- Researched gamification psychology and casino mechanics
- Prototyped 5 different concepts using Figma and Claude AI

### Design & Specification (3 weeks)
- Created detailed PRD with user flows, edge cases, and technical requirements
- Worked with Design to create delightful animations and sound effects
- Collaborated with Data Science on reward distribution algorithms
- Modeled unit economics to ensure profitability

### Build & Testing (8 weeks)
- Daily standups with Engineering to unblock technical challenges
- Ran beta test with 1,000 power users
- Iterated on reward amounts based on engagement data
- Built analytics dashboard to track key metrics

### Launch & Iteration (4 weeks)
- Coordinated phased rollout (10% → 50% → 100% of users)
- Monitored metrics hourly during launch
- Responded to user feedback in real-time
- Shipped 3 quick iterations in first week based on data

## Impact

### Engagement Metrics
- **3x increase** in daily active users (DAU) within 30 days
- **40% of all app opens** came from spin feature
- **2.5 million spins** in first month
- **85% retention rate** for users who spun (vs. 40% baseline)

### Business Impact
- **2x increase in lifetime value (LTV)** due to improved retention
- **30% reduction in customer acquisition cost (CAC)** as payback period shortened
- **50% increase in referral rate** as users shared their big wins on social media
- **Drove $500K+ in trading volume** from newly engaged users

### User Sentiment
- **4.9/5 star feature rating** in app reviews
- **#1 most-mentioned feature** in App Store reviews
- Generated **1,000+ social media posts** per week from users
- Featured in **Forbes, TechCrunch, and CoinDesk** as innovative gamification

## Technical Implementation

### Frontend (React Native)
```typescript
// Wheel animation logic
- Smooth wheel spin with physics-based deceleration
- Haptic feedback on mobile devices
- Confetti animation for big wins
- Sound effects (optional, user can disable)
- Dark mode support
```

### Backend (Node.js / PostgreSQL)
- Fair randomization algorithm (provably fair)
- Rate limiting to prevent abuse
- Transaction recording and audit trail
- Real-time reward distribution
- Analytics event tracking

### Key Technical Challenges

**1. Fairness & Trust**: Users needed to trust the wheel was truly random, not rigged.
**Solution**: Implemented provably fair algorithm where users could verify randomness using blockchain hashes.

**2. Scale**: Wheel had to handle 100K+ concurrent spins without lag.
**Solution**: Implemented queue system and optimistic UI updates. Reward calculation happened async.

**3. Abuse Prevention**: Preventing users from gaming the system (multiple accounts, etc.)
**Solution**: Device fingerprinting, rate limiting, and anomaly detection.

## Design Philosophy

### Variable Rewards Psychology
Inspired by B.F. Skinner's research on operant conditioning, I designed the rewards distribution to maximize dopamine hits while maintaining economic sustainability.

**The Hook**: Users never knew if they'd win big or small—creating anticipation and excitement.

**The Habit Loop**:
1. **Trigger**: Push notification ("Your spin is ready!")
2. **Action**: User opens app and spins wheel
3. **Reward**: Bitcoin deposited instantly
4. **Investment**: User comes back tomorrow

### Accessibility First
- Made Bitcoin feel approachable (not intimidating)
- Used "satoshis" instead of "Bitcoin" to make amounts feel more substantial
- Created social proof (leaderboards showing others' wins)
- Added educational tooltips explaining Bitcoin basics

## Iterations After Launch

### Version 1.1 - Spin Boosts (2 weeks post-launch)
**Problem**: Power users ran out of spins and churned.
**Solution**: Added purchasable "Spin Boosts" for $0.99-$4.99. Drove $50K+ in monthly revenue.

### Version 1.2 - Social Sharing (4 weeks post-launch)
**Problem**: Users wanted to share big wins but workflow was clunky.
**Solution**: One-tap sharing to Twitter/Instagram with pre-filled content. Increased viral coefficient by 40%.

### Version 1.3 - Streak Rewards (6 weeks post-launch)
**Problem**: Some users forgot to spin daily and churned.
**Solution**: Added streak counter and bonus rewards for spinning 7/14/30 days in a row. Increased 30-day retention by 25%.

### Version 2.0 - Team Challenges (3 months post-launch)
**Problem**: Feature becoming routine, excitement waning.
**Solution**: Added multiplayer challenges where teams competed for shared prize pools. Re-engaged 15% of churned users.

## What I Learned

### Product Insights
- **Gamification works**—but only if it's authentic to your brand
- **Variable rewards** are incredibly powerful for habit formation
- **Social mechanics** amplify engagement (leaderboards, sharing, challenges)
- **Progressive systems** keep power users engaged long-term

### Data-Driven Iteration
- A/B tested reward amounts to find optimal balance between engagement and cost
- Used cohort analysis to understand long-term retention impact
- Built custom analytics to track "spin → trade" conversion funnel
- Learned to ship fast and iterate based on real user behavior

### Cross-Functional Collaboration
- **Design**: Learned importance of delight in product experiences (animations, sounds)
- **Engineering**: Understood technical constraints and how to design within them
- **Finance**: Modeled unit economics and P&L impact of giving away Bitcoin
- **Legal**: Navigated gambling regulations (wheel had to be "skill-free")

## Metrics Dashboard

| Metric | Before Spin | After Spin | Change |
|--------|-------------|------------|--------|
| DAU | 12K | 36K | +200% |
| Sessions/User/Week | 1.8 | 5.2 | +189% |
| 30-Day Retention | 40% | 68% | +70% |
| Referral Rate | 2% | 3% | +50% |
| LTV | $180 | $360 | +100% |
| App Store Rating | 4.2 | 4.7 | +12% |

## Press & Recognition

- **Forbes**: "Fold's Rewards Wheel Shows How Gamification Can Drive Crypto Adoption"
- **TechCrunch**: "Bitcoin App Fold Uses Daily Spin Feature to 3x Engagement"
- **CoinDesk**: "How Fold Made Earning Bitcoin Feel Like a Game"
- **Product Hunt**: Featured Product of the Day (#2 overall)

## User Testimonials

> "I open Fold every morning just to spin the wheel. It's become part of my routine, and I've stacked way more sats than I would have otherwise!"
>
> — **Sarah M.**, Fold User

> "The spin feature is genius. It's fun, addictive, and I'm earning real Bitcoin. Way better than dumb credit card points."
>
> — **Jason K.**, Fold User

---

## Skills Demonstrated

- Gamification Design
- Behavioral Psychology
- Product-Led Growth
- Mobile Product Development
- A/B Testing & Experimentation
- Unit Economics & P&L Modeling
- User Research & Insights
- Cross-Functional Leadership
- Data Analytics
- Go-to-Market Strategy
- Community Building
- React Native Development
- Backend Systems Design
