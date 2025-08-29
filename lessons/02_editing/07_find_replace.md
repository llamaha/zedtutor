# Lesson 7: Find and Replace

Master the art of searching and replacing text across files. Find and replace is essential for refactoring, fixing typos, and making bulk changes.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Use find within files effectively
- Perform project-wide searches
- Master find and replace operations
- Use regular expressions for complex patterns
- Understand search options and filters

## 📚 Find and Replace Overview

Zed offers multiple search scopes:
- **Buffer Search**: Search within current file
- **Project Search**: Search across entire project
- **Regex Search**: Use patterns for complex matching
- **Case-sensitive**: Control case matching
- **Whole Word**: Match complete words only

**Key search commands:**
- `buffer search: deploy` - Find in current file
- `search: toggle replace` - Toggle replace field
- `project search: toggle focus` - Search entire project  
- `search: toggle case sensitive` - Case sensitivity
- `search: toggle regex` - Regular expressions
- `search: toggle whole word` - Whole word matching

## 🏃 Exercise 1: Basic Find in Buffer

Open `exercises/07_find_basics.txt` and practice:

1. **Open buffer search:**
   - Command Palette → "buffer search: deploy"
   - Or use shortcut shown in command
   - Search bar appears at top of editor

2. **Navigate matches:**
   - Type a search term
   - Press Enter or F3 for next match
   - Shift+Enter or Shift+F3 for previous
   - See match count in search bar
   
   **Navigation commands:**
   - `search: select next match` - Next match
   - `search: select previous match` - Previous match
   - `editor: find all references` - LSP-based references

3. **Search options:**
   - Click icons in search bar or use commands:
   - Command Palette → "search: toggle case sensitive"
   - Command Palette → "search: toggle whole word"  
   - Command Palette → "search: toggle regex"

4. **Close search:**
   - Press Escape to close search bar
   - Cursor stays at current match

## 🏃 Exercise 2: Find and Replace in Buffer

Practice in `exercises/07_replace_practice.js`:

1. **Open find and replace:**
   - Command Palette → "search: toggle replace"
   - Search bar expands to show replace field

2. **Replace operations:**
   - Type search term
   - Tab to replace field
   - Type replacement text
   - Use buttons or commands:
     - Replace (current match)
     - Replace All
     
   **Replace commands:**
   - `search: replace next` - Replace current
   - `search: replace all` - Replace all matches

3. **Preview replacements:**
   - See highlighted matches before replacing
   - Undo works on all replacements

4. **Smart replace:**
   - Preserve case when replacing
   - Works with uppercase/lowercase/mixed case

## 🏃 Exercise 3: Project-Wide Search

Use `exercises/07_project_search/` folder:

1. **Open project search:**
   - Command Palette → "project search: toggle focus"
   - Opens search panel at bottom

2. **Search across files:**
   - Type search term
   - See results grouped by file
   - Click result to jump to location

3. **Filter searches:**
   - Include files: `*.js` (only JavaScript files)
   - Exclude paths: `!node_modules`
   - Multiple patterns: `*.js,*.ts`
   
   **Project search commands:**
   - Use same toggle commands as buffer search:
   - `search: toggle case sensitive` - Case option
   - `search: toggle regex` - Regex option
   - `search: toggle whole word` - Whole word option

4. **Search in selection:**
   - Select text first
   - Open project search
   - Selection becomes search term

## 🏃 Exercise 4: Regular Expressions

Practice regex patterns in any text file:

1. **Enable regex mode:**
   - In search, click regex icon or
   - Command Palette → "search: toggle regex"

2. **Common patterns:**
   - `\b\w+@\w+\.\w+\b` - Email addresses
   - `\d{3}-\d{3}-\d{4}` - Phone numbers
   - `TODO:.*$` - TODO comments
   - `^import.*from` - Import statements

3. **Capture groups:**
   - Search: `(\w+)@(\w+\.\w+)`
   - Replace: `$1 at $2`
   - Transforms emails format

4. **Multi-line patterns:**
   - Use `[\s\S]*?` for multi-line matching
   - `\n` matches newlines

## 🏃 Exercise 5: Advanced Find/Replace

Practice these advanced techniques:

1. **Project-wide replace:**
   - Search across project
   - Review all matches
   - Use "Replace All" carefully
   - Always preview changes

2. **Incremental search:**
   - Start typing in search
   - Zed jumps to first match instantly
   - Refine search as you type

3. **Search history:**
   - Up/down arrows in search field
   - Recalls previous searches
   - Works in both buffer and project search

4. **Search result navigation:**
   - In project search results:
   - Use arrow keys or click results to navigate
   - Each result shows file path and line number

## 💡 Pro Tips

- **Selection to Search**: Select text then open search to pre-fill
- **Word Boundaries**: Use `\b` in regex for whole words
- **Escape Special Chars**: In regex, escape with `\` (e.g., `\.` for literal dot)
- **Replace Preserves Indent**: Multi-line replacements maintain indentation
- **Search Results as Todo List**: Project search results stay open for systematic fixes

## ✅ Lesson Summary

You've mastered:
- Buffer search and navigation
- Find and replace operations
- Project-wide searching
- Regular expression patterns
- Advanced search techniques

## 🎯 Practice Challenge

Create a JavaScript file and practice:
1. Find all console.log statements and comment them out
2. Replace all `var` with appropriate `let` or `const`
3. Find patterns like phone numbers or emails
4. Use regex to transform data formats
5. Practice project-wide search and replace

Use various find/replace techniques!

## 📝 Notes Section

```
Find/Replace discoveries...




```

---

Powerful searching complete! Continue to `lessons/03_advanced_navigation/08_symbol_navigation.md`