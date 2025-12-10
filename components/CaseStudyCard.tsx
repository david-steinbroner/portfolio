import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  hook: string;
  project: string;
  href: string;
}

export default function CaseStudyCard({ title, hook, project, href }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-lg border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
      aria-label={`Read case study: ${title}`}
    >
      {/* Title */}
      <h3
        className="text-lg font-semibold mb-3"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>

      {/* Hook */}
      <p
        className="text-sm md:text-base mb-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        {hook}
      </p>

      {/* Project Attribution */}
      <p
        className="text-xs"
        style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
      >
        Project: {project}
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
