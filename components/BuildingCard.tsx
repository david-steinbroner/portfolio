import Link from 'next/link';

interface BuildingCardProps {
  name: string;
  tagline: string;
  status: 'active' | 'paused';
  href: string;
}

export default function BuildingCard({ name, tagline, status, href }: BuildingCardProps) {
  const statusColors = {
    active: {
      bg: '#10b981',
      text: '#ffffff',
    },
    paused: {
      bg: '#9ca3af',
      text: '#ffffff',
    },
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
      aria-label={`Visit ${name}`}
    >
      {/* Header with Name and Status Badge */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3
          className="text-lg font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </h3>
        <span
          className="px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0"
          style={{
            backgroundColor: statusColors[status].bg,
            color: statusColors[status].text,
          }}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Tagline */}
      <p
        className="text-sm"
        style={{ color: 'var(--text-secondary)' }}
      >
        {tagline}
      </p>

      <style jsx>{`
        a:hover {
          border-color: var(--accent);
        }
        a:focus {
          ring-color: var(--accent);
        }
      `}</style>
    </Link>
  );
}
