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

**Story Mode is an AI-powered interactive storytelling platform I designed and built solo.** It started with a product hypothesis: tabletop roleplaying games have accessibility problems that technology hasn't solved—not because the technology didn't exist, but because no one identified what the real barriers actually are.

There are two barriers, and they're both about humans.

The first is social. Trying something new with strangers is intimidating. Even if a TTRPG group is welcoming, the act of showing up—exposing yourself to awkwardness, not knowing the norms, being the newcomer—stops people before they start. The barrier isn't that groups are unwelcoming. It's that humans are naturally nervous about being vulnerable in new social situations.

The second is genre. Traditional fantasy dominates TTRPG culture. Elves, dragons, medieval settings. If that's not your thing, and all you see is fantasy-focused content, you assume there's nothing for you. The cultural default signals "this isn't your taste" before you even look closer.

My hypothesis: generative AI can solve *both* of these in a way nothing else can.

AI removes the social barrier because Story Mode is something you do alone. No strangers. No audience. No vulnerability. Private exploration of something new.

AI removes the genre barrier because it can dynamically build any world based on what *you* want. Noir mystery. Space opera. Romance. You're not constrained to pre-written fantasy rulesets or someone else's setting. Tell it what you want, and it builds that world for you.

Previous solutions could maybe solve one of these problems. A solo video game RPG is private, but locks you into the designers' world. A flexible human DM can build any genre, but requires you to find them and show up socially. GenAI is the first thing that can do both simultaneously: private *and* infinitely flexible.

I built Story Mode to test that hypothesis. The fact that I used AI to build it—collaborating with Claude as my development partner—is secondary. The PM insight is recognizing where AI uniquely solves problems that previous solutions couldn't touch—[try it here → Story Mode](https://aitavern.onrender.com).

---

## The Gap

Tabletop roleplaying games have accessibility problems, and they're not the ones most people talk about.

Yes, the rules can be intimidating. Yes, the rulebooks are thick. But these are surface friction. Millions of people who'd love collaborative storytelling never try it because of two deeper barriers:

**Barrier 1: Social discomfort when trying new things.**

Joining a TTRPG group—online or in person—means showing up to do something you've never done with people you don't know. That's intimidating regardless of how welcoming the group actually is.

You're the newcomer. You don't know the norms. You might mess up, say something wrong, slow things down. Even if no one judges you, you'll feel like they might. The vulnerability of trying something new in front of strangers is enough to stop many people before they start.

This isn't a problem with TTRPG communities. It's a human problem. People are nervous about being uncomfortable, and joining a new social activity with strangers is uncomfortable by definition.

**Barrier 2: Traditional fantasy isn't for everyone.**

TTRPG culture defaults to elves, dragons, and medieval settings. D&D dominates the space, and D&D is fantasy. If you're story-curious but don't vibe with swords and sorcery—if you'd rather explore a noir mystery, a sci-fi adventure, or a romance—the overwhelming signal is "this isn't for you."

It's not that other genres don't exist in TTRPGs. It's that the cultural default is so strong that casual observers assume fantasy is all there is. The aesthetic and terminology say "gamers who like fantasy," and everyone else bounces.

**Why existing solutions don't work:**

Digital TTRPG tools are built for existing players. Character builders with stat optimization. Virtual tabletops that assume you already have a group. AI tools that help DMs prep sessions—but still require a DM, which means still requiring you to show up socially.

Solo RPG video games remove the social pressure but lock you into someone else's world. You play their story, in their genre, with their rules.

No existing solution solves both problems. You either get privacy without flexibility, or flexibility without privacy.

**My hypothesis:** Generative AI can solve both simultaneously.

A private AI narrator means you can explore interactive storytelling alone—no strangers, no audience, no social vulnerability. And because AI can dynamically generate any world based on your input, you're not locked into fantasy. Tell it you want a detective story in 1940s Los Angeles, and it builds that. Tell it you want a romance on a space station, and it builds that.

Private *and* flexible. That's what GenAI uniquely enables.

I wanted to test whether that hypothesis was real. The constraint: I'm a PM, not an engineer. No team, no budget, no timeline except my own. If this was going to exist, I had to build it myself.

---

## Understanding the Users

I wasn't building for TTRPG veterans. I was building for people locked out by social dynamics and genre mismatch—and I was building for how they actually use technology.

**Mobile-first, because that's where people are.**

Most web traffic is mobile. My target users aren't sitting at desktops with time to spare—they're on phones, on commutes, in spare moments. A web app they can open in a browser without downloading anything is lower friction than asking them to install something. And if the experience doesn't work well on a phone, it doesn't work for most of the audience.

**The "I've always wanted to try but..." crowd.** They're curious about collaborative storytelling but can't get past the idea of showing up to a group. Online or in-person, the social exposure feels like too much. They want to explore this privately first—maybe forever—without an audience.

**The "I don't want to be the newcomer" crowd.** They might try a TTRPG if they could skip the part where they don't know what they're doing. They want to learn the feel of interactive storytelling without performing for people who already know the ropes. A private space where "messing up" has no social consequences.

**The "fantasy isn't my thing" crowd.** They love stories—mysteries, sci-fi, thrillers, romance—but every TTRPG they've encountered is elves and dragons. They've never seen themselves in the genre, so they assume the whole format isn't for them. They need to see that their preferred genres are possible.

**The "I don't know what I'm supposed to do" crowd.** Even if they got past everything else, TTRPG newcomers face a blank-page problem: what actions can you even take? Experienced players know you can "search the room" or "ask the bartender about rumors." Newcomers don't. They stare at an open prompt and freeze.

The common thread: these are people who want the *experience* of interactive storytelling without the *social overhead*, the *genre constraints*, or the *"what do I even do?"* paralysis that currently comes with it. Every product decision filtered through this lens: does this reduce a barrier, or add one?

---

## The AI at the Core: Solving Both Problems

Story Mode isn't a product that uses AI—it's a product built on the insight that AI solves two specific problems nothing else can. The Guide (what traditional TTRPGs call a "Dungeon Master") is an AI narrator that delivers both privacy and flexibility simultaneously.

**How AI solves the social barrier:**

Story Mode is something you do alone. There's no group to join, no strangers to impress, no social situation to navigate. You open the app, you start a story, and you explore at your own pace with no audience.

This isn't about AI being "good enough" to replace a human DM. A great human DM creates richer, more surprising experiences. But for people who'd never try a TTRPG because of social anxiety, "good enough and private" beats "amazing but requires showing up to a group."

The AI narrator is infinitely patient. It doesn't judge your choices. It doesn't react in ways that feel like disapproval. It doesn't have expectations you're failing to meet. The experience is genuinely private—you're not performing for anyone.

**How AI solves the genre barrier:**

GenAI can dynamically build any world based on what you want. You're not limited to pre-written adventures or someone else's fantasy setting. Tell the Guide you want a noir mystery, a space opera, a workplace drama, a romance—and it builds that world, adapting tone and setting to match.

This would be impossible with traditional game design. Writing adventures for every possible genre means infinite content creation. But AI generates the world in real-time based on your inputs. The platform becomes genre-neutral not by including every genre, but by being able to create any genre on demand.

**How the Guide works:**

When a player makes a choice, the Guide receives:
- The player's character (name, traits, backstory)
- The current adventure context (genre, setting, recent events)
- The chat history (what's happened so far)
- The player's choice

The Guide responds with:
- 2-3 sentences of narrative prose describing what happens
- Exactly 3 action options for what the player can do next

**The input interface: multiple paths, no barriers.**

Newcomers to TTRPGs don't know what actions are even possible. They've never played, so they don't know you can "search the room" or "persuade the guard" or "sneak past." A blank text input is paralysis.

Story Mode presents all input options at once:
- **Top: Tap options.** Pre-generated actions the player can select with one tap. These teach newcomers the *kinds* of things you can do in interactive storytelling while letting them play immediately.
- **Below: Voice-to-text and custom text.** For users who have their own ideas, they can speak or type a custom response. Voice removes the friction of thumb-typing paragraphs on mobile.

This is progressive disclosure without hiding anything. The easy path is most prominent, but the flexible paths are visible and accessible—no mode switching, no settings to dig through. Newcomers learn by seeing options; experienced users aren't constrained. Everyone picks their path based on comfort level.

**Prompt architecture decisions:**

*Tone calibration.* The Guide needed to feel warm and encouraging—the opposite of intimidating. Instructions like "say 'your character' not 'your PC'" and "say 'what would you like to do?' not 'roll for initiative'" kept the voice accessible across all genres.

*Genre adaptation.* The Guide adjusts tone based on adventure type—noir and terse for mystery, epic and dramatic for adventure, intimate for romance. Same underlying system, but the experience feels tailored to what you actually want to explore.

*Response structure.* I constrained responses to under 150 words with exactly 3 options. This kept the pace approachable—no walls of text, no overwhelming choices. Short enough to read on a phone screen between stops on a commute.

**Building for AI unreliability:**

AI APIs fail. Rate limits hit. Quotas exhaust. If your core feature is AI, you need graceful degradation—because "it's broken and I don't know what to do" is exactly the kind of frustrating experience that reinforces why your target users avoid trying new things.

When the OpenRouter API fails, Story Mode:
- Shows a friendly message: "The Guide is taking a break. Try again in a moment."
- Offers demo mode as a fallback
- Logs the failure to Sentry for monitoring

Users don't care *why* it's broken—they want to know what to do next. Every error state gives them a path forward.

---

## How I Built It: AI as Development Partner

I don't write production code. I'm a PM who can read code, debug logic, and architect systems—but I've never been a software engineer. For Story Mode, I used what I call "vibe coding": collaborating with Claude to write, debug, and ship real software.

**The workflow:**
1. Open the project directory in terminal
2. Start a Claude Code session
3. Describe what I want in plain English
4. Claude writes the implementation
5. I test locally, request adjustments
6. Claude commits to GitHub
7. Render auto-deploys to production

This isn't "AI wrote my code and I don't understand it." I'm making architecture decisions, reviewing implementations, catching edge cases, and directing iteration. Claude is my engineering partner, not a replacement for understanding what I'm building.

**What this enabled:**
- Full-stack React/Express/PostgreSQL application
- RESTful API with proper route structure
- Database schema design with Drizzle ORM
- Authentication and user scoping
- Error monitoring with Sentry
- Automated deployment pipeline

**What I learned about AI-assisted development:**

*Context is expensive.* Every time I switched platforms (Replit → ChatGPT → Claude), I lost continuity. I started writing comprehensive documentation—not for future developers, but for future AI sessions.

*Clear instructions beat complex schemas.* Asking Claude to "respond naturally, then I'll parse it" worked better than demanding structured JSON output.

*Ship small, review often.* The more code Claude wrote between my reviews, the harder bugs were to trace. Tight feedback loops kept quality high.

---

## Brand Evolution: Accessibility Through Design

The project went through three distinct brand identities. Each iteration taught me that brand decisions are accessibility decisions—especially when your audience has already been told "this isn't for you" by the dominant culture.

**Iteration 1: AI Tavern (September 2025)**

Dark fantasy aesthetic. D&D-inspired terminology: "Dungeon Master," "Campaign," "Party," "Session." Gaming iconography.

*What I learned:* I was solving the social barrier but recreating the genre barrier in the UI. The visual language and terminology signaled "traditional fantasy gamers welcome"—exactly the cultural gatekeeping I was trying to circumvent. People who don't see themselves in fantasy bounced before trying anything.

**Iteration 2: Skunk Tales (October 2025)**

Whimsical, character-driven. Warm aesthetic centered on a skunk storyteller mascot. Simplified language, but still implied a specific vibe.

*What I learned:* The specific mascot and name implied cozy campfire stories—one genre instead of "any genre you want." If the platform's promise is flexibility, the brand can't lock into a single aesthetic.

**Iteration 3: Story Mode (November 2025 – Present)**

"Pastel Playground" aesthetic: cream backgrounds, soft indigo text, peachy pink CTAs, mint success states. Complete terminology overhaul. Genre-neutral iconography: spaceship (sci-fi), city (urban), briefcase (thriller), heart (romance).

| Gaming Jargon | Story Mode Term |
|---------------|-----------------|
| Dungeon Master | Your Guide |
| Campaign | Story / Adventure |
| Session | Chapter |
| Character Sheet | Your Character |
| Party | Friends |
| NPC | Character in the story |

*The insight:* Every word and visual is a signal about who this product is for. Changing "Dungeon Master" to "Guide" wasn't about marketing—it was about whether someone who's never played a TTRPG, and doesn't like fantasy, would feel like this product could be for them. The brand had to say "any story, for anyone" before they clicked anything.

---

## The Tradeoffs

**Mobile-first vs. desktop richness.**

I optimized for mobile because that's where my target users are. This meant constraining the experience: shorter text blocks, tap-friendly interfaces, content that fits on a phone screen.

*Why this was the right call:* A beautifully rich desktop experience that most users never see is worse than a good mobile experience that reaches everyone. My audience isn't sitting at computers with time to spare—they're on phones, in moments between other things.

*The tradeoff:* Desktop users get a simpler experience than they might want. The interface doesn't take advantage of larger screens.

*How I'm approaching it:* Mobile-first doesn't mean mobile-only. As the product matures, I can enhance the desktop experience—but the mobile foundation had to come first.

**Shipping with known bugs vs. waiting for polish.**

Story Mode is live with UX issues I haven't fixed. Mobile layout inconsistencies. Quest progression that doesn't fully respond to choices. The Story Mode branding hasn't been fully applied to the codebase yet.

*Why this was the right call:* A live product that people can try teaches me more than a polished product only I've seen. I'm learning what actually confuses people vs. what I *thought* would confuse them.

*The tradeoff:* First impressions matter. Some visitors will bounce on bugs before they see the vision.

*How I'm mitigating it:* Prioritizing fixes based on where users actually drop off, and being transparent that this is an active build.

---

## What I Built

**AI-powered Guide system.** Real-time narrative generation with structured responses, genre adaptation, and graceful error handling. The core of the product: a private narrator that adapts to any genre you want.

**Multi-path input interface.** Tap options for newcomers who don't know what actions are possible, plus voice-to-text and custom input for users who want more control—all visible at once, no mode switching required.

**Mobile-first web app.** Optimized for phone screens and touch interaction. No download required—open a browser and start playing.

**Full-stack application.** React frontend, Express backend, PostgreSQL database with Drizzle ORM. User authentication, character persistence, adventure management.

**Demo mode.** Players can try the full experience without signing up. Sessions are isolated with unique IDs. A non-blocking banner encourages sign-in without interrupting play—because asking for commitment before delivering value is another barrier.

**Deployment pipeline.** GitHub → Render with automatic deploys. Sentry for error monitoring. Infrastructure for analytics ready to implement.

**Genre-neutral brand and terminology.** Complete overhaul of gaming jargon into accessible language. Visual identity designed to say "any story, for anyone"—not "fantasy gamers welcome."

**[Try it live →](https://aitavern.onrender.com)**

---

## What I Learned

**The PM skill is identifying where AI uniquely solves a problem.** AI can do a lot of things. The interesting question isn't "can AI do this?"—it's "does AI solve this in a way nothing else can?" For Story Mode, GenAI uniquely enables both privacy (solo experience) and flexibility (any genre) at once. That combination didn't exist before. Recognizing that was the insight; building it was the validation.

**Accessibility isn't just about UI—it's about human dynamics.** The TTRPG accessibility problem wasn't rules or interfaces. It was that trying something new with strangers is inherently intimidating, and the dominant genre doesn't appeal to everyone. Every product decision—private experience, dynamic worldbuilding, multi-path input, genre-neutral brand—was about removing human barriers, not just usability friction.

**Give users multiple paths, not forced choices.** Showing tap options alongside voice and text input lets people self-select based on comfort level. Newcomers learn what's possible by seeing options; experienced users have full flexibility. Progressive disclosure without hiding anything.

**Mobile-first is an accessibility decision.** If most of your users are on phones, optimizing for desktop first means building for the minority. Meet people where they are.

**Brand is UX, and every word is a product decision.** Changing "Dungeon Master" to "Guide" determined who would feel welcome before they clicked anything. The terminology and visuals had to signal "this could be for you" to people who'd been told otherwise by the dominant culture.

**Building AI products requires designing for failure.** When AI is your core feature, "it didn't work" isn't an edge case. Every AI interaction needs a fallback, every error needs a path forward, and users need to trust the product won't leave them stranded.

**AI-assisted development is real, but it's not magic.** Claude didn't replace my need to understand architecture, make product decisions, or debug edge cases. It replaced the syntax and boilerplate that would have stopped me from building at all. The PM skills—scoping, prioritizing, making tradeoffs—are still the job.

**Ship to learn, not to impress.** Story Mode has bugs. It's not polished. But it's live, people can try it, and I'm learning from real usage instead of hypothetical scenarios.
