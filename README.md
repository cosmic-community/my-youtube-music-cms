# YouTube Music Connect

![App Preview](https://imgix.cosmicjs.com/b236dec0-3257-11f1-835f-016af547dd03-autopilot-photo-1611532736597-de2d4265fba3-1775548765820.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern YouTube Music Connect platform built with Next.js 16 and Cosmic CMS. Features a dark-mode-first design with vibrant accents, dynamic content rendering, and a fully responsive layout inspired by YouTube Music's sleek aesthetic.

## Features

- 🎵 **Dynamic Homepage** — Hero section with animated content blocks and featured pages
- 📄 **Dynamic Pages** — Individual page rendering with rich content and SEO metadata
- 🧱 **Reusable Content Blocks** — Hero, feature, CTA, and info blocks rendered by type
- 🧭 **Dynamic Navigation** — Header and footer navigation from Cosmic CMS
- ⚙️ **Site Settings** — Global branding, logo, colors, tagline, and social links
- 🌙 **Dark Mode Design** — YouTube Music-inspired dark UI with red accents
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- 🔍 **SEO Optimized** — Dynamic meta tags from Cosmic content model
- ⚡ **Server Components** — Fast, secure data fetching with Next.js 16

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69d4b907e2482a4bd54209bb&clone_repository=69d4ba2be2482a4bd5420a23)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a headless CMS API backend with pages, reusable content blocks, navigation menus, and site-wide settings. User instructions: A modern YouTube Music Connect"

### Code Generation Prompt

> "Build a Next.js application for a content management system called 'My YouTube Music CMS'. The content is managed in Cosmic CMS with the following object types: pages, content-blocks, navigation-menus, site-settings. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A modern YouTube Music Connect"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([Docs](https://www.cosmicjs.com/docs))
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript 5](https://www.typescriptlang.org/) — Type safety

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket configured

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd youtube-music-connect
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Pages
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: pages } = await cosmic.objects
  .find({ type: 'pages' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Site Settings
```typescript
const { object: settings } = await cosmic.objects
  .findOne({ type: 'site-settings', slug: 'site-settings' })
  .props(['title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 content types from your Cosmic bucket:

| Object Type | Description |
|---|---|
| **Pages** | Dynamic pages with hero images, content blocks, and SEO |
| **Content Blocks** | Reusable blocks (hero, feature, CTA, info) |
| **Navigation Menus** | Header and footer navigation menus |
| **Site Settings** | Global branding, colors, social links |

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Import the project on [Netlify](https://netlify.com)
3. Add environment variables in site settings
4. Deploy!

<!-- README_END -->