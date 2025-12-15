# David Steinbroner - Portfolio

Personal portfolio site showcasing product management work and technical projects.

Live at [davidsteinbroner.com](https://davidsteinbroner.com)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Typography**: Geist Sans + Geist Mono
- **Content**: Markdown with gray-matter
- **Deployment**: Cloudflare Pages

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx                    # Homepage
│   └── case-studies/[slug]/        # Case study detail pages
├── components/
│   └── PortfolioClient.tsx         # Main portfolio component
├── content/
│   └── case-studies/               # Markdown case study files
├── lib/
│   └── markdown.ts                 # Content parsing utilities
└── public/
    └── images/                     # Static assets
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Content

### Case Studies

Create a new markdown file in `content/case-studies/`:

```markdown
---
title: "Case Study Title"
date: "2025-01"
company: "Company Name"
role: "Your Role"
---

Content goes here...
```

## Deployment

Cloudflare Pages auto-deploys on push to `main`. Build typically completes in 2-3 minutes.

## License

All rights reserved © 2025 David Steinbroner
