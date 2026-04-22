import Image from 'next/image';
import Link from 'next/link';
import { HIGHLIGHTS, HIGHLIGHTS_ENABLED, type Highlight } from '@/lib/highlights';

function HighlightSlot({ highlight }: { highlight: Highlight }) {
  const isFilled = Boolean(highlight.src);

  const content = isFilled ? (
    <Image
      src={highlight.src!}
      alt={highlight.alt ?? ''}
      fill
      sizes="(min-width: 768px) 213px, 33vw"
      className="object-cover"
    />
  ) : null;

  const baseClass =
    'relative aspect-square overflow-hidden rounded-lg bg-background-secondary';

  if (highlight.href && isFilled) {
    return (
      <Link
        href={highlight.href}
        className={`${baseClass} transition-opacity hover:opacity-90`}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}

export default function HighlightPlaceholder() {
  if (!HIGHLIGHTS_ENABLED) return null;

  return (
    <section aria-label="Featured work" className="mb-16 grid grid-cols-3 gap-3">
      {HIGHLIGHTS.map((highlight, i) => (
        <HighlightSlot key={i} highlight={highlight} />
      ))}
    </section>
  );
}
