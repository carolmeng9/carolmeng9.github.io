# Carol Meng — Personal Website

React site built with [Vite](https://vitejs.dev/), deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

Or deploy manually:

```bash
npm run deploy
```

(Ensure GitHub Pages is set to deploy from the `gh-pages` branch if using the manual script.)

## Adding content

### New project

Edit `src/data/projects.js` and add an object:

```js
{
  id: 'my-project',           // unique slug
  title: 'Project Title',
  description: 'Short description (under ~30 words).',
  date: 'Jan 2025 – Apr 2025',
  image: '/images/my-project.jpg',  // put image in public/images/
  href: 'https://github.com/...',   // optional link
},
```

### New blog post

Create a file in `src/content/posts/`, e.g. `my-post.md`:

```md
---
title: My Post Title
date: 2026-03-01
excerpt: Optional short summary for the blog index.
---

Your post content in **Markdown** goes here.
```

The post appears on `/blog` automatically after you build and deploy.

### Site info & links

Edit `src/data/site.js` for name, bio, social links, and image paths.

### Images

Place assets in `public/images/` (e.g. `public/images/photo.jpg` → use `/images/photo.jpg` in code).

## Project structure

```
src/
  components/     Reusable UI (Header, Hero, ProjectCard, …)
  content/posts/  Blog posts as Markdown
  data/           site.js, projects.js, posts loader
  pages/          Home, Blog, BlogPost
public/images/    Static assets
```
