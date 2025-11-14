import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects, getFeaturedFeatures } from '@/lib/markdown';

export default async function Home() {
  const featuredProjects = await getFeaturedProjects(3);
  const featuredFeatures = await getFeaturedFeatures(4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                David Steinbroner
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                Product Manager & Full-Stack Developer
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I'm a full-stack Product Manager with a background in community, growth,
                product marketing, and strategy. Over the past 10+ years, I've worked across
                fintech, clean energy, and analytics — with 5+ years focused directly on
                product management.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Most recently at <a href="https://foldapp.com" className="text-blue-600 hover:text-blue-800 font-medium">Fold</a>,
                I helped scale the company from early-stage startup to Nasdaq listing, becoming
                the first bitcoin-only financial services company to go public.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:davidsteinbroner@gmail.com"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/davidsteinbroner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">[Your Photo]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Work at Fold */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Product Work @ Fold
              </h2>
              <p className="text-gray-600">
                Leading cross-functional teams to ship roadmap-critical features
              </p>
            </div>
            <Link
              href="/work"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFeatures.length > 0 ? (
              featuredFeatures.map((feature) => (
                <ProjectCard
                  key={feature.slug}
                  project={feature}
                  linkPrefix="/work"
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-4 text-center py-8">
                Work experience features coming soon...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Recent Projects & Prototypes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Recent Projects & Prototypes
              </h2>
              <p className="text-gray-600">
                Solo full-stack PM and development work
              </p>
            </div>
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  linkPrefix="/projects"
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-3 text-center py-8">
                Projects coming soon...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Skills Callout */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hungry to learn and eager to build
          </h2>
          <p className="text-lg text-gray-700">
            I want to bring my curiosity, empathy, and grit to a team where I can
            make a meaningful mark on a shared mission.
          </p>
        </div>
      </section>
    </div>
  );
}
