---
title: "No Bandwidth? Ship It Anyway."
company: "Fold"
date: "2024"
impact:
  - "50% of users adopted notification preferences within months of launch"
  - "Shipped with near-zero engineering bandwidth; did the design and integration work myself"
  - "Delivered a feature the community had been asking for for three years"
  - "Created channel architecture in Iterable that forced Marketing to categorize all communications"
  - "Generated data on user notification preferences that informed future marketing strategy"
  - "Link now lives in every marketing email footer—instant reach, no app update required"
tldr: "The community had been asking for notification preferences for three years. Engineering bandwidth was always the blocker. So I found a way to ship it without engineering."
status: "Shipped"
tags: ["Resourcefulness", "Community", "User Experience", "Self-Service", "Operations"]
category: "case-study"
features:
  - name: "Notification Preference Center"
    slug: "notification-preference-center"
---

## The Gap

Fold started as a gamified Bitcoin rewards app. We leaned heavily on push notifications—and it was noisy.

The community had been asking for notification controls for three years. Every few months, the request would surface again in Discord, in support tickets, in app store reviews. Users wanted control over what we sent them.

To me, this was table stakes. Every banking app, every fintech competitor, every serious financial product had notification preferences. We didn't. It made us look less professional than we were trying to be. It hurt the brand direction we were moving toward. And it frustrated loyal users who loved the product but hated the noise.

I knew we needed this. I pitched it multiple times. The answer was always the same: no bandwidth.

---

## The Constraint

Engineering was stretched thin. We were a small team shipping big features—card launches, Bitcoin trading, tax compliance. Notification preferences kept getting deprioritized because it wasn't revenue-generating, it wasn't compliance-required, and it wasn't blocking anything critical.

But "not critical" isn't the same as "not important." Every month we waited, we trained users to ignore our notifications entirely. We were eroding trust with our most engaged users. And we were falling further behind competitors who had solved this years ago.

After a year of being told no, I decided to find another way.

---

## The Solution

I found a third-party platform that handled notification preferences as a hosted page. The integration was simple: pass our user ID, and they'd generate a unique link for each user to manage their own settings.

No app update required. No engineering sprint needed. Just an integration I could own myself.

**Here's what I built:**

**Channel architecture in Iterable.** Before this, we had no formal structure for our communications. I worked with Marketing, Compliance, and Support to define channels: onboarding drips, marketing promotions, product updates, legal/compliance (always on). Every existing communication got categorized. This forced Marketing to be intentional about what they were sending—if it didn't fit a channel, it didn't get sent.

**Custom-branded preference page.** The hosted page was fully customizable. I designed the entire page in Figma using Fold's existing brand system—colors, fonts, spacing, components. When users clicked through from an email, it still felt like Fold. I had my designer validate it, then built it out in the platform's backend myself.

**Granular user controls.** Users could toggle each channel on or off across three mediums: push notifications, emails, and in-app messages. Plus an "all" selector for users who wanted to turn everything off (or back on) at once.

**Distribution via email footer.** The link to notification preferences now lives at the bottom of every marketing email. Instant reach, no app update, no engineering.

I consulted with an engineer a couple of times to make sure the user ID integration was solid. Otherwise, I did all the work myself.

---

## The Tradeoff

My ideal version was an in-app settings page. That's what I pitched originally—a native experience where users could manage notifications alongside their other account settings.

But that version required frontend engineering, backend work, and design resources I couldn't get. So I built the next best thing: users could still control their notifications, just not from inside the app.

This is the version that got greenlit—because it required zero engineering bandwidth. The tradeoff was worth it. Users got control. I shipped something instead of waiting indefinitely for the "perfect" solution.

I even scoped out what V2 would look like (an in-app entry point on the settings page) so we had a clear path forward when bandwidth eventually opened up.

---

## What I Learned

**"No bandwidth" isn't always "no."** It's "no to the version you pitched." There's usually another version—smaller, scrappier, less ideal—that you can ship without the resources you originally asked for. The question is whether you're willing to find it.

**Table stakes features matter for brand.** Notification preferences aren't exciting. They don't generate revenue. But their absence makes you look less serious than competitors. Sometimes the most important features are the ones users expect you to already have.

**Constraints force creativity.** If I'd gotten the engineering bandwidth I originally asked for, I would have built an in-app solution. It would have been better UX. But I never would have created the channel architecture that forced Marketing to categorize all their communications. That structure had value beyond just the preference center.

**Ship the 80% solution.** Users didn't care that it wasn't in-app. They cared that they could finally control their notifications. The hosted page solved their problem. Perfect is the enemy of shipped.
