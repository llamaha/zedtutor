# Lesson 15: Git Basics in Zed

Master version control without leaving your editor. Learn to use Zed's integrated Git features for efficient source control management.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand Git integration in Zed
- Read Git status indicators
- Use inline Git blame
- View Git history and changes
- Configure Git features

## 📚 Git Integration Overview

Zed provides:
- **Gutter Indicators**: See changes at a glance
- **Inline Blame**: Who changed what and when
- **Diff View**: Compare changes
- **Git Status**: Modified files tracking
- **Commit Integration**: Stage and commit

## 🏃 Exercise 1: Git Gutter Indicators

Open any file in a Git repository and observe:

1. **Gutter indicators:**
   - Green line: Added lines
   - Blue line: Modified lines  
   - Red triangle: Deleted lines
   - Click gutter to see details

2. **Understanding changes:**
   - Make edits to see indicators
   - Save to update Git status
   - Indicators update in real-time
   - Hover for change preview

3. **Change navigation:**
   - Jump between changes
   - See original content
   - Quick diff preview
   - Contextual information

4. **Configure gutter:**
   - Command Palette → Search "git"
   - Toggle gutter on/off
   - Customize appearance
   - Per-project settings

## 🏃 Exercise 2: Git Status Indicators

Explore file status in the project:

1. **File tree indicators:**
   - Modified files (M)
   - New files (N)
   - Deleted files (D) 
   - Ignored files (dimmed)

2. **Status bar info:**
   - Current branch name
   - Ahead/behind commits
   - Clean/dirty status
   - Quick branch info

3. **Tab indicators:**
   - Modified file dots
   - Different from saved
   - Git status colors
   - Visual feedback

4. **Project-wide status:**
   - See all changes
   - Filter by status
   - Quick overview
   - Navigate changes

## 🏃 Exercise 3: Inline Git Blame

Enable and use Git blame:

1. **Enable inline blame:**
   - Command Palette → "editor: toggle git blame inline"
   - See author and date inline
   - Configurable display

2. **Blame information:**
   - Commit author
   - Relative time
   - Commit hash
   - Hover for details

3. **Blame navigation:**
   - Click blame to see commit
   - Jump to commit history
   - See full context
   - Understand changes

4. **Configure blame:**
   - Adjust delay time
   - Change format
   - Show/hide selectively
   - Performance settings

## 🏃 Exercise 4: Viewing Diffs

Work with Git diffs in Zed:

1. **Inline diff preview:**
   - Click gutter indicator
   - See original vs current
   - Inline comparison
   - Quick review

2. **Work with diff hunks:**
   - Command Palette → "editor: expand all diff hunks"
   - See full context
   - Review changes
   - Apply or revert hunks

3. **Navigate diffs:**
   - Command Palette → "editor: go to hunk"
   - Command Palette → "editor: go to previous hunk"
   - Systematic review
   - Quick jumping

4. **Diff actions:**
   - Revert changes
   - Stage hunks
   - Copy original
   - Apply changes

## 🏃 Exercise 5: Git Workflows

Practice common Git workflows:

1. **Review changes:**
   - Check gutter indicators
   - Navigate between changes
   - Use inline blame
   - Understand modifications

2. **Stage changes:**
   - Select changes
   - Stage from gutter
   - Partial staging
   - Review staged

3. **Revert changes:**
   - Revert single lines
   - Revert hunks
   - Restore files
   - Undo modifications

4. **Branch awareness:**
   - See current branch
   - Switch branches (terminal)
   - Track branch status
   - Merge indicators

## 💡 Pro Tips

- **Gutter Click**: Quick actions on changes
- **Blame Delay**: Configure to reduce noise
- **Diff Navigation**: Learn shortcuts for speed
- **Status Colors**: Customize for visibility
- **Performance**: Disable features in large repos if needed

## ✅ Lesson Summary

You've learned:
- Git gutter indicators
- Status tracking
- Inline blame usage
- Diff viewing and navigation
- Basic Git workflows in Zed

## 🎯 Practice Challenge

Using Git features in Zed:
1. Make changes to multiple files
2. Use gutter to review each change
3. Enable blame to see history
4. Navigate between all changes
5. Selectively revert some changes

Complete without using terminal Git commands!

## 📝 Notes Section

```
Git integration notes...




```

---

Git basics mastered! Continue to `lessons/05_git/16_making_changes.md`