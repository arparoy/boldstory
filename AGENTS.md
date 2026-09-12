# Story Flex (boldstory)

## Overview
A React + Vite + TypeScript blog website built from content extracted from `flexstoryblog.blogspot.com`.
Contains 27 Bengali blog posts with images, titles, dates, and full text content.

## Tech Stack
- React 18 + TypeScript + Vite 5
- React Router DOM for routing
- No backend — all post data is in `src/data/posts.json` (static JSON)

## Development
```bash
docker compose -f docker-compose.base44.yml up -d
```
The app runs on port 3000 with Vite dev server (hot reload enabled).

## Project Structure
- `src/data/posts.json` — all blog post data (27 posts)
- `src/data/posts.ts` — TypeScript interface + re-export
- `src/components/Header.tsx` — sticky header with nav
- `src/components/Footer.tsx` — footer
- `src/components/PostCard.tsx` — post card for grid
- `src/pages/Home.tsx` — homepage with post grid
- `src/pages/PostDetail.tsx` — individual post page
- `src/App.tsx` — root with routes
- `src/index.css` — all styles

## Routes
- `/` — Home (post grid)
- `/post/:id` — Individual post detail

## Notes
- Post content is in Bengali (uses Noto Sans Bengali font)
- Images are hosted on blogger.googleusercontent.com (loaded from original blog)
- No external services or credentials required
