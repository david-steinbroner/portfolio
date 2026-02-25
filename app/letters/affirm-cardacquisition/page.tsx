import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Affirm — David Steinbroner",
  robots: "noindex, nofollow",
};

export default function AffirmCardAcquisitionLetter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
            David Steinbroner · For the Affirm Card Team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            The last card product I worked on, I helped build from zero. The one before that, I grew into the core of a financial ecosystem that took us to the Nasdaq.
          </h1>
          <p className="text-lg text-foreground-secondary">
            Senior Product Manager, Card Acquisition (New Channels)
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <p>
            I've applied to a couple of other roles on the Card team, but this is the one I am without a doubt confident in. It matches what I have accomplished. Let me explain.
          </p>

          <p>
            Here's what I think is happening. The Affirm Card did $2.186 billion in GMV last quarter with active cardholders up 121% to 3.7 million, and your CEO has said you haven't even started marketing it beyond existing Affirm users yet. You're hiring across Card Foundations, Card Platform, and Card Acquisition at the same time because the Card is how Affirm goes from checkout button to top of wallet. If it works, Affirm doesn't need to build a credit card to undercut credit cards; you just need to prove that people want something else. And I think you can, because the "trust" people have in credit cards is really just familiarity. The Card Acquisition PM is the person who starts changing that: getting new people to try the Card, understand it, and reach for it first. That's the job I want because it's the job I've done.
          </p>

          <p>
            I spent four years at{" "}
            <a
              href="https://fold.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Fold
            </a>
            , where the prepaid debit card was the center of everything we built. Fold made the first Bitcoin rewards debit card. First on the market. But we had no other Bitcoin card companies to compete against. We were competing with regular debit cards and, more importantly, credit cards. Users would say, "I can get 3% back on my credit card and just buy Bitcoin with it, so why would I use yours?" Our finance team said we couldn't compare ourselves to credit cards. But users were making that comparison whether we liked it or not. So we had to beat them on experience.
          </p>

          <p>
            I think about that all the time now. What a product actually is versus the role it fills in someone's life. The Affirm Card will face the same thing: it's a debit card, but users will compare it to credit cards with cashback and points. The advantage is in owning what makes the experience better while standing in that lineup. I approached that at Fold as a full-stack PM. I rebuilt the{" "}
            <Link href="/features/banking-partner-approval" className="text-link hover:underline">
              banking partner approval process
            </Link>{" "}
            from a 4+ week bottleneck into a days-long checkpoint by learning to read signals across every stakeholder (compliance, engineering, finance, banking partners, users) and translate between all of them. Every feature I shipped lived at the intersection of bottom line and user experience, and the skill was finding solutions that served both.
          </p>

          <p>
            Everything I did revolved around the cardholder funnel: acquisition, conversion, retention, growth marketing, product marketing, expanding the value proposition to compete with giants who had 100x our resources. I built channels with no budget (Discord to 45K, Twitter engagement up 100%, Flash Stacks, Active Boosts, ASO that took us from 3.6 to 4.3 in the App Store). But the lesson that held through all of it: if you have to explain how to use the thing, it's too complicated. Minimum taps. Translate the financial complexity into something a person can feel without thinking about it.
          </p>

          <p>
            We took enough calculated risks and pivoted enough times to find the specific experience that even Cash App and Coinbase couldn't replicate. That clarity helped take us from 11 people to the first Bitcoin-only company on the Nasdaq. Eventually our CEO handpicked me to scope the Fold Credit Card from zero (vendor evaluation, Visa negotiations, fee structure research, cardholder agreement development with Legal) because I'd proven I understood card products at the business level.
          </p>

          <p>
            The Affirm Card is at a similar inflection point: proven product, explosive numbers, ready to scale acquisition into new channels. I know what that work looks like because I've lived it, and I'm ready to do it again.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">50%</div>
            <div className="text-sm text-foreground-muted">Trade volume increase</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">40%</div>
            <div className="text-sm text-foreground-muted">Auto-buy adoption</div>
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
