import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { client } from '../../../../sanity/lib/client'
import { urlFor } from '../../../../sanity/lib/image'
import { postQuery, postSlugsQuery } from '../../../../sanity/lib/queries'
import type { Metadata } from 'next'

type Post = {
  _id: string
  title: string
  seoTitle?: string
  slug: { current: string }
  metaDescription?: string
  hookStatement?: string
  promiseStatement?: string
  excerpt?: string
  mainImage?: any
  body?: any[]
  publishedAt?: string
  category?: string
  canonicalUrl?: string
  structuredData?: string
  author?: {
    name: string
    image?: any
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(postSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post: Post | null = await client.fetch(postQuery, { slug })

  if (!post) {
    return {
      title: 'Post Not Found | ReddiReach',
    }
  }

  const title = post.seoTitle || post.title
  const description = post.metaDescription || post.excerpt || `Read ${post.title} on the ReddiReach blog.`

  return {
    title: `${title} | ReddiReach Blog`,
    description,
    alternates: {
      canonical: post.canonicalUrl || `https://reddireach.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(post.author?.name && { authors: [post.author.name] }),
      images: post.mainImage
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  }
}

// CTA variant content
const ctaVariants: Record<string, { headline: string; description: string }> = {
  discovery: {
    headline: 'Ready to Find Your Perfect Subreddits?',
    description: 'Let us identify high-intent communities where your ideal customers are already looking for solutions like yours.',
  },
  engagement: {
    headline: 'Want to Master Reddit Engagement?',
    description: 'Learn how to create comments that build trust, drive traffic, and convert readers into customers.',
  },
  conversion: {
    headline: 'See Real ROI from Reddit Marketing',
    description: 'Join brands getting measurable results from authentic Reddit engagement. No bots, no spam, just real connections.',
  },
  default: {
    headline: 'Ready to Grow Your Brand on Reddit?',
    description: 'Let us help you build authentic presence in communities that matter to your business.',
  },
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            className="rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    // Table component
    table: ({ value }: any) => {
      if (!value?.columns || !value?.rows) return null
      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            {value.caption && (
              <caption className="text-sm text-gray-500 mb-2">{value.caption}</caption>
            )}
            <thead className="bg-gray-50">
              <tr>
                {value.columns.map((col: string, i: number) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {value.rows.map((row: any, i: number) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.cells?.map((cell: string, j: number) => (
                    <td key={j} className="px-4 py-3 text-sm text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    // YouTube embed
    youtube: ({ value }: any) => {
      if (!value?.url) return null
      const videoId = value.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/)?.[1]
      if (!videoId) return null
      return (
        <div className="my-8 relative aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )
    },
    // Q&A Box
    qa: ({ value }: any) => {
      if (!value?.question || !value?.answer) return null
      return (
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start gap-3 mb-3">
            <span className="flex-shrink-0 w-8 h-8 bg-[#ff4500] text-white rounded-full flex items-center justify-center font-bold text-sm">
              Q
            </span>
            <p className="font-semibold text-gray-900 pt-1">{value.question}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
              A
            </span>
            <p className="text-gray-700 pt-1">{value.answer}</p>
          </div>
        </div>
      )
    },
    // FAQ Section with schema markup
    faqSection: ({ value }: any) => {
      if (!value?.faqs?.length) return null
      return (
        <div className="my-8">
          {value.title && (
            <h3 className="text-xl font-bold text-gray-900 mb-6">{value.title}</h3>
          )}
          <div className="space-y-4">
            {value.faqs.map((faq: any, i: number) => (
              <details key={i} className="group bg-gray-50 rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-900">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )
    },
    // Inline CTA
    inlineCta: ({ value }: any) => {
      const variant = value?.variant || 'default'
      const content = ctaVariants[variant] || ctaVariants.default
      const headline = value?.customHeadline || content.headline
      const description = value?.customDescription || content.description

      return (
        <div className="my-8 bg-gradient-to-r from-[#ff4500] to-[#ff6b3d] rounded-2xl p-8 text-center text-white">
          <h4 className="text-xl font-bold mb-2">{headline}</h4>
          <p className="text-white/90 mb-4">{description}</p>
          <a
            href="https://calendly.com/kirkco/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#ff4500] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      )
    },
    // Related Reading
    relatedReading: ({ value }: any) => {
      if (!value?.posts?.length) return null
      return (
        <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            {value.title || 'Related Reading'}
          </h4>
          <ul className="space-y-3">
            {value.posts.map((post: any, i: number) => (
              <li key={i}>
                <Link
                  href={`/blog/${post.slug?.current || ''}`}
                  className="text-[#ff4500] hover:underline font-medium"
                >
                  {post.title || 'Untitled Post'}
                </Link>
                {value.showExcerpt && post.excerpt && (
                  <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
      const target = value.blank || !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-[#ff4500] hover:underline"
        >
          {children}
        </a>
      )
    },
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#ff4500] pl-4 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
}

// Helper to extract FAQ data for schema markup
function extractFAQs(body: any[]): { question: string; answer: string }[] {
  if (!body) return []
  const faqs: { question: string; answer: string }[] = []

  body.forEach((block) => {
    if (block._type === 'faqSection' && block.faqs) {
      block.faqs.forEach((faq: any) => {
        if (faq.question && faq.answer) {
          faqs.push({ question: faq.question, answer: faq.answer })
        }
      })
    }
  })

  return faqs
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post: Post | null = await client.fetch(postQuery, { slug })

  if (!post) {
    notFound()
  }

  // Extract FAQs for schema markup
  const faqs = extractFAQs(post.body || [])
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    ...(post.author?.name && { author: { '@type': 'Person', name: post.author.name } }),
    publisher: {
      '@type': 'Organization',
      name: 'ReddiReach',
      url: 'https://reddireach.com',
    },
    ...(post.mainImage && {
      image: urlFor(post.mainImage).width(1200).height(630).url(),
    }),
  }

  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#ff4500] hover:text-[#cc3700] mb-6 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2 rounded"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          {post.category && (
            <span className="text-sm font-semibold text-[#ff4500] uppercase tracking-wider">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-500">
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {post.author?.name && (
              <>
                <span className="text-gray-300">|</span>
                <span>By {post.author.name}</span>
              </>
            )}
          </div>
          {post.hookStatement && (
            <p className="mt-4 text-lg text-gray-700 font-medium">
              {post.hookStatement}
            </p>
          )}
        </div>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {post.body && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ready to grow your brand with Reddit and AI?
          </h3>
          <p className="text-gray-600 mb-4">
            Let&apos;s discuss how we can help your business get recommended by AI.
          </p>
          <a
            href="https://calendly.com/kirkco/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff4500] hover:bg-[#cc3700] text-white px-6 py-3 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:ring-offset-2"
          >
            Let&apos;s Chat
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
