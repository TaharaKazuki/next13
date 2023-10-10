import { notFound } from 'next/navigation'

import PaddingContainer from '@/app/components/layout/padding-container'
import { DUMMY_POSTS } from '@/DUMMY_DATA'

import CTACard from '../../components/elements/cta-cord'
import SocialLink from '../../components/elements/social-link'
import PostBody from '../../components/post/post-body'
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
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
        {/* Post body and Social Share */}
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex items-center gap-5 md:flex-col">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer/php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="x"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        {/* CTA Card */}
        <CTACard />
      </div>
    </PaddingContainer>
  )
}

export default Page
