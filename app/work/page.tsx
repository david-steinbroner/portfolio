import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/markdown';

export default async function WorkPage() {
  const features = await getAllProjects('work-experience/fold-features');

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Product Manager @ Fold
                </h2>
                <p className="text-gray-600 mb-4">
                  Fintech • Bitcoin Financial Services • 2019-2024
                </p>
                <p className="text-gray-700 mb-4">
                  Led cross-functional teams to ship roadmap-critical features from
                  early-stage startup to Nasdaq listing. Owned core financial features,
                  engagement systems, go-to-market executions, and payments infrastructure.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Achievement</h3>
                    <p className="text-sm text-gray-700">
                      Helped scale Fold to become the first bitcoin-only financial services
                      company to go public on Nasdaq
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
                    <p className="text-sm text-gray-700">
                      Shipped 12+ major features driving 50%+ increases in key metrics
                      including trading volume and user engagement
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Specialization</h3>
                    <p className="text-sm text-gray-700">
                      Bitcoin payments, financial infrastructure, compliance, user
                      engagement, and cross-functional leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Features & Products Shipped
          </h2>
          {features.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <ProjectCard
                  key={feature.slug}
                  project={feature}
                  linkPrefix="/work"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <p className="text-gray-500 text-lg">
                Feature details coming soon...
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Check back soon to see detailed breakdowns of each feature shipped at Fold.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
