import { groq } from 'next-sanity'

// Get all published posts for the blog listing page
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "category": categories[0]->title
  }
`

// Get a single post by slug with all SEO fields and expanded related posts
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    seoTitle,
    slug,
    metaDescription,
    hookStatement,
    promiseStatement,
    canonicalUrl,
    structuredData,
    excerpt,
    mainImage,
    body[] {
      ...,
      _type == "relatedReading" => {
        ...,
        posts[]-> {
          _id,
          title,
          slug,
          excerpt
        }
      }
    },
    publishedAt,
    "category": categories[0]->title,
    "author": author-> {
      name,
      image
    }
  }
`

// Get all post slugs for static generation
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`
