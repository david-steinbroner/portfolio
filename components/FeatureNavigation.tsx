import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FeatureNavigationProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export default function FeatureNavigation({ prev, next }: FeatureNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="pt-8 border-t border-border" aria-label="Feature navigation">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {/* Previous (older) feature */}
        {prev ? (
          <Link
            href={`/features/${prev.slug}`}
            className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">
              <span className="text-foreground-muted">Previous:</span>{' '}
              <span className="text-foreground-secondary group-hover:text-foreground">
                {prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        {/* Next (newer) feature */}
        {next ? (
          <Link
            href={`/features/${next.slug}`}
            className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors min-h-[44px] sm:text-right sm:flex-row-reverse"
          >
            <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            <span className="text-sm">
              <span className="text-foreground-muted">Next:</span>{' '}
              <span className="text-foreground-secondary group-hover:text-foreground">
                {next.title}
              </span>
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
