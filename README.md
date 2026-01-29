# ReddiReach

A modern landing page for ReddiReach - a Reddit marketing and AI visibility optimization service.

## Quick Start for Non-Technical Users

**Don't worry if you're new to coding!** This project has a built-in AI assistant (Claude Code) that will help you every step of the way.

### First Time Setup

1. **Install Claude Code** (your AI coding assistant):
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

2. **Open Terminal**, navigate to this project:
   ```bash
   cd ~/Desktop/reddireach
   ```

3. **Start Claude Code**:
   ```bash
   claude
   ```

4. **Ask for help!** Type any of these:
   - `/help` - Get general guidance on using Claude Code
   - `/help-local` - Learn how to run the site locally
   - `/help-git` - Learn Git basics (saving & sharing code)
   - `/help-vercel` - Learn about deployments
   - `/help-site` - Learn how to make changes to the site

### Running the Site Locally

```bash
npm install    # Install dependencies (first time only)
npm run dev    # Start the development server
```

Then open http://localhost:3000 in your browser.

### Making Changes

Just tell Claude what you want! Examples:
- "Change the headline text on the homepage"
- "Update the testimonial from Sarah Chen"
- "Change the orange color to blue"
- "Add a new section about pricing"

Claude will make the changes for you and explain what it did.

---

## Project Structure

```
reddireach/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage
│   │   ├── layout.tsx        # App layout & metadata
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Hero.tsx          # Hero section with animation
│       ├── HeroStoryAnimation.tsx  # Reddit/AI chat animation
│       ├── FounderQuotes.tsx # Founder testimonials carousel
│       ├── Features.tsx      # "Who We Are" section
│       ├── HowItWorks.tsx    # "Our Approach" section
│       ├── Testimonials.tsx  # Customer testimonials
│       ├── FAQ.tsx           # FAQ accordion
│       ├── CTA.tsx           # Call-to-action section
│       └── Footer.tsx        # Footer
├── public/                   # Images, logos, avatars
└── .claude/                  # Claude Code configuration & skills
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first styling
- **Vercel** - Hosting & deployment (auto-deploys on push to main)

---

## For Developers

### Development Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Create production build
npm run start    # Run production build locally
npm run lint     # Check for code issues
```

### Git Workflow

- `main` branch - Production (auto-deploys to Vercel)
- Feature branches - For development work

```bash
git checkout -b my-feature   # Create new branch
git add .                    # Stage changes
git commit -m "Description"  # Commit changes
git push                     # Push to GitHub
```

Then create a Pull Request on GitHub to merge into main.

### Deployment

Every push to `main` automatically deploys to production via Vercel. No manual deployment needed!

---

## Need Help?

1. **In Claude Code**: Type `/help` for guidance
2. **GitHub Issues**: Report bugs or request features
3. **Vercel Dashboard**: Check deployment status

Built with Claude Code
