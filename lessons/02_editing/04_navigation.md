# Lesson 4: Text Navigation

Learn to move through your code at the speed of thought. Efficient navigation is the foundation of productive editing.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Navigate by character, word, and line
- Jump to specific locations quickly
- Use advanced movement commands
- Navigate code structure intelligently

## 📚 Navigation Fundamentals

Zed offers multiple levels of navigation:
- **Character**: Move one character at a time
- **Word**: Jump between word boundaries  
- **Line**: Move by lines or to line start/end
- **Block**: Navigate by paragraphs or code blocks
- **File**: Jump to file start/end or specific lines

**Essential navigation commands:**
- `editor: move left` / `editor: move right` - Horizontal movement
- `editor: move up` / `editor: move down` - Vertical movement
- `editor: move to previous word start` - Jump word backward
- `editor: move to next word end` - Jump word forward
- `editor: move to beginning of line` - Line start
- `editor: move to end of line` - Line end
- `editor: move to beginning` - File start
- `editor: move to end` - File end
- `go to line: toggle` - Jump to line number
- `editor: move to enclosing bracket` - Match brackets

## 🏃 Exercise 1: Basic Movement

Open `exercises/04_navigation_practice.txt` and practice these movements:

1. **Character movement:**
   - Command Palette → "editor: move left"
   - Command Palette → "editor: move right"
   - Try holding Shift while moving to select!

2. **Word movement:**
   - Command Palette → "editor: move to previous word start"
   - Command Palette → "editor: move to next word end"
   - Notice how it handles camelCase and snake_case

3. **Line movement:**
   - Command Palette → "editor: move to beginning of line"
   - Command Palette → "editor: move to end of line"
   - Command Palette → "editor: move up" (cursor up)
   - Command Palette → "editor: move down" (cursor down)

## 🏃 Exercise 2: Jumping to Locations

1. **Go to line:**
   - Command Palette → "go to line: toggle"
   - Type a line number (try: 25)
   - Press Enter to jump

2. **Move by paragraphs:**
   - Command Palette → "editor: move to start of paragraph"
   - Command Palette → "editor: move to end of paragraph"
   - Great for navigating documentation or comments

3. **File boundaries:**
   - Command Palette → "editor: move to beginning"
   - Command Palette → "editor: move to end"

## 🏃 Exercise 3: Smart Selection

Selection is navigation with memory! Practice in `exercises/04_selection_practice.js`:

1. **Select by word:**
   - Place cursor in a word
   - Command Palette → "editor: select to previous word start"
   - Command Palette → "editor: select to next word end"

2. **Expand/shrink selection:**
   - Place cursor inside parentheses/brackets
   - Command Palette → "editor: select larger syntax node"
   - Repeat to select larger blocks
   - Command Palette → "editor: select smaller syntax node"
   
   **More selection commands:**
   - `editor: select all` - Select entire file
   - `editor: select line` - Select current line

3. **Select lines:**
   - Command Palette → "editor: select line"
   - Repeat to add more lines
   - Command Palette → "editor: select all"

## 🏃 Exercise 4: Code-Aware Navigation

Open `exercises/04_code_navigation.js` for structured navigation:

1. **Navigate code blocks:**
   - Command Palette → "editor: move to start of paragraph"
   - Command Palette → "editor: move to end of paragraph"
   - Works for code blocks separated by blank lines

2. **Bracket matching:**
   - Place cursor on a bracket
   - Command Palette → "editor: move to enclosing bracket"
   - Works with (), [], {}, and even HTML tags!

3. **Navigate by diagnostics:**
   - If there are errors in the file:
   - Command Palette → "editor: go to diagnostic"
   - Command Palette → "editor: go to prev diagnostic"
   
   **Related commands:**
   - `diagnostics: deploy` - Show diagnostics panel
   - `editor: go to next diagnostic` - Next error/warning
   - `editor: go to prev diagnostic` - Previous error/warning

## 🏃 Exercise 5: Advanced Navigation

1. **Jump to symbol:**
   - Command Palette → "outline: toggle"
   - Shows all symbols in current file
   - Type to filter and jump to any function/class
   - Great for quick navigation in large files

2. **Navigation history:**
   - After making jumps (go to line, symbol, etc.):
   - Command Palette → "pane: go back" 
   - Command Palette → "pane: go forward"
   - Navigate through your location history

3. **Marks (Vim mode only):**
   - If using Vim mode, you can set marks
   - Otherwise, use outline navigation
   - Or remember important line numbers
   - Go to line is very fast in Zed!

## 💡 Pro Tips

- **Holding Shift**: Most movement commands become selection when holding Shift
- **Multiple Cursors**: Navigation commands work with all cursors simultaneously
- **Smooth Scrolling**: Zed keeps context visible when jumping
- **Smart Word Boundaries**: Understands programming conventions (camelCase, etc.)

## ✅ Lesson Summary

You've mastered:
- Basic cursor movement (character, word, line)
- Jumping to specific locations
- Smart selection techniques
- Code-aware navigation
- Advanced features like outline navigation

## 🎯 Practice Challenge

In `exercises/04_navigation_challenge.md`:
1. Navigate to line 50 without scrolling
2. Select the entire function at line 30
3. Jump between all TODO comments using search
4. Find all functions using the outline
5. Navigate through your jump history

Time yourself - can you do it in under 2 minutes?

## 📝 Notes Section

```
Your navigation observations...




```

---

Excellent! You're navigating like a pro. Continue to `lessons/02_editing/05_basic_editing.md`