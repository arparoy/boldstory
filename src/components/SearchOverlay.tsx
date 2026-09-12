import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'

interface SearchOverlayProps {
  onClose: () => void
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  const results = query.trim()
    ? posts.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.content.some(c => c.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 20)
    : []

  const handleResultClick = (id: number) => {
    onClose()
    navigate(`/post/${id}`)
  }

  return (
    <div className="search-overlay">
      <button className="search-close" onClick={onClose}>✕</button>
      <div className="search-bar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search stories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-results">
        {query.trim() && results.length === 0 && (
          <div className="search-empty">No stories found for "{query}"</div>
        )}
        {results.map((post) => (
          <div key={post.id} className="search-result-item" onClick={() => handleResultClick(post.id)}>
            {post.images[0] && <img src={post.images[0]} alt={post.title} />}
            <div>
              <h4>{post.title}</h4>
              <p>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
