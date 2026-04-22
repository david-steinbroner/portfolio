import { z } from 'zod';

/**
 * Frontmatter schema for content/case-studies/*.md and content/features/*.md.
 *
 * Wave 1 is permissive: `getProjectBySlug` calls `safeParse` and logs a warning
 * when validation fails, but falls back to a non-strict cast so builds don't
 * break on minor drift. Wave 4 will flip this to strict.
 *
 * Note on `category`: the current TS types said `'project' | 'feature'`, but
 * real content uses `'case-study' | 'feature'`. The schema matches real content.
 */

// Accepts:
//   - Bare year:        "2024"
//   - Month + year:     "January 2024"
//   - Full date:        "January 15, 2024"
const DATE_REGEX = /^(\d{4}|[A-Z][a-z]+ \d{4}|[A-Z][a-z]+ \d{1,2}, \d{4})$/;

export const FeatureLinkSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const CaseStudyLinkSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  slug: z.string(),
});

export const ProjectMetadataSchema = z.object({
  title: z.string(),
  date: z.string().regex(DATE_REGEX, {
    message:
      'date must be a bare year ("2024"), month-year ("January 2024"), or full date ("January 15, 2024")',
  }),
  description: z.string(),
  status: z.enum(['Live', 'In Progress', 'Building', 'Shipped', 'Coming Soon']),
  tags: z.array(z.string()),
  category: z.enum(['case-study', 'feature']),

  // Optional narrative fields
  company: z.string().optional(),
  role: z.string().optional(),
  impact: z.array(z.string()).optional(),
  tldr: z.string().optional(),

  // Optional links
  link: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  github: z.string().url().optional(),
  image: z.string().optional(),

  // Cross-references between case studies and features
  features: z.array(FeatureLinkSchema).optional(),
  caseStudy: CaseStudyLinkSchema.optional(),
});

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
export type FeatureLink = z.infer<typeof FeatureLinkSchema>;
export type CaseStudyLink = z.infer<typeof CaseStudyLinkSchema>;
