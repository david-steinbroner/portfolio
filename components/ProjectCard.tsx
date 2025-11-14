import Link from 'next/link';
import { Project } from '@/lib/markdown';

interface ProjectCardProps {
  project: Project;
  linkPrefix: string;
}

export default function ProjectCard({ project, linkPrefix }: ProjectCardProps) {
  const { metadata, slug } = project;

  const statusColors = {
    Live: 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Shipped: 'bg-blue-100 text-blue-800',
  };

  return (
    <Link href={`${linkPrefix}/${slug}`}>
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {metadata.image && (
          <div className="relative h-48 bg-gray-100">
            <img
              src={metadata.image}
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 flex-1">
              {metadata.title}
            </h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                statusColors[metadata.status]
              }`}
            >
              {metadata.status}
            </span>
          </div>

          {metadata.company && (
            <p className="text-sm text-gray-500 mb-2">{metadata.company}</p>
          )}

          <p className="text-gray-600 mb-4 flex-1">{metadata.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {metadata.impact && metadata.impact.length > 0 && (
            <div className="mt-auto pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-900 mb-2">Impact:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {metadata.impact.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
