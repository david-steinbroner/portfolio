---
title: "The Most Public Feature at the Company, and I Had to Make It Worse"
company: "Fold"
date: "2024"
description: "Evolving Fold's flagship engagement feature through 18 months of iteration, complexity, hard lessons, and eventual simplicity"
impact:
  - "Owned end-to-end evolution of Fold's most visible feature: product strategy, pricing models, community communication, and GTM for every update over 18 months"
  - "Built self-service admin tooling that eliminated engineering dependency for wheel updates, enabling monthly themed launches, seasonal campaigns, and sponsorship integrations"
  - "Created sponsorship program that turned a cost center into a revenue stream, generating tens of thousands in direct sponsor payments plus measurable lifts in engagement"
  - "Designed and built a new pricing model (replacing a legacy VM-based system) that scales sustainably to any Bitcoin price up to $1M"
  - "Shipped winner notifications that drove increases in DAU and spin volume by leveraging FOMO"
  - "Navigated the transition from unsustainable 3.5% average rewards to a sustainable ~$0.01/spin model while maintaining ~50k daily spins"
status: "Shipped"
tags: ["Product Strategy", "Pricing Models", "Community", "GTM", "Internal Tooling", "Rewards"]
category: "case-study"
---

## The Gap

When I joined Fold, the Spin Wheel wasn't just a feature. It was the feature.

The Fold Card was the first bitcoin rewards debit card on the market, and the wheel was what made it exciting. Every purchase earned a spin. Every spin could win up to 100% back, or 5% back, or sometimes a whole bitcoin. The average rewards rate hovered around 3.5%, which was unheard of for a free debit card. And because Bitcoin's price was rising, users who earned rewards early watched their effective rewards rate double or triple as the asset appreciated.

This was why Fold was growing. This was why we had a loyal community. This was why people talked about us. The wheel wasn't a feature; it was the brand.

The problem: it was completely unsustainable.

A reward structure that worked at $25k Bitcoin became dangerous at $50k Bitcoin. Percentage-based rewards tied to an appreciating asset meant our costs scaled faster than our revenue. We were on track to reward ourselves out of existence.

I inherited the wheel knowing that any changes would be felt by every user immediately. All eyes were on this feature. And my job was to make it less rewarding while somehow keeping it fun, while somehow keeping users from leaving, while somehow doing all of this with almost no engineering bandwidth.

## What I Actually Inherited

The wheel system I walked into had two components: a Daily Wheel (one free spin per day for flat sats) and a Purchase Wheel (spin after every card purchase for percentage-based rewards). Both ran on a pricing model so complex it lived on a virtual machine. Running a single simulation took 15 minutes. If I wanted to test different prize configurations, I'd adjust the inputs, run the simulation, wait, check if I hit the target rewards rate, and repeat. The model also kept breaking; simulated averages of 2.5% would result in actual averages closer to 3%.

Beyond the model, I inherited a monthly cadence. Every month, we launched a new themed wheel: the Volcanic Wheel for El Salvador adopting Bitcoin, the Uncle Satoshi Wheel for July 4th, the Summer Games Wheel for the Olympics, the I'm Feeling Lucky Wheel for St. Patrick's Day. Each launch required a theme (sourced from community polls or Bitcoin culture), a design brief for our single designer, a prize structure I'd model and test, a blog post I'd write, social promotion I'd run, and community feedback I'd gather and respond to.

This monthly rhythm was part of what users loved. They looked forward to the new wheel. It showed off Fold's personality. But it also meant I was shipping a new product every month, with all the feedback loops and iteration that implies.

![Purchase-tied spin wheel showing transaction rewards](/case-studies/spin-wheel/spin-wheel-purchase-tied.PNG)

## The Long Road Through Complexity

What follows is 18 months of iteration. I'm going to be honest about what worked, what didn't, and what I learned.

**Attempt 1: Base Rate Plus Wheel.** Finance made it clear we needed more predictable costs. My first major change introduced a base rewards rate (1% for Spin+, 0.25% for free users) with the wheel providing bonus rewards on top. This let us lower the wheel's average payout while still giving users guaranteed value. The reaction was mixed. Users understood the logic when we explained it, but the magic of "spin and see what you get" was diluted. The wheel felt like an add-on rather than the main event.

**Attempt 2: Give Back Control.** Based on feedback that users felt like something had been taken away, I introduced the Spin Bomb: land on this prize and get 21 extra spins to try for something better. The idea was to give users a sense of control and second chances. This was popular, but it was also the start of a pattern: adding complexity to address complaints about previous complexity.

**Attempt 3: Choose Your Own Reward.** Feedback kept saying users wanted the old variability back. So I introduced choice: after every purchase, users could take a guaranteed flat rate (1% for Spin+, lower for free) or spin for a chance at up to 100% back. This was well-received. Users like choice. But it added another decision point to every transaction, and it made the system harder to explain to new users.

**Attempt 4: Rebalancing the Odds.** Data showed that a small percentage of users were winning most of the rewards, skewing our averages. I adjusted: removed individual caps on big prizes, increased odds on some wedges, increased daily Extra Spins, reduced spin expiration to 24 hours so we could give out more of them more often. Each of these changes made sense in isolation. Together, they made the system increasingly hard to understand.

**Attempt 5: Driving Gift Cards.** Finance identified gift card interchange as our best revenue source. I used the wheel to drive gift card volume: added gift card bonus prizes, highlighted deals in launch posts, framed the wheel as helping users "stack majorly on gift cards." This worked. Gift card volume increased significantly. But it also meant the wheel was now serving multiple masters: engagement, rewards sustainability, and revenue optimization.

**Attempt 6: Two Wheels.** To drive Spin+ conversions, I created separate wheels for each tier. Spin+ got better prizes at better odds. The theory was clear differentiation would drive upgrades. The problem: users only saw their own wheel. Spin+ users didn't see what Spin users were missing, so they didn't feel the premium. Spin users didn't see what they could unlock, so they didn't feel the pull to upgrade. I had to introduce locked wedges with upgrade CTAs on the Spin wheel to make the differentiation visible. That helped conversions, but added more visual complexity.

**Attempt 7: Detaching Purchases from Spins.** We made a big structural change: the wheel no longer gave percentage-based rewards tied to purchases. Instead, users earned flat 1% back on every purchase (for Spin+), plus 1 spin for every $10 spent. Spins now won flat sat amounts or bonuses. On paper, this was elegant. In practice, it required new features: a Spin Bank to show progress toward the next spin, a Super Spin feature to spin accumulated spins all at once (because spinning 200 times manually would be tedious). Users liked the Super Spin feeling. But new users were increasingly confused. What's a spin? What's an Extra Spin? How do I earn them? Why do they expire?

**Attempt 8: 3x3 and More Complexity.** To drive purchase frequency, I introduced 3x3: make three purchases of at least $25, earn three extra spins. Finance loved it. Users added it to the pile of things they had to track. Around this time, I started building educational components into the app. How to earn spins. More ways to earn spins. Tips for maximizing rewards. And I realized something: if you have to explain how to use the thing in addition to the thing itself, the thing is probably too complicated.

## The Voice of Customer Battle

Throughout this period, I was in constant tension with finance.

When Fold brought in a finance team, their job was to right the ship. That meant they became the loudest voice in the room. They controlled the budget, which meant they effectively controlled product decisions. This is a common startup pattern: finance knows the numbers, so finance leads, even when the decisions are product decisions that require product thinking.

The challenge was that I wasn't officially a product person. I had taken over the wheel because I was closest to the community, and I figured it out as I went. It wasn't until I was neck-deep in the work for about two years that I realized I was functioning as a full PM: taking business requirements, translating them into feature updates, owning the entire lifecycle from strategy to launch. But without the title, my voice didn't carry the same weight in rooms where finance was setting direction.

Their perspective made sense on paper: if users followed the optimal strategy, they could earn great rewards. The math worked out. The incentives were aligned. From a spreadsheet view, the product was generous.

My perspective was different: users don't build spreadsheets to maximize rewards on a debit card. They want to use their card and feel like they're getting something good. Every layer of complexity, every new mechanic, every "if you do X you get Y" condition made the product feel less like a reward and more like homework.

I advocated for simplicity repeatedly. Sometimes I won, sometimes I didn't. But I kept the feedback channels open: Discord discussions, Twitter polls, in-app surveys, blog post comments. And I kept reflecting community sentiment back to leadership, showing them the gap between how we thought about the product and how users experienced it.

The data eventually supported my position. Engagement metrics would spike after simplification and gradually decline as complexity accumulated. But it took a long time and a lot of iteration to get to a place where simplicity won.

## The Final Simplification: One Wheel to Rule Them All

The biggest structural change was also the simplest: we went from two wheels to one.

We retired the Purchase Wheel entirely. No more spinning for percentage-based rewards on every transaction. No more separate mechanics for purchases versus daily engagement. We took the Daily Wheel, retrofitted it to be the single rewards experience, and stopped calling it the "Daily Wheel." It became just "the wheel" or "the rewards wheel."

This was a significant psychological shift. For years, the Purchase Wheel had been the exciting one: the big wins, the variability, the chance at 100% back. The Daily Wheel was the steady one: free sats every day, lower stakes, simpler prizes. Collapsing them meant accepting that the era of percentage-based purchase rewards was over. But it also meant users only had to understand one thing.

Here's how it works now: every user gets one free spin per day. Spins expire in 24 hours. Daily push notifications remind users to spin. The wheel gives flat sat prizes. Spin+ users have access to all wedges including a chance at 1 BTC. Spin users see locked wedges with an upgrade CTA.

No more earning spins per $10. No more choose-your-reward. No more 3x3. No more Spin Bombs. No more two wheels. Just one wheel, one spin per day, simple prizes.

![Daily free spins wheel - the final, simplified model](/case-studies/spin-wheel/spin-wheel-daily-spins.png)

I built a new pricing model in Google Sheets, replacing the legacy VM-based system. It pulls live Bitcoin price via API, uses predefined prize tiers for different price ranges, and calculates average cost per spin. The model works at any Bitcoin price up to $1M. Target cost per spin: about $0.01.

With winner notifications (push alerts when someone wins 100k+ sats, which happens roughly every 1.5 days), we maintain engagement through FOMO rather than complexity. Spins are still running at around 50k per day. And because spins are cheap, we can use them as promotional currency: "First 500 users get 50 spins" for feature launches.

![Winner notification driving engagement through FOMO](/case-studies/spin-wheel/spin-wheel-winner-notification.png)

The wheel is simpler than it's ever been. It's also more sustainable than it's ever been.

## Self-Service Tooling: Building for Autonomy

One of my most important contributions wasn't a feature users ever saw. It was the infrastructure that let me move fast without dependencies.

**Design Side: Templatized Components.** Early on, I worked with our designer to create a component system for the wheel. We turned the visual elements into modular pieces: wheel colors, prize icons, center spinner logo, page copy, promotional banners. Once the templates existed, I could update most wheel elements myself. If we needed a custom illustration or a new icon, I'd request it from design. But swapping colors, updating copy, changing prize displays - that was all self-serve. This meant themed wheel launches didn't require design tickets for every change. I could experiment with seasonal looks, test different promotional messaging, and respond to feedback without waiting for anyone's calendar to open up.

**Engineering Side: The Wheel Admin Tool.** More significantly, I spec'd and shipped an internal admin tool that gave me complete control over the wheel's mechanics. Through this tool, I could manage odds for every prize wedge, set prize amounts, upload all the design components, and configure the wheel end-to-end. But the feature that changed my workflow most was scheduling. I could set an exact start date and time for a new wheel to go live, and an end date and time for it to expire. This meant I could build wheels in advance and queue them up.

Before the scheduling feature, launch days were chaotic. I'd have to manually flip the switch on the wheel, publish the blog post, push out social media, monitor Discord and Twitter for feedback, and be ready to flag any bugs to engineering - all at the same time. With scheduling, I could prepare everything in advance. The wheel would go live automatically at the scheduled time, and I could focus on community engagement and monitoring instead of juggling a dozen manual tasks simultaneously.

The combination of design templates and the engineering admin tool meant I could ship a new wheel every month - sometimes more often - while engineering focused on roadmap work. A few tickets up front gave me autonomy for every future update. That's the leverage that let me iterate as fast as the business needed.

## The Sponsorship Program

Early in my tenure, I saw an opportunity to turn the wheel from pure cost center into a revenue source.

The Daily Wheel (the free daily spin) was high-visibility, low-cost real estate. A previous team member had done one sponsorship with Atoms, a shoe company with a Bitcoin-themed edition. It worked well.

I built that into a repeatable program. First, I used the templatized design components and admin tool to make sponsor integrations self-serve on my end. I could swap in sponsor branding, add their prizes to the wheel, and schedule the sponsored wheel to run for a specific period - all without engineering involvement.

Then I created tiered sponsorship packages. The entry tier (around $10k) got two weeks of logo placement plus a prize on the wheel, usually something like a membership or product from the sponsor. The premium tier (around $20k) got a full month, plus blog posts, email blasts, Twitter promotion, and more prizes. I built a PDF with our engagement metrics - spins, page views, social reach - so sponsors could see the exposure they'd get.

I managed the full sponsor relationship: initial outreach, contract terms, collecting their marketing collateral, working with design to turn their assets into wheel components, scheduling the launch, and running the promotional campaign.

At least one sponsor used the program after Atoms, generating direct revenue plus measurable lifts in engagement and spend volume during the sponsorship period. Users were more active when there was something new and branded to engage with, and that activity translated to increased purchases.

The sponsorship infrastructure still works with the current single-wheel model. It's a revenue lever that's always available if the business wants to use it.

## What I Built vs. What I Managed

To be explicit about scope: I owned this end-to-end.

Product strategy: deciding what to change, when, and why. Pricing models: both working within the legacy system and building its replacement. Community management: gathering feedback through Discord, Twitter, surveys, and direct conversation. GTM: writing every blog post, running every launch, coordinating social promotion. Internal tooling: spec'ing the admin tool, working with design on templatized components, building the Google Sheets pricing model. Stakeholder management: navigating between finance requirements, user feedback, and engineering constraints.

Engineering built to my specs in short bursts. Design created assets to my briefs. But the thinking, the iteration, the communication, and the execution were mine.

For most of this period, I didn't have a PM title. I was doing community and growth work, and the wheel fell under my ownership because I was closest to the users. It wasn't until years into the work that I recognized what I was actually doing: taking business requirements and translating them into product updates, managing a feature lifecycle, balancing competing stakeholder needs, and shipping continuously. That's product management, whether or not it says so on your LinkedIn.

## The Tradeoffs

Every iteration carried two risks pulling in opposite directions:

**Alienating legacy users** who remembered the golden era of 3.5% average rewards and felt every change as a downgrade.

**Confusing new users** who walked into a system mid-evolution and didn't understand what spins were, why they expired, or how to maximize their rewards.

I tried to manage both through transparency. Every change came with honest communication: here's why we're doing this, here's what's changing, here's what we got wrong last time, here's what we're trying next. I gave credit to the community when we got things right and owned it when we got things wrong.

And because we'd built genuine community trust over years, something remarkable happened: when users complained, other users defended us. "They had to do this. Remember when every other company in this space died? Fold stayed."

That wasn't luck. That was years of transparent communication paying off when we needed it most.

## What I Learned

**Complexity compounds.** Every new mechanic makes the next one harder to add and harder to explain. Each individual feature might make sense, but the system becomes incomprehensible.

**Users don't optimize.** If your rewards program requires a spreadsheet to maximize, most users will just feel like they're getting a bad deal. Design for people who won't read the instructions.

**If you have to explain it, it's too complicated.** The moment I started building "how to use spins" educational content, I should have known we'd gone too far.

**Build tools, not just features.** The self-service admin system and design templates gave me more long-term value than any single wheel iteration. Infrastructure that removes dependencies compounds over time.

**Cost structures need to survive success.** The original wheel failed because Bitcoin succeeded. Any reward system tied to an appreciating asset needs a model that works at 3x the current price.

**Community trust is a strategic asset.** The years spent building Discord, being transparent, giving users direct lines to leadership: all of that converted into users defending us during our hardest product changes. You can't manufacture that in a crisis.

**Simplicity usually wins.** Not as a platitude. As a survival strategy. When you don't have bandwidth to build something complex well, build the simple thing you can actually execute and explain.

**Your title doesn't define your work.** I was doing PM work for years before anyone called me a PM. If you're taking business requirements, translating them into features, owning the outcome, and shipping - you're doing the job, regardless of what it says on your title.
