import PaddingContainer from '@/app/components/layout/padding-container'
import PostList from '@/app/components/post/post-list'
import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/DUMMY_DATA'

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    }
  })
}

type CategoryPageProps = {
  params: {
    category: string
  }
}

const Page = ({ params }: CategoryPageProps) => {
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category,
  )
  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  )
}

export default Page
