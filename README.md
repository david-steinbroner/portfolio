# David Steinbroner - Portfolio

A modern portfolio website showcasing product management work and full-stack development projects.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Deployment**: Cloudflare Pages

## Features

- 🚀 Fast, static-first rendering
- 📝 Markdown-based content management
- 🎨 Clean, professional design
- 📱 Fully responsive
- ⚡ Optimized for performance
- 🔍 SEO-friendly

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── work/              # Work experience section
│   └── projects/          # Projects section
├── components/            # React components
├── content/               # Markdown content
│   ├── projects/         # Solo project write-ups
│   └── work-experience/  # Fold features
├── lib/                  # Utilities
│   └── markdown.ts       # Content parsing
└── public/               # Static assets
    └── images/           # Project images
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Adding New Content

### Add a New Project

1. Create a new markdown file in `content/projects/`:
   ```bash
   touch content/projects/my-new-project.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My New Project"
   status: "Live"
   tags: ["React", "TypeScript"]
   date: "2025-01"
   link: "https://example.com"
   github: "https://github.com/..."
   image: "/images/my-project.png"
   category: "project"
   description: "A brief description"
   impact:
     - "Key metric 1"
     - "Key metric 2"
   ---

   ## Overview
   Project details here...
   ```

3. Add an image to `public/images/`
4. Commit and push - Cloudflare Pages will auto-deploy!

### Add a New Work Feature

Same process, but create the file in `content/work-experience/fold-features/`

## Deployment to Cloudflare Pages

### First-Time Setup

1. Push your code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to Workers & Pages → Create Application → Pages → Connect to Git
4. Select your repository
5. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Node version**: 20
6. Click "Save and Deploy"

### Continuous Deployment

After initial setup, every push to your main branch automatically deploys to Cloudflare Pages.

## Updating Content

Simply edit markdown files and push to GitHub. The site will rebuild automatically in 2-3 minutes.

## Environment Variables

No environment variables are required for basic functionality.

## License

All rights reserved © 2025 David Steinbroner
