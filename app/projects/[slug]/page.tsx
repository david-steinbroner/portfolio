import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const projects = await getAllProjects('projects');
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug('projects', slug);
    return {
      title: `${project.metadata.title} | David Steinbroner`,
      description: project.metadata.description,
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = await getProjectBySlug('projects', slug);
  } catch {
    notFound();
  }

  const { metadata, content } = project;

  const statusColors = {
    Live: 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Shipped: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/projects"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900 flex-1">
              {metadata.title}
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[metadata.status]
              }`}
            >
              {metadata.status}
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-6">{metadata.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {(metadata.link || metadata.github) && (
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              {metadata.link && (
                <a
                  href={metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Live Site →
                </a>
              )}
              {metadata.github && (
                <a
                  href={metadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Code on GitHub →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Impact Section */}
        {metadata.impact && metadata.impact.length > 0 && (
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact</h2>
            <ul className="space-y-2">
              {metadata.impact.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
