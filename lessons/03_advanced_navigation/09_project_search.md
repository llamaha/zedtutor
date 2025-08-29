# Lesson 9: File and Project Search

Master the art of finding anything in your project instantly. Learn to use Zed's powerful search capabilities to navigate large codebases efficiently.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Use the file finder effectively
- Master project-wide search
- Apply advanced search filters
- Work with search results efficiently
- Combine search techniques for power workflows

## 📚 Search Overview

Zed provides multiple search tools:
- **File Finder**: Quick file navigation by name
- **Project Search**: Find content across all files
- **Symbol Search**: Navigate to code symbols
- **Command Search**: Find and execute commands

## 🏃 Exercise 1: File Finder Mastery

Practice in the zedtutor project itself:

1. **Basic file finding:**
   - Command Palette → "workspace: toggle file finder"
   - Start typing filename
   - Notice fuzzy matching
   - Use arrows to navigate results

2. **Fuzzy matching patterns:**
   - `les01` finds `lessons/01_basics/01_welcome.md`
   - `exclip` finds `exercises/05_clipboard_practice.txt`
   - Capital letters as anchors: `FP` finds `FindPractice`

3. **Path-aware searching:**
   - Include path: `exercises/07` 
   - Finds files in specific directories
   - Mix path and name: `lessons/nav`

4. **Recent files priority:**
   - Recently opened files appear higher
   - Empty search shows recent files
   - Quick switching workflow

## 🏃 Exercise 2: Advanced File Finding

Explore advanced patterns:

1. **File extensions:**
   - Search `.js` to find all JavaScript files
   - `.md` for all markdown files
   - Combine: `practice.js`

2. **Creating new files:**
   - Type non-existent filename
   - Press Enter to create
   - Instant file creation!

3. **Multiple file opening:**
   - Find a file
   - Hold Cmd/Ctrl and press Enter
   - File opens without closing finder
   - Continue finding more files

4. **Smart ranking:**
   - Zed learns your patterns
   - Frequently accessed files rank higher
   - Project-specific memory

## 🏃 Exercise 3: Project Search Deep Dive

Use `exercises/09_search_project/` for practice:

1. **Basic project search:**
   - Command Palette → "project search: toggle focus"
   - Enter search term
   - Results grouped by file
   - Preview in context

2. **Search options:**
   - Case sensitive toggle
   - Whole word matching
   - Regular expressions
   - Click icons or use commands

3. **Including/excluding files:**
   - Include: `*.js,*.ts` (only these files)
   - Exclude: `!node_modules,!dist`
   - Combine: `*.js,!*.test.js`

4. **Search in selection:**
   - Select text in editor
   - Open project search
   - Selection becomes search term
   - Quick context searching

## 🏃 Exercise 4: Search Filters and Patterns

Practice advanced filtering:

1. **Glob patterns:**
   - `src/**/*.js` - All JS in src
   - `**/*test*` - All test files
   - `*.{js,ts,jsx,tsx}` - Multiple extensions

2. **Excluding patterns:**
   - `!build` - Exclude build directory
   - `!*.min.js` - Exclude minified files
   - Multiple: `!dist,!node_modules,!*.log`

3. **Complex searches:**
   - Search: `TODO`
   - Include: `*.js,*.ts`
   - Exclude: `!*test*,!*spec*`
   - Finds TODOs in source only

4. **Path-specific searches:**
   - Click folder in project panel
   - "Search in folder"
   - Limits scope automatically

## 🏃 Exercise 5: Working with Results

Efficient result navigation:

1. **Result navigation:**
   - Click to jump to location
   - Command Palette → "search: select next match"
   - Command Palette → "search: select previous match"
   - Systematic review workflow

2. **Result actions:**
   - Replace in files (careful!)
   - Copy result paths
   - Open multiple results
   - Keep results as todo list

3. **Search and replace workflow:**
   - Search for pattern
   - Review all occurrences
   - Selective replacement
   - Use version control for safety

4. **Search history:**
   - Previous searches remembered
   - Up/down arrows in search field
   - Quick re-search
   - Refine previous searches

## 💡 Pro Tips

- **Quick Filters**: After searching, add filters to narrow results
- **Search Current Word**: Cursor on word + project search
- **Persistent Results**: Results panel stays open for reference
- **Multi-term Search**: Space-separated terms for AND search
- **Negative Patterns**: Use `!` to exclude in same search

## ✅ Lesson Summary

You've mastered:
- File finder with fuzzy matching
- Project-wide content search
- Advanced filters and patterns
- Efficient result navigation
- Combined search workflows

## 🎯 Practice Challenge

Complete these search challenges:
1. Find all JavaScript files containing "async" but not in tests
2. Locate all TODO comments in markdown files
3. Find files modified today (check git status first)
4. Search for a function and replace its name project-wide
5. Create a complex search with multiple includes/excludes

Time yourself - efficiency is key!

## 📝 Notes Section

```
Search insights and patterns...




```

---

Search mastery achieved! Continue to `lessons/03_advanced_navigation/10_outline_panel.md`