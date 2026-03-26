import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Modern Health | David Steinbroner",
  robots: "noindex, nofollow",
};

return function ModernHealthProductManagerLetter() {
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
            href="/david_steinbroner_resume_feb26.pdf"
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
            David Steinbroner · For the Modern Health Team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            I've spent my career closing the gap between knowing what to do and actually doing it — that messy middle is where real product lives.
          </h1>
          <p className="text-lg text-foreground-secondary">
            Product Manager
          </p>
        </header>

        {/* Body */}
        <article className="space-y-6 text-foreground-secondary leading-relaxed mb-12">
          <p>
            Modern Health's focus on member follow-through hits exactly where product complexity meets human need. Most wellness platforms excel at recommendations but struggle with the messy middle — helping people actually take action and stay engaged. That gap between knowing what to do and consistently doing it is where the real product challenge lives.
          </p>

          <p>
            I built engagement systems that bridge this exact gap at Fold, where I coordinated six internal and external stakeholders to ship Bitcoin Flywheel features that increased user engagement 50%. The complexity wasn't just technical — it was about understanding what motivates people to move from passive interest to active participation. When I redesigned our banking partner approval process, I learned that sustainable engagement requires removing friction at every decision point while maintaining the trust that makes people comfortable taking next steps. I solo-shipped our Notification Preference Center achieving 50% DAU adoption in the first month because I understood that giving people control over their experience is what keeps them engaged long-term.
          </p>

          <p>
            Mental health products require extra sensitivity around user experience because the stakes are higher than typical consumer apps. My experience managing Fold's most beloved feature — the Spin Wheel — through four iterations over 18 months taught me how to balance what users love against what the business can sustain. I turned it from a financial liability into a profitable model while preserving the user experience that made it meaningful. That same approach — empathy-driven iteration based on real user feedback — is exactly what member follow-through requires. I built a 45,000-member Discord and 40+ person power user group where every major feature was shaped by direct community input before launch. This feedback infrastructure became the foundation for product decisions that actually improved outcomes, not just metrics.
          </p>

          <p>
            The cross-functional complexity at Modern Health mirrors what I navigated at Fold, where Legal, Engineering, and Banking partners all had veto power over product decisions. I became the translator between product vision and stakeholder requirements, reducing our regulatory approval timeline by 75% by building relationships with compliance partners and creating forward-looking processes. When clinical and compliance teams are stakeholders rather than blockers, you can ship features that are both meaningful to users and safe at scale.
          </p>
        </article>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">50%</div>
            <div className="text-sm text-foreground-muted">User engagement increase via Bitcoin Flywheel</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">75%</div>
            <div className="text-sm text-foreground-muted">Regulatory approval timeline reduction</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">45,000</div>
            <div className="text-sm text-foreground-muted">Community members in Discord feedback loop</div>
          </div>
          <div className="bg-background-secondary rounded-lg border border-border p-4 text-center">
            <div className="text-2xl font-semibold text-foreground">18 months</div>
            <div className="text-sm text-foreground-muted">Spin Wheel iteration from liability to profit</div>
          </div>
        </div>

      </div>
    </div>
  );
}
