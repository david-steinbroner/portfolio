import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectMetadata {
  title: string;
  status: 'Live' | 'In Progress' | 'Shipped';
  tags: string[];
  date: string;
  link?: string;
  github?: string;
  image?: string;
  category: 'project' | 'feature';
  company?: string;
  impact?: string[];
  description: string;
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
  category: 'case-studies',
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
  category: 'case-studies'
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
