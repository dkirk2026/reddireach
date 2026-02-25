import { MetadataRoute } from 'next'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'

const sitemapPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt
  }
`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: { slug: string; publishedAt?: string }[] =
    await client.fetch(sitemapPostsQuery)

  const blogPostUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://reddireach.com/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://reddireach.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://reddireach.com/geo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://reddireach.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://reddireach.com/checklist',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://reddireach.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogPostUrls,
    {
      url: 'https://reddireach.com/privacy',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://reddireach.com/terms',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://reddireach.com/cookies',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
