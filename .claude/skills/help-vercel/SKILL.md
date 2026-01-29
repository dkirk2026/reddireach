---
name: help-vercel
description: Help with Vercel deployments (publishing changes, live site, production builds). Use when user asks about deploying, publishing, the live site, Vercel, or making changes go live.
---

# Vercel Deployments Explained

Help the user understand how their changes go from code to live website.

## What is Vercel?

- **Vercel hosts your website** - it's where your live site lives
- Think of it like a web server that automatically updates when you push code
- It's made by the same people who make Next.js (the framework this site uses)

## How Deployment Works:

### Automatic Deployments
This project is set up for **automatic deployment**:

1. You push code to GitHub (specifically the `main` branch)
2. Vercel automatically detects the change
3. Vercel builds and deploys the new version
4. Your live site updates! (usually takes 1-2 minutes)

**You don't need to do anything special** - just push to main!

### The Workflow:
```
Your Computer → GitHub → Vercel → Live Website
    (code)      (storage)  (builds)   (users see)
```

## Key Things to Know:

### Preview Deployments
- When you push to **any branch** (not just main), Vercel creates a preview
- This gives you a unique URL to test before going live
- Example: `your-branch-name-abc123.vercel.app`

### Production Deployments
- Only pushes to the `main` branch update the live site
- This is why we use branches for changes - merge to main when ready

### Build Errors
- If something is wrong with your code, Vercel won't deploy
- You'll see an error in the Vercel dashboard
- Common fix: run `npm run build` locally to see the error

## Checking Deployment Status:

1. **Vercel Dashboard**: Go to https://vercel.com and log in
2. **GitHub**: Check the commit for a green checkmark (success) or red X (failed)
3. **Ask Claude**: "What's the deployment status?"

## Common Questions:

**"How long until my changes are live?"**
- Usually 1-2 minutes after pushing to main

**"My changes aren't showing up!"**
- Make sure you pushed to `main` branch
- Check Vercel dashboard for build errors
- Try hard-refreshing your browser: Cmd+Shift+R

**"I see an error on Vercel"**
- Run `npm run build` locally to see the same error
- Ask Claude to help fix it!

**"Can I undo a deployment?"**
- Yes! In Vercel dashboard, you can "rollback" to a previous version

## The Safe Workflow:

1. Create a branch for your changes
2. Make and test changes locally
3. Push to your branch (creates preview deployment)
4. Test the preview URL
5. Merge to main when ready (creates production deployment)

## Offer to:
- Check if their build passes: `npm run build`
- Help them understand any build errors
- Explain the deployment process for their specific change
