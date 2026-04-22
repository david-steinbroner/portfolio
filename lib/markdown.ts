import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import type { Root } from 'hast';
import {
  ProjectMetadataSchema,
  LetterMetadataSchema,
  type ProjectMetadata,
  type FeatureLink,
  type LetterMetadata,
} from './schema';

const contentDirectory = path.join(process.cwd(), 'content');

// Canonical feature order - matches homepage display order (top to bottom)
// This is the single source of truth for feature navigation
export const FEATURE_ORDER = [
  'fairytale-project',
  'tax-documents',
  'notification-preference-center',
  'card-reissuance',
  'banking-partner-approval',
  'direct-to-bitcoin',
  'receiving-bitcoin',
  'selling-bitcoin',
  'spin-wheel',
] as const;

// Re-export schema-inferred types so existing imports from `@/lib/markdown`
// (e.g. `FeatureLink` in app/case-studies/[slug]/page.tsx) keep working.
export type { ProjectMetadata, FeatureLink, LetterMetadata };

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

/**
 * Rehype plugin: walk the HAST and add `loading="lazy"` + `decoding="async"`
 * to every `<img>` element so case-study/feature images defer offscreen work.
 */
function rehypeLazyLoadImages() {
  return (tree: Root) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties = {
          ...node.properties,
          loading: 'lazy',
          decoding: 'async',
        };
      }
    });
  };
}

async function markdownToHtml(markdown: string) {
  // Pipeline:
  //   remark (MDAST) -> remark-gfm -> remark-rehype (HAST)
  //     -> rehype-slug (add id="" to headings)
  //     -> rehype-autolink-headings (wrap heading text in anchor)
  //     -> rehypeLazyLoadImages (lazy-load all <img>)
  //     -> rehype-stringify (serialize HAST to HTML string)
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeLazyLoadImages)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

/**
 * Format zod validation issues into a human-readable multi-line string.
 * Each issue becomes: `  - <dot.path>: <message>`.
 */
function formatSchemaIssues(issues: import('zod').ZodIssue[]): string {
  if (issues.length === 0) return '(no issues)';
  return issues
    .map((issue) => {
      const pathStr = issue.path.length > 0 ? issue.path.join('.') : '(root)';
      return `  - ${pathStr}: ${issue.message}`;
    })
    .join('\n');
}

export async function getProjectBySlug(
  category: 'case-studies' | 'features',
  slug: string
): Promise<Project> {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  // Wave 1: permissive validation. Warn on failure but don't break the build.
  // Wave 4 will flip this to strict enforcement.
  const result = ProjectMetadataSchema.safeParse(data);
  let metadata: ProjectMetadata;
  if (result.success) {
    metadata = result.data;
  } else {
    console.warn(
      `[schema] Invalid frontmatter in content/${category}/${slug}.md:\n${formatSchemaIssues(
        result.error.issues
      )}`
    );
    // Non-strict cast: keep the raw parsed frontmatter so the page still renders.
    metadata = data as ProjectMetadata;
  }

  return {
    slug,
    metadata,
    content: htmlContent,
  };
}

export async function getAllProjects(
  category: 'case-studies' | 'features'
): Promise<Project[]> {
  const fullPath = path.join(contentDirectory, category);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, '');
        return getProjectBySlug(category, slug);
      })
  );

  // Sort by date, newest first
  return projects.sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });
}

export interface AdjacentFeatures {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export async function getAdjacentFeatures(currentSlug: string): Promise<AdjacentFeatures> {
  const allFeatures = await getAllProjects('features');

  // Use canonical FEATURE_ORDER for navigation (matches homepage)
  // Filter to only features that exist, in case any are missing
  const orderedFeatures = FEATURE_ORDER
    .map(slug => allFeatures.find(f => f.slug === slug))
    .filter((f): f is Project => f !== undefined);

  // Sanity checks: warn loudly when FEATURE_ORDER drifts from the filesystem.
  // These fire during `next build` so drift can't hide.
  const allFeatureSlugs = new Set(allFeatures.map((f) => f.slug));
  const featureOrderSet = new Set<string>(FEATURE_ORDER);
  for (const slug of FEATURE_ORDER) {
    if (!allFeatureSlugs.has(slug)) {
      console.warn('[FEATURE_ORDER] Slug listed but no file found: ' + slug);
    }
  }
  for (const slug of allFeatureSlugs) {
    if (!featureOrderSet.has(slug)) {
      console.warn('[FEATURE_ORDER] File exists but not listed: ' + slug);
    }
  }

  const currentIndex = orderedFeatures.findIndex((f) => f.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // Navigation follows homepage order (top to bottom):
  // - "Previous" goes UP the list (lower index, toward top of homepage)
  // - "Next" goes DOWN the list (higher index, toward bottom of homepage)
  const prev =
    currentIndex > 0
      ? { slug: orderedFeatures[currentIndex - 1].slug, title: orderedFeatures[currentIndex - 1].metadata.title }
      : null;

  const next =
    currentIndex < orderedFeatures.length - 1
      ? { slug: orderedFeatures[currentIndex + 1].slug, title: orderedFeatures[currentIndex + 1].metadata.title }
      : null;

  return { prev, next };
}

// ---------------------------------------------------------------------------
// Letters
//
// Cover letters live under content/letters/*.md with their own frontmatter
// schema (LetterMetadataSchema). These mirror getProjectBySlug/getAllProjects
// but for a different content type — intentionally kept separate so letters
// don't accidentally leak into the projects pipeline (sitemap, homepage, etc.).
// ---------------------------------------------------------------------------

export interface Letter {
  slug: string;
  metadata: LetterMetadata;
  content: string;
}

export async function getLetterBySlug(slug: string): Promise<Letter> {
  const fullPath = path.join(contentDirectory, 'letters', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  // Wave 1: permissive validation, matching getProjectBySlug.
  const result = LetterMetadataSchema.safeParse(data);
  let metadata: LetterMetadata;
  if (result.success) {
    metadata = result.data;
  } else {
    console.warn(
      `[schema] Invalid frontmatter in content/letters/${slug}.md:\n${formatSchemaIssues(
        result.error.issues
      )}`
    );
    metadata = data as LetterMetadata;
  }

  return {
    slug,
    metadata,
    content: htmlContent,
  };
}

export async function getAllLetters(): Promise<Letter[]> {
  const fullPath = path.join(contentDirectory, 'letters');

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  const letters = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, '');
        return getLetterBySlug(slug);
      })
  );

  // Sort by date, newest first (same as projects).
  return letters.sort((a, b) => {
    return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });
}
