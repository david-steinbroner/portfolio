---
title: "MTG Deck Match Site"
status: "Live"
tags: ["React", "API Integration", "Gaming", "Full-stack"]
date: "2024-12"
link: ""
github: ""
image: "/images/mtg-deck-match.png"
category: "project"
description: "Magic: The Gathering deck recommendation engine that helps players find optimal decks based on their collection and playstyle preferences."
impact:
  - "Smart deck suggestions based on card collection"
  - "Integration with MTG API for real-time card data"
---

## Overview

A web application that helps Magic: The Gathering players find decks that match their card collection and preferred playstyle. Users can input their collection and get personalized deck recommendations.

## Problem

MTG players often struggle to build competitive decks with the cards they already own. Existing tools focus on netdecking (copying tournament decks) rather than maximizing value from existing collections.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **API**: Scryfall API for MTG card data
- **State Management**: React Context
- **Matching Algorithm**: Custom logic for deck recommendations

## Key Features

- Card collection import and management
- Deck recommendation engine based on owned cards
- Playstyle preferences (aggro, control, midrange, combo)
- Budget tracking and optimization
- Deck performance analytics
- Export to popular MTG platforms

## What I Learned

- Working with large datasets (20,000+ cards)
- Complex matching algorithms and optimization
- API integration and data normalization
- User preference modeling
- Performance optimization for large collections

## Technical Challenges

- Efficiently matching user collections against thousands of deck archetypes
- Handling real-time card price updates
- Creating an intuitive UX for collection management
- Balancing recommendation accuracy with diversity

## Next Steps

- Add tournament meta analysis
- Implement deck testing simulator
- Create social features for sharing collections
- Add AI-powered deck building suggestions
- Mobile app version
