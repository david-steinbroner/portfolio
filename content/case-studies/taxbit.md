---
title: "6 Stakeholder Groups. 10 Weeks. 2 Engineers."
company: "Fold"
date: "2024"
description: "Integrating TaxBit to ship crypto tax compliance at Fold"
impact:
  - "Shipped 2.5 months early (January for April deadline)"
  - "90% adoption among eligible users"
  - "~30 support tickets across ~5,000 users (0.6% rate)"
status: "Shipped"
tags: ["Product Management", "Tax Compliance", "API Integration", "Fintech"]
category: "case-study"
---

**Fold is a fintech app that lets users earn and spend bitcoin.** I led the integration of TaxBit, a third-party tax document provider, to deliver 1099-B forms to users who sold bitcoin—a hard compliance requirement with an April 15th deadline.

No one at Fold had built crypto tax reporting before. I became the subject matter expert: evaluating vendors, learning IRS requirements, and translating regulatory complexity into requirements my team of two engineers could execute against.

**The coordination was the real challenge.** I was the connective tissue between six stakeholder groups: Legal, Compliance, Finance, Engineering, and Support internally—plus outside counsel, our banking partner, and TaxBit externally. I led weekly cross-company standups, set up the TaxBit dashboard, trained support on the portal, and wrote all documentation.

**User research shaped the solution.** Most users want "just tell me what to report." A minority have accountants or track their own taxes. Users see tax docs from Coinbase in December and get anxious if they don't see theirs.

This led to three decisions: ship a simple default (1099-B PDF with FIFO disposition), provide an escape hatch (Gain/Loss CSV), and communicate early (December "coming soon" state).

**Tradeoffs under constraints:** TaxBit's W-9 SDK didn't support editable fields. Building custom fields would blow the timeline. I researched historical support data—only ~0.2% of users update name/address annually—and designed a support-assisted workaround instead. Outcome: 5-10 tickets, exactly as predicted.

## What shipped

- New "Taxes & Documents" app section (architected for future document types)
- 1099-B (PDF) and Gain/Loss Summary (CSV) downloads
- W-9 collection flow via TaxBit SDK
- Conditional entry points based on eligibility and W-9 status
- Support tooling and training

## Results

- Shipped end of January—**2.5 months early**
- **90% adoption** among eligible users
- **~30 support tickets** across ~5,000 users (0.6% rate)
