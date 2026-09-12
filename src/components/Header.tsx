import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface HeaderProps {
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
  theme: string
  toggleTheme: () => void
}

export default function Header({ searchOpen, setSearchOpen, theme, toggleTheme }: HeaderProps) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">📖</span>
          <span className="logo-text">
            <strong>Story Flex</strong>
            <small>Bengali Story Library</small>
          </span>
        </Link>

        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/?cat=latest" className="">Latest</Link>
          <Link to="/?cat=popular" className="">Popular</Link>
          <Link to="/?cat=short" className="">Short Stories</Link>
          <Link to="/?cat=series" className="">Series</Link>
        </nav>

        <div className="header-actions">
          <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <span>Search</span>
          </button>
          <button className="icon-btn theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
