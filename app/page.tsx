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
                Full-Stack PM & Builder
              </p>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                I don't just manage products—I build them. From civic tech platforms tracking local government
                to cloud infrastructure managing multi-provider OAuth, I ship complete full-stack applications
                that solve real user problems.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Recent work includes:</span> Civic engagement platforms (Local Gov Watch),
                gaming accessibility tools (MTG Deck Match), geospatial data visualization (American Music History Map),
                and cloud storage infrastructure (Storage Optimizer with Dropbox/OneDrive/Google Drive integration).
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Most recently at <a href="https://foldapp.com" className="text-blue-600 hover:text-blue-800 font-medium">Fold</a>,
                I led product development from startup to 500K+ users and Nasdaq listing—shipping 11+ features
                across Bitcoin debit, credit, and rewards programs.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                <span className="font-semibold">My approach:</span> Deep technical understanding (React, TypeScript, PostgreSQL, OAuth, WebSockets)
                combined with accessibility-first product thinking. I make complex things deeply accessible through rapid prototyping,
                user research, and clear communication that aligns teams around a shared vision.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:davidsteinbroner@gmail.com"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/davidsteinbroner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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

      {/* Featured Projects - LEAD WITH THIS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600">
                Full-stack applications built from 0→1
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

      {/* Product Work at Fold */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Product Work @ Fold
              </h2>
              <p className="text-gray-600">
                Leading cross-functional teams to ship Bitcoin fintech features
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

      {/* Skills & Expertise */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Management */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Product Management
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>0→1 Product Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product Strategy & Roadmapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>User Research & Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cross-Functional Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Data-Driven Decision Making</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>A/B Testing & Experimentation</span>
                </li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technical Stack
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>React 18/19, Next.js 16, TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Express.js, Node.js, WebSockets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>PostgreSQL, Supabase, Drizzle ORM</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>OAuth 2.0 (Dropbox, Microsoft, Google)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mapbox, Geospatial Data (Turf.js)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tailwind CSS, shadcn/ui, Framer Motion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloudflare Pages, Vercel, Static Hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI Tools (Claude Code, ChatGPT)</span>
                </li>
              </ul>
            </div>

            {/* Domain Expertise */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Domain Expertise
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fintech & Payments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Bitcoin & Cryptocurrency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Community Management & Analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gamification & Engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compliance & Regulatory Navigation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product-Led Growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Impact at Fold
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600">Users Scaled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">70K+</div>
              <div className="text-gray-600">Credit Card Signups</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Tax Feature Adoption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-gray-600">Daily Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Philosophy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            "I take complicated things and make them deeply accessible through user
            understanding, rapid prototyping, and clear communication that gets smart
            people aligned around a vision."
          </p>
          <p className="text-lg text-gray-700">
            I want to bring my curiosity, empathy, and grit to a team where I can
            make a meaningful mark on a shared mission.
          </p>
        </div>
      </section>
    </div>
  );
}
