import { posts, sources } from '../data/posts'
import PostCard from '../components/PostCard'
import { Link, useParams } from 'react-router-dom'
import { useState, useMemo } from 'react'

export default function Collections() {
  const { source } = useParams<{ source: string }>()
  const [activeSource, setActiveSource] = useState(source || 'All')

  const displaySource = source || activeSource

  const filteredPosts = useMemo(() => {
    if (displaySource === 'All' || !displaySource) return posts
    return posts.filter(p => p.source === displaySource)
  }, [displaySource])

  const sourceCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of posts) {
      counts[p.source] = (counts[p.source] || 0) + 1
    }
    return counts
  }, [])

  return (
    <>
      <section className="hero" style={{ padding: '50px 24px 36px' }}>
        <div className="hero-content">
          <div className="hero-badge">📚 Collections</div>
          <h1>Story <span>Collections</span></h1>
          <p>Browse stories by their source collection. Each collection brings together stories from a unique creator or series.</p>
        </div>
      </section>

      <div className="container">
        {/* Source filter chips */}
        <div className="category-bar">
          <Link
            to="/collections"
            className={`category-chip ${(!source || source === 'All') ? 'active' : ''}`}
            onClick={() => setActiveSource('All')}
          >
            All ({posts.length})
          </Link>
          {sources.map((src) => (
            <Link
              key={src}
              to={`/collections/${encodeURIComponent(src)}`}
              className={`category-chip ${source === src ? 'active' : ''}`}
              onClick={() => setActiveSource(src)}
            >
              {src} ({sourceCounts[src] || 0})
            </Link>
          ))}
        </div>

        <div className="section-heading">
          <h2>{displaySource === 'All' ? 'All Collections' : displaySource}</h2>
          <div className="line"></div>
          <span className="count">{filteredPosts.length} stories</span>
        </div>

        <div className="post-grid">
          {filteredPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <div className="icon">📚</div>
            <p>No stories in this collection.</p>
          </div>
        )}
      </div>
    </>
  )
}
