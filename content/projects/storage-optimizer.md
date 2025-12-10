---
title: "Storage Optimizer"
status: "Live Demo"
tags: ["React", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "OAuth"]
date: "2024-08"
link: "https://0a70be20-9fcf-42ba-ab7b-7e2a976a013a-00-3bnz21tyej0r.picard.replit.dev/"
github: ""
image: "/images/storage-optimizer.png"
category: "project"
description: "Cloud storage is scattered across services, and cleanup is tedious—so people pay for space they don't need. A unified dashboard that finds duplicates and waste across Dropbox, Google Drive, and OneDrive."
impact:
  - "Multi-provider OAuth (3 cloud services)"
  - "Real-time file sync via WebSockets"
  - "Live demo with simulation mode"
  - "Full-stack: Express backend + React frontend"
---

**See it all. Clean it all.**

## The Problem I Wanted to Solve

I'm pretty tech-savvy, and I still have files scattered across Google Drive, Dropbox, iCloud, and random hard drives. I pay for storage on multiple services. I have duplicates everywhere. I know I should clean it up, but the thought of logging into four different dashboards and manually hunting for waste is exhausting.

If I struggle with this, everyone does. And it only gets worse as we accumulate more devices, more services, more years of digital stuff.

The problem scales with technology. And it costs real money.

## What I Built

Storage Optimizer connects to your cloud storage accounts and gives you one unified view of everything. Then it helps you clean up.

**Multi-provider dashboard.** Link Dropbox, OneDrive, and Google Drive. See all your files in one interface.

**Duplicate detection.** The app finds files that exist in multiple places—across providers, not just within one. This is the stuff most tools miss.

**Old file identification.** Surface files you haven't touched in years. Maybe you need them. Maybe they're eating up paid storage for no reason.

**Storage analytics.** Visual breakdown of what's taking up space, organized by provider, file type, and age.

**Simulation mode.** Try the app with fake data before connecting your real accounts. Privacy-first.

## Why Accessibility Matters Here

I wanted this to work for my parents, not just for me. That means clear language, obvious actions, and no assumption that you know what "OAuth" means.

Cloud storage is something everyone uses now—young, old, technical, non-technical. The tool should meet people where they are.

## The Tech

Full-stack TypeScript: React frontend, Express backend, PostgreSQL with Drizzle ORM. OAuth integration for all three major cloud providers. The duplicate detection algorithm compares file hashes and metadata without downloading full files, so it's fast even with thousands of items.
