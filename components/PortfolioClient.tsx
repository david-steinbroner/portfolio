'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function PortfolioClient() {
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
          Full-stack product manager and builder. I build things for people, not users.
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
        </div>
      </header>

      {/* Case Studies */}
      <section id="case-studies" className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Case Studies
        </h2>
        <div className="space-y-10">
          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <Link
                href="/case-studies/taxbit"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                Shipping Tax Season at a Startup
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </Link>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Fold launched bitcoin selling in 2024, which meant ~5,000 users needed tax documents by mid-February 2025. By December, they were seeing tax emails from Coinbase and other crypto platforms and wondering where Fold&apos;s was. I got bandwidth in November, built a prototype, became the crypto tax expert, coordinated 8+ stakeholder groups, and shipped in 10 weeks with 2 engineers and a junior designer. Mid-January; a month ahead of deadline.
            </p>
          </article>

          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <Link
                href="/case-studies/bitcoin-flywheel"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                The Bitcoin Flywheel
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </Link>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Fold already had Buy Bitcoin. Competing with Strike and Coinbase meant finishing the flywheel. I built the prototypes, navigated a complex stakeholder landscape, and embedded in the Bitcoin community to understand the full user spectrum. Then shipped Sell, Receive, and Direct to Bitcoin. Trade volume jumped 50%.
            </p>
          </article>

          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <Link
                href="/case-studies/spin-wheel"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                The Most Public Feature at the Company, and I Had to Make It Worse
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </Link>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Fold&apos;s Spin Wheel was the company&apos;s most beloved feature and its biggest financial liability. I inherited it and spent 18 months navigating the tension between what users loved (massive rewards) and what the business needed (sustainability), eventually landing on a model that works at any Bitcoin price up to $1M while still driving 50k daily spins.
            </p>
          </article>
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
              href="https://discoveringmagic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              Discovering Magic
            </a>
            <span className="text-foreground-muted ml-2">
              — A gateway to Magic: The Gathering through things you already love—Fallout, dinosaurs, anime art, Furby cards. Discovery over terminology.
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
              — Track local government in real-time. Meeting schedules, legislation, and votes aggregated from scattered government websites into one feed.
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
                href="https://github.com/david-steinbroner/portfolio-site"
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
          {[
            { name: 'Fairytale Project', desc: 'Trilingual cultural archive (1,001 entries)', year: '2025', href: '/features/fairytale-project' },
            { name: 'TaxBit Integration', desc: 'Tax reporting & cost basis tracking', year: '2024', href: '/features/tax-documents' },
            { name: 'Notification Preferences', desc: 'Self-service communication controls', year: '2024', href: '/features/notification-preference-center' },
            { name: 'Banking Partner Process', desc: 'Reduced approval time by 75%', year: '2024', href: '/features/banking-partner-approval' },
            { name: 'Direct to Bitcoin', desc: 'Auto-convert deposits to BTC', year: '2024', href: '/features/direct-to-bitcoin' },
            { name: 'Bitcoin Receiving', desc: 'In-app BTC deposit flow', year: '2024', href: '/features/receiving-bitcoin' },
            { name: 'Bitcoin Selling', desc: 'In-app BTC liquidation', year: '2024', href: '/features/selling-bitcoin' },
            { name: 'Spin Wheel', desc: 'Gamified engagement lever', year: '2023', href: '/features/spin-wheel' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex justify-between items-baseline py-3 hover:bg-background-secondary transition-colors -mx-3 px-3 rounded"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-foreground-muted ml-2 text-sm">{item.desc}</span>
              </div>
              <span className="text-foreground-muted text-sm tabular-nums">{item.year}</span>
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
