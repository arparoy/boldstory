export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">📖</span>
            <span className="logo-text">
              <strong>Story Flex</strong>
              <small>Bengali Story Library</small>
            </span>
          </div>
          <p>A premium collection of Bengali stories. Immerse yourself in beautifully crafted narratives — read comfortably, anytime, anywhere.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/?cat=latest">Latest Stories</a>
          <a href="/?cat=popular">Popular</a>
          <a href="/?cat=short">Short Stories</a>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Story Flex. All rights reserved.</span>
        <div className="social">
          <a href="/" onClick={(e) => e.preventDefault()}>f</a>
          <a href="/" onClick={(e) => e.preventDefault()}>𝕏</a>
          <a href="/" onClick={(e) => e.preventDefault()}>in</a>
        </div>
      </div>
    </footer>
  )
}
