---
name: help-git
description: Help with Git basics (saving changes, branches, pushing, pulling, merging). Use when user asks about git, saving code, branches, commits, pushing, pulling, or GitHub.
---

# Git Basics for Non-Technical Users

Explain Git concepts using simple analogies. Avoid jargon.

## Key Concepts:

### What is Git?
- Think of it like **Google Docs version history** for code
- Every change you save (commit) is recorded
- You can always go back to previous versions
- Multiple people can work on the code without overwriting each other

### What is GitHub?
- It's like **Google Drive for code**
- Your code is stored online (in a "repository" or "repo")
- This project's repo: https://github.com/JohnRiceML/reddireach

### The Basic Workflow:

**1. Pull (Get latest changes)**
```bash
git pull
```
Like pressing "refresh" - gets any updates others have made.

**2. Make your changes**
Edit files with Claude Code's help!

**3. Stage changes (select what to save)**
```bash
git add .
```
Selects all your changes to be saved.

**4. Commit (save with a note)**
```bash
git commit -m "Describe what you changed"
```
Like saving a version with a sticky note explaining what changed.

**5. Push (upload to GitHub)**
```bash
git push
```
Uploads your saved changes so others can see them.

### Branches Explained:

**What's a branch?**
- Like making a copy to experiment with
- `main` branch = the live/production version
- Other branches = safe spaces to make changes

**Common branch workflow:**
```bash
git checkout -b my-new-feature    # Create a new branch
# ... make changes ...
git add .
git commit -m "Added new feature"
git push -u origin my-new-feature # Push the branch
```

Then on GitHub, create a "Pull Request" to merge into main.

**Switch between branches:**
```bash
git checkout main           # Go to main branch
git checkout my-feature     # Go to your feature branch
```

### Common Issues:

**"Your branch is behind"**
```bash
git pull
```
Then try again.

**"Merge conflict"**
- Two people edited the same thing differently
- Ask Claude to help resolve it!

**"Changes not staged"**
- You forgot `git add .` before committing

### Golden Rules:
1. Always `git pull` before starting work
2. Commit often with clear messages
3. Never push directly to `main` for big changes - use branches
4. When in doubt, ask Claude!

## Offer to:
- Check their current git status
- Help them commit and push changes
- Create a new branch for them
- Explain any git error messages
