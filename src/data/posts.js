import matter from 'gray-matter';

const postModules = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function parsePost(slug, raw) {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? '',
    content: content.trim(),
  };
}

export function getAllPosts() {
  return Object.entries(postModules)
    .map(([path, raw]) => {
      const slug = path.replace('../content/posts/', '').replace('.md', '');
      return parsePost(slug, raw);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const path = `../content/posts/${slug}.md`;
  const raw = postModules[path];
  if (!raw) return null;
  return parsePost(slug, raw);
}
