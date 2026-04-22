'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import CaseStudyCard from '@/components/CaseStudyCard';

export interface PortfolioClientCaseStudy {
  slug: string;
  title: string;
  company?: string;
  date: string;
  description: string;
  tldr?: string;
}

export interface PortfolioClientFeature {
  slug: string;
  title: string;
  date: string;
}

export interface PortfolioClientProps {
  caseStudies: PortfolioClientCaseStudy[];
  features: PortfolioClientFeature[];
}

export default function PortfolioClient({
  caseStudies,
  features,
}: PortfolioClientProps) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">

      {/* Header */}
      <header className="mb-16">
        <div className="flex justify-between items-start mb-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            David Steinbroner
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-lg text-foreground-secondary leading-relaxed">
          Product manager who prototypes, codes, and ships. I&apos;ve taken features from an abstract idea to production at a fintech startup, and I spend my free time building apps and learning new tools. I build things for people, not users.
        </p>
        <div className="flex items-center gap-5 mt-5 text-sm text-foreground-muted">
          <a
            href="mailto:davidsteinbroner@gmail.com"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/davidsteinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/david-steinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="/david_steinbroner_resume_feb26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      </header>

      {/* Case Studies */}
      <section id="case-studies" className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Case Studies
        </h2>
        <div className="space-y-10">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.slug}
              slug={cs.slug}
              title={cs.title}
              company={cs.company}
              date={cs.date}
              description={cs.description}
              tldr={cs.tldr}
            />
          ))}
        </div>
      </section>

      {/* Building */}
      <section id="building" className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Building
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

      {/* Built */}
      <section id="built" className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Built
        </h2>
        <div className="divide-y divide-border">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="flex justify-between items-baseline gap-4 py-3 hover:bg-background-secondary transition-colors -mx-3 px-3 rounded"
            >
              <div className="min-w-0">
                <span className="font-medium">{feature.title}</span>
              </div>
              <span className="text-foreground-muted text-sm tabular-nums shrink-0">{feature.date}</span>
            </Link>
          ))}
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
