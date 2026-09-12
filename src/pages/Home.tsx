import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>STORY FLEX</h1>
        <p>A collection of Bengali stories — explore the latest posts below.</p>
      </section>
      <div className="container">
        <div className="section-heading">
          <h2>Latest Posts</h2>
          <div className="line"></div>
        </div>
        <div className="post-grid">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} large={i === 0} />
          ))}
        </div>
      </div>
    </>
  )
}
