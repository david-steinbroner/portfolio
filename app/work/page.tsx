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
                  Bitcoin Fintech • Community Manager → Product Manager • 2019-2024
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Helped scale the first Bitcoin-only public company from startup to 500K+ users
                  and Nasdaq listing. Shipped 11+ features across debit, credit, and rewards—managing
                  all three product lines simultaneously while coordinating across Engineering, Design,
                  Compliance, Support, Growth, and Finance.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Career Progression</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-medium">Started:</span> Community Manager (2019)</p>
                      <p><span className="font-medium">Promoted to:</span> Product Manager (2021)</p>
                      <p><span className="font-medium">Focus:</span> Community-first product development using AI prototyping</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Led Bitcoin Credit Card launch (70K+ signups)</li>
                      <li>• Drove 50% MoM trading growth</li>
                      <li>• 3x daily active users via gamification</li>
                      <li>• 95% adoption on tax features</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Product Philosophy at Fold</h3>
                  <p className="text-gray-700">
                    "My specialty is taking complicated things and making them deeply accessible through
                    user understanding, rapid prototyping, and clear communication that gets smart people
                    aligned around a vision."
                  </p>
                  <p className="text-gray-700 mt-3">
                    At Fold, I established a product-led growth cycle, used Claude and ChatGPT for rapid
                    prototyping, and championed community-first development that turned Bitcoin complexity
                    into delightful user experiences.
                  </p>
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
