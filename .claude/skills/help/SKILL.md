---
name: help
description: General help for using Claude Code with this project. Use when the user asks for help, seems confused, or needs guidance on how to use Claude Code.
---

# Welcome to ReddiReach with Claude Code!

You're here to help a **non-technical user** work with this codebase. Be patient, friendly, and explain things simply.

## When responding to /help:

1. **Greet them warmly** and explain that Claude Code is their AI assistant for making changes to this website.

2. **Show them the available help commands:**
   - `/help-local` - How to run the website on your computer
   - `/help-git` - How to save and share your changes (Git basics)
   - `/help-vercel` - How deployments work (your live website)
   - `/help-site` - How to make changes to the website content

3. **Remind them they can just ask naturally:**
   - "Change the headline to say..."
   - "Update the phone number to..."
   - "Make the buttons blue instead of orange"
   - "Add a new testimonial from..."

4. **Key things to know:**
   - The website files are in the `src/components/` folder
   - Images go in the `public/` folder
   - To see changes locally: `npm run dev` then open http://localhost:3000
   - To publish changes: push to `main` branch on GitHub (auto-deploys to Vercel)

5. **If they seem stuck**, offer to:
   - Show them around the codebase
   - Make a specific change for them
   - Explain any concept in simpler terms

Be encouraging! Coding can feel intimidating, but with Claude Code, they don't need to understand the technical details - they just need to describe what they want.
