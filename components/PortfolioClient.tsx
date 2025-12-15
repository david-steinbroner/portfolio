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
      <section className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Case Studies
        </h2>
        <div className="space-y-10">
          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <a
                href="/case-studies/taxbit"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                Shipping Tax Season at a Startup
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Fold launched bitcoin selling in 2024, which meant ~5,000 users needed tax documents. They were expecting them by year-end—just like from every other crypto platform they use. I got bandwidth in November, found the vendor, learned crypto tax law, and wrangled six stakeholder groups. Shipped by mid-January.
            </p>
          </article>

          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <a
                href="/case-studies/bitcoin-flywheel"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                The Bitcoin Flywheel
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Led the product strategy to transform Fold from a bitcoin rewards app into a complete bitcoin ecosystem. Shipped Sell Bitcoin, Receive Bitcoin, and Direct to Bitcoin over 6 months—enabling users to bring bitcoin in, convert it to spendable fiat, and auto-buy on every deposit.
            </p>
          </article>

          <article>
            <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
              Fold
            </span>
            <h3 className="text-xl font-medium mb-2">
              <a
                href="/case-studies/spin-wheel"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                Spin Wheel
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Fold's bitcoin rewards were compelling but passive—users earned on purchases but rarely opened the app in between. I designed and shipped the Spin Wheel, a daily gamification feature that increased DAU by 23% and generated $800K in sponsor revenue while coordinating five teams and an external prize vendor.
            </p>
          </article>
        </div>
      </section>

      {/* Building */}
      <section className="mb-16">
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
      <section className="mb-16">
        <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
          Built
        </h2>
        <div className="divide-y divide-border">
          {[
            { name: 'TaxBit Integration', desc: 'Tax reporting & cost basis tracking', year: '2024', href: '/features/tax-documents' },
            { name: 'Spin Wheel', desc: 'Gamified engagement lever', year: '2023', href: '/features/spin-wheel' },
            { name: 'Bitcoin Receiving', desc: 'In-app BTC deposit flow', year: '2023', href: '/features/receiving-bitcoin' },
            { name: 'Bitcoin Selling', desc: 'In-app BTC liquidation', year: '2023', href: '/features/selling-bitcoin' },
            { name: 'Card Reissuance', desc: 'Replacement card program', year: '2023', href: '/features/card-reissuance' },
            { name: 'Fairytale Project', desc: 'Trilingual cultural archive (1,001 entries)', year: '2024', href: '/features/fairytale-project' },
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
