import Image from 'next/image'

import type { Post } from '@/types/collection'

import PostContent from './post-content'

type PostHeroProps = {
  post: Post
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage={true} post={post} />
      <Image
        className="mt-6 h-[300px] rounded-md object-cover object-center md:h-[500px]"
        src={post.image}
        width={1280}
        height={500}
        alt={post.title}
      />
    </div>
  )
}

export default PostHero
