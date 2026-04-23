import Link from 'next/link';
import type { TagColor } from '@/lib/schema';
import type { ResolvedHomepageTag } from '@/lib/markdown';

/**
 * Static color → Tailwind class map.
 *
 * Kept static (not dynamically interpolated) so Tailwind v4's JIT preserves
 * every class at build time. Dynamic strings like `bg-${color}-500` get
 * purged.
 */
const DOT_CLASSES: Record<TagColor, string> = {
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
};

export interface TagChipProps {
  tag: ResolvedHomepageTag;
}

/**
 * Clickable tag chip rendered on homepage "Selected Work" cards.
 *
 * Visuals match the inline preview previously hard-coded into CaseStudyCard:
 * a small colored dot + uppercase label in a subtle rounded pill.
 */
export default function TagChip({ tag }: TagChipProps) {
  return (
    <Link
      href={tag.href}
      className="inline-flex items-center gap-2 rounded-md bg-background-secondary px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-foreground-secondary transition-colors hover:bg-background-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${DOT_CLASSES[tag.color]}`}
      />
      <span>{tag.label}</span>
    </Link>
  );
}
