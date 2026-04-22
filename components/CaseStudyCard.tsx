import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface CaseStudyCardProps {
  slug: string;
  title: string;
  company?: string;
  date: string;
  description: string;
  tldr?: string;
}

/**
 * Pure presentational component for a case study entry on the homepage.
 *
 * Picks `description` over `tldr` for the visible blurb — Wave 2 backfilled
 * `description` on every case study to match the homepage copy exactly, so
 * this is the single source of truth.
 */
export default function CaseStudyCard({
  slug,
  title,
  company,
  description,
}: CaseStudyCardProps) {
  return (
    <article>
      {company && (
        <span className="text-xs text-foreground-muted uppercase tracking-wide block mb-1">
          {company}
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">
        <Link
          href={`/case-studies/${slug}`}
          className="group inline-flex items-center gap-1 hover:text-foreground-secondary transition-colors"
        >
          {title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
        </Link>
      </h3>
      <p className="text-foreground-secondary leading-relaxed">{description}</p>
    </article>
  );
}
