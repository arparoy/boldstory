import postData from './posts.json'

export interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  content: string[]
  images: string[]
  source: string
}

export const posts: BlogPost[] = postData as BlogPost[]

export const sources = [...new Set(posts.map(p => p.source))].sort()
