import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For PayPal | David Steinbroner",
  robots: "noindex, nofollow",
};

export default function PayPalSeniorProductManagerLetter() {
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
            David Steinbroner · For the PayPal SMB Risk Team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            I took a crypto startup to the Nasdaq by making risk and compliance my best allies.
          </h1>
          <p className="text-lg text-foreground-secondary">
            Senior Product Manager, SMB Risk
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <p>
            The hardest part of building financial products isn't the technology. It's making users forget the complicated infrastructure underneath, the compliance frameworks, the risk checks, the partner approvals, so all they experience is something fast, clean, and rewarding. The moment someone hits friction, a risk flag, an unexplained delay, is the moment you lose their trust. I spent four years at{" "}
            <a
              href="https://fold.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Fold
            </a>{" "}
            learning how to build and protect that trust, in one of the most unforgiving environments fintech has to offer.
          </p>

          <p>
            Fold was the first Bitcoin-only company listed on the Nasdaq. Getting there meant competing directly with PayPal, Cash App, and Venmo, companies that had already figured out how to build ecosystems that kept users inside them. I studied all of them. PayPal in particular was the clearest model for how every product could reinforce every other product, creating real reasons for users to stay. We were building our own version of that with the{" "}
            <Link href="/case-studies/bitcoin-flywheel" className="text-link hover:underline">
              Bitcoin Flywheel
            </Link>
            ,{" "}
            <Link href="/case-studies/bitcoin-flywheel" className="text-link hover:underline">
              buy, sell, earn rewards, fund your card
            </Link>
            , keep it in the ecosystem, and understanding how you'd solved that problem shaped how I thought about ours.
          </p>

          <p>
            What set Fold apart, and what I'm most proud of, was how we handled the regulatory environment we were building in. Crypto had no established playbook. Regulators were figuring it out in real time, banking partners were nervous, and the margin for error was thin. A lot of companies didn't survive that period. Fold did, in part because I made it my job to be the bridge between product ambition and compliance reality. I learned the regulations well enough to design around them. I built direct relationships with our banking partners' compliance contacts, not through account management layers, but person to person. I created processes where they always knew what was coming, could raise concerns during design instead of after launch, and trusted that product wasn't going to surprise them. That standing with our partners was something I built deliberately, and it paid off.{" "}
            <Link href="/features/banking-partner-approval" className="text-link hover:underline">
              Banking partner approval timelines dropped by 75%
            </Link>
            , from 4+ weeks to days. Multiple blocked roadmap items moved forward. Fold's relationship with its partners went from reactive to trusted. Compliance stopped being a bottleneck and became a checkpoint we designed around from the start.
          </p>

          <p>
            It's not the most glamorous product work. But in regulated industries, it's the work that keeps everything else standing. Overlooked risk and compliance issues don't just slow you down, they can end you. I took that seriously, and I took it on as a product problem: reduce the friction, define the right problem, make sure the stakeholders whose job is to protect the business are part of the solution rather than outside of it.
          </p>

          <p>
            That same approach carried through everything I shipped.{" "}
            <Link href="/case-studies/taxbit" className="text-link hover:underline">
              Crypto tax compliance
            </Link>
            , 2.5 months ahead of deadline, with two engineers and six stakeholder groups. I became the subject matter expert, coordinated across teams, wrote all user documentation, trained support, and got to 90% adoption with a 2% support ticket rate. When resources are tight and the problem is complicated, the job is to make it simple for everyone around you: clear enough that engineers can build it, clear enough that compliance can approve it, clear enough that users never have to think about it.
          </p>

          <p>
            The SMB risk problem at PayPal is a version of this at a larger scale. New merchants hit friction, verification delays, risk flags, unclear next steps, and what should be a first impression becomes a reason to go elsewhere. The opportunity is to build experiences calibrated well enough that risk is handled without punishing legitimate merchants: faster time-to-verify, clearer communication when something needs attention, and a foundation that earns trust from the first interaction. That's the kind of problem I know how to work.
          </p>

          <p>
            If you're building the team that fixes merchant onboarding at PayPal, I'd like to be part of that conversation.
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
            <div className="text-2xl font-semibold text-foreground">50%</div>
            <div className="text-sm text-foreground-muted">Trade volume increase</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">11 to IPO</div>
            <div className="text-sm text-foreground-muted">Startup to Nasdaq</div>
          </div>
        </div>

      </div>
    </div>
  );
}
