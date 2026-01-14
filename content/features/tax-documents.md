---
title: "Tax Documents"
company: "Fold"
date: "2025"
description: "In-app 1099-B and Gain/Loss delivery for Bitcoin sellers"
status: "Shipped"
tags: ["Fintech", "Compliance", "Communication", "User Experience"]
category: "feature"
caseStudy:
  name: "Shipping Tax Season at a Startup"
  slug: "taxbit"
---

**Users who sold bitcoin needed tax documents. We'd never delivered them before.**

This was the user-facing piece of Fold's first tax season: an in-app experience where users could confirm their info and download their 1099-B and Gain/Loss Summary.

---

## What I Built

**Proactive communication (shipped first)** - Before the feature was built, I shipped emails to impacted users, a support article explaining what to expect, and an in-app "coming soon" banner. All targeted only at users who had sold bitcoin that year. This reduced support tickets dramatically while engineering was still building.

**Pre-filled W-9 flow** - Most TaxBit clients use TaxBit's SDK to collect user info at onboarding. We couldn't; Fold already had robust PII collection. Instead, I pre-filled the W-9 with data we already had (name, address, SSN). Users just confirmed. If they could sell bitcoin, they already had a debit card, which meant we had their info.

**Document download page** - Simple in-app page where users could download their 1099-B (PDF) and Gain/Loss Summary (CSV). Tappable components, clear labeling, no confusion.

**Support article and FAQ** - I wrote the documentation, gathered questions from Support as they came in, and worked with TaxBit to answer them. The article grew with the questions users were actually asking.

---

## Key Product Decisions

**Deliver both 1099-B and Gain/Loss Summary.** The 1099-B serves most users; they just want a number to plug into TurboTax. But we also have hardcore Bitcoin enthusiasts who want to understand their transactions and potentially adjust their disposition method. The Gain/Loss Summary serves them. Low incremental lift (TaxBit already generated it), high impact for serving the full user spectrum.

**Use FIFO disposition method for 1099-B.** After researching competitors and talking to TaxBit and users, I chose FIFO (First In, First Out) as the default. It's what most users expect and what most platforms use. Power users who want different methods can use the Gain/Loss Summary.

**Ship communication before building.** Users were already getting tax emails from Coinbase and Robinhood. I could reduce anxiety immediately with zero engineering effort. High impact, low lift.

---

## Impact

- ~50 support tickets across ~5,000 eligible users (1% rate); only ~10 were actual issues
- Met mid-February compliance deadline with a month to spare
- 80% of users downloaded only the PDF; 20% downloaded both formats
- Proactive communication reduced "where are my tax docs?" tickets to near-zero before launch

---

## Skills

Compliance coordination, proactive communication, user segmentation, cross-functional execution
