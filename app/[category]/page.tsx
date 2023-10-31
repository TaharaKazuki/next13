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
  const category = DUMMY_CATEGORIES.find(
    (category) => category.slug === params.category,
  )
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLocaleLowerCase() === params.category,
  )
  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostList posts={posts} />
    </PaddingContainer>
  )
}

export default Page
