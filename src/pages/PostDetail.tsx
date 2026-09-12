import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="post-detail">
        <p>Post not found.</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    )
  }

  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="post-detail">
      <Link to="/" className="back-link">← Back to Home</Link>
      <div className="post-detail-header">
        <div className="post-detail-date">{dateStr}</div>
        <h1 className="post-detail-title">{post.title}</h1>
      </div>
      {post.images[0] && (
        <img className="post-detail-image" src={post.images[0]} alt={post.title} />
      )}
      <div className="post-detail-content">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="share-section">
        <span>Share this post</span>
        <a href="#" onClick={(e) => e.preventDefault()}>Share</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Post a Comment</a>
      </div>
    </article>
  )
}
