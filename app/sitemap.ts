import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/markdown'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.davidsteinbroner.com'
  const lastModified = new Date()

  const [caseStudies, features] = await Promise.all([
    getAllProjects('case-studies'),
    getAllProjects('features'),
  ])

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Case studies
    ...caseStudies.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Features
    ...features.map((project) => ({
      url: `${baseUrl}/features/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
