# ReddiReach - Project Context for Claude

## Project Overview
ReddiReach is a landing page for a Reddit marketing and AI visibility optimization service. The site showcases how Reddit presence can improve visibility in AI search results (ChatGPT, Perplexity, etc.).

## Target User
This project is maintained by **non-technical users**. When helping:
- Explain concepts simply, avoid jargon
- Offer to make changes directly rather than just explaining
- Be patient and encouraging
- Proactively suggest the `/help` commands when users seem stuck

## Tech Stack
- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS v4** (utility-first CSS)
- **Vercel** for deployment (auto-deploys on push to main)

## Key Files

### Pages
- `src/app/page.tsx` - Homepage (assembles all components)
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/globals.css` - Global styles and Tailwind imports

### Components (in order on page)
1. `Navbar.tsx` - Fixed navigation with scroll effects
2. `Hero.tsx` - Main hero with headline and CTAs
3. `HeroStoryAnimation.tsx` - Animated Reddit→AI chat story
4. `FounderQuotes.tsx` - Auto-scrolling founder tweet carousel
5. `Features.tsx` - "Who We Are" section
6. `HowItWorks.tsx` - 4-step process
7. `Testimonials.tsx` - Customer testimonials + partner logos
8. `FAQ.tsx` - Accordion FAQ section
9. `CTA.tsx` - Bottom call-to-action
10. `Footer.tsx` - Footer links

### Assets
- `public/logo.webp` - ReddiReach logo
- `public/avatars/` - Founder photos for carousel
- `public/peekaboo-logo.png` - Partner logo
- `public/subredditsignals-logo.jpg` - Partner logo

## Brand Colors
- Primary: `#ff4500` (Reddit orange)
- Hover: `#cc3700` (darker orange)
- Text: `gray-900`, `gray-600`, `gray-500`
- Background: `white`, `gray-50`

## Common Tasks

### Adding content
- Testimonials: Edit `testimonials` array in `Testimonials.tsx`
- FAQs: Edit `faqs` array in `FAQ.tsx`
- Founder quotes: Edit `founderQuotes` array in `FounderQuotes.tsx`

### Changing text
- Find the component file for that section
- Look for text in quotes or template literals
- Edit directly

### Adding images
1. Add to `public/` folder
2. Reference as `/filename.ext` in code

## Development Commands
```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build (also checks for errors)
npm run lint    # Check code style
```

## Git Workflow
- `main` branch auto-deploys to production
- Use feature branches for changes
- PR to main when ready to go live

## Available Skills

**Learning & Guidance:**
- `/help` - General guidance
- `/help-local` - Running locally
- `/help-git` - Git basics
- `/help-vercel` - Deployment help
- `/help-site` - Making site changes

**Expert Agents:**
- `/frontend` - Frontend developer for building features and components
- `/ux-ui` - UX/UI designer for layout, hierarchy, and user experience
- `/design` - Design system expert for colors, fonts, spacing, styling
- `/content` - Copywriter for headlines, descriptions, testimonials, FAQs
- `/debug` - Troubleshooter for errors, build failures, and broken things
