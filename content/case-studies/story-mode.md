---
title: "Building an AI-Native Product Solo: Story Mode"
company: "Personal Projects"
date: "2025"
description: "An AI-powered interactive storytelling platform that solves TTRPG accessibility problems"
impact:
  - "Identified two accessibility barriers in TTRPGs and designed AI-native solution for both"
  - "Shipped full-stack React/Express/PostgreSQL app to production as solo PM"
  - "Built prompt architecture with graceful degradation for AI reliability"
tldr: "I identified two accessibility barriers keeping people out of tabletop gaming—social intimidation and genre mismatch—and built an AI-powered platform that solves both: a private experience with dynamic worldbuilding."
status: "Building"
tags: ["AI Product", "GenAI", "Full-Stack", "Solo Build", "Accessibility"]
category: "case-study"
liveUrl: "https://aitavern.onrender.com"
repoUrl: "https://github.com/david-steinbroner/AITavern"
---

**Story Mode is an AI-powered interactive storytelling platform I designed and built solo.** It started with a question: why don't more people try tabletop roleplaying games?

The usual answers — thick rulebooks, complicated character sheets — are surface friction. The real barriers are human.

The first is social. Trying something new with strangers is intimidating. Even if a TTRPG group is welcoming, the act of showing up — exposing yourself to awkwardness, not knowing the norms, being the newcomer — stops people before they start. The barrier isn't that groups are unwelcoming. It's that humans are naturally nervous about being vulnerable in new social situations.

The second is genre. Traditional fantasy dominates TTRPG culture. Elves, dragons, medieval settings. If that's not your thing, and all you see is fantasy-focused content, you assume there's nothing for you.

AI happens to solve both. A private AI narrator means you can explore interactive storytelling alone — no strangers, no audience. And because AI can dynamically generate any world based on your input, you're not locked into fantasy. Tell it you want a detective story in 1940s Los Angeles, and it builds that.

Private *and* flexible. That's what I built Story Mode to test — [try it here](https://aitavern.onrender.com).

---

## Why Existing Solutions Don't Work

Digital TTRPG tools are built for existing players. Character builders with stat optimization. Virtual tabletops that assume you already have a group. AI tools that help DMs prep sessions — but still require a DM, which still means showing up socially.

Solo RPG video games remove the social pressure but lock you into someone else's world. You play their story, in their genre, with their rules.

No existing solution solves both problems. You either get privacy without flexibility, or flexibility without privacy.

The constraint I was working with: I'm a PM, not an engineer. No team, no budget, no timeline except my own. If this was going to exist, I had to build it myself.

---

## Understanding the Users

I wasn't building for TTRPG veterans. I was building for people locked out by social dynamics and genre mismatch — and for how they actually use technology.

**Mobile-first, because that's where people are.** My target users aren't sitting at desktops with time to spare — they're on phones, on commutes, in spare moments. A web app they can open in a browser without downloading anything is lower friction than asking them to install something.

**The "I've always wanted to try but..." crowd.** Curious about collaborative storytelling but can't get past the idea of showing up to a group. They want to explore this privately.

**The "fantasy isn't my thing" crowd.** They love stories — mysteries, sci-fi, thrillers, romance — but every TTRPG they've encountered is elves and dragons. They've never seen themselves in the genre.

**The "I don't know what I'm supposed to do" crowd.** Even if they got past everything else, TTRPG newcomers face a blank-page problem: what actions can you even take? Experienced players know you can "search the room" or "ask the bartender about rumors." Newcomers don't. They stare at an open prompt and freeze.

Every product decision filtered through this lens: does this reduce a barrier, or add one?

---

## The AI at the Core

The Guide (what traditional TTRPGs call a "Dungeon Master") is an AI narrator. When a player makes a choice, the Guide receives their character info, the adventure context, the chat history, and the player's action. It responds with 2-3 sentences of narrative prose and exactly 3 action options for what to do next.

**The input interface gives multiple paths.** Tap options sit at the top — pre-generated actions newcomers can select with one tap. These teach the *kinds* of things you can do in interactive storytelling. Below that: voice-to-text and custom text input for users with their own ideas. Everything visible at once, no mode switching. Newcomers learn by seeing options; experienced users aren't constrained.

**Tone calibration.** The Guide needed to feel warm and encouraging. Instructions like "say 'your character' not 'your PC'" and "say 'what would you like to do?' not 'roll for initiative'" keep the voice accessible across all genres. The Guide adjusts tone based on adventure type — terse for noir, dramatic for adventure, intimate for romance.

**Response constraints.** Under 150 words with exactly 3 options. Short enough to read on a phone screen between stops on a commute. No walls of text, no overwhelming choices.

**Designing for failure.** AI APIs fail. Rate limits hit. If your core feature is AI, "it didn't work" isn't an edge case. When the API fails, Story Mode shows a friendly message, offers demo mode as a fallback, and logs the failure to Sentry. Users don't care *why* it's broken — they want to know what to do next.

---

## How I Built It

I don't write production code. I'm a PM who can read code, debug logic, and make architecture decisions — but I've never been a software engineer. I built Story Mode by collaborating with Claude as my development partner.

The workflow: describe what I want in plain English, Claude writes the implementation, I test locally and request adjustments, Claude commits to GitHub, Render auto-deploys. I'm making architecture decisions, reviewing implementations, catching edge cases, and directing iteration. Claude handles the syntax.

This produced a full-stack React/Express/PostgreSQL application with a RESTful API, Drizzle ORM, authentication, error monitoring via Sentry, and an automated deployment pipeline.

What I learned about working this way: context is expensive. Every time I switched AI platforms, I lost continuity. I started writing comprehensive documentation not for future developers, but for future AI sessions. And tight feedback loops matter — the more code that gets written between my reviews, the harder bugs are to trace.

---

## Brand Evolution

The project went through three brand identities. Each one taught me that brand decisions are accessibility decisions — especially when your audience has already been told "this isn't for you."

**AI Tavern (September 2024).** Dark fantasy aesthetic. D&D terminology: "Dungeon Master," "Campaign," "Party." I was solving the social barrier but recreating the genre barrier in the UI. The visual language signaled "traditional fantasy gamers welcome" — exactly the gatekeeping I was trying to circumvent.

**Skunk Tales (October 2024).** Whimsical, character-driven. Warm aesthetic with a skunk storyteller mascot. The specific mascot and name implied cozy campfire stories — one genre instead of "any genre you want." If the platform's promise is flexibility, the brand can't lock into a single aesthetic.

**Story Mode (November 2024 – Present).** "Pastel Playground" aesthetic: cream backgrounds, soft indigo text, peachy pink CTAs, mint success states. Complete terminology overhaul. Genre-neutral iconography: spaceship (sci-fi), city (urban), briefcase (thriller), heart (romance).

| Gaming Jargon | Story Mode Term |
|---------------|-----------------|
| Dungeon Master | Your Guide |
| Campaign | Story / Adventure |
| Session | Chapter |
| Character Sheet | Your Character |
| Party | Friends |
| NPC | Character in the story |

Every word and visual is a signal about who this product is for. Changing "Dungeon Master" to "Guide" wasn't marketing — it was whether someone who's never played a TTRPG would feel like this product could be for them.

---

## The Tradeoffs

**Mobile-first vs. desktop richness.** I optimized for mobile because that's where my target users are. Desktop users get a simpler experience than they might want, but a beautifully rich desktop experience that most users never see is worse than a good mobile experience that reaches everyone.

**Shipping with known bugs.** Story Mode is live with UX issues I haven't fixed. Mobile layout inconsistencies. Quest progression that doesn't fully respond to choices. The Story Mode branding hasn't been fully applied to the codebase yet. But a live product that people can try teaches me more than a polished product only I've seen. I'm learning what actually confuses people vs. what I *thought* would confuse them.

---

## What We Built

**AI-powered Guide system.** Real-time narrative generation with genre adaptation and graceful error handling.

**Multi-path input interface.** Tap options for newcomers, plus voice-to-text and custom input for experienced users — all visible at once.

**Mobile-first web app.** No download required. Open a browser and start playing.

**Full-stack application.** React frontend, Express backend, PostgreSQL with Drizzle ORM. Authentication, character persistence, adventure management.

**Demo mode.** Players can try the full experience without signing up. A non-blocking banner encourages sign-in without interrupting play — because asking for commitment before delivering value is another barrier.

**Genre-neutral brand and terminology.** Visual identity designed to say "any story, for anyone."

**[Try it live →](https://aitavern.onrender.com)**

---

## What I Learned

The PM skill here wasn't building with AI — it was recognizing where AI uniquely solves a problem. GenAI enables both privacy and flexibility at once. That combination didn't exist before. Recognizing that was the insight; building it was the validation.

The accessibility problem in TTRPGs wasn't rules or interfaces. It was that trying something new with strangers is intimidating, and the dominant genre doesn't appeal to everyone. Every product decision — private experience, dynamic worldbuilding, multi-path input, genre-neutral brand — was about removing human barriers.

Brand is UX. Every word is a product decision. Going through three brand identities taught me that the terminology and visuals determine who feels welcome before they click anything. "Dungeon Master" vs. "Guide" isn't a naming choice — it's an accessibility choice.

Building with AI as a development partner is real, but it's not magic. Claude didn't replace my need to understand architecture or make product decisions. It replaced the syntax that would have stopped me from building at all. The PM skills — scoping, prioritizing, making tradeoffs — are still the job.

And the biggest lesson: ship to learn. Story Mode has bugs. It's not polished. But it's live, people can try it, and I'm learning from real usage instead of hypothetical scenarios.
