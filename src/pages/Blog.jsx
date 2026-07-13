import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/posts';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="wrap">
      <h2 className="page-title">Blog</h2>
      {posts.length === 0 ? (
        <p className="blog-placeholder">No posts yet. Work in progress.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="post-date">{formatDate(post.date)}</p>
              {post.excerpt && <p>{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
