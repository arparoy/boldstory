import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Collections from './pages/Collections'
import SearchOverlay from './components/SearchOverlay'
import { useState, useEffect } from 'react'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="app">
      <Header
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:source" element={<Collections />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
