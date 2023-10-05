import { notFound } from 'next/navigation'

import PaddingContainer from '@/app/components/layout/padding-container'
import { DUMMY_POSTS } from '@/DUMMY_DATA'

import SocialLink from '../../components/elements/social-link'
import PostHero from '../../components/post/post-hero'

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

type PostPageProps = {
  params: {
    slug: string
  }
}

const Page = ({ params }: PostPageProps) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="mt-10 flex gap-10">
        <div className="relative">
          <div className="sticky top-20">
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer/php?u=${
                'http://localhost:3000' + `/post/${post.slug}`
              }`}
            />
          </div>
        </div>
        <div className="h-[1200px] w-full bg-slate-200">Post Body</div>
      </div>
    </PaddingContainer>
  )
}

export default Page
