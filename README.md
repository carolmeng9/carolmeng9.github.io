# Carol Meng — Personal Website

React site built with [Vite](https://vitejs.dev/), deployed to GitHub Pages.

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.

Or deploy manually:

```bash
npm run deploy
```

(Ensure GitHub Pages is set to deploy from the `gh-pages` branch if using the manual script.)

## Adding content

### New experience entry

Edit `src/data/experiences.js` and add an object to the array:

```js
{
  id: 'unique-id',
  role: 'Your Role',
  organization: 'Organization Name',
  date: 'Month Year – Month Year',
  bullets: [
    'Description of what you did',
    'Another responsibility or achievement',
  ],
},
```

### New project

Edit `src/data/projects.js` and add an object:

```js
{
  id: 'my-project',           // unique slug
  title: 'Project Title',
  description: 'Short description (under ~30 words).',
  date: 'Jan 2025 – Apr 2025',
  image: '/images/my-project.jpg',  // put image in public/images/
  href: 'https://github.com/...',   // optional link (use null if none)
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

Post content in **Markdown** here
```

The post appears on `/blog` automatically after build and deploy.

### Update education, skills, or site info

- **Education**: Edit `src/data/education.js`
- **Skills**: Edit `src/data/skills.js`
- **Site info & links**: Edit `src/data/site.js` for name, bio, social links, and image paths

### Images

Place assets in `public/images/` (e.g. `public/images/photo.jpg` → use `/images/photo.jpg` in code).

## Project structure

```
src/
  components/     Reusable UI (Header, Hero, ProjectCard, ExperienceList, Education, Skills, …)
  content/posts/  Blog posts as Markdown
  data/           site.js, projects.js, experiences.js, education.js, skills.js, posts loader
  pages/          Home, Blog, BlogPost
public/images/    Static assets
```
