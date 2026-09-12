import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import { useState } from 'react'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="app">
      <Header searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
