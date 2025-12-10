import Link from 'next/link';
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  href: string;
  children: ReactNode;
}

export default function Section({ title, href, children }: SectionProps) {
  return (
    <section
      id={title.toLowerCase()}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h2>
        <Link
          href={href}
          className="text-sm transition-opacity hover:opacity-70"
          style={{ color: 'var(--text-secondary)' }}
        >
          See all →
        </Link>
      </div>

      {/* Section Content */}
      <div>
        {children}
      </div>
    </section>
  );
}
