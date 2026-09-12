import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/posts'

interface PostCardProps {
  post: BlogPost
  large?: boolean
}

export default function PostCard({ post, large = false }: PostCardProps) {
  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link to={`/post/${post.id}`} className={`post-card ${large ? 'large' : ''}`}>
      {post.images[0] && (
        <img
          className="post-card-img"
          src={post.images[0]}
          alt={post.title}
          loading="lazy"
        />
      )}
      <div className="post-card-body">
        <div className="post-card-date">{dateStr}</div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-meta">
          <a href="#" onClick={(e) => e.preventDefault()}>Share</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Post a Comment</a>
        </div>
      </div>
    </Link>
  )
}
