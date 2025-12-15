import { getProjectBySlug, getAllProjects } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed">
            {metadata.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-foreground-muted">
            {metadata.role && <span>{metadata.role}</span>}
            {metadata.role && metadata.date && <span>·</span>}
            {metadata.date && <span>{metadata.date}</span>}
          </div>
        </header>

        {/* Content */}
        <article
          className="prose mb-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Screenshots Coming Soon */}
        <div className="mb-12 p-8 rounded-lg border border-border bg-background-secondary text-center">
          <p className="text-foreground-muted">Screenshots coming soon</p>
        </div>

        {/* Case Study Link */}
        {metadata.caseStudy && (
          <div className="pt-8 border-t border-border">
            <Link
              href={`/case-studies/${metadata.caseStudy.slug}`}
              className="inline-flex items-center gap-2 text-foreground hover:text-foreground-secondary transition-colors"
            >
              Read the full case study: {metadata.caseStudy.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
