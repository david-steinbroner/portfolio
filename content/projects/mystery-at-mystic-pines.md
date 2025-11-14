---
title: "Mystery at Mystic Pines - Interactive Mystery Experience"
status: "In Progress"
tags: ["Full-Stack", "MySQL", "Directus CMS", "Multi-Language", "Event Management"]
date: "2025-10"
link: ""
github: ""
image: "/images/mystery-mystic-pines.png"
category: "project"
description: "Children's interactive mystery game/experience set at Camp Mystic Pines, featuring comprehensive database architecture, ticketing system, and multi-language support."
impact:
  - "Multi-language support (English, German, Chinese)"
  - "Complete ticketing and event management system"
  - "17-table database architecture"
  - "Headless CMS implementation"
---

## Overview

An interactive mystery experience centered around a character named Gizmogrub at "Camp Mystic Pines." The project combines entertainment, education, and sophisticated technical infrastructure to deliver a children's mystery game/event.

## Technical Architecture

### Database Design (MySQL/MariaDB 10.3.39)
Built comprehensive 17-table database schema supporting:

**Content Management**
- Blog system with posts, authors, and tags
- Multi-language content organization
- Media asset management
- Page and guide systems

**Event Management**
- Ticketing mechanism for event/game access
- User/participant management via Directus CMS
- Regional and geographical organization

**Internationalization**
- Dedicated tables for Chinese, English, and German content
- Multi-language support from day one
- Translation management system

### Technology Stack

**Backend**
- MySQL database (36.8 MB backup from Oct 2025)
- Directus headless CMS for content management
- Database-driven content organization

**Content Organization**
- Fairytale Project content (references Ai Weiwei's Documenta 12 art project)
- Interview and questionnaire data architecture
- Educational content recontextualized for younger audiences

**Event Infrastructure**
- Professional ticketing system
- Business page graphics and marketing materials
- Event hosted at "The Liberty, Inc" in Roswell, NM (Jan 27, 2024 event)

## Key Features

### Multi-Language Support
- **English**: Primary language for North American audience
- **German**: European accessibility
- **Chinese**: International reach and cultural education

Design choice: Separated content by language rather than using translation keys, allowing for culturally-specific adaptations.

### Headless CMS Architecture
- Directus for content management
- Decoupled front-end and back-end
- Flexible content modeling
- Media library management

### Professional Branding
- Gizmogrub character development
- Complete visual identity (posters, logos, business graphics)
- 5 ticket design mockups/variations
- Marketing asset package

## Project Structure

```
Mystery-at-Mystic-Pines/
├── Assets/
│   ├── Marketing materials
│   ├── Posters and logos
│   └── Business page graphics
├── Tickets/
│   └── 5 ticket design screenshots
└── Database/
    └── 17 tables with full content system
```

## Database Schema Highlights

**Core Tables**
- `fairytale_main` - Central content repository
- `fairytale_chinese` - Chinese language content
- `fairytale_english` - English language content
- `fairytale_german` - German language content
- `directus_*` - CMS management tables

**Meta Systems**
- Regional/geographical organization
- Theme and translator management
- Blog and media systems
- User and participant tracking

## Technical Challenges

### 1. Multi-Language Architecture
**Challenge**: Supporting three languages with culturally-specific content

**Solution**:
- Language-specific tables for flexible adaptation
- Content versioning per language
- Translation workflow integration

### 2. Event Ticketing Integration
**Challenge**: Building ticketing system integrated with content platform

**Solution**:
- Database-driven ticket management
- User authentication and access control
- Event-specific content gating

### 3. Historical Art Project Integration
**Challenge**: Recontextualizing Ai Weiwei's Documenta 12 project for children

**Solution**:
- Preserved historical interview/questionnaire data
- Created age-appropriate mystery narrative layer
- Educational value maintained while making content accessible

## What This Project Demonstrates

### Full-Stack Capabilities
- Database design and architecture
- CMS selection and implementation
- Multi-language system design
- Event management systems

### Product Thinking
- Target audience consideration (children)
- Accessibility through multi-language support
- Professional branding and marketing
- Event logistics planning

### Technical Versatility
- SQL database design (17-table schema)
- Headless CMS implementation (Directus)
- Content management systems
- Media asset organization

## Current Status

**Recent Activity**: Database backup from October 17, 2025 (36.8 MB)

**Readiness Indicators**:
- Complete asset package (marketing materials)
- Professional ticket designs
- Comprehensive database infrastructure
- Multi-language content framework

**Appears to be**: In development or recently launched based on recent database activity and complete asset package.

## What I Learned

### Database Architecture
- Designing for internationalization from the start
- Content management system database patterns
- Scalable schema design for complex content relationships

### CMS Implementation
- Headless CMS benefits and tradeoffs
- Directus platform capabilities
- Content workflow design

### Event Management
- Ticketing system requirements
- Marketing asset development
- Event logistics and execution

### Educational Content Design
- Making complex historical content accessible
- Age-appropriate content adaptation
- Balancing education with entertainment

## Skills Demonstrated

- Full-Stack Development
- Database Design (MySQL)
- Headless CMS Implementation (Directus)
- Multi-Language/Internationalization
- Event Ticketing Systems
- Content Management
- Educational Content Design
- Marketing & Branding
- Project Management
- User Experience for Children
- Historical Content Adaptation
