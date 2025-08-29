# Lesson 13: Diagnostics and Problems

Master error detection and problem solving with Zed's diagnostic features. Learn to quickly identify, understand, and fix issues in your code.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand diagnostic indicators
- Navigate between problems efficiently
- Configure diagnostic display
- Use inline diagnostics
- Filter and manage problems

## 📚 Diagnostics Overview

Zed shows diagnostics from:
- **Syntax Errors**: Code that won't compile/run
- **Type Errors**: Type mismatches and issues
- **Linting Warnings**: Code quality issues
- **Style Issues**: Formatting problems
- **Security Warnings**: Potential vulnerabilities

## 🏃 Exercise 1: Understanding Diagnostic Indicators

Open `exercises/13_diagnostic_types.js` and observe:

1. **Visual indicators:**
   - Red underlines: Errors
   - Yellow underlines: Warnings
   - Blue underlines: Info/hints
   - Scrollbar markers

2. **Gutter indicators:**
   - Error/warning icons
   - Line highlighting
   - Quick access points

3. **Status bar:**
   - Total error count
   - Warning count
   - Click to see summary

4. **Hover details:**
   - Hover over underlined code
   - See full error message
   - Often includes fixes

## 🏃 Exercise 2: Navigating Diagnostics

Practice in `exercises/13_navigation_practice.ts`:

1. **Jump between diagnostics:**
   - Command Palette → "editor: go to diagnostic"
   - Command Palette → "editor: go to previous diagnostic"
   - Cycles through all problems

2. **Diagnostic panel:**
   - View all problems at once
   - Grouped by file
   - Click to navigate

3. **Filter by severity:**
   - Show only errors
   - Include warnings
   - Include hints

4. **File-specific navigation:**
   - Navigate within current file
   - Or across entire project
   - Focus on critical issues

## 🏃 Exercise 3: Inline Diagnostics (Error Lens)

Configure and use inline diagnostics in any file with errors:

1. **Enable inline diagnostics:**
   - Shows errors at end of line
   - Immediate visibility
   - No hovering needed

2. **Configure display:**
   - Command Palette → "editor: toggle inline diagnostics"
   - Or via settings
   - Customize appearance

3. **Benefits:**
   - See all errors at once
   - Faster problem identification
   - Better for code review

4. **Managing clutter:**
   - Can be toggled on/off
   - Filter by severity
   - Adjust positioning

## 🏃 Exercise 4: Problem Management

Practice problem management with any file containing diagnostics:

1. **Quick fixes from diagnostics:**
   - Click lightbulb icon
   - Or use code actions
   - Apply suggested fixes

2. **Bulk operations:**
   - Fix all similar issues
   - Apply project-wide
   - Careful with automation

3. **Suppressing diagnostics:**
   - When appropriate
   - Language-specific comments
   - Configure rules

4. **Custom diagnostic rules:**
   - ESLint configuration
   - TypeScript settings
   - Language server config

## 🏃 Exercise 5: Diagnostic Workflows

Practice these diagnostic workflows in your projects:

1. **Error-driven development:**
   - Write code
   - See errors immediately
   - Fix as you go

2. **Cleanup workflow:**
   - View all problems
   - Sort by severity
   - Fix systematically

3. **Pre-commit checks:**
   - Ensure no errors
   - Review warnings
   - Clean code only

4. **Team collaboration:**
   - Share diagnostic configs
   - Consistent error handling
   - Code quality standards

## 💡 Pro Tips

- **Keyboard Navigation**: Learn shortcuts for faster problem jumping
- **Filter Noise**: Configure to show only relevant diagnostics
- **Fix Order**: Start with errors, then warnings, then hints
- **Diagnostic Delay**: Some appear after saving or short delay
- **Multiple Sources**: Diagnostics can come from multiple tools

## ✅ Lesson Summary

You've mastered:
- Understanding diagnostic indicators
- Navigating between problems
- Using inline diagnostics
- Managing and filtering problems
- Diagnostic-driven workflows

## 🎯 Practice Challenge

Create or find a file with multiple issues and practice:
1. Start with syntax errors
2. Then fix type errors  
3. Address linting warnings
4. Resolve style issues
5. Navigate between all problems efficiently

Goal: Zero problems in the file!

## 📝 Notes Section

```
Diagnostic insights...




```

---

Problem-solving expertise gained! Continue to `lessons/04_code_intelligence/14_code_completion.md`