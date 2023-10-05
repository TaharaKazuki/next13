import CTACard from '@/app/components/elements/cta-cord'
import PaddingContainer from '@/app/components/layout/padding-container'
import PostCard from '@/app/components/post/post-card'
import PostList from '@/app/components/post/post-list'
import { DUMMY_POSTS } from '@/DUMMY_DATA'

import {
  END_INDEX,
  getSubsetOfPosts,
  START_INDEX,
} from './helpers/getSubsetOfPosts'

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={getSubsetOfPosts(DUMMY_POSTS, START_INDEX, END_INDEX)}
        />
        <CTACard />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostList posts={getSubsetOfPosts(DUMMY_POSTS, 3, 6)} />
      </main>
    </PaddingContainer>
  )
}
