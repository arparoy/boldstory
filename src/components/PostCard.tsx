import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/posts'

interface PostCardProps {
  post: BlogPost
  index?: number
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <div className="post-card-img-wrap">
        {post.images[0] ? (
          <img className="post-card-img" src={post.images[0]} alt={post.title} loading="lazy" />
        ) : (
          <div className="post-card-img-placeholder">📖</div>
        )}
      </div>
      <div className="post-card-body">
        <div className="post-card-date">{dateStr}</div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-footer">
          <span className="post-card-read">Read More →</span>
          <span className="post-card-num">{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </Link>
  )
}
