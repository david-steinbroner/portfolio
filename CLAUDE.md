# Project Context

## Workflow

This project uses Linear for ticket tracking and auto-deploys via GitHub.

### Commit Convention

**Always include the Linear ticket ID in commit messages.**

Format: `<description> - <action> SKU-XXX`

Actions:
- `fixes SKU-XXX` → Closes the ticket automatically
- `closes SKU-XXX` → Closes the ticket automatically
- `part of SKU-XXX` → Links without closing (for partial work)

Examples:
```
Add dark mode toggle - fixes SKU-42
Update API error handling - part of SKU-15
Refactor auth flow - closes SKU-78
```

### Before Committing

1. Confirm the ticket ID with the user if not provided
2. Use `fixes` or `closes` only when the work fully completes the ticket
3. Use `part of` for incremental progress

### Deployment

- Push to `main` triggers auto-deployment
- Cloudflare Pages: Static sites, SPAs
- Render: Full-stack apps with backends

### Branch Naming (Optional)

If creating branches: `david-steinbroner/sku-XXX-description`
