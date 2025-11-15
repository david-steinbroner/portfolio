# Deployment Guide for Cloudflare Pages

## Quick Start

Your portfolio is ready to deploy to Cloudflare Pages! Follow these steps:

### 1. Push to GitHub

First, create a GitHub repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio setup"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Pages** → **Connect to Git**
4. Select your GitHub repository
5. Configure the build settings:

**Build Configuration:**
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Environment variables**: None required

**Advanced Settings:**
- **Node version**: 20 (specified in .node-version)
- **Root directory**: / (leave empty)

6. Click **Save and Deploy**

### 3. First Deployment

Cloudflare Pages will:
1. Clone your repository
2. Install dependencies
3. Build your Next.js app
4. Deploy to a global CDN

This typically takes 2-3 minutes.

### 4. Get Your URL

Once deployed, you'll get a URL like:
- `https://portfolio-abc.pages.dev` (production)

You can also:
- Add a custom domain in the Cloudflare dashboard
- View deployment logs and analytics
- Set up preview deployments for branches

## Continuous Deployment

After the initial setup, **every push to your main branch** will:
1. Trigger a new build automatically
2. Deploy the new version
3. Make it live in 2-3 minutes

## Updating Content

To add a new project or feature:

1. Create a markdown file in `content/projects/` or `content/work-experience/fold-features/`
2. Add an image to `public/images/`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new project: XYZ"
   git push
   ```
4. Wait 2-3 minutes for automatic deployment

## Troubleshooting

### Build Failures

If your build fails:
1. Check the build logs in Cloudflare dashboard
2. Test locally first: `npm run build`
3. Ensure all dependencies are in package.json

### Missing Images

- Images must be in `public/images/` directory
- Reference them as `/images/your-image.png` in markdown frontmatter
- Commit and push images to git

### Preview Deployments

Cloudflare automatically creates preview URLs for:
- Pull requests
- Other branches (if configured)

Access them in the Cloudflare dashboard under your project's deployments.

## Custom Domain (Optional)

To use your own domain:

1. In Cloudflare dashboard, go to your Pages project
2. Click **Custom domains**
3. Add your domain (e.g., davidsteinbroner.com)
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (~15 minutes)

## Performance Tips

Your site is already optimized with:
- Static generation for fast loading
- Automatic image optimization
- Cloudflare's global CDN
- Minimal JavaScript bundle

Typical performance:
- **Load time**: < 1 second
- **Lighthouse score**: 95-100
- **SEO score**: 100

## Monitoring

Monitor your site through:
- **Cloudflare Analytics**: Traffic, performance, security
- **Web Analytics**: Detailed visitor insights (free)
- **Build logs**: Deployment history and errors

## Need Help?

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- Check build logs for specific error messages
