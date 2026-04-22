import PortfolioClient, { type PortfolioClientCaseStudy } from '@/components/PortfolioClient';
import { getAllProjects, type Project } from '@/lib/markdown';

/**
 * Display order for case studies on the homepage. Matches Rachel's redesign:
 * personal projects (Story Mode, Poke Pal) stay as case study pages but are
 * no longer featured on the homepage. Fairytale Project and Card Reissuance
 * live in content/features/ and will be promoted to this list in a later batch.
 */
const CASE_STUDY_ORDER = [
  'taxbit',
  'banking-partner-approval',
  'fiat-bitcoin-ecosystem',
  'spin-wheel',
  'notification-preference-center',
] as const;

/**
 * Preview tags wired inline for this batch to evaluate Rachel's tag-chip
 * aesthetic before committing to the full schema-driven tag system.
 * Non-clickable; visual-only. Tailwind class strings are kept static so
 * the JIT compiler preserves them.
 */
const PREVIEW_TAGS: Partial<Record<(typeof CASE_STUDY_ORDER)[number], PortfolioClientCaseStudy['previewTag']>> = {
  taxbit: { label: 'Taxbit Integration', dotClass: 'bg-blue-500' },
};

export default async function Home() {
  const allCaseStudies = await getAllProjects('case-studies');

  const orderedCaseStudies: PortfolioClientCaseStudy[] = CASE_STUDY_ORDER
    .map((slug) => allCaseStudies.find((cs) => cs.slug === slug))
    .filter((cs): cs is Project => cs !== undefined)
    .map((cs) => ({
      slug: cs.slug,
      title: cs.metadata.title,
      company: cs.metadata.company,
      date: cs.metadata.date,
      description: cs.metadata.description,
      tldr: cs.metadata.tldr,
      previewTag: PREVIEW_TAGS[cs.slug as (typeof CASE_STUDY_ORDER)[number]],
    }));

  return <PortfolioClient caseStudies={orderedCaseStudies} />;
}
