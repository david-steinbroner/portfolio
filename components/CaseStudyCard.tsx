import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface CaseStudyCardPreviewTag {
  label: string;
  /** Tailwind bg class for the dot — kept static so the JIT compiler preserves it */
  dotClass: string;
}

export interface CaseStudyCardProps {
  slug: string;
  title: string;
  company?: string;
  date: string;
  description: string;
  tldr?: string;
  /** Optional visual preview of Rachel's tag-chip design. Non-clickable. */
  previewTag?: CaseStudyCardPreviewTag;
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
  date,
  description,
  previewTag,
}: CaseStudyCardProps) {
  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
        {previewTag && (
          <span className="inline-flex items-center gap-1.5 rounded-md bg-background-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground-secondary">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${previewTag.dotClass}`}
            />
            {previewTag.label}
          </span>
        )}
        {company && (
          <span className="text-xs text-foreground-muted uppercase tracking-wide">
            {company}
            {date && <span className="mx-1.5">·</span>}
            {date && <span>{date}</span>}
          </span>
        )}
      </div>
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
