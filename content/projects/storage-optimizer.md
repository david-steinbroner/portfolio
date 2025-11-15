---
title: "Storage Optimizer - Cloud Storage Management"
status: "Live Demo"
tags: ["Full-stack", "OAuth", "Express.js", "Cloud APIs", "Real-time"]
date: "2025-01"
link: "https://0a70be20-9fcf-42ba-ab7b-7e2a976a013a-00-3bnz21tyej0r.picard.replit.dev/"
github: ""
image: "/images/storage-optimizer.png"
category: "project"
description: "Full-stack app that connects to Dropbox, OneDrive, and Google Drive to show all your files in one place. AI-powered duplicate detection and cleanup recommendations help cut storage costs."
impact:
  - "Multi-provider OAuth (3 cloud services)"
  - "Real-time file sync via WebSockets"
  - "Live demo with simulation mode"
  - "Full-stack: Express backend + React frontend"
---

## Overview

Storage Optimizer (StorageMap) is a full-stack web application that solves the problem of managing files across multiple cloud storage providers. Connect your Dropbox, OneDrive, and Google Drive accounts to see ALL your files in one unified interface, then let intelligent algorithms identify duplicates, old files, and storage waste.

**Tagline:** "See it all. Clean it all."

## The Problem

People pay for multiple cloud storage services (Google Drive, Dropbox, iCloud, OneDrive) and lose track of what's stored where. Files get duplicated across services, old content piles up, and storage costs balloon. There's no single view of your entire digital file ecosystem.

**Pain points:**
- Files scattered across 3-5 different cloud providers
- Duplicates eating up expensive storage space
- No easy way to see total storage usage across accounts
- Manual cleanup is time-consuming and error-prone

## The Solution

A unified dashboard that aggregates all cloud storage accounts into one interface with smart cleanup recommendations.

### Key Features

1. **Multi-Account Aggregation**
   - Connect Dropbox, OneDrive, Google Drive, and local storage
   - OAuth integration for secure authentication
   - Unified file browser across all providers

2. **Storage Analytics**
   - Visual reports on usage by provider
   - File age analysis (identify old, unused files)
   - Duplicate detection across providers
   - Storage cost visualization

3. **Smart Cleanup**
   - AI-powered recommendations for files to delete/archive
   - Duplicate file identification by hash, size, and name
   - Bulk operations for efficient cleanup

4. **Simulation Mode**
   - Test with generated fake data before connecting real accounts
   - Demo mode for showcasing features without sensitive data
   - Configurable file generation for testing edge cases

## Technical Implementation

### Architecture

**Full-Stack Application:**
- **Frontend**: React 18, TypeScript, Wouter routing, Framer Motion animations
- **Backend**: Express.js server with session management
- **Database**: PostgreSQL with Drizzle ORM
- **Real-time**: WebSocket support for live file updates
- **Authentication**: Passport.js with OAuth 2.0 (Dropbox, Microsoft Graph, Google)

### Cloud Provider Integration

Implemented OAuth flows for three major providers:
- **Dropbox SDK** - Full file access and metadata
- **Microsoft Graph API** - OneDrive integration
- **Google Drive API** - File listing and operations

**Challenge:** Each provider has different OAuth scopes, token refresh logic, and API rate limits. Built a unified abstraction layer to handle all three consistently.

### File Deduplication Algorithm

Cross-provider duplicate detection using:
- File hash comparison (SHA-256)
- File size matching
- Filename similarity scoring
- Modification date analysis

**Technical highlight:** Efficiently compares thousands of files across providers without downloading content by using metadata APIs.

### Simulation System

Custom script generates realistic file structures for demos:
- Configurable file counts and directory depth
- Mimics real-world naming patterns
- Generates mock metadata (dates, sizes, types)
- Seed-based randomization for reproducible demos

## Deployment

**Live Demo:** [Replit Demo](https://0a70be20-9fcf-42ba-ab7b-7e2a976a013a-00-3bnz21tyej0r.picard.replit.dev/)

**Infrastructure:**
- Configured for Cloudflare Pages/Workers deployment
- PostgreSQL database for persistent user data
- Environment variable management for API keys
- Wrangler configuration for edge deployment

## What I Learned

### Technical Growth
- **OAuth complexity:** Handling 3 different provider flows, token refresh, scope management
- **Full-stack architecture:** Designing client-server communication with shared TypeScript types
- **Database design:** Modeling file metadata, user sessions, and provider connections
- **Real-time features:** WebSocket implementation for live file sync

### Product Thinking
- **Privacy-first:** Built simulation mode so users can try before connecting real data
- **Progressive disclosure:** Start with demo, graduate to real accounts when ready
- **Multi-provider strategy:** Biggest value is seeing EVERYTHING in one place

## Skills Demonstrated

- Full-Stack Development (React + Express + PostgreSQL)
- OAuth 2.0 & Third-Party API Integration
- Database Design & ORM (Drizzle)
- Real-Time Communication (WebSockets)
- Cloud Provider APIs (Dropbox, Microsoft, Google)
- TypeScript Across Stack
- Deployment & DevOps (Cloudflare, Wrangler)
- Simulation & Testing Infrastructure
- User Authentication & Session Management
- Algorithm Design (Deduplication Logic)

## Next Steps

- Add Amazon S3 and iCloud support
- Implement ML-based file categorization ("tax documents", "old photos", etc.)
- Build automated archival rules (auto-move files older than X years)
- Create storage cost calculator with provider pricing
- Add collaborative file sharing across providers
- Implement scheduled cleanup jobs
