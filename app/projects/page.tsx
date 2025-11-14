import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/markdown';

export default async function ProjectsPage() {
  const projects = await getAllProjects('projects');

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Projects & Prototypes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Solo full-stack PM and development work. I build prototypes and MVPs
            to explore ideas, learn new technologies, and demonstrate end-to-end
            product thinking.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                linkPrefix="/projects"
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">
              Projects coming soon...
            </p>
            <p className="text-gray-400 text-sm">
              I'm currently building several full-stack projects including:
            </p>
            <ul className="text-gray-400 text-sm mt-4 space-y-2">
              <li>• Fairytale Site Rebuild</li>
              <li>• MTG Deck Match Site</li>
              <li>• Local Government Watch</li>
              <li>• AI Tavern Game</li>
              <li>• Music Map</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Check back soon for detailed project breakdowns!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
