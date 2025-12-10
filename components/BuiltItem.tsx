import Link from 'next/link';

interface BuiltItemProps {
  name: string;
  year: string;
  description: string;
  href: string;
}

export default function BuiltItem({ name, year, description, href }: BuiltItemProps) {
  return (
    <Link
      href={href}
      className="group block py-3 px-4 -mx-4 rounded-lg transition-colors duration-200 hover:bg-opacity-50"
      style={{
        ['--hover-bg' as string]: 'var(--code-bg)',
      }}
    >
      {/* Name and Year Row */}
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <h3
          className="font-medium text-base"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </h3>
        <span
          className="text-sm whitespace-nowrap flex-shrink-0"
          style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
        >
          {year}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm line-clamp-2 md:line-clamp-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        {description}
      </p>

      <style jsx>{`
        a:hover {
          background-color: var(--code-bg);
        }
      `}</style>
    </Link>
  );
}
