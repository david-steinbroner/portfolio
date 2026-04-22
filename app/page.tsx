import PortfolioClient from '@/components/PortfolioClient';
import { FEATURE_ORDER, getAllProjects, type Project } from '@/lib/markdown';

/**
 * Display order for case studies on the homepage. This preserves the original
 * hand-crafted order of the hardcoded blocks — default date-desc sort would
 * put personal projects above the Fold work, which isn't the narrative we want.
 */
const CASE_STUDY_ORDER = [
  'taxbit',
  'fiat-bitcoin-ecosystem',
  'spin-wheel',
  'banking-partner-approval',
  'notification-preference-center',
  'story-mode',
  'poke-pal',
] as const;

export default async function Home() {
  const [allCaseStudies, allFeatures] = await Promise.all([
    getAllProjects('case-studies'),
    getAllProjects('features'),
  ]);

  // Order case studies by the explicit homepage order, dropping any that
  // don't exist on disk (defensive — same pattern getAdjacentFeatures uses).
  const orderedCaseStudies = CASE_STUDY_ORDER
    .map((slug) => allCaseStudies.find((cs) => cs.slug === slug))
    .filter((cs): cs is Project => cs !== undefined)
    .map((cs) => ({
      slug: cs.slug,
      title: cs.metadata.title,
      company: cs.metadata.company,
      date: cs.metadata.date,
      description: cs.metadata.description,
      tldr: cs.metadata.tldr,
    }));

  // Features follow FEATURE_ORDER (the canonical source of truth in lib/markdown).
  const orderedFeatures = FEATURE_ORDER
    .map((slug) => allFeatures.find((f) => f.slug === slug))
    .filter((f): f is Project => f !== undefined)
    .map((f) => ({
      slug: f.slug,
      title: f.metadata.title,
      date: f.metadata.date,
    }));

  return (
    <PortfolioClient
      caseStudies={orderedCaseStudies}
      features={orderedFeatures}
    />
  );
}
