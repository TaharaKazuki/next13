import ctl from '@netlify/classnames-template-literals'
import { ArrowRight } from 'lucide-react'

import { getReadingTime, getRelativeDate } from '@/lib/helpers'
import type { Post } from '@/types/collection'

type PostContentProps = {
  isPostPage?: boolean
  post: Post
}
const otherDescStyle = ctl(`h-2 w-2 rounded-full bg-neutral-200`)

const PostContent = ({ isPostPage = false, post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      <div
        className={ctl(
          `flex 
           flex-wrap
           items-center 
           gap-2 
           text-neutral-400
          ${isPostPage ? 'text-sm' : 'text-xs @md:text-sm'}`,
        )}
      >
        <div
          className={ctl(
            `font-medium 
            ${
              post.category.title === 'Cities'
                ? 'text-emerald-500'
                : 'text-indigo-500'
            }`,
          )}
        >
          {post.category.title}
        </div>
        <div className={otherDescStyle} />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className={otherDescStyle} />
        <div>{getReadingTime(post.body)}</div>
        <div className={otherDescStyle} />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h2
        className={ctl(
          `${
            isPostPage
              ? 'text-2xl font-bold md:text-3xl lg:text-4xl'
              : 'text-xl font-medium @md:text-2xl @lg:text-3xl'
          } `,
        )}
      >
        {post.title}
      </h2>
      {/* Description */}
      <p className={ctl(`text-base leading-snug text-neutral-600 @lg:text-lg`)}>
        {post.description}
      </p>
      {/* Read More */}
      {!isPostPage && (
        <div className={ctl(`flex items-center gap-2 pt-3`)}>
          Read More <ArrowRight size="14" />
        </div>
      )}
    </div>
  )
}

export default PostContent
