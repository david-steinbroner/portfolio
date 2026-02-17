import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Affirm — David Steinbroner",
  robots: "noindex, nofollow",
};

export default function AffirmLetter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
            David Steinbroner · For the Affirm Fraud Team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            I spent four years shipping in the exact intersection this role sits at.
          </h1>
          <p className="text-lg text-foreground-secondary">
            Senior Product Manager, Trust & Safety (Fraud)
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <p>
            At Fold, every feature I shipped touched payments, compliance, and risk.{" "}
            <a
              href="https://fold.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Fold
            </a>{" "}
            is a Bitcoin fintech company that processes transactions through Visa, Marqeta, and
            Sutton Bank — the same partners behind Cash App — and I was the PM who sat at the
            intersection of product, compliance, and financial risk. Not theoretically. Practically:
            coordinating across custodians, banking partners, card processors, legal counsel, and
            engineering to ship features where getting it wrong meant real financial exposure.
          </p>

          <p>
            That's the job this posting describes. Own the fraud product roadmap. Work across
            Engineering, Analytics, Legal, Compliance, and Operations. Navigate complex
            organizational dynamics. Make tradeoff decisions where risk, user experience, and
            business goals intersect. I did this daily for four years — and I did it at a company
            that grew from 11 people to the first Bitcoin-only company listed on the Nasdaq.
          </p>

          <p>A few things that map directly to what you're building:</p>

          <p>
            I shipped the final three pieces of the{" "}
            <Link href="/case-studies/bitcoin-flywheel" className="text-link hover:underline">
              Bitcoin Flywheel
            </Link>{" "}
            — Sell, Receive, and Direct to Bitcoin — features that required coordination across six
            internal teams and five external partners, each with their own risk and compliance
            requirements. Trade volume jumped 50%. I shipped{" "}
            <Link href="/case-studies/taxbit" className="text-link hover:underline">
              crypto tax compliance
            </Link>{" "}
            2.5 months ahead of deadline by becoming the subject matter expert on crypto tax law,
            coordinating six stakeholder groups with just two engineers. 90% user adoption, 2%
            support ticket rate. And I rebuilt Fold's{" "}
            <Link href="/case-studies/banking-approval-process" className="text-link hover:underline">
              banking partner approval process
            </Link>{" "}
            from a 4+ week bottleneck into a days-long checkpoint — by establishing direct
            relationships with partner compliance teams and becoming the translation layer between
            product and regulation.
          </p>

          <p>
            I also inherited Fold's biggest financial liability — the{" "}
            <Link href="/case-studies/spin-wheel" className="text-link hover:underline">
              Spin Wheel
            </Link>
            , a gamified rewards feature with unsustainable prize economics — and turned it into a
            model that works at any Bitcoin price up to $1M while creating a sponsorship program
            that generated six-figure revenue from a former cost center. That's the kind of thinking
            I'd bring to balancing loss prevention, customer experience, and business impact on the
            fraud roadmap.
          </p>

          <p>
            Affirm is scaling across merchants, consumers, and international markets. The fraud team
            needs someone who knows how to build scalable systems in regulated environments where
            speed and safety aren't trade-offs — where you have to ship fast without breaking trust.
            That's the job I've been doing. I'd love to talk about what it looks like at Affirm's
            scale.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">75%</div>
            <div className="text-sm text-foreground-muted">Faster compliance approvals</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">50%</div>
            <div className="text-sm text-foreground-muted">Trade volume increase</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">90%</div>
            <div className="text-sm text-foreground-muted">Tax feature adoption</div>
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
            href="/david_steinbroner_resume_jan26.pdf"
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
