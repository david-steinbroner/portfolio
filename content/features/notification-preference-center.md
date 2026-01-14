---
title: "Notification Preference Center"
company: "Fold"
date: "2024"
description: "Self-service notification controls built with zero engineering bandwidth"
status: "Shipped"
tags: ["User Experience", "Operations", "Community", "Self-Service"]
category: "feature"
---

**I'd been fighting for notification preferences for over a year. We never had bandwidth. So I built it myself.**

Fold started as a gamified Bitcoin rewards app. We leaned heavily on push notifications, and it was noisy. The community had been asking for notification controls for a long time. To me, this was table stakes for a banking app. It would improve quality of life, make us look more serious, and help the brand direction we were moving toward.

But bandwidth was always tight, and this kept getting deprioritized. So I found another way.

---

## What I Built

**Third-party integration (no engineering required)** - I found a platform that handled notification preferences as a hosted page. As long as we could pass our user ID, they'd generate a unique link for each user to control their own settings. I vetted the platform, scoped the integration, and got it greenlit because it required zero internal engineering bandwidth.

**Channel architecture in Iterable** - Before this, we had no formal channel structure for our communications. I worked with Marketing, Compliance, and Support to define channels: onboarding drips, marketing promotions, product updates, legal/compliance (always on). Every existing communication got slotted into a channel. This forced Marketing to be intentional about what they were sending and where it fit.

**Custom-branded preference page** - The hosted page was customizable. I designed the entire page in Figma using Fold's existing branding (colors, fonts, shapes) so it would feel like a Fold environment when users clicked through. Had my designer validate the design, then built it out in the platform's backend.

**Granular controls** - Users could toggle each channel on or off across three mediums: push notifications, emails, and in-app messages. Plus an "all" selector to toggle everything at once. Ultimate control for users who wanted it.

**Distribution via email footer** - The link to notification preferences now lives at the bottom of every marketing email. No app update required, instant reach to all users.

---

## Key Product Decision

My ideal version was an in-app settings page. That's what I pitched originally. But after being told no for over a year due to bandwidth constraints, I figured out the next best thing: users could still control their notifications, just not from inside the app.

This is the version that got greenlit because it required zero engineering time. I did all the work myself, consulting with an engineer only a couple times. The tradeoff was worth it: users got control, and I shipped something instead of waiting indefinitely for the "ideal" solution.

I even scoped out what the next iteration would look like (in-app entry point on the settings page) so we had a path forward when bandwidth opened up.

---

## Impact

- **50% adoption** of users making some adjustment to their notification preferences
- Shipped with near-zero engineering bandwidth (I did the work myself)
- Community response was immediate and positive; users were thankful
- Generated data on which notification types users were turning off vs. keeping on
- Forced Marketing to define and categorize all communication types
- Link now lives in every marketing email footer

---

## Skills

Resourcefulness, third-party integration, cross-functional coordination, Figma design, community listening
