import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Toast | David Steinbroner",
  robots: "noindex, nofollow",
};

export default function ToastPMEmployeeCompensationLetter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Top Nav */}
        <nav className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-foreground text-background font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <a
            href="/david_steinbroner_resume_jan26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/davidsteinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/david-steinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
            David Steinbroner · For the Toast Payroll Team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            I started my career making sure food got to the table. Now I make sure products get to the people who need them.
          </h1>
          <p className="text-lg text-foreground-secondary">
            Product Manager, Employee Compensation
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <p>
            From 16 until my mid-twenties, I worked in restaurants and bars in San Francisco: food runner, server, bartender. I worked alongside a lot of people. Young musicians buying time to chase something else. Veterans who had been doing it for decades. Parents for whom a reliable shift and an on-time paycheck weren't optional. Every Friday, payday meant something completely different depending on who you were. Same check, different stakes. Getting paid correctly, on time, without friction is not a small thing when you're living check to check. Payroll is where a business keeps its promise to the people doing the work. Toast is building the product that touches that moment for every person still in those jobs. That's a product I want to build.
          </p>

          <p>
            That instinct, understanding what a product actually means to the person on the other end of it, has driven everything I've built since. For four years I was a PM at Fold, a Bitcoin fintech startup that became the first Bitcoin-only company listed on the Nasdaq. The infrastructure underneath Fold's product is the same infrastructure underneath Toast Payroll: BaaS providers, banking partners, payment rails, compliance requirements that move without warning. I know how to make that environment move because I've done it. Every feature I shipped had to clear Legal, Compliance, banking partner review, and sometimes external counsel, all with veto power. Rather than treat that as a bottleneck, I redesigned it. I built direct relationships with our banking partner compliance contacts, created forward-looking processes so nothing was a surprise, and made compliance a checkpoint we designed around from the start.{" "}
            <Link href="/features/banking-partner-approval" className="text-link hover:underline">
              Approval timelines dropped 75%
            </Link>
            . The roadmap moved.
          </p>

          <p>
            That pattern held across everything I shipped: six stakeholder groups coordinated on{" "}
            <Link href="/case-studies/taxbit" className="text-link hover:underline">
              crypto tax compliance
            </Link>{" "}
            with two engineers, delivered 2.5 months ahead of deadline with 90% user adoption. The final three features of the{" "}
            <Link href="/case-studies/bitcoin-flywheel" className="text-link hover:underline">
              Bitcoin Flywheel
            </Link>
            , Sell, Receive, and Direct to Bitcoin, were coordinated across custodians, Visa, and external banking partners simultaneously. The skill in all of it is the same: know who holds what, translate across groups that don't share a language, and keep the product moving anyway. Toast Payroll requires exactly that, and I've done it in crypto, where the regulatory environment was being written in real time and a wrong move with a banking partner had real consequences.
          </p>

          <p>
            The customer side has never been separate from the product side for me. At Fold I built a 40-person power user group that shaped every major feature before it launched, not as a nice-to-have, but as how we built. When your product touches someone's paycheck, you can't afford to miss what actually matters to them. I learned that in restaurants long before I learned it in fintech.
          </p>

          <p>
            Toast is turning the restaurant OS into a complete employment stack: pay, benefits, the full relationship between a business and the people who make it run. I know that stack from both sides. I'd like to talk about building it.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">75%</div>
            <div className="text-sm text-foreground-muted">Faster partner approvals</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">90%</div>
            <div className="text-sm text-foreground-muted">Tax feature adoption</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">3.6→4.3</div>
            <div className="text-sm text-foreground-muted">App Store rating</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">11→IPO</div>
            <div className="text-sm text-foreground-muted">Startup to Nasdaq</div>
          </div>
        </div>

      </div>
    </div>
  );
}
