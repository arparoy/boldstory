import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import ReadingProgress from '../components/ReadingProgress'

export default function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="post-detail">
        <Link to="/" className="back-link">← Back to Home</Link>
        <p>Post not found.</p>
      </div>
    )
  }

  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const wordCount = post.content.join(' ').split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  const related = posts
    .filter(p => p.id !== post.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <>
      <ReadingProgress />
      <article className="post-detail">
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="post-detail-header">
          <div className="post-detail-date">{dateStr}</div>
          <h1 className="post-detail-title">{post.title}</h1>
          <div className="post-detail-meta">
            <span>📝 {post.content.length} paragraphs</span>
            <span>⏱ {readTime} min read</span>
            <span>📖 Story #{post.id}</span>
          </div>
        </div>
        {post.images[0] && (
          <img className="post-detail-image" src={post.images[0]} alt={post.title} />
        )}
        <div className="post-detail-content">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {post.images.slice(1).map((img, i) => (
            <img key={`img-${i}`} src={img} alt={`${post.title} - image ${i + 2}`} />
          ))}
        </div>
        <div className="share-section">
          <span className="label">Share this story</span>
          <button className="share-btn" onClick={() => { navigator.clipboard?.writeText(window.location.href) }}>🔗 Copy Link</button>
          <button className="share-btn" onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank') }}>f Share</button>
          <button className="share-btn" onClick={() => { window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank') }}>𝕏 Tweet</button>
        </div>

        {/* Related Posts */}
        <div className="related-posts">
          <h3>More Stories</h3>
          <div className="related-grid">
            {related.map((rp) => (
              <Link key={rp.id} to={`/post/${rp.id}`} className="related-card">
                {rp.images[0] && <img src={rp.images[0]} alt={rp.title} />}
                <div className="related-card-body">
                  <h4>{rp.title}</h4>
                  <span>{new Date(rp.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
