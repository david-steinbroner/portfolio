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
            Side Projects & Technical Exploration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-6">
            I build things to solve real problems and explore new domains. From full-stack web apps
            to CAD engineering, these projects demonstrate my technical versatility and product thinking.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              What These Projects Show
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-900 mb-1">Technical Range</p>
                <p className="text-gray-600">Next.js, SQL databases, Directus CMS, OpenSCAD CAD modeling, data migration pipelines</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Product Thinking</p>
                <p className="text-gray-600">User research, accessibility-first design, iterative development, go-to-market strategy</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Domain Versatility</p>
                <p className="text-gray-600">Gaming, community analytics, e-commerce operations, mechanical engineering</p>
              </div>
            </div>
          </div>
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
