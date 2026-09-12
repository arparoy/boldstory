import { posts } from '../data/posts'
import PostCard from '../components/PostCard'
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Latest', 'Popular', 'Short Stories', 'Series']

export default function Home() {
  const [activeCat, setActiveCat] = useState('All')

  const featured = posts[0]
  const featuredDate = new Date(featured.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })

  const displayedPosts = useMemo(() => {
    if (activeCat === 'All') return posts.slice(1)
    if (activeCat === 'Latest') return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(1)
    if (activeCat === 'Popular') return [...posts].sort((a, b) => b.content.join('').length - a.content.join('').length).slice(0, 20)
    if (activeCat === 'Short Stories') return posts.filter(p => p.content.join('').length < 10000).slice(0, 24)
    if (activeCat === 'Series') return posts.filter(p => p.content.join('').length > 30000).slice(0, 24)
    return posts.slice(1)
  }, [activeCat])

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">📖 {posts.length} Stories Available</div>
          <h1>Story <span>Flex</span></h1>
          <p>A premium library of Bengali stories. Immerse yourself in beautifully crafted narratives — read comfortably, anytime.</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{posts.length}</strong>
              <span>Stories</span>
            </div>
            <div className="hero-stat">
              <strong>7</strong>
              <span>Authors</span>
            </div>
            <div className="hero-stat">
              <strong>∞</strong>
              <span>Reading Hours</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Featured Post */}
        <div className="section-heading" style={{ marginTop: '32px' }}>
          <h2>Featured Story</h2>
          <div className="line"></div>
        </div>
        <Link to={`/post/${featured.id}`} className="featured-post">
          <img className="featured-post-img" src={featured.images[0]} alt={featured.title} />
          <div className="featured-post-body">
            <span className="featured-badge">★ Featured</span>
            <h2>{featured.title}</h2>
            <p className="excerpt">{featured.excerpt}</p>
            <div className="meta">
              <span>📅 {featuredDate}</span>
              <span>📝 {featured.content.length} paragraphs</span>
            </div>
            <span className="read-more">Read Story →</span>
          </div>
        </Link>

        {/* Category Filter */}
        <div className="category-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-chip ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="section-heading">
          <h2>{activeCat === 'All' ? 'All Stories' : activeCat}</h2>
          <div className="line"></div>
          <span className="count">{displayedPosts.length} stories</span>
        </div>
        <div className="post-grid">
          {displayedPosts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {displayedPosts.length === 0 && (
          <div className="no-results">
            <div className="icon">📚</div>
            <p>No stories in this category yet.</p>
          </div>
        )}
      </div>
    </>
  )
}
