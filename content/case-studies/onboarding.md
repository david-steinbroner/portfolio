---
title: "Rebuilding onboarding around the value prop"
company: "Fold"
date: "2023-2024"
description: "Fold's onboarding had accreted into a feature-by-feature tour for people who didn't know the product yet. I rebuilt it around the value prop and cut the front-door friction, widening the top of the funnel and lifting free-to-paid conversion."
impact:
  - "Rebuilt Fold's onboarding in two passes, anchoring it to the company value prop so it stopped breaking every time a feature shipped"
  - "Reframed the PII and card gate as a product decision and worked with Compliance to move verification out of the front door - simple signup first, the upgrade earned inside the app"
  - "Built internal tooling and automation on our identity-verification provider to auto-message flagged users, then gave their replies a prioritized Support queue to recover stalled signups"
  - "Instrumented the funnel across Power BI, Mixpanel, Amplitude, and our backend; let more free users in and still lifted overall free-to-paid conversion"
  - "Wrote all onboarding copy and landed the company tagline, 'personal finance powered by bitcoin'"
tldr: "Fold's onboarding had been built feature by feature for a company we no longer were, so it taught the app to people who didn't yet know what it was. I rebuilt it in two passes - first anchoring it to the value prop so it stopped breaking on every launch, then stripping the PII and card gate out of the front door so free users could get in and upgrade once they saw the value."
status: "Shipped"
tags: ["Onboarding", "Activation", "Conversion", "Compliance", "Internal Tooling", "Fintech"]
category: "case-study"
homepageTags:
  - label: "Onboarding & Conversion"
    color: orange
---

Onboarding was teaching new users the app one feature at a time. The catch: most of them didn't know what the app even was yet.

It had been built for a company we no longer were - a rewards debit card - and every time we shipped something new, a page got bolted on. Buying bitcoin, selling it, inbound transfers, direct conversion on deposit, a revamped set of tiers with the gate moved. Nobody owned the flow, so it just accreted, swinging from a handful of screens to way too many, each one explaining a feature to someone who hadn't gotten into the app yet. At one point it was walking people through how to earn rewards on ACH transfers before they'd even seen the product. My fix there set the tone for the whole project: cut most of it, make it simple.

## Pass 1 - make it one product

I worked with our lead product designer - she'd designed the app itself, and it was a genuinely good partnership - to give the flow a single shape, so it felt like a real product instead of a stack of features each introducing itself. It read better. But I'd set up onboarding tracking, and the funnel said people were still dropping out or getting stuck. A cleaner version of the wrong flow is still the wrong flow.

It also exposed a deeper issue: onboarding described our features, so it broke every time the features changed. We'd swung from too many screens to, after cutting, not enough - and that told me the answer was never a screen count. It was a foundation that didn't need re-cutting every time we shipped.

## Finding the umbrella

So I stopped anchoring onboarding to features and anchored it to what the whole company was for. Finding that umbrella is actually how I landed on our tagline, "personal finance powered by bitcoin" - broad enough to cover everything we were doing and everything we might add later. Onboarding built on that idea didn't need a rewrite every time a new feature landed. It future-proofed the flow by raising its altitude.

## Pass 2 - get out of the way

The second rebuild came from a product question we'd never actually asked: do we want free users in the app?

The old flow forced you to hand over your PII and sign up for the card during onboarding. That was the gate - and it came from a misunderstanding with Compliance about what we were actually required to collect, and when. We'd been treating a "later" requirement as a "front door" requirement for years.

Framed as a product call, the answer was clear. If we want free users, give them a dead-simple signup and earn the upgrade once they're inside and can see the value. You can't sell value to someone during onboarding when they don't yet know what the product is. There's a real tradeoff - a fully verified user is ready to transact the second they're in, and you get fewer of those when you stop demanding everything up front. But you get far more people through the door, and the door is where the whole funnel starts.

Watching real behavior backed it up: people don't read onboarding. My research said barely anyone read the explainer screens. So we whittled it down hard. Create an account and you're in - no SSN or address until you choose a path that needs it. I wrote all the copy myself, since I'd been doing our product-marketing copy - cutting screens and text down to the shortest line into the app.

## The compliance relationship that made it possible

None of this happens without Compliance, and the earlier misunderstanding became an asset. I got their exact requirements, then realized what had made onboarding so painful for product was a translation problem rather than a real constraint. Telling the story back to them in their terms - and understanding what they were actually protecting against - let me write a requirements spec that satisfied Compliance and still left room for a good first touch. That relationship paid off for years.

First touch is the whole ballgame for a financial app. A first experience full of friction - reading screens and typing in sensitive info before you know why - loses people, and they don't come back.

## Fixing the part where verification broke

Users who did opt into the full card up front still had to give us everything, and that path failed more than it should. Our identity verification wasn't reliable and Compliance was a small team without enough automation. People got flagged for review and then sat there, with nobody telling them they needed another document or an email reply, while Compliance drowned in incorrect denials.

So I built the system around it. I stood up internal tooling and automation hooked into our verification provider: when someone needed more documents, it messaged them automatically, in language I worked out with Compliance to stay compliant but still sound human. Then I gave those replies a dedicated bucket with Support and fought to make it high priority - a flagged user mid-signup is the warmest lead you have, someone actively trying to get in. We'd routinely have dozens of "needs review" cases that hadn't even been contacted. Getting them reached fast, and prioritized when they answered, moved a lot of people the rest of the way through.

## The flows underneath

The simple front door hid a lot of branching. KYC only fired on a path that needed it. Buying bitcoin depended on your state - we ran two custodians, and in some states a custodian couldn't offer purchasing at all, so the flow bent per user. The card path carried its own disclaimers, privacy policy, and cardholder agreement, which I kept updated with Compliance. The work was keeping all of that invisible until the moment it mattered.

## Where it landed

I was watching this in Power BI, Mixpanel, Amplitude, and our own backend. Two things moved the right way: more of the people who downloaded the app became users, and more of those users upgraded from free to paid. We let more free users in and still came out with more conversion overall than the high-friction flow produced. The funnel got wider at the top and stronger through the middle.

## What I'd do differently

I leaned on funnel data and a lot of anecdotal signal from users and the community, especially on the second pass. I'd run it as real A/B tests instead - hold the short-signup flow against the front-loaded one and measure downstream, beyond download-to-user: do the easier-in users convert and retain as well as the verified-up-front ones, and by how much. Same instinct, cleaner proof.

## What I learned

- Let the goal drive the flow. If the goal is more users and more interchange, then the job of onboarding is to get people into the app and onto the card as fast as possible. Everything that doesn't serve that is friction.
- Anchor to the value prop rather than the features. Onboarding pegged to a high-level promise survives every feature you ship. Onboarding pegged to features needs a rewrite every time.
- Don't be afraid to whittle, and don't be afraid to make a big change. The app should teach itself - onboarding that explains everything is usually there to make the team feel good rather than the user.
- Build with data collection in mind from day one. I could only make these calls because I'd instrumented the funnel up front. Decide what you'll need to see before you ship, instead of after.
