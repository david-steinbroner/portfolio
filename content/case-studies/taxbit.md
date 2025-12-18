---
title: "Shipping Tax Season at a Startup"
company: "Fold"
date: "2024"
description: "Integrating TaxBit to ship crypto tax compliance at Fold"
impact:
  - "Shipped 2.5 months early (January for April deadline)"
  - "90% adoption among eligible users"
  - "~30 support tickets across ~5,000 users (0.6% rate)"
  - "80% downloaded PDF only, 20% downloaded both formats"
status: "Shipped"
tags: ["Product Management", "Tax Compliance", "API Integration", "Fintech"]
category: "case-study"
features:
  - name: "Tax Documents"
    slug: "tax-documents"
---

**Fold is a fintech app that lets users earn and spend bitcoin.** I led the integration of TaxBit, a third-party tax document provider, to deliver 1099-B forms to users who sold bitcoin—a hard compliance requirement with an April 15th deadline.

No one at Fold had built crypto tax reporting before. I became the subject matter expert: evaluating vendors, learning IRS requirements, and translating regulatory complexity into requirements my team of two engineers could execute against.

---

## The Gap

When Fold launched bitcoin selling, we created a tax obligation for our users. Anyone who sold bitcoin through Fold in 2024 would need documentation to report it on their taxes. The problem: we had no infrastructure for this, no internal expertise, and a hard April 15th deadline.

Users expected tax documents. They see them from Coinbase, Robinhood, and every other crypto platform—usually by late December or early January. If they didn't see theirs from Fold, they'd panic. Support tickets would flood in. Trust would erode.

We had about 10 weeks, two engineers, and a product manager (me) who had never built a tax feature.

---

## Understanding the Users

I talked to users and analyzed support data to understand what they actually needed. The picture was clear:

**Most users want "just tell me what to report."** They don't want to think about disposition methods or cost basis calculations. They want a PDF they can upload to TurboTax and forget about.

**A minority need the raw data.** They have accountants, they track their own taxes, or they want to cross-reference against their own records. These users need a CSV they can manipulate.

**Users get anxious in December.** When they see tax documents from Coinbase but not from Fold, they assume something is wrong. Timing matters as much as content.

This research led to three decisions: ship a simple default (1099-B PDF with FIFO disposition), provide an escape hatch (Gain/Loss CSV for power users), and communicate early (December "coming soon" state to set expectations).

---

## The Communication Strategy

Before building anything, I shipped communication.

By mid-December, users were already getting tax emails from Coinbase, Robinhood, and Uphold. I knew this because I stayed close with Support, and we'd started receiving tickets: "When am I getting my tax documents?" Users were getting anxious, and we hadn't written a single line of code yet.

I made a deliberate call: handle what we could handle first. The feature would get built—but I could assuage anxiety immediately with zero engineering effort.

**I shipped three things in mid-December:**

**1. Email to impacted users.** Marketing copy explaining that tax documents were coming in early 2025, well ahead of the April deadline. Only sent to users who had sold bitcoin in 2024—broadcasting to everyone would cause panic from users who didn't need documents.

**2. Support article.** I wrote documentation explaining bitcoin tax reporting: what forms they'd receive, what they meant, and when to expect them. This became the canonical answer for all tax questions. I worked with TaxBit to answer the specific questions Support was already fielding.

**3. In-app persistent component.** This is where it gets interesting. I'd helped build a configurable in-app messaging component earlier that year—we could target specific user segments, control the text and image from the backend, and link to any URL. For this launch, I targeted users who had sold bitcoin in 2024, set the copy to "Tax documents coming soon," and linked to the support article.

The link took users out of the app—not ideal UX—but it was a deliberate tradeoff. Building an in-app page would require front-end engineering time I didn't have. The support article gave users everything they needed, and a back button got them back into the app.

**The impact was immediate.** Support let me know that tickets asking about tax documents dropped dramatically after we shipped the email and in-app component. We'd bought ourselves time and trust while the feature was still being built.

**The FAQ became a living document.** I gathered questions from Support as they came in and worked with TaxBit to craft answers. The support article grew with the questions users were actually asking. By the time documents shipped, users had already been educated on what to expect.

This was the first thing I completed—before any screens, before any API integration, before any W-9 flows. High impact, low effort, immediate value.

---

## What We Built

**New "Taxes & Documents" section.** I architected this to house future documents—past statements, card transaction history, credit card statements—not just a one-off for tax docs. Building for extensibility when you can.

**Tax Documents screen with educational framing.** The UI explains what each document means and when you'd need it. Users shouldn't have to Google "what is a 1099-B."

**Two download options.** 1099-B (PDF) for the 80% who want simple. Gain/Loss Summary (CSV) for the 20% who need raw data.

**W-9 collection flow.** Integrated via TaxBit's SDK with pre-filled user data from their Fold profile.

**Conditional entry points.** Users who hadn't submitted W-9s saw one flow, users who had saw another, users who weren't eligible saw nothing. Necessary for compliance—users needed "ample time" to access documents.

**Support tooling and training.** Quick link from internal tools to each user's TaxBit page. Trained CS team on TaxBit portal. Created Zendesk workflows.

**Support article and proactive communication.** I wrote documentation explaining bitcoin tax reporting, sent targeted emails to impacted users, and deployed an in-app "coming soon" component—all in mid-December before the feature was built. This reduced support tickets dramatically while we built the actual implementation.

<div class="screenshot-group">
  <img src="/case-studies/taxbit/tax-documents-landing.png" alt="Tax Documents landing page with TaxBit partnership banner" />
  <img src="/case-studies/taxbit/download-statement.png" alt="Download statement screen with Form 1099-B and Gain/Loss Summary options" />
</div>

---

## Product Decisions

| Decision | Why |
|----------|-----|
| FIFO disposition method | What most users will use. Also easiest to expand from if we add disposition selection later—TaxBit confirmed this. |
| PDF + CSV (not just one) | Serve the 80% who want simple AND the 20% who need control. Classic "default + escape hatch" pattern. |
| Educational framing in UI | Users shouldn't need to Google tax terminology. Explain what documents mean and when they're needed. |
| Architected for future docs | Built "Taxes & Documents" section, not "Tax Documents" screen. Future-proofed for statements and other financial documents. |
| Targeted communication only | Marketing copy only went to impacted users. Broadcasting to everyone would cause panic from users who didn't sell bitcoin. |
| Ship communication before building | High impact, low effort. Users were already anxious from seeing tax emails from other platforms. Proactive communication bought time and trust while the feature was in development. |

---

## The Complexity

Every feature touched multiple stakeholders. I was the connective tissue.

**Internal stakeholders:** Legal needed to review every screen showing tax information. Compliance needed sign-off on the data flow. Finance needed to understand the cost implications. Engineering needed clear requirements. Support needed training and tooling.

**External stakeholders:** Outside counsel reviewed our tax language. Our banking partner needed visibility into the compliance program. TaxBit's team joined our weekly standups.

**Six stakeholder groups total.** I led weekly cross-company standups with my two engineers and TaxBit's integration team. Set up the TaxBit dashboard. Trained support on the portal. Wrote all user-facing documentation.

The learning: you have to tell the product story to partners as clearly as you tell it to users. In regulated industries, compliance teams are stakeholders in your product story. If they don't understand what you're building, they default to caution—and that slows everything down.

---

## The Tradeoff

TaxBit's W-9 SDK didn't support editable fields. If a user needed to update their name or address on their W-9, they couldn't do it in the app. Building custom editable fields would blow the timeline.

Most PMs would either push back hard on the vendor or scope creep into custom development. I took a different approach.

**I researched the actual expected impact.** I pulled historical support data: how many users update their name or address each year? The answer: about 0.2% annually. For ~5,000 eligible users, that meant maybe 5-10 people would hit this edge case.

**I designed a support-assisted workaround.** Added a header on the W-9 that said if users need to update info, reach out to support. Added a button that opened a pre-filled ticket with "tax document" reason selected. Created a Zendesk workflow for support to prioritize these tickets. Asked engineering to auto-push updated user info to TaxBit. Asked TaxBit to regenerate W-9s on each view with the latest data.

**The outcome: 5-10 tickets.** Exactly as predicted. The workaround held.

**I documented the "real" solution in the PRD** so future iterations would allow in-app editing. Shipping fast with a known workaround, not shipping broken without a plan.

---

## What I Learned

**Research your edge cases before you design around them.** The W-9 workaround only made sense because I knew the expected volume was tiny. Without that data, I would have wasted weeks building something 10 users needed.

**Timing is product.** A "coming soon" state in December wasn't a nice-to-have—it prevented support tickets and preserved trust. When you know users have expectations, meet them even if it's just with communication.

**Build for extensibility when you can.** The "Taxes & Documents" section took marginally more effort than a one-off "Tax Documents" screen, but now it's ready for statements, credit card docs, and anything else users need.

**Partners need the story too.** In regulated industries, your compliance partners are product stakeholders. Clarity builds trust and speeds approvals.

**Sequence by impact, not by dependency.** The communication could ship independently of the feature. By prioritizing the highest-impact, lowest-effort work first, I reduced user anxiety and support load while the technical implementation was still in progress.
