# Lesson 6: Multi-Cursor Editing

Unlock one of Zed's most powerful features - editing with multiple cursors simultaneously. This superpower will transform how you refactor and edit code.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Add multiple cursors in various ways
- Edit with multiple cursors efficiently
- Use multi-cursor for refactoring
- Master column selection
- Understand cursor management

## 📚 Multi-Cursor Concepts

Multiple cursors allow you to:
- Edit multiple locations simultaneously
- Refactor variable names quickly
- Add prefixes/suffixes to multiple lines
- Transform data in bulk
- Create boilerplate code rapidly

**Essential multi-cursor commands:**
- `editor: add selection above` - Add cursor line above
- `editor: add selection below` - Add cursor line below
- `editor: select next` - Select next occurrence
- `editor: select all matches` - Select all occurrences
- `editor: split selection into lines` - Cursor at each line end
- `editor: cancel` - Remove extra cursors (keep primary)

## 🏃 Exercise 1: Adding Cursors

Create a new file or use any existing text file and practice:

1. **Add cursor above/below:**
   - Place cursor on a line
   - Command Palette → "editor: add selection above"
   - Command Palette → "editor: add selection below"
   - Type to see changes at all cursors!

2. **Add cursor at next occurrence:**
   - Select a word (double-click or select)
   - Command Palette → "editor: select next"
   - Repeat to add more cursors
   - Now edit all occurrences at once!
   
   **Related commands:**
   - `editor: select next` - Select next occurrence
   - `editor: select previous` - Select previous occurrence

3. **Add cursors to all occurrences:**
   - Select a word
   - Command Palette → "editor: select all matches"
   - Every occurrence now has a cursor

4. **Skip occurrences while selecting:**
   - While using "editor: select next"
   - To skip an occurrence: Command Palette → "editor: undo selection" 
   - This deselects the current match and moves to the next one
   - Useful for selective editing
   
5. **Undo cursor selection:**
   - Command Palette → "editor: undo selection"
   - Removes last added selection
   - Keep refining your selection

## 🏃 Exercise 2: Column Selection

Column selection (also called block selection) lets you select a rectangular area of text spanning multiple lines - perfect for editing aligned data like CSV files, markdown tables, or code with consistent indentation.

Practice column selection with any structured text:

1. **Basic column selection:**
   - Hold Alt (Option on macOS)
   - Click and drag to create rectangular selection
   - Or use keyboard: Alt + Shift + arrows
   
   **Column commands:**
   - Use Alt/Option + mouse drag for column selection
   - Or Alt/Option + Shift + arrow keys

2. **Add cursors to line ends:**
   - Select multiple lines
   - Command Palette → "editor: split selection into lines"
   - Perfect for adding semicolons or comments

3. **Column editing:**
   - Create column selection in data
   - Type to insert at all positions
   - Delete to remove columns

## 🏃 Exercise 3: Practical Refactoring

Open `exercises/06_multi_cursor_practice.js` to practice refactoring:

1. **Rename variables:**
   - Select variable name
   - Add cursors to all occurrences
   - Type new name - changes everywhere!
   
   **Better way for renaming:**
   - `editor: rename` - LSP-aware renaming
   - Safer than multi-cursor for variables

2. **Add prefixes/suffixes:**
   - Select multiple identifiers
   - Add cursors
   - Navigate to beginning/end
   - Add prefix/suffix to all

3. **Convert data format:**
   - Use multi-cursor to transform
   - Array literals to objects
   - CSV to JSON
   - Bulk formatting changes

## 🏃 Exercise 4: Advanced Techniques

Practice these advanced techniques:

1. **Undo with multiple cursors:**
   - Each cursor maintains its own undo
   - Undo affects all cursors
   - Very powerful for corrections

2. **Navigation with multiple cursors:**
   - Movement commands work on all cursors
   - Word/line navigation moves all
   - Selection works independently

3. **Remove specific cursors:**
   - Command Palette → "editor: cancel"
   - Removes all extra cursors
   - Keeps only the primary cursor

4. **Merge cursors:**
   - When cursors overlap, they merge
   - Useful for cleaning up selections

## 🏃 Exercise 5: Real-World Scenarios

Try these real-world scenarios:

1. **Convert list to array:**
   - Transform plain text list
   - Into JavaScript array syntax
   - Add quotes and commas

2. **Create HTML from data:**
   - Transform CSV data
   - Into HTML table rows
   - Use multi-cursor for tags

3. **Bulk code generation:**
   - Create getters/setters
   - Generate test cases
   - Build repetitive code structures

## 💡 Pro Tips

- **Visual Feedback**: Each cursor has its own color
- **Cursor Order**: Cursors execute in order from top to bottom
- **Clipboard**: Each cursor can have different clipboard content
- **Performance**: Zed handles thousands of cursors efficiently
- **Combine with other features**: Multi-cursor + find/replace = powerful

## ✅ Lesson Summary

You've mastered:
- Adding multiple cursors (various methods)
- Column selection techniques
- Practical refactoring with multi-cursor
- Managing multiple cursors
- Real-world multi-cursor applications

## 🎯 Practice Challenge

Create a JavaScript file with legacy code and practice:
1. Convert all `var` to `const` or `let` appropriately
2. Add consistent semicolons to all statements
3. Convert string concatenation to template literals
4. Add consistent quotes (single or double)
5. Format object properties consistently

Use only multi-cursor techniques!

## 📝 Notes Section

```
Multi-cursor discoveries...




```

---

Amazing work! Multi-cursor editing is a game-changer. Continue to `lessons/02_editing/07_find_replace.md`