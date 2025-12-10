interface CardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  onClick: () => void;
}

export default function Card({ title, description, image, tags = [], onClick }: CardProps) {
  const placeholderImage = '/images/placeholder.png';

  return (
    <button
      onClick={onClick}
      className="group w-full h-[380px] flex flex-col rounded-lg overflow-hidden border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
      aria-label={`View details for ${title}`}
    >
      {/* Image Section */}
      <div className="relative w-full h-32 overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--border)' }}>
        <img
          src={image || placeholderImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            (e.target as HTMLImageElement).src = placeholderImage;
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-3 flex flex-col text-left">
        {/* Title */}
        <h3
          className="text-base font-semibold mb-1.5 line-clamp-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm line-clamp-4 flex-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  backgroundColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        button:hover {
          border-color: var(--accent);
        }
        button:focus {
          ring-color: var(--accent);
        }
      `}</style>
    </button>
  );
}
