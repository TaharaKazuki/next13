import type { Post } from '@/types/collection'

export const START_INDEX = 1
export const END_INDEX = 2

export const getSubsetOfPosts = (
  posts: Post[],
  startIndex: number,
  endIndex: number,
) => {
  return posts.slice(startIndex, endIndex + 1)
}
