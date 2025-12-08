---
title: "Discovering Magic"
status: "In Progress"
tags: ["Product Design", "Gaming", "UX", "Accessibility"]
date: "2024-11"
link: ""
github: ""
image: "/images/mtg-deck-match.png"
category: "project"
description: "30-second personality quiz that matches Magic: The Gathering players with their perfect Commander deck. No lore required. No gatekeeping."
impact:
  - "Accessibility-first design for new players"
  - "Reduces choice paralysis in Commander format"
  - "Quiz-based personalization approach"
  - "Lowers barriers to entry for intimidated players"
---

## Overview

MTG Deck Match is a web application that helps new Magic: The Gathering players find their perfect Commander deck through a simple, fun personality quiz. **Tagline: "Answer a few questions and get a ready-to-play deck that feels like you."**

## The Problem

### Choice Paralysis
Magic: The Gathering's Commander format has:
- **1,300+ legendary creatures** that can be commanders
- **Thousands of deck archetypes** and strategies
- **20,000+ unique cards** to choose from

For new players, this is overwhelming and intimidating.

### Gatekeeping Culture
The MTG community can be unwelcoming to newcomers:
- Expectation of lore knowledge
- Jargon-heavy communication (EDHREC, cEDH, battlecruiser, etc.)
- Assumption of competitive knowledge
- "Net-decking" shaming (copying tournament decks)

### Result
New players who want to try Commander either:
1. Give up before starting (too overwhelming)
2. Copy a deck they don't understand (not fun)
3. Build a bad deck and have poor experience (quit)

## The Solution

**30-second personality quiz → instant deck recommendation**

Instead of requiring players to:
- Understand thousands of commanders
- Know deck archetypes and strategies
- Research competitive meta
- Read MTG lore

They simply answer questions like:
- "Do you prefer to be the hero or the mastermind?"
- "Chaos or control?"
- "Big explosive plays or steady advantage?"
- "Dragons or detectives?"

## Product Philosophy

### "No Lore Required. No Gatekeeping."

**Accessibility First**
- Non-intimidating language
- Visual personality quiz (not jargon)
- Quick experience (30 seconds, not 30 minutes)
- No prior MTG knowledge needed

**Personality → Playstyle Matching**
- Uses psychology principles to match personality to deck strategy
- Aggro players = action-oriented personalities
- Control players = strategic, patient personalities
- Combo players = puzzle solvers
- Midrange players = balanced, adaptable

**Confidence Building**
- Provides *one* recommendation (not overwhelming options)
- Explains *why* the deck matches the user
- Includes starter deck list ready to purchase
- Educational resources to learn the deck

## Technical Approach

### Quiz Design
**Question Categories**:
1. **Personality Traits**: Risk-taking vs. cautious, proactive vs. reactive
2. **Aesthetic Preferences**: Dragons vs. wizards, nature vs. technology
3. **Game Philosophy**: Win big vs. win reliably, competitive vs. casual
4. **Social Dynamics**: Spotlight vs. quiet power, political vs. independent

### Matching Algorithm
Maps quiz responses to deck attributes:
- **Aggro**: Fast, aggressive, high-risk/high-reward
- **Control**: Reactive, patient, answers opponent's threats
- **Combo**: Puzzle-solving, intricate, explosive finish
- **Midrange**: Balanced, adaptable, good stuff
- **Tribal**: Thematic, flavorful, synergy-focused

### Deck Database
Curated collection of 20-30 beginner-friendly Commander decks:
- Budget-conscious ($50-$150 range)
- Resilient to common strategies
- Fun to play (not just optimal)
- Clear game plan and win condition

## User Experience Flow

```
1. Landing Page
   ↓
   "No lore required. No gatekeeping.
   Find your perfect Commander deck in 30 seconds."

   [Start Quiz →]

2. Personality Quiz (6-8 questions)
   ↓
   Visual questions with image-based answers
   Progress bar shows 30-second completion time

3. Recommendation Page
   ↓
   "You should play: [Deck Name]"

   - Commander card visual
   - Why this matches your personality
   - Deck strategy explanation (beginner-friendly)
   - Sample plays
   - Ready-to-buy deck list

4. Next Steps
   ↓
   - [Buy this deck on TCGPlayer]
   - [Learn how to play it (video)]
   - [Find local game stores]
   - [Retake quiz →]
```

## Design Principles

### 1. Visual Over Text
- Image-based quiz questions (not walls of text)
- Card art prominently featured
- Icons and visual progress indicators

### 2. Encourage, Don't Intimidate
- Positive language ("You'll love this!" not "Try not to suck")
- No competitive pressure ("casual-friendly" emphasized)
- Celebrate new players ("Everyone starts somewhere")

### 3. Quick Wins
- 30-second quiz (attention span friendly)
- Instant gratification (immediate recommendation)
- Clear next action (buy deck link)

### 4. Education Through Play
- Learn by doing (play the deck, don't study rules)
- Just-in-time information (explanations when needed)
- Progressive complexity (simple recommendation → deeper strategy)

## Target Audience

### Primary: New Commander Players
- Interested in Magic but intimidated by complexity
- Want to play with friends but don't know where to start
- Overwhelmed by deck building options
- Need confidence boost to enter the format

### Secondary: Returning Players
- Played Magic years ago, coming back to Commander
- Know basic rules but format has evolved
- Want quick entry point to current meta

### Tertiary: Gift Buyers
- Buying gift for MTG player friend
- Don't play themselves, need simple recommendation
- Want to give something thoughtful (not just gift card)

## Competitive Landscape

### Existing Tools
**EDHREC** (edhrec.com)
- Strengths: Comprehensive data, popular decks
- Weaknesses: Overwhelming for beginners, assumes knowledge

**Scryfall** (scryfall.com)
- Strengths: Powerful card search
- Weaknesses: No deck recommendations, technical interface

**TCGPlayer Deck Lists**
- Strengths: Purchase integration
- Weaknesses: No personalization, competitive focus

### MTG Deck Match Differentiation
- **Only tool** focused on personality-based matching
- **Only tool** explicitly targeting beginners ("no gatekeeping")
- **Fastest** path from "interested" to "ready to play" (30 seconds)
- **Most accessible** language (no jargon)

## Monetization Strategy (Future)

### Affiliate Revenue
- TCGPlayer affiliate links for deck purchases
- Amazon affiliate for accessories (sleeves, deck boxes)

### Premium Features
- Deck customization based on budget
- Opponent strategy counter-picks
- Multiplayer playgroup balancing
- Advanced quiz (deeper personality profiling)

### Partnerships
- Local game store referrals
- Magic content creator sponsorships
- Wizards of the Coast collaboration (official beginner tool?)

## Success Metrics

### User Engagement
- Quiz completion rate (target: >80%)
- Time to complete quiz (target: <45 seconds)
- Recommendation satisfaction (survey after deck purchase)

### Business Metrics
- Click-through to TCGPlayer (target: >30%)
- Conversion to deck purchase (target: >10%)
- Affiliate revenue per user
- User return rate (retake quiz for different deck)

### Social Impact
- Positive sentiment in MTG communities
- New player onboarding success stories
- Reduction in "intimidated beginner" posts in r/EDH

## Current Status

**Phase: Prototype / Concept**

**Completed**:
- Product positioning and messaging
- User research (identified problem)
- Target audience definition
- Marketing asset (OG image for social sharing)
- Core value proposition ("No lore required. No gatekeeping.")

**In Progress**:
- Quiz question design
- Deck database curation
- Matching algorithm logic
- Web application development

**Next Steps**:
- Build MVP quiz flow
- Create initial deck recommendations (10-15 decks)
- Beta test with new players
- Launch and iterate based on feedback

## What This Project Demonstrates

### Product Thinking
- **Problem Identification**: Recognized underserved market (intimidated beginners)
- **User Empathy**: Understood emotional barriers (gatekeeping, overwhelm)
- **Differentiation**: Created unique positioning ("personality quiz" not "deck database")

### Design Philosophy
- **Accessibility**: Made complex domain approachable
- **Psychology**: Applied personality science to game preferences
- **User Journey**: Mapped complete path from interest to action

### Marketing Acumen
- **Positioning**: "No gatekeeping" directly addresses pain point
- **Messaging**: Clear value proposition (30 seconds to deck)
- **Branding**: Dark, modern aesthetic appeals to target demo

## Skills Demonstrated

- Product Strategy & Positioning
- User Research & Empathy
- Accessibility-First Design
- Psychology → Product Application
- Market Differentiation
- User Journey Mapping
- Quiz/Assessment Design
- Community Understanding
- Beginner Onboarding UX
- Jargon-Free Communication
- Gaming Domain Knowledge
- Go-to-Market Strategy
