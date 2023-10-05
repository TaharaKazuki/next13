import ctl from '@netlify/classnames-template-literals'
import Image from 'next/image'
import Link from 'next/link'

import type { Layout, Post } from '@/types/collection'

import PostContent from './post-content'

type PostCardProps = {
  layout?: Layout
  post: Post
  reverse?: boolean
}

const PostCard = ({
  layout = 'horizontal',
  post,
  reverse = false,
}: PostCardProps) => {
  return (
    <Link
      className={ctl(
        `@container ${
          layout === `horizontal`
            ? `grid grid-cols-1 items-center gap-10 md:grid-cols-2`
            : `space-y-10`
        }`,
      )}
      href={`/post/${post.slug}`}
    >
      {/* {post.title} */}
      <Image
        className={ctl(
          `max-h-[300px] w-full rounded-md object-cover object-center ${
            reverse ? 'md:order-last' : ''
          }`,
        )}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      <PostContent post={post} />
    </Link>
  )
}

export default PostCard
