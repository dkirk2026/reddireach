import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface SanityImageProps {
  image: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function SanityImage({
  image,
  width,
  height,
  className,
  priority = false
}: SanityImageProps) {
  if (!image?.asset?._ref) return null

  return (
    <Image
      src={urlFor(image).width(width).height(height).url()}
      alt={image.alt || ''}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
