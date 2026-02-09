import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import { postsQuery } from '../../../sanity/lib/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ReddiReach',
  description: 'Insights on Reddit marketing, AI search optimization, and GEO strategies for brands, startups and small businesses.',
  openGraph: {
    title: 'Blog | ReddiReach',
    description: 'Insights on Reddit marketing, AI search optimization, and GEO strategies for brands, startups and small businesses.',
    type: 'website',
    url: 'https://reddireach.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | ReddiReach',
    description: 'Insights on Reddit marketing, AI search optimization, and GEO strategies for brands, startups and small businesses.',
  },
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: any
  publishedAt?: string
  category?: string
}

export const revalidate = 60

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery)

  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-[#ff4500] hover:text-[#cc3700] mb-6 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 rounded"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mt-4 text-gray-600">
            Insights on Reddit marketing, AI search optimization, and growing your brand.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.mainImage && (
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  {post.category && (
                    <span className="text-xs font-semibold text-[#ff4500] uppercase tracking-wider">
                      {post.category}
                    </span>
                  )}
                  <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-xl font-semibold text-gray-900 mt-2 hover:text-[#ff4500] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && (
                    <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  {post.publishedAt && (
                    <p className="mt-4 text-xs text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
