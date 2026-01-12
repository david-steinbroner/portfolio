import { getProjectBySlug, getAllProjects, getAdjacentFeatures } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, FileText, Wrench } from 'lucide-react';
import FeatureNavigation from '@/components/FeatureNavigation';

export async function generateStaticParams() {
  const features = await getAllProjects('features');
  return features.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const feature = await getProjectBySlug('features', slug);
    return {
      title: `${feature.metadata.title} | David Steinbroner`,
      description: feature.metadata.description,
    };
  } catch {
    return {
      title: 'Feature Not Found',
    };
  }
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let feature;
  try {
    feature = await getProjectBySlug('features', slug);
  } catch {
    notFound();
  }

  const { metadata, content } = feature;
  const { prev, next } = await getAdjacentFeatures(slug);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <header className="mb-8">
          {metadata.company && (
            <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
              {metadata.company}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            {metadata.title}
            <Wrench className="w-5 h-5 md:w-6 md:h-6 text-foreground-muted inline-block ml-2 align-middle" />
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed">
            {metadata.description}
          </p>
          {metadata.caseStudy && (
            <p className="text-sm text-foreground-muted mt-3">
              <span className="inline-flex items-center gap-1.5 mr-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>→</span>
              </span>
              <Link
                href={`/case-studies/${metadata.caseStudy.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {metadata.caseStudy.name || metadata.caseStudy.title}
              </Link>
            </p>
          )}
          <div className="flex items-center gap-4 mt-4 text-sm text-foreground-muted">
            {metadata.role && <span>{metadata.role}</span>}
            {metadata.role && metadata.date && <span>·</span>}
            {metadata.date && <span>{metadata.date}</span>}
          </div>
        </header>

        {metadata.status === 'Coming Soon' ? (
          /* Coming Soon State */
          <div className="py-16 text-center">
            <p className="text-foreground-muted">Coming Soon</p>
          </div>
        ) : (
          <>
            {/* Content */}
            <article
              className="prose mb-12"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Feature Navigation */}
            <FeatureNavigation prev={prev} next={next} />
          </>
        )}
      </div>
    </div>
  );
}
