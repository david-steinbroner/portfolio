import { getLetterBySlug, getAllLetters } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const letters = await getAllLetters();
  return letters.map((letter) => ({
    slug: letter.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const letter = await getLetterBySlug(slug);
    const { metadata } = letter;

    // Default title pattern if the letter didn't specify one explicitly.
    const title =
      metadata.title ??
      `For ${metadata.company} — David Steinbroner`;

    const meta: Metadata = { title };

    // Cover letters default to noindex (see LetterMetadataSchema).
    if (metadata.noindex !== false) {
      meta.robots = { index: false, follow: false };
    }

    return meta;
  } catch {
    return {
      title: 'Letter Not Found',
    };
  }
}

export default async function LetterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let letter;
  try {
    letter = await getLetterBySlug(slug);
  } catch {
    notFound();
  }

  const { metadata, content } = letter;
  const recipient = metadata.recipient ?? 'Hiring Team';

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Top Nav */}
        <nav className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-foreground text-background font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <a
            href="/david_steinbroner_resume_feb26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/davidsteinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/david-steinbroner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <p className="text-sm text-foreground-muted uppercase tracking-wider mb-3">
            David Steinbroner · For the {recipient}
          </p>
          {metadata.headline && (
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
              {metadata.headline}
            </h1>
          )}
          <p className="text-lg text-foreground-secondary">{metadata.role}</p>
        </header>

        {/* Body */}
        <article
          className="prose space-y-6 text-foreground-secondary leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
