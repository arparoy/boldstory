import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
}

export default function Header({ searchOpen, setSearchOpen }: HeaderProps) {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          STORY FLEX <span>🍑</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/" className={location.pathname === '/pages' ? 'active' : ''}>Pages</Link>
          <Link to="/" className={location.pathname === '/picture' ? 'active' : ''}>Picture</Link>
          <Link to="/" className={location.pathname === '/videos' ? 'active' : ''}>Videos</Link>
          <Link to="/" className={location.pathname === '/comic' ? 'active' : ''}>Comic</Link>
          <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
            🔍 Search
          </button>
        </nav>
      </div>
    </header>
  )
}
