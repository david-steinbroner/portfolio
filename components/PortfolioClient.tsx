'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Calendar, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import SelectedWorkCard from '@/components/SelectedWorkCard';
import HighlightPlaceholder from '@/components/HighlightPlaceholder';
import type { SelectedWorkEntry } from '@/lib/markdown';

const EMAIL = 'davidsteinbroner@gmail.com';
const CALENDLY_URL = 'https://calendly.com/davidsteinbroner/30min';

const TESTIMONIALS = [
  {
    quote:
      'An incredible addition to my team — a great thought partner, extremely proactive, and could be relied upon to take ownership and see things through end-to-end. He has deep empathy for users, always thinking about UI/UX from their perspective.',
    name: 'Mitch Port',
    role: 'VP of Financial Strategy & GM of Credit & Loans · Fold',
  },
  {
    quote:
      'David is a thoughtful and steady presence on any team. During our time at Fold, I appreciated his calm approach to challenges, his ability to communicate with clarity and empathy, and his deep care for the user experience. He leads with integrity and brings grounded, strategic thinking to everything he does. Any team would be lucky to have him.',
    name: 'Charlene Uli',
    role: 'Customer Support Representative · Fold',
  },
];

export interface PortfolioClientProps {
  entries: SelectedWorkEntry[];
}

export default function PortfolioClient({
  entries,
}: PortfolioClientProps) {
  const [copied, setCopied] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(2);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const update = () => setTestimonialsPerView(mql.matches ? 2 : 1);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const maxTestimonialIndex = Math.max(0, TESTIMONIALS.length - testimonialsPerView);
  const clampedTestimonialIndex = Math.min(testimonialIndex, maxTestimonialIndex);
  const showTestimonialControls = TESTIMONIALS.length > testimonialsPerView;
  const pageCount = maxTestimonialIndex + 1;

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
          Senior PM and employee 11 at a startup I helped take public - the first bitcoin-native fintech on Nasdaq. I&apos;ve owned product across community, growth, a credit card built from the ground up, and regulated compliance. Now I ship live products solo with AI, spec to deployed. <strong className="font-semibold text-foreground">I build things for people.</strong>
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
        <div
          className="overflow-hidden -mx-3"
          aria-roledescription="carousel"
          aria-label="Testimonials"
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${clampedTestimonialIndex * (100 / testimonialsPerView)}%)`,
            }}
          >
            {TESTIMONIALS.map((t, i) => {
              const isVisible =
                i >= clampedTestimonialIndex &&
                i < clampedTestimonialIndex + testimonialsPerView;
              return (
                <figure
                  key={t.name}
                  className="shrink-0 basis-full md:basis-1/2 px-3 flex"
                  aria-hidden={!isVisible}
                >
                  <div className="flex flex-col w-full rounded-lg border border-border p-5">
                    <blockquote className="text-foreground-secondary leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-4 text-sm">
                      <div className="font-medium text-foreground">{t.name}</div>
                      <div className="text-foreground-muted min-h-[2.5rem]">{t.role}</div>
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
        {showTestimonialControls && (
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === clampedTestimonialIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === clampedTestimonialIndex
                      ? 'w-6 bg-foreground'
                      : 'w-2 bg-border hover:bg-foreground-muted'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTestimonialIndex((v) => Math.max(0, v - 1))}
                disabled={clampedTestimonialIndex === 0}
                aria-label="Previous testimonial"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-foreground-muted disabled:hover:border-border"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((v) => Math.min(maxTestimonialIndex, v + 1))
                }
                disabled={clampedTestimonialIndex === maxTestimonialIndex}
                aria-label="Next testimonial"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground-muted hover:text-foreground hover:border-foreground-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-foreground-muted disabled:hover:border-border"
              >
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        )}
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
              href="https://mystorymode.com"
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
              href="https://pogopal.com"
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
        <p className="text-xs text-foreground-muted mt-4">v0.4.1</p>
      </footer>

    </main>
  );
}
