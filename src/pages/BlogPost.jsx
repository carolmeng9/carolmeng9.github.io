import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="wrap">
        <h2 className="page-title">Post not found</h2>
        <p>
          <Link to="/blog">← Back to blog</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="wrap">
      <article>
        <header className="post-header">
          <h2 className="page-title">{post.title}</h2>
          <p className="post-date">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>
        <div className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <p style={{ marginTop: '2rem' }}>
          <Link to="/blog">← Back to blog</Link>
        </p>
      </article>
    </div>
  );
}
