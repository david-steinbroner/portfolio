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
export const DATE_REGEX = /^(\d{4}|[A-Z][a-z]+ \d{4}|[A-Z][a-z]+ \d{1,2}, \d{4})$/;

export const FeatureLinkSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export const CaseStudyLinkSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  slug: z.string(),
});

// Seven named colors matching Rachel's mockup palette
export const TagColorSchema = z.enum(['blue', 'orange', 'purple', 'pink', 'yellow', 'red', 'green']);
export type TagColor = z.infer<typeof TagColorSchema>;

// Per-feature display tag — drives the colored chip on the homepage
export const TagSchema = z.object({
  label: z.string(),
  color: TagColorSchema,
});
export type Tag = z.infer<typeof TagSchema>;

// Reference from a homepage entry to a feature tag (optionally with an
// in-page anchor for sub-sections like bitcoin-transactions#direct-to-bitcoin)
export const HomepageTagRefSchema = z.object({
  slug: z.string(),
  anchor: z.string().optional(),
});
export type HomepageTagRef = z.infer<typeof HomepageTagRefSchema>;

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

  // Homepage tag system (Wave A schema; Wave B backfills frontmatter).
  // `tag` lives on feature files and declares how this feature appears as a chip.
  // `homepageTags` lives on homepage entries (case studies or features) and
  // lists which feature tags to render as chips on the homepage card.
  tag: TagSchema.optional(),
  homepageTags: z.array(HomepageTagRefSchema).optional(),
});

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;
export type FeatureLink = z.infer<typeof FeatureLinkSchema>;
export type CaseStudyLink = z.infer<typeof CaseStudyLinkSchema>;

/**
 * Frontmatter schema for content/letters/*.md.
 *
 * Cover letters have a different shape than case studies: they're tied to a
 * specific company/role, almost always noindex, and (unlike projects) don't
 * participate in the homepage grid or cross-reference features.
 */
export const LetterMetadataSchema = z.object({
  company: z.string(),
  role: z.string(),
  date: z.string().regex(DATE_REGEX, {
    message:
      'date must be a bare year ("2024"), month-year ("January 2024"), or full date ("January 15, 2024")',
  }),
  // Optional: overrides the default "Cover Letter for {role} at {company}" title
  title: z.string().optional(),
  // Optional: "Dear {recipient}" salutation; defaults to "Dear Hiring Team"
  recipient: z.string().optional(),
  // Cover letters should almost always be noindex by default
  noindex: z.boolean().optional().default(true),
  // Optional: one-line hook rendered as a subhead under the title
  headline: z.string().optional(),
});

export type LetterMetadata = z.infer<typeof LetterMetadataSchema>;
