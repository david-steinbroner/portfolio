import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface FeatureLink {
  name: string;
  slug: string;
}

export interface ProjectMetadata {
  title: string;
  status: 'Live' | 'In Progress' | 'Shipped' | 'Coming Soon';
  tags: string[];
  date: string;
  link?: string;
  github?: string;
  image?: string;
  category: 'project' | 'feature';
  company?: string;
  impact?: string[];
  description: string;
  features?: FeatureLink[];
  caseStudy?: { title?: string; name?: string; slug: string };
  role?: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .process(markdown);
  return result.toString();
}

export async function getProjectBySlug(
  category: 'case-studies' | 'features',
  slug: string
): Promise<Project> {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    metadata: data as ProjectMetadata,
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
  const features = await getAllProjects('features');
  const currentIndex = features.findIndex((f) => f.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // Features are sorted newest first, so:
  // - "previous" (older) is the NEXT item in array (higher index)
  // - "next" (newer) is the PREVIOUS item in array (lower index)
  const prev =
    currentIndex < features.length - 1
      ? { slug: features[currentIndex + 1].slug, title: features[currentIndex + 1].metadata.title }
      : null;

  const next =
    currentIndex > 0
      ? { slug: features[currentIndex - 1].slug, title: features[currentIndex - 1].metadata.title }
      : null;

  return { prev, next };
}
