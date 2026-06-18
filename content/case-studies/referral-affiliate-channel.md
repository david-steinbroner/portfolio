---
title: "Tuning referral to pay for active users"
company: "Fold"
date: "2023"
description: "Reworked Fold's referral program so bonuses paid out on real usage rather than a claimed card, and took an affiliate channel from zero to one with major names in bitcoin media. In peak months it drove ~20% of new growth."
impact:
  - "Reworked Fold's referral program end-to-end: placement, fraud gating, economics, and a usage-based reward mechanic - drove ~20% of new growth in peak months"
  - "Moved the payout trigger downstream so bonuses only paid when a referred user became an active cardholder, changing the quality of everyone acquired"
  - "Capped acquisition cost in dollar terms after a fixed-sat bonus drifted with bitcoin's price, sizing the bonus against 3-5% interchange payback"
  - "Built and ran the affiliate channel: signed creators with six-figure bitcoin-media audiences, built custom per-creator attribution, and ran tiered behavior-based payouts in bitcoin"
  - "Designed attribution as a build decision - per-campaign QR codes and custom affiliate links - to see where growth actually came from"
tldr: "Fold's referral program was a buried toggle that paid flat sats the moment a referred user claimed a card, so it rewarded the claim rather than real usage. I reworked it in three passes - findability, economics, then a usage-based reward - and extended the same logic into an affiliate channel with major voices in bitcoin media."
status: "Shipped"
tags: ["Growth", "Referral", "Affiliate", "Incentive Design", "Attribution", "Fintech"]
category: "case-study"
homepageTags:
  - label: "Referral & Activation"
    color: green
---

Nobody could find it.

Fold's referral program was a toggle buried in your profile settings. It paid a flat chunk of sats once someone you invited claimed a Fold card. The gate was real - a referred user had to get a card before anyone got paid - but it stopped there. Someone could grab a free card, never use it, and the bonus still fired. And the bonus was denominated in sats, so every time bitcoin's price climbed, our cost climbed with it.

I reworked it. By the end it worked completely differently. The bonus only paid out once a referred user actually used the product, rather than at the moment they claimed a card. Major names in bitcoin media were sending us users through it. And in a good month, it drove around a fifth of our new growth.

Three passes got it there.

## Pass 1 - make it findable

Nobody refers a friend from a screen they never see. So I moved the ask to where intent lives:

- **Added it to the end of onboarding**, when a new user is most engaged, and kept it in the profile.
- **Gave it its own screen.** Instead of a buried toggle, the referral page became a live ledger of everything you'd earned - a running, anonymized history ("35 sats from this, 25 from that…"). Anonymized on purpose: our users care about bitcoin privacy, so the ledger showed your earnings without exposing who or what drove them.
- **Built a native share sheet** on that page so you could send your code straight through your phone's share menu, and a friend could follow it all the way through signup.
- **Ran email reminders** so the bonus didn't sit out of mind.

One small thing I treated as non-negotiable: **every web touchpoint carried a QR code.** Fold was a mobile-only app. If someone opened a referral email or link on a desktop browser, there was no app waiting for them - that's a dead end. A QR code let them scan and land in the right place on their phone. It sounds minor. It's the difference between a working funnel and a leaky one.

And those QR codes did double duty: **I gave each campaign its own code**, so I could see which campaigns and placements actually drove referrals instead of guessing.

## Pass 2 - fix the economics

Two changes mattered here: the gate and the amount.

The gate already existed, but it stopped at the card. A referred user had to claim a Fold card before anyone got paid, which still let someone grab a free card and walk. So I pushed the gate downstream: the referred user had to get the card **and** make a purchase before the bonus paid out. Now it only fired once we'd actually earned interchange on real activity.

Then the amount. As bitcoin climbed, a fixed 10,000-sat bonus climbed with it - eventually outpacing what a new user was likely to be worth. So I sized it the way you'd size any acquisition cost: at our 3-5% interchange, how much would a referred user need to spend on their card before the bonus earned itself back, and how long did that actually take? When that answer got uncomfortable, I **capped the bonus in dollar terms** - moved it to a fixed dollar value, with a higher payout on the premium tier, where the referred user was already worth more.

## Pass 3 - pay for active users

This was the real shift. We built a program designed to reward the behavior we actually wanted: referrals who turned into paying, active users.

Here's the mechanic. If someone you referred became an active Fold cardholder - spending on the card, buying bitcoin, buying gift cards - *and* went on to refer others, then every time one of your referrals did something like that, you earned a small random reward (1 to 50 sats). Fold took a margin on the underlying activity, so the payout was easily covered.

The point: your earnings tracked the ongoing value your referrals created over time, well past the one-time act of signing up. It turned referrers into people invested in their invitees actually using the product.

## The affiliate channel

Once the referral mechanics worked, I extended the same logic to creators. I went after the largest voices in bitcoin media - people like Max Keiser and Stacy Herbert, podcasters with six-figure audiences.

What I owned end to end:

- **The deals.** I set up each contract, aligned on what we'd do together, and gave them an early product preview before a feature launch so they could speak to it accurately. I never scripted them - they could be as honest as they wanted, as long as it was accurate.
- **Custom attribution.** Normal referral links were randomly generated. I built custom links for affiliates so every signup traced back to the right creator.
- **Tiered, behavior-based payouts.** They earned on signups, and more when those signups passed the same gate and became paying members. Paid out in bitcoin.
- **The read on what worked.** I set up automation to track signups per affiliate over time, then looked at which episodes or email blasts actually moved the number - so I could see which content drove conversions, beyond raw impressions.
- **The relationship.** I built a brand deck and guide, kept affiliates current on app changes, and coordinated every payout with Finance.

## What I'd build differently

I'm being straight about the gap: I didn't have the instrumentation to measure this channel the way I'd want to now.

- **I tracked signups and reasoned about payback, but I didn't retain clean channel-level dashboards or run a formal incrementality test.** I couldn't tell you, with a holdout, how many of those referred users we'd have acquired anyway. At Fold's scale and budget, volume and unit-cost discipline were the bar. At a larger scale, the first thing I'd add is real incrementality - geo or audience holdouts - so we're paying for net-new acquisition rather than subsidizing growth we'd have gotten for free.
- **The affiliate side was too manual.** I was monitoring signup spikes by hand to figure out which content drove them. I'd automate that attribution, and I'd push for more than one referral link per user so we could actually test creative and placement per affiliate.

## What I learned

- **Pay for the action you actually want.** Bonuses on signup buy you signups. Bonuses on real usage buy you users. Moving the payout trigger downstream changed the quality of everyone we acquired.
- **An incentive denominated in an appreciating asset will drift on you.** Cap acquisition costs in the currency your economics are actually in.
- **Attribution is a design decision you make up front.** Per-campaign QR codes and custom affiliate links cost almost nothing to build and told me where growth was really coming from.
- **The cheapest fix is often a placement fix.** Moving the ask from settings to the end of onboarding did more than any reward tweak.
