---
name: help-local
description: Help with running the site locally (localhost, npm commands, development server). Use when user asks about running locally, localhost, npm, or viewing the site on their computer.
---

# Running the Site Locally

Help the user understand local development in simple terms.

## Key Concepts to Explain:

### What is "localhost"?
- It's your website running **only on your computer**
- No one else can see it - it's just for you to preview changes
- Think of it like a private preview before publishing

### The Two Commands They Need:

**First time only (install dependencies):**
```bash
npm install
```
This downloads all the code libraries the project needs. Like installing an app - you only do it once.

**Every time they want to work:**
```bash
npm run dev
```
This starts the website on their computer. Keep this terminal window open while working!

### Viewing the Site:
1. After running `npm run dev`, open a web browser
2. Go to: **http://localhost:3000**
3. The site will update automatically when they make changes!

### Common Issues:

**"command not found: npm"**
- Node.js isn't installed. They need to install it from https://nodejs.org

**"port 3000 is already in use"**
- Another process is using that port
- Either close the other terminal running npm, or run: `npm run dev -- -p 3001` and visit localhost:3001

**Changes not showing up?**
- Hard refresh the browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Make sure `npm run dev` is still running in terminal

**Want to stop the server?**
- Press `Ctrl+C` in the terminal where it's running

## Offer to help them:
- Start the development server
- Check if it's running correctly
- Troubleshoot any errors they see
