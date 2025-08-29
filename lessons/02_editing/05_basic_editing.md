# Lesson 5: Basic Text Editing

Master the fundamental editing operations in Zed. These commands form the foundation of efficient code editing.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Perform basic text operations (insert, delete, copy, paste)
- Use undo and redo effectively
- Work with selections
- Transform text with built-in commands
- Understand clipboard operations

## 📚 Editing Fundamentals

Zed provides powerful editing commands that go beyond simple typing:
- **Text manipulation**: Insert, delete, duplicate
- **Clipboard operations**: Cut, copy, paste with history
- **Transformations**: Change case, sort lines, format
- **Smart editing**: Auto-indent, bracket matching

**Core editing commands:**
- `editor: undo` - Undo last change
- `editor: redo` - Redo undone change
- `editor: copy` - Copy selection or line
- `editor: cut` - Cut selection or line
- `editor: paste` - Paste from clipboard
- `editor: delete line` - Delete current line
- `editor: duplicate line down` - Duplicate line or selection

## 🏃 Exercise 1: Basic Text Operations

Open `exercises/05_basic_editing.txt` and practice:

1. **Inserting text:**
   - Type normally to insert at cursor
   - Command Palette → "editor: newline" (creates new line)
   - Command Palette → "editor: newline above" (insert line above)  
   - Command Palette → "editor: newline below" (insert line below)

2. **Deleting text:**
   - Command Palette → "editor: delete"
   - Command Palette → "editor: backspace"
   - Command Palette → "editor: delete to previous subword start"
   - Command Palette → "editor: delete to next subword end"

3. **Delete entire lines:**
   - Command Palette → "editor: delete line"
   - Works with multiple cursors!

## 🏃 Exercise 2: Copy, Cut, and Paste

Practice in `exercises/05_clipboard_practice.txt`:

1. **Basic clipboard:**
   - Select some text
   - Command Palette → "editor: copy"
   - Move cursor elsewhere
   - Command Palette → "editor: paste"

2. **Cut operation:**
   - Select text
   - Command Palette → "editor: cut"
   - Text is removed and copied
   - Paste elsewhere

3. **Copy/Cut entire lines:**
   - Without selecting (cursor on line)
   - Command Palette → "editor: copy" (copies whole line)
   - Command Palette → "editor: cut" (cuts whole line)
   
   **Additional clipboard commands:**
   - `workspace: copy path` - Copy file path  
   - `workspace: copy relative path` - Copy relative path
   - `editor: copy permalink to line` - Copy GitHub permalink

4. **Duplicate line/selection:**
   - Command Palette → "editor: duplicate line down"
   - If text selected: duplicates selection
   - If no selection: duplicates current line
   
   **Line operations:**
   - `editor: move line up` - Move line up
   - `editor: move line down` - Move line down
   - `editor: join lines` - Join current line with next

## 🏃 Exercise 3: Undo and Redo

Practice in any of the exercise files:

1. **Basic undo/redo:**
   - Make several edits
   - Command Palette → "editor: undo"
   - Command Palette → "editor: redo"

2. **Understanding undo groups:**
   - Type continuously: counts as one undo
   - Navigate and type: creates new undo point
   - Each command is typically one undo

3. **Selection undo:**
   - Zed remembers selection changes
   - Undo can restore previous selections

## 🏃 Exercise 4: Text Transformations

Use `exercises/05_transform_practice.txt`:

1. **Change case:**
   - Select text
   - Command Palette → "editor: convert to upper case"
   - Command Palette → "editor: convert to lower case"
   - Command Palette → "editor: convert to title case"

2. **Sort lines:**
   - Select multiple lines
   - Command Palette → "editor: sort lines case sensitive"
   - Command Palette → "editor: sort lines case insensitive"
   - Command Palette → "editor: sort lines by length"
   
3. **More transformations:**
   - `editor: toggle comments` - Comment/uncomment lines
   - `editor: indent` - Increase indentation
   - `editor: outdent` - Decrease indentation
   - `editor: format` - Format code (if formatter available)

3. **Unique lines:**
   - Select lines with duplicates
   - Command Palette → "editor: unique lines case sensitive"
   - Command Palette → "editor: unique lines case insensitive"
   - Removes duplicate lines

4. **Join lines:**
   - Select multiple lines
   - Command Palette → "editor: join lines"
   - Combines into single line

## 🏃 Exercise 5: Smart Editing Features  

Practice in any text file or create a new JavaScript file:

1. **Auto-indentation:**
   - Type a `{` and press Enter
   - Zed auto-indents the next line
   - Closing `}` aligns automatically

2. **Bracket/quote pairing:**
   - Type `(` - Zed adds `)`
   - Type `"` - Zed adds closing `"`
   - Type over closing bracket to skip

3. **Move line up/down:**
   - Command Palette → "editor: move line up"
   - Command Palette → "editor: move line down"
   - Maintains proper indentation!

4. **Indent/outdent:**
   - Command Palette → "editor: indent"
   - Command Palette → "editor: outdent"
   - Works with multiple lines selected

## 💡 Pro Tips

- **Clipboard History**: Some systems maintain clipboard history - paste previously copied items
- **Smart Selections**: Double-click for word, triple-click for line
- **Column Selection**: Hold Alt while selecting for column mode
- **Repeat Last Edit**: Some edits can be repeated with a single command

## ✅ Lesson Summary

You've mastered:
- Basic text insertion and deletion
- Clipboard operations (copy, cut, paste)
- Undo/redo functionality
- Text transformations (case, sort, join)
- Smart editing features

## 🎯 Practice Challenge

Create a new file and practice these editing tasks:
1. Use text transformations to clean up messy data
2. Practice line duplication and movement
3. Use join lines to combine multi-line statements
4. Apply proper indentation with indent/outdent commands
5. Use undo/redo to experiment freely

Try to complete common editing tasks using only keyboard commands!

## 📝 Notes Section

```
Your editing insights...




```

---

Excellent editing skills! Continue to `lessons/02_editing/06_multi_cursor.md`