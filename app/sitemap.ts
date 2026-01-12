import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.davidsteinbroner.com'
  const lastModified = new Date()

  // Case study slugs
  const caseStudies = [
    'bitcoin-flywheel',
    'spin-wheel',
    'taxbit',
  ]

  // Feature slugs
  const features = [
    'banking-partner-approval',
    'card-reissuance',
    'direct-to-bitcoin',
    'fairytale-project',
    'notification-preference-center',
    'receiving-bitcoin',
    'selling-bitcoin',
    'spin-wheel',
    'tax-documents',
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Case studies
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Features
    ...features.map((slug) => ({
      url: `${baseUrl}/features/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
