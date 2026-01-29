---
name: help-site
description: Help with making changes to the website content and design. Use when user wants to modify text, images, colors, layout, or add/remove sections.
---

# Making Changes to the ReddiReach Website

Guide users through modifying the site. Be proactive - offer to make changes for them!

## Site Structure Overview:

The homepage is built from **components** (reusable pieces). Each section is its own file:

| Section | File | What's There |
|---------|------|--------------|
| Navigation | `src/components/Navbar.tsx` | Logo, menu links, "Let's Chat" button |
| Hero | `src/components/Hero.tsx` | Main headline, subtext, CTA buttons |
| Animation | `src/components/HeroStoryAnimation.tsx` | Reddit post → AI chat animation |
| Founder Quotes | `src/components/FounderQuotes.tsx` | Scrolling carousel of founder tweets |
| Who We Are | `src/components/Features.tsx` | Three feature cards |
| Our Approach | `src/components/HowItWorks.tsx` | 4-step process |
| Testimonials | `src/components/Testimonials.tsx` | Customer quotes + partner logos |
| FAQ | `src/components/FAQ.tsx` | Accordion questions/answers |
| Call to Action | `src/components/CTA.tsx` | Bottom contact section |
| Footer | `src/components/Footer.tsx` | Links, copyright |

## Common Changes:

### Changing Text
1. Find the component file
2. Look for the text in quotes
3. Edit the text directly
4. Save and see it update at localhost:3000

Example: "Change the main headline" → Edit `Hero.tsx`

### Changing Colors
- The main orange color is `#ff4500` (Reddit orange)
- Look for `text-[#ff4500]` or `bg-[#ff4500]` in files
- Tailwind colors: `text-gray-600`, `bg-white`, etc.

### Changing Images
1. Add new image to `public/` folder
2. Reference it as `/filename.jpg` in the code
3. For avatars: `public/avatars/` folder

### Adding a Testimonial
In `Testimonials.tsx`, find the `testimonials` array and add:
```typescript
{
  quote: "Their quote here...",
  author: "Name Here",
  role: "Title, Company",
  avatar: "XX"  // Initials
}
```

### Adding a FAQ
In `FAQ.tsx`, find the `faqs` array and add:
```typescript
{
  question: "The question?",
  answer: "The answer here..."
}
```

### Adding a Founder Quote
In `FounderQuotes.tsx`, find the `founderQuotes` array and add:
```typescript
{
  name: "Full Name",
  handle: "@twitter_handle",
  role: "Title at Company",
  avatar: "/avatars/filename.jpg",
  quote: "Their quote...",
  date: "Month Day, Year",
  time: "12:00 PM"
}
```

## Best Practices:

1. **Test locally first** - Run `npm run dev` and check localhost:3000
2. **Check the build** - Run `npm run build` before pushing
3. **Small commits** - Save often with clear messages
4. **Ask Claude!** - Just describe what you want changed

## Example Requests:

These are great ways to ask Claude for changes:

- "Change the headline to 'Dominate AI Search Results'"
- "Update Sarah Chen's testimonial to say..."
- "Add a new FAQ about pricing"
- "Make the CTA button say 'Get Started' instead of 'Let's Chat'"
- "Add a new testimonial from John at TechCorp"
- "Change the orange color to blue throughout the site"
- "Update the footer copyright year"

## Offer to:
- Make any specific change they describe
- Show them where specific content lives
- Walk through the codebase structure
- Preview changes locally for them
