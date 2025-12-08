---
title: "American Music History Map"
status: "In Progress"
tags: ["Data Visualization", "Mapbox", "Geospatial", "React", "Music History"]
date: "2024-07"
link: ""
github: ""
image: "/images/music-map.png"
category: "project"
description: "Interactive geographic timeline showing the evolution of American music genres from 1900-2000. See where Blues, Jazz, Country, Rock, and Hip-Hop originated and how they spread across the country."
impact:
  - "100 years of music history data curated"
  - "2,615 lines of geocoded event data"
  - "Multiple genres tracked (Blues, Jazz, Country, Rock, Hip-Hop)"
  - "Interactive Mapbox visualization with WebGL rendering"
---

## Overview

An interactive map that tells the story of American music through geography and time. Click on markers to learn about specific musical events (first jazz recording, Motown's founding, Nashville's rise), scrub through decades to see how genres spread, and understand the regional roots of American sound.

**Core Insight:** Music history is usually taught linearly (chronologically) or by genre in isolation. This shows the *geographic and temporal* relationships—how Delta Blues influenced Chicago Blues, how regional styles cross-pollinated.

## The Problem

Traditional music education presents:
- **Chronological timelines** (linear progression)
- **Genre silos** (jazz separate from blues separate from rock)
- **Abstract concepts** (hard to visualize cultural movements)

**Missing:** The *geographic dimension* of music evolution. Where did genres actually originate? How did they migrate? What regional factors influenced development?

## The Solution

A Mapbox-powered interactive map where you can:
1. **Scrub through time** (1900-2000) with a timeline slider
2. **See markers appear** where important musical events happened
3. **Click to learn more** about specific moments (venues, recordings, movements)
4. **Filter by genre** (Blues, Jazz, Country, Rock, Hip-Hop, Electronic)
5. **Watch cultural spread** as music moves from region to region

## Technical Implementation

### Geospatial Visualization

**Mapbox GL JS** (WebGL-powered):
- Renders hundreds of location markers efficiently
- Smooth pan/zoom interactions
- Custom marker styling by genre
- Dynamic filtering based on timeline

**Turf.js** for geographic calculations:
- Distance between locations
- Regional clustering
- Geographic relationship analysis

### Data Curation

**2,615 lines of curated event data:**
- Researched historical music events (recordings, venue openings, movements)
- Geocoded each event with lat/long coordinates
- Tagged by genre, year, and significance
- Structured as JSON for efficient loading

**Genres covered:**
- Blues (Delta, Chicago, Electric)
- Jazz (New Orleans, Bebop, Cool Jazz)
- Country (Nashville, Honky Tonk, Outlaw)
- Rock & Roll (origins, psychedelic, punk)
- Hip-Hop (Bronx origins, regional styles)

### Performance

**Challenge:** Rendering hundreds of map markers without lag
- **WebGL rendering** via Mapbox (GPU-accelerated)
- **Marker clustering** at high zoom levels
- **Lazy loading** of event details
- **Efficient filtering** without re-rendering entire map

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Mapping**: Mapbox GL JS (WebGL-based)
- **Geospatial**: @turf/turf (geographic analysis)
- **UI**: shadcn/ui components, Tailwind CSS
- **Data**: Custom JSON with 2,615 historical events
- **Build**: Vite static export

## What Makes This Interesting

1. **Data as storytelling:** Music history told through geography, not just chronology
2. **Research depth:** 100 years of events researched, geocoded, and categorized
3. **Technical complexity:** WebGL rendering, geospatial calculations, efficient filtering
4. **Educational value:** Makes abstract cultural evolution concrete and visual
5. **Cross-pollination visible:** See how Memphis influenced Chicago, New Orleans shaped New York

## Key Features

- **Interactive timeline slider** - Scrub from 1900-2000
- **Event modals** - Click markers for detailed info (artists, venues, recordings)
- **Genre filtering** - Focus on specific music styles
- **Color-coded markers** - Visual genre identification
- **Smooth pan/zoom** - Explore regional details

## Skills Demonstrated

- Geospatial Data Visualization (Mapbox)
- Historical Research & Data Curation
- WebGL Performance Optimization
- React Component Architecture
- TypeScript Type Safety
- Geographic Data Modeling
- Cultural Data Storytelling
- Complex UI State Management

## Next Steps

- Add audio samples for historical recordings
- Include artist/venue photos in modals
- Create guided "tours" (e.g., "Evolution of Jazz")
- Add social sharing of specific time periods
- Build connections between related events (influence graphs)
- Include international influences (Caribbean, African roots)
