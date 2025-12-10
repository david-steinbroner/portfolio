---
title: "Story Mode"
status: "Live"
tags: ["React", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM", "PostHog", "Sentry"]
date: "2024-09"
link: "https://aitavern.onrender.com"
github: ""
image: "/images/ai-tavern.png"
category: "project"
description: "Tabletop RPGs are incredible, but most people never try them—intimidated by the rules, the culture, or the assumption that it's all dragons and goblins. A platform that lets anyone play solo or with friends, in any genre, no experience required."
impact:
  - "Mobile-first design for on-the-go gameplay"
  - "AI-driven narrative that adapts to player choices"
---

**Your story, your rules.**

## The Problem I Wanted to Solve

Tabletop roleplaying games are incredible. You get to be a hero, make meaningful choices, and create stories with friends. But there's a problem: getting started feels impossible.

You need to find a group. Learn the rules. Hope the dungeon master is good. Show up at a specific time. And if you've never played before, the whole thing feels like a club you weren't invited to—full of people who've been doing this for years and speak in acronyms.

Also, most people think D&D means dragons and goblins. But tabletop storytelling can be *anything*—noir detective stories, space operas, slice-of-life romance, horror, comedy. The format is infinitely flexible, but the onboarding isn't.

## What I Built

Story Mode is an AI-powered platform that lets you play tabletop-style adventures without the barriers.

**No rules to memorize.** The AI narrator handles the mechanics. You just say what you want to do.

**Any genre you want.** Fantasy, sci-fi, mystery, romance—pick a setting or make one up. The platform adapts.

**Solo or with friends.** Play by yourself when you want to unwind, or share a session with others.

**Mobile-first.** Play anywhere. The interface is designed for phones because that's where people actually are.

The experience is designed to feel like play, not homework. You're not learning a system—you're telling a story and seeing what happens.

## Why "Story Mode"?

I deliberately moved away from traditional TTRPG terminology. Instead of "Dungeon Master," there's a "Narrator." Instead of "NPCs," there are "Characters." The branding uses soft pastels, not medieval fantasy aesthetic.

This isn't about gatekeeping people out of D&D. It's about inviting people into storytelling who never would have found their way to a game store.

## The Tech

This is a full-stack TypeScript application. React frontend with Vite, Express backend, PostgreSQL database with Drizzle ORM. The AI runs through the OpenAI SDK (swappable—I've tested with Claude via OpenRouter for cost optimization).

The app uses Radix UI components, Framer Motion for animations, and TanStack Query for state management. Real-time features run on WebSockets. PostHog tracks user behavior so I can see where people get stuck, and Sentry catches errors in production.

Built for deployment on Cloudflare Workers at the edge.

## Why Mobile-First?

Most people browse on their phones. More importantly, this is meant to be accessible anywhere—someone should be able to open this during a lunch break and play for 15 minutes. The whole point is lowering barriers, and requiring a laptop is a barrier.
