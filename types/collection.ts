export type Post = {
  id: string
  title: string
  author: Author
  body: string
  category: Category
  date_created: string
  date_updated: string
  description: string
  image: string
  slug: string
}

export type Category = {
  id: string
  title: string
  description?: string
  slug?: string
}

export type Author = {
  id: string
  first_name: string
  last_name: string
}

export type Layout = 'vertical' | 'horizontal'
