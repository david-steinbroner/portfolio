import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Hume — David Steinbroner",
  robots: "noindex, nofollow",
};

export default function HumeLetter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
            David Steinbroner · For Hume
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            The growth playbook I built took my last startup to the Nasdaq. I'm here to run it again.
          </h1>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <h2 className="text-xl font-semibold text-foreground pt-4">I've Won This Market Before</h2>

          <p>
            I know what Hume needs to do for growth because I've already done it. I took{" "}
            <a
              href="https://foldapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Fold
            </a>{" "}
            from a team of 11 with zero marketing budget to the first Bitcoin-only company on the Nasdaq. I built the organic engine, earned paid budget through results, scaled acquisition channels, created community feedback loops that fed directly into product, and turned cost centers into revenue. That's the job description I just read on Hume's site.
          </p>

          <p>
            I'm also one of your users. Not of Hume specifically, but of voice AI. I use speech-to-text AI daily as part of my core workflow; over 75,000 words in the past few months. I think about these products the way a product manager does while I'm using them: where's the friction, where's the delight, where would I drop off, what would make me tell someone about this. When I signed up for Hume and explored Octave, I wasn't just impressed by the technology. I was already running a growth audit in my head.
          </p>

          <p>
            The last piece of the puzzle for AI to really integrate into daily life (commercially and personally) is the emotional layer. That's what Hume is solving for. And I've seen this exact market dynamic before. At Fold, Bitcoin was the underlying technology and a million companies were racing to capture market share on top of it. We didn't invent Bitcoin. It was already there. Same with AI. AI is already everywhere. Hume is built on its rails. Hume is the onramp for a specific, powerful use case, and in a crowded market, it needs to stand out and carve out space for itself. That's the problem I spent four years solving.
          </p>

          <p>I signed up. I explored the product. Here's what I'd be thinking about on day one.</p>

          <h2 className="text-xl font-semibold text-foreground pt-4">The Growth Audit</h2>

          <p>
            <strong>Start with the people.</strong> Before I touch any channel or run any experiment, I want to talk to users, especially first-time users. Offer credits in exchange for a 15-20 minute interview. How did they find Hume? What were they trying to do? Where did they get stuck? What made them stay or leave? This is the fastest way to understand the gap between what the team thinks the user experience is and what it actually is. At Fold, the feedback group I created (Friends of Fold) was the single most valuable source of product insight we had. That kind of direct feedback loop needs to exist at Hume from day one.
          </p>

          <p>
            <strong>Competitive research.</strong> Looking around the landscape,{" "}
            <a
              href="https://elevenlabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              ElevenLabs
            </a>{" "}
            stands out as the most direct competitor; strong brand recognition, creator adoption, and a developer ecosystem.{" "}
            <a
              href="https://murf.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Murf AI
            </a>{" "}
            is winning on integrations across other platforms.{" "}
            <a
              href="https://cartesia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Cartesia
            </a>{" "}
            is leaning into real-time processing.{" "}
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              OpenAI's TTS
            </a>{" "}
            is gaining traction with a velocity advantage baked into ChatGPT.{" "}
            <a
              href="https://play.ht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Play.ht
            </a>{" "}
            and{" "}
            <a
              href="https://speechify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Speechify
            </a>{" "}
            are chipping away at different segments.
          </p>

          <p>
            I've gone through ElevenLabs' and Murf's onboarding, and there are high-impact, low-effort wins to learn from how they handle activation, communicate value, and convert free users to paid.
          </p>

          <p>
            Hume has a seat at the table with the leading companies in this space. The greatest advantage of that is seeing what others are using to win; then taking what works while continuing to focus on your own differentiation. Through that context, we can see where Hume is winning, where it's losing, and to whom. Not just using their products to understand them, but watching how they engage in the community, what channels they're investing in, what messaging they're testing. Building up a live document of competitive research will be part of the growth playbook and will inform everything: messaging, positioning, feature prioritization, and where to focus growth efforts first for the biggest impact.
          </p>

          <p>
            <strong>Activation and first experience.</strong> The onboarding has friction. The required "what are you excited to build?" field; I understand the intent to collect user personas, but it's adding a barrier at the exact moment you need to remove them. More importantly, after I signed up, I didn't know where to start. A "try now" experience that lets someone hear Octave immediately (before they commit to onboarding) would let the product sell itself. Experience first, sign up second.
          </p>

          <p>
            <strong>Mobile is a massive opportunity.</strong> Mobile traffic has the lion's share over desktop broadly, and Hume is barely present there. The mobile app has maybe 5% of what the web app can do. Less than 5,000 downloads in the last month. Only 117 reviews and a 4-star rating. Not cracking the top 50 in AI-related keyword rankings. ASO needs serious, immediate attention. Even if the mobile app isn't feature-complete, you need to drive downloads and visibility. Even if the app pushes people to web for the full experience while mobile catches up; that's better than being invisible.
          </p>

          <p>
            <strong>Reddit is a free funnel sitting empty.</strong> A quick search for "Hume AI" on Reddit shows that most posts are negative, and Hume has no presence to counter that or engage. The subreddit is dead. Reddit is where a huge amount of AI discussion happens right now, and Hume is invisible there. Giveaways of free credits, organic conversation-starting through affiliates, and using it as a real feedback channel would cost almost nothing and open up a new acquisition path.
          </p>

          <p>
            <strong>Twitter needs a rethink.</strong> 20K followers, sporadic posting, mostly announcements that don't get much engagement. The feed reads like a press release channel, not a community. Voice AI is one of the most exciting things happening in tech and the social presence doesn't reflect that. Hume should be chatting, weighing in on AI news, running polls, actually engaging the audience.
          </p>

          <p>
            <strong>Affiliate program data.</strong> Hume already has an affiliate program; great. I'd want to see the data immediately. How effective is it? Who are the top earners and where are they earning? What's the conversion rate from affiliate traffic? That tells you which channels and which types of creators are actually moving the needle.
          </p>

          <p>
            <strong>Community engagement campaigns.</strong> Give me a budget of credits and I'll run rising-tide-lifts-all-ships engagement campaigns. Structure it so the more people engage, the more everyone earns. The more shares a post gets, the more credits get distributed to everyone who shared. Target that engagement toward whatever user behavior matters most: activation, creation, sharing, referrals. This is exactly what I built at Fold, and{" "}
            <Link href="/case-studies/spin-wheel" className="text-link hover:underline">
              it works
            </Link>
            .
          </p>

          <p>
            <strong>TikTok.</strong> Probably one of the fastest-growing use cases for text-to-speech right now, and a natural channel for Hume's creator audience.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">First 90 Days</h2>

          <p>
            <strong>Days 1–30: Move fast, learn everything.</strong>
          </p>

          <p>
            I don't need to wait for perfect data to start. I can hit the ground running with engagement levers on social media in the first week: Reddit presence, Twitter engagement, community conversations. These cost nothing, generate signal immediately, and start building the feedback loops I'll need later.
          </p>

          <p>
            At the same time, I'm immersing in the product. Not just using it, but understanding it the way a user does, the way a creator does, the way a developer does. Where do I get stuck? Where do I get excited? Where do I drop off? I'm running user studies from the start; credits in exchange for interviews with new users. And I'm learning the business: every metric we're tracking, the full funnel, channel attribution, affiliate performance, what's on the roadmap, what's been tried before, and what the results were.
          </p>

          <p>Most importantly, I want to understand the long-term and short-term goals. What does success look like in 6 months? In a year? In three years? Everything I build ladders up to that.</p>

          <p>
            <strong>Days 30–60: Build the engine.</strong>
          </p>

          <p>
            By now I have a clear picture of the funnel, the gaps, and where the highest-leverage opportunities are. I'm running experiments: activation flow changes, onboarding improvements, content and messaging tests across channels. I'm standing up the tracking and attribution infrastructure needed to measure what's working. I'm building the community feedback loops that will become a permanent part of how growth and product talk to each other.
          </p>

          <p>
            <strong>Days 60–90: Scale what works.</strong>
          </p>

          <p>
            The early experiments have data. I know which channels convert, which messages resonate, which parts of the funnel are leaking. Now it's about doubling down on what's working, cutting what isn't, and presenting a growth strategy to leadership that's backed by real results, not projections. By day 90, there should be a repeatable growth playbook taking shape. Not finished, but running.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">I Built This Playbook Already</h2>

          <p>
            I spent four years at{" "}
            <a
              href="https://foldapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Fold
            </a>{" "}
            as one of a team of 11 that{" "}
            <Link href="/case-studies/fiat-bitcoin-ecosystem" className="text-link hover:underline">
              took it to the Nasdaq
            </Link>
            ; the first Bitcoin-only company to do so.
          </p>

          <p>
            I started with zero budget and a small but mighty community. I grew our Discord to over 40,000 members with a 15% daily engagement rate at its peak. I grew our social following to 60,000 with consistent daily engagement. Organic social and ASO is where I cut my teeth. I built the entire growth system from the ground up: conversion funnel, tracking tools, attribution infrastructure, referral mechanics. I built an attribution program that engaged the biggest voices in the Bitcoin community and rewarded them for using our app and talking about it. That was the first way I spent the budget I'd earned, because I'd identified that those community entry points would drive the most traffic.
          </p>

          <p>
            From there I ran paid campaigns across Reddit, Twitter, and other channels. Always A/B testing, always optimizing for conversion, all self-built, all self-managed. Every round of results earned a bigger budget. Constraints forced me to be creative, and by the time I'd earned more budget it felt like I could do anything.
          </p>

          <p>
            I managed our app store presence and moved our rating from 3.6 to 4.3 across both stores. I led the rebrand of our website. I turned our biggest engagement lever (<Link href="/case-studies/spin-wheel" className="text-link hover:underline">the Spin Wheel</Link>, the darling of Fold) from a cost center into six-figure revenue. I created Friends of Fold, a power user group that became our product feedback loop, our QA team, and our most vocal advocates.
          </p>

          <p>
            We operated on MLP (minimum lovable product). Build for and with the people and they'll feel like part of the product. That took us to the Nasdaq.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">Not Just Strategy. I Ship.</h2>

          <p>
            In mid-2023, I built an internal chatbot for our team at Fold; a tool that could reference what was happening across every department, surface past decisions and their reasoning, and make us more productive. It was my first foray into building with AI. Since then I've been building web and mobile apps using AI-assisted development, some with AI agents as part of the UX, like my{" "}
            <Link href="/case-studies/story-mode" className="text-link hover:underline">
              mobile-first AI tabletop RPG
            </Link>
            . I use Claude Code as my primary development tool with proper engineering workflows: GitHub, feature branches, CI/CD, monitoring. I'm not a PM who hands off specs and waits. I build, ship, measure, and iterate.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">One Question</h2>

          <p>
            The way I succeed at this job is by understanding Hume's long-term goals. Is the priority users? Active users? Paid conversion? Retention? Subscriptions? Annual subscriptions? Market share? Funding milestones? Going public? App users, web users, both? Expanding to other countries? Integrations into other AI platforms?
          </p>

          <p>
            I helped take Fold from Series A to the Nasdaq. Tell me what the goal is and I'll help get you there.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">75K+</div>
            <div className="text-sm text-foreground-muted">Words via voice AI</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">40K</div>
            <div className="text-sm text-foreground-muted">Discord members</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">15%</div>
            <div className="text-sm text-foreground-muted">Daily engagement rate</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">11→IPO</div>
            <div className="text-sm text-foreground-muted">Startup to Nasdaq</div>
          </div>
        </div>

        {/* Footer Links */}
        <footer className="flex flex-wrap gap-6 text-sm border-t border-border pt-8">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/david_steinbroner_resume_feb26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/davidsteinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/david-steinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
