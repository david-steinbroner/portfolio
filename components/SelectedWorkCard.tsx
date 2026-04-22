import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TagChip from '@/components/TagChip';
import type { ResolvedHomepageTag } from '@/lib/markdown';

export interface SelectedWorkCardProps {
  slug: string;
  type: 'case-study' | 'feature';
  title: string;
  company?: string;
  date: string;
  description: string;
  tags: ResolvedHomepageTag[];
}

/**
 * Pure presentational component for a "Selected Work" entry on the homepage.
 *
 * Each entry is either a case study or a feature. The title links to the
 * appropriate route based on `type`. The `tags` array renders as clickable
 * <TagChip>s above the company/date line.
 */
export default function SelectedWorkCard({
  slug,
  type,
  title,
  company,
  date,
  description,
  tags,
}: SelectedWorkCardProps) {
  const href =
    type === 'case-study' ? `/case-studies/${slug}` : `/features/${slug}`;

  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag, i) => (
              <TagChip key={`${tag.slug}-${tag.anchor ?? ''}-${i}`} tag={tag} />
            ))}
          </div>
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
          href={href}
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
