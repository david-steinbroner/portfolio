---
title: "When the Integration Doesn't Exist, Build It"
company: "Personal Projects"
date: "2026"
description: "Pokemon GO doesn't let you export your collection data. No API, no export button. I built an automated pipeline: Python drives screen mirroring, AI vision reads the screenshots, local math crunches the numbers, and a web UI makes it all usable. The kind of integration you build when the integration doesn't exist."
impact:
  - "Built automated scanner that extracts structured data from a mobile app with no API"
  - "Hybrid AI vision + local computation pipeline processes 900+ items at ~$0.003 each"
  - "Checkpoint/resume system handles interruptions gracefully across multi-hour scans"
  - "Full-stack pipeline: Python automation, AI vision, local IV calculator, Cloudflare D1, web UI"
tldr: "Pokemon GO doesn't export your data. No API, no export button. I built an automated pipeline - screen mirroring, Python automation, AI vision, local math, cloud database - to extract it. The solve isn't specific to one app."
status: "Building"
tags: ["Creative Problem Solving", "Automation", "AI Vision", "Data Pipeline", "Full-Stack"]
category: "case-study"
homepageTags:
  - label: "AI Build"
    color: blue
liveUrl: "https://pogo-pal.pages.dev"
---

Sometimes the data you need is trapped in an app that won't give it to you. No API, no export, no webhook. The app was designed to keep your data inside.

This happens more than people think. And the solve isn't always waiting for someone to build an official integration. Sometimes you build the bridge yourself.

I ran into this with Pokemon GO. I play competitively, and every competitive tool — team builders, IV rankers, investment calculators — needs to know what Pokemon you actually have. The problem: Pokemon GO has no API and no data export. Niantic actively prevents third-party access. The existing workaround (PokeGenie) requires you to manually screenshot each Pokemon one at a time. For a collection of 900+, that's not a real solution.

So I built one.

---

## The Problem Underneath the Problem

The surface problem is "I can't get my Pokemon data out." But the real problem is bigger: how do you extract structured data from an app that only exposes it visually?

This is the same problem that comes up across industries. Medical apps that show test results on screen but don't export them. Banking apps with transaction history you can't download. Enterprise tools with dashboards you can't query. Any time an app shows you your data but won't let you take it with you, you're dealing with the same gap.

The usual answers are: wait for an API (might never come), manually re-enter everything (doesn't scale), or find a creative workaround.

I went with the creative workaround.

---

## The Solution

The insight: your phone screen is already showing you the data. If you can automate the process of looking at it and reading it, you can extract it.

**iPhone Mirroring + Python automation + AI vision.**

macOS lets you mirror your iPhone screen to your Mac. Once it's mirrored, your Mac can interact with it — taps, swipes, screenshots. I wrote a Python script using pyautogui that drives the mirrored phone: it taps on each Pokemon, captures three screenshots (summary, moves, appraisal), then moves to the next one. Fully automated — it works through the entire collection while I do something else.

The screenshots go to Claude's vision API, which reads species, CP, HP, moves, and power-up cost from the images. For IVs (the hidden stats that matter for competitive play), I built a local calculator that brute-forces the math from the visible data — CP, HP, species, level, and star rating. 1,710 Pokemon base stats from pvpoke's database, runs in about 50 milliseconds per Pokemon. No API tokens needed for the math part.

The extracted data goes into a Cloudflare D1 database. A web UI lets me browse, filter, and review everything.

---

## Building for Scale

A tool that works for 10 items but breaks at 900 isn't a tool. From the start, I built this assuming a large collection and the reality that things go wrong mid-scan.

**Checkpoint and resume.** The scanner saves state after every single Pokemon. If it crashes, if the phone disconnects, if I need to stop — I pick up exactly where I left off. No re-scanning what's already done.

**Batch processing.** Scans run in batches of 30 (about 5 minutes). Each batch is logged with timestamps and index ranges. Small enough to verify, large enough to make progress.

**Emergency stop.** Escape key kills the scan immediately via a background thread listener. Mouse-to-corner failsafe as backup. When you're automating physical screen interactions, you need a way to stop fast.

**Drift detection.** Every 50 Pokemon, the scanner captures a verification screenshot. Screen mirroring can drift — a swipe that's slightly off accumulates over hundreds of items. Periodic checks catch it before it becomes a problem.

**Hybrid processing pipeline.** AI vision reads what it's good at (text, species names, moves). Local math handles what it's good at (IV calculations from known formulas). The appraisal screenshot is only used when the math produces multiple possible IV combinations and needs disambiguation. Each layer does what it's best at.

**Cost efficiency.** Processing costs about $0.001-0.003 per Pokemon through the API. The local IV calculator replaced what would have been additional vision API calls, cutting cost and improving accuracy.

---

## The Web UI

Once the data is in D1, it needs to be usable. I built a web app on Cloudflare Workers with a mobile-first review interface. Browse your collection, filter by species, shadow status, IV percentage, or PVP league ranking. Confirm or correct what the scanner extracted.

The API is a full CRUD setup: list with filters, create, update, delete, plus bulk CSV import for anyone who already has PokeGenie data. Collection stats endpoint shows totals for shadow, shiny, lucky, built Pokemon and top IVs.

---

## The Tradeoffs

This works for me. It solves my problem. But I know where the gaps are, and I'd need to close them if this were ever a real product.

**The scan is physical and slow.** The script drives a real phone screen through screen mirroring. That means ~10 seconds per Pokemon, ~15 minutes for 100. For my collection of 900, that's about 90 minutes of my Mac being occupied. For a personal project, I start it and walk away. For a product, this doesn't scale — you'd need either a server-side approach or a way to batch-process screen recordings instead of live scanning.

**AI vision costs real money.** Processing each Pokemon costs $0.001-0.003 through the API. For 900, that's under $3 — fine for me. But if 10,000 users scanned their collections, you're looking at API costs that need a business model behind them. The local IV calculator already offloads the math, but the screenshot reading still depends on paid API calls.

**It requires a Mac.** iPhone Mirroring is a macOS feature. There's no equivalent on Windows or Android. A real product would need a cross-platform approach — probably a mobile app that handles the scanning natively.

**Calibration is manual.** Every time the mirroring window moves or resizes, you recalibrate. Seven steps. I've made it as painless as possible, but it's still friction. A production version would need automatic UI detection.

**It's fragile to app updates.** If Niantic changes the Pokemon GO UI layout, the scanner breaks until I recalibrate or update the capture logic. Building against someone else's UI means inheriting their release cycle as your maintenance burden.

**No real-time sync.** Scanning is a point-in-time snapshot. Catch a new Pokemon and your database is stale. A real product would want incremental updates — scan only what's new since last time.

I'm fine with all of these for what this is. But I know exactly what I'd need to fix to turn it into something other people could use.

---

## Next Steps

Right now this solves my problem. The question is whether it solves anyone else's.

The first thing I'd do is share it with the Pokemon GO community — the competitive PVP crowd who actually need collection-aware tools. Not to sell anything, but to test the hypothesis: is the data extraction gap a real pain point for other people, or just for me?

If there's interest, I'd want feedback before building more. What do they actually want from their collection data? Is the scanner the valuable part, or is it the analysis and team-building tools on top of it? Am I solving the right problem, or is there a different version of this that's more useful?

That feedback would drive prioritization. Right now I have a list of things I *could* build — incremental sync, cross-platform support, smarter UI detection, a mobile-native scanner. But without user signal, I'm guessing at what matters. I'd rather let real usage tell me what to build next.

On the instrumentation side, I'd add PostHog for analytics, Sentry for error monitoring, and some kind of in-app feedback collection — even something simple like a "what would make this better?" prompt after a scan completes. The goal is to build feedback loops early so I'm not flying blind if this starts getting real usage.

The pattern I keep coming back to: ship what works, put it in front of people, let their behavior and feedback tell you what to build next. Same approach whether it's a personal project or a feature at a company.

---

## What This Is Really About

This isn't a Pokemon GO project. It's a pattern.

Apps trap your data. Integrations don't exist. The official answer is "it's not supported." And if you need that data to build something useful on top of it, you're stuck — unless you build the bridge yourself.

The approach I used here — screen mirroring, automated UI interaction, AI vision for extraction, local computation for the heavy math, cloud database for storage, web UI for access — isn't specific to any one app. It's a general-purpose solve for "the integration doesn't exist yet."

---

## What I Learned

The hardest part wasn't any individual piece — it was getting them all to work together reliably. Python automation, screen mirroring, AI vision, local math, cloud database, web UI. Each one is straightforward on its own. The challenge is building a pipeline where a failure in one step doesn't corrupt everything downstream. Checkpoints, atomic writes, resume logic, error boundaries — that's where the real work is.

AI vision is good at reading text from screenshots but bad at precision math. Local computation is perfect for math but can't read a screenshot. The hybrid approach — let each layer do what it's best at — was more accurate and cheaper than asking AI to do everything.

And the broader lesson: when you hit a wall where the integration doesn't exist, that's not the end of the conversation. It's the start of a build.
