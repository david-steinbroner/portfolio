'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Calendar, Check } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import SelectedWorkCard from '@/components/SelectedWorkCard';
import HighlightPlaceholder from '@/components/HighlightPlaceholder';
import type { SelectedWorkEntry } from '@/lib/markdown';

const EMAIL = 'davidsteinbroner@gmail.com';
const CALENDLY_URL = 'https://calendly.com/davidsteinbroner/30min';

export interface PortfolioClientProps {
  entries: SelectedWorkEntry[];
}

export default function PortfolioClient({
  entries,
}: PortfolioClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently no-op
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">

      {/* Header */}
      <header className="mb-16">
        <div className="flex justify-between items-start mb-5 gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/headshot.png"
              alt="David Steinbroner"
              width={96}
              height={96}
              className="rounded-full object-cover w-20 h-20 md:w-24 md:h-24 shrink-0"
            />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              David Steinbroner
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <p className="text-lg text-foreground-secondary leading-relaxed">
          Product manager who prototypes, codes, and ships. I&apos;ve taken features from an abstract idea to production at a fintech startup, and I spend my free time building apps and learning new tools. <strong className="font-semibold text-foreground">I build things for people, not users.</strong>
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-base text-foreground-muted">
          <button
            onClick={handleCopyEmail}
            aria-label={copied ? 'Email address copied' : `Copy email address ${EMAIL}`}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            {copied ? <Check className="w-[18px] h-[18px]" /> : <Mail className="w-[18px] h-[18px]" />}
            {copied ? 'Copied' : 'Email'}
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Calendar className="w-[18px] h-[18px]" />
            Schedule
          </a>
          <a
            href="https://linkedin.com/in/davidsteinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-[18px] h-[18px]" />
            LinkedIn
          </a>
          <a
            href="https://github.com/david-steinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="w-[18px] h-[18px]" />
            GitHub
          </a>
        </div>
      </header>

      {/* Featured image highlights (3 placeholder boxes until filled in lib/highlights.ts) */}
      <HighlightPlaceholder />

      {/* Selected Work */}
      <section id="selected-work" className="mb-16">
        <h2 className="flex items-center gap-4 text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          <span>Selected Work</span>
          <span aria-hidden="true" className="flex-1 h-px bg-border" />
        </h2>
        <div className="space-y-10">
          {entries.map((entry) => (
            <SelectedWorkCard
              key={`${entry.type}-${entry.slug}`}
              slug={entry.slug}
              type={entry.type}
              title={entry.title}
              company={entry.company}
              date={entry.date}
              description={entry.description}
              tags={entry.tags}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mb-16">
        <h2 className="flex items-center gap-4 text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          <span>Testimonials</span>
          <span aria-hidden="true" className="flex-1 h-px bg-border" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <figure className="rounded-lg border border-border p-5">
            <blockquote className="text-foreground-secondary leading-relaxed">
              &ldquo;An incredible addition to my team — a great thought partner, extremely proactive, and could be relied upon to take ownership and see things through end-to-end. He has deep empathy for users, always thinking about UI/UX from their perspective.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <div className="font-medium text-foreground">Mitch Port</div>
              <div className="text-foreground-muted">VP of Financial Strategy &amp; GM of Credit &amp; Loans · Fold</div>
            </figcaption>
          </figure>
          <figure className="rounded-lg border border-border p-5">
            <blockquote className="text-foreground-secondary leading-relaxed">
              &ldquo;Day one, I knew we had a keeper. David is engaged in every aspect of his day-to-day — always going above and beyond, asking thoughtful questions, and driven by passion for the greater purpose.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <div className="font-medium text-foreground">Tom Kunhardt</div>
              <div className="text-foreground-muted">Former colleague · Solar industry</div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Building */}
      <section id="building" className="mb-16">
        <h2 className="flex items-center gap-4 text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          <span>Building</span>
          <span aria-hidden="true" className="flex-1 h-px bg-border" />
        </h2>
        <div className="space-y-4">
          <div className="group">
            <a
              href="https://aitavern.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              Story Mode
            </a>
            <span className="text-foreground-muted ml-2">
              — AI-powered TTRPG that removes the two things keeping people out of tabletop gaming: playing with strangers and being stuck with fantasy. AI runs the game.
            </span>
          </div>
          <div className="group">
            <a
              href="https://pogo-pal.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              POGO PAL
            </a>
            <span className="text-foreground-muted ml-2">
              — Pokemon GO helper for casual players. Most Pokemon GO sites are built for hardcore players; this one isn&apos;t. Also a fun UI experiment. The scanner and collection tools live in a <Link href="/case-studies/poke-pal" className="hover:text-foreground transition-colors">separate case study</Link>.
            </span>
          </div>
          <div className="group">
            <a
              href="https://discoveringmagic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              Discovering Magic
            </a>
            <span className="text-foreground-muted ml-2">
              — A gateway to Magic: The Gathering through things you already love: Fallout, dinosaurs, anime art, Furby cards. Discovery over terminology. Currently under construction.
            </span>
          </div>
          <div className="group">
            <a
              href="https://localgovwatch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              Local Gov Watch
            </a>
            <span className="text-foreground-muted ml-2">
              — Follow what your local government is actually doing. Meeting summaries, decisions, votes, without digging through PDFs. Currently under construction.
            </span>
          </div>
          <div className="group">
            <a
              href="https://davidsteinbroner.com"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              This Site
            </a>
            <span className="text-foreground-muted ml-2">
              — Building my portfolio in public with Next.js and Linear.{' '}
              <a
                href="https://github.com/david-steinbroner"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                View on GitHub →
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Footer - Built With */}
      <footer className="pt-16 border-t border-border">
        <p className="text-sm text-foreground-muted">
          Built with{' '}
          <a href="https://nextjs.org" className="hover:text-foreground transition-colors">Next.js</a>
          {' · '}
          <a href="https://typescriptlang.org" className="hover:text-foreground transition-colors">TypeScript</a>
          {' · '}
          <a href="https://tailwindcss.com" className="hover:text-foreground transition-colors">Tailwind</a>
          {' · '}
          <a href="https://vercel.com/font" className="hover:text-foreground transition-colors">Geist</a>
          {' · '}
          <a href="https://vercel.com/geist/colors" className="hover:text-foreground transition-colors">Geist Colors</a>
          {' · '}
          <a href="https://lucide.dev" className="hover:text-foreground transition-colors">Lucide Icons</a>
        </p>
        <p className="text-sm text-foreground-muted mt-1">
          Shipped with{' '}
          <a href="https://pages.cloudflare.com" className="hover:text-foreground transition-colors">Cloudflare Pages</a>
          {' · '}
          <a href="https://linear.app" className="hover:text-foreground transition-colors">Linear</a>
          {' · '}
          <a href="https://claude.ai" className="hover:text-foreground transition-colors">Claude</a>
        </p>
        <p className="text-sm text-foreground-muted mt-2">
          <a href="https://github.com/david-steinbroner" className="hover:text-foreground transition-colors">
            View source on GitHub
          </a>
        </p>
      </footer>

    </main>
  );
}
