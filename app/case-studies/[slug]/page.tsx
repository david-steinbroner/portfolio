import { getProjectBySlug, getAllProjects, FeatureLink } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Wrench, FileText } from 'lucide-react';
import TableOfContents from '@/components/TableOfContents';

export async function generateStaticParams() {
  const caseStudies = await getAllProjects('case-studies');
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const caseStudy = await getProjectBySlug('case-studies', slug);
    return {
      title: `${caseStudy.metadata.title} | David Steinbroner`,
      description: caseStudy.metadata.description,
    };
  } catch {
    return {
      title: 'Case Study Not Found',
    };
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let caseStudy;
  try {
    caseStudy = await getProjectBySlug('case-studies', slug);
  } catch {
    notFound();
  }

  const { metadata, content } = caseStudy;

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
        <header className="mb-12">
          {metadata.company && (
            <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
              {metadata.company}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4 flex items-center gap-3">
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-foreground-muted flex-shrink-0" />
            {metadata.title}
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed">
            {metadata.description}
          </p>
          {metadata.features && metadata.features.length > 0 && (
            <p className="text-sm text-foreground-muted mt-3">
              <span className="inline-flex items-center gap-1.5 mr-1.5">
                <Wrench className="w-3.5 h-3.5" />
                <span>→</span>
              </span>
              {metadata.features.map((f: FeatureLink, i: number) => (
                <span key={f.slug}>
                  <Link href={`/features/${f.slug}`} className="hover:text-foreground transition-colors">
                    {f.name}
                  </Link>
                  {i < (metadata.features?.length || 0) - 1 && ' · '}
                </span>
              ))}
            </p>
          )}
          {metadata.date && (
            <p className="text-sm text-foreground-muted mt-4">
              {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          )}
        </header>

        {/* Impact Section */}
        {metadata.impact && metadata.impact.length > 0 && (
          <div className="mb-12 p-6 rounded-lg border border-border bg-background-secondary">
            <h2 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">
              Impact
            </h2>
            <ul className="space-y-2">
              {metadata.impact.map((item, index) => (
                <li key={index} className="text-foreground-secondary leading-relaxed flex items-start">
                  <span className="mr-2 text-foreground-muted">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content */}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Table of Contents - Desktop only */}
        <TableOfContents content={content} features={metadata.features} />
      </div>
    </div>
  );
}
