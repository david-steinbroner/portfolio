'use client';

import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function PortfolioClient() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">

      {/* Header */}
      <header className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-foreground">
          David Steinbroner
        </h1>
        <p className="text-lg text-foreground-secondary leading-relaxed">
          Product manager and builder. I make complex things accessible.
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
            href="https://github.com/da6ds"
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
            <h3 className="text-xl font-medium mb-2">
              <a
                href="/case-studies/taxbit"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                TaxBit Integration
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Integrating tax compliance into a crypto app without breaking the user experience
            </p>
          </article>

          <article>
            <h3 className="text-xl font-medium mb-2">
              <a
                href="/case-studies/bitcoin-flows"
                className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
              >
                Bitcoin Flows
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
              </a>
            </h3>
            <p className="text-foreground-secondary leading-relaxed">
              Designing send and receive flows for users who'd never touched crypto
            </p>
          </article>

          <article>
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
              An engagement feature that required product, project management, marketing, and vendor coordination
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
              — MTG deck discovery for people who've never played
            </span>
          </div>
          <div className="group">
            <a
              href="https://local-gov-watch.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground-secondary transition-colors"
            >
              Local Gov Watch
            </a>
            <span className="text-foreground-muted ml-2">
              — Civic tech for local government transparency
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
              — Building in public
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
            { name: 'TaxBit Integration', desc: 'Tax reporting & cost basis tracking', year: '2024' },
            { name: 'Spin Wheel', desc: 'Gamified engagement lever', year: '2023' },
            { name: 'Bitcoin Receiving', desc: 'In-app BTC deposit flow', year: '2023' },
            { name: 'Bitcoin Selling', desc: 'In-app BTC liquidation', year: '2023' },
            { name: 'Card Reissuance', desc: 'Replacement card program', year: '2023' },
            { name: 'Fairytale Project', desc: 'Trilingual cultural archive (1,001 entries)', year: '2024' },
          ].map((item) => (
            <div key={item.name} className="flex justify-between items-baseline py-3">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-foreground-muted ml-2 text-sm">{item.desc}</span>
              </div>
              <span className="text-foreground-muted text-sm tabular-nums">{item.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Built With */}
      <footer className="pt-16 border-t border-border">
        <p className="text-sm text-foreground-muted">
          Built with{' '}
          <a href="https://vercel.com/font" className="hover:text-foreground transition-colors">Geist</a>
          {' · '}
          <a href="https://vercel.com/geist/colors" className="hover:text-foreground transition-colors">Geist Colors</a>
          {' · '}
          <a href="https://lucide.dev" className="hover:text-foreground transition-colors">Lucide Icons</a>
          {' · '}
          <a href="https://nextjs.org" className="hover:text-foreground transition-colors">Next.js</a>
          {' · '}
          <a href="https://tailwindcss.com" className="hover:text-foreground transition-colors">Tailwind</a>
        </p>
        <p className="text-sm text-foreground-muted mt-2">
          <a href="https://github.com/david-steinbroner/portfolio" className="hover:text-foreground transition-colors">
            View source on GitHub
          </a>
        </p>
      </footer>

    </main>
  );
}
