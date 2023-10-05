import type { Layout, Post } from '@/types/collection'

import PostCard from './post-card'

type PostListProps = {
  layout?: Layout
  posts: Post[]
}

const PostList = ({ layout = 'vertical', posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList
