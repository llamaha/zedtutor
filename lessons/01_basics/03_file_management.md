# Lesson 3: File Management in Zed

Master file operations in Zed - creating, opening, saving, and organizing your project files efficiently.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Create and save files
- Navigate files quickly
- Use the file finder
- Understand file operations
- Work with multiple files efficiently

## 📚 File Operations Overview

Zed provides multiple ways to work with files:
1. **Project Panel** - Visual file tree
2. **File Finder** - Quick fuzzy search
3. **Command Palette** - File operations
4. **Recent Files** - Quick access to recent work

**Key Command Palette commands:**
- `workspace: new file` - Create new file
- `workspace: open` - Open file browser
- `workspace: save` - Save current file
- `workspace: save as` - Save with new name
- `workspace: save all` - Save all modified files
- `workspace: close active dock` - Close current file
- `file finder: toggle` - Quick file search

## 🏃 Exercise 1: Creating Files

Let's create files in different ways:

1. **Via Command Palette:**
   - Command Palette → "workspace: new"
   - Type: `Hello, this is my new file!`
   - Command Palette → "workspace: save"
   - Save as: `exercises/03_my_first_file.txt`

2. **Via Project Panel:**
   - Right-click on the `exercises` folder
   - Select "New File"
   - Name it: `03_another_file.md`
   - Add some content and save

   **Via Project Panel context menu:**
   - Right-click in folder → "New File"
   - Right-click in folder → "New Directory"

3. **Creating with specific language:**
   - Command Palette → "workspace: new"
   - Save as: `exercises/03_code_example.js`
   - Notice how Zed automatically detects JavaScript!

## 🏃 Exercise 2: The File Finder

The File Finder is one of Zed's most powerful features:

1. **Open File Finder:**
   - Command Palette → "file finder: toggle"
   - Or use the shortcut shown in the command

2. **Try these searches:**
   - Type: "exercise" - see all exercise files
   - Type: "03" - see files with 03 in the name
   - Type: "md" - see all markdown files

3. **Fuzzy matching:**
   - Type: "olex" - matches "**o**utline_**ex**ample"
   - Type: "tc1" - matches "**t**abs_pra**c**tice_**1**"
   - The matched letters are highlighted!

4. **Navigate results:**
   - Use arrow keys to move through results
   - Press Enter to open
   - Press Escape to cancel

## 🏃 Exercise 3: Working with Multiple Files

1. **Open multiple files quickly:**
   - Use File Finder to open `01_welcome.md`
   - Without closing finder, hold Cmd/Ctrl and Enter
   - This opens the file in a split window!
   - Open 2-3 more files this way

2. **Recent files:**
   - Command Palette → "file finder: toggle"
   - Notice recent files appear at the top
   - Great for switching between files you're actively working on

3. **Save All:**
   - Make small changes in 2-3 files
   - Command Palette → "workspace: save all"
   - All modified files are saved at once!

## 🏃 Exercise 4: File Navigation Shortcuts

1. **Go to previous/next file:**
   - Command Palette → "pane: go back"
   - Command Palette → "pane: go forward"
   - Like browser back/forward for files!

   **Additional navigation commands:**
   - `pane: activate next item` - Next tab
   - `pane: activate last item` - Previous tab
   - `pane: reopen closed item` - Reopen closed file

2. **Quick file switching:**
   - Open several files
   - Command Palette → "tab switcher: toggle"
   - Type to filter open files
   - Much faster than clicking tabs!

## 🏃 Exercise 5: Advanced File Operations

1. **Rename a file:**
   - In Project Panel, right-click `exercises/03_my_first_file.txt`
   - Select "Rename"
   - Change to: `03_renamed_file.txt`

2. **Duplicate a file:**
   - Right-click the renamed file
   - Select "Duplicate"
   - Name it: `03_duplicate.txt`

3. **Delete safely:**
   - Right-click the duplicate
   - You should see two options:
     - "Trash" - moves to system trash (recoverable)
     - "Delete" - permanently deletes (be careful!)
   - Choose "Trash" for safe deletion

4. **Copy file path:**
   - Right-click any file
   - Select "Copy Path" or "Copy Relative Path"
   - Useful for documentation or terminal commands

   **Via context menu:**
   - Right-click file → "Copy Path" (absolute)
   - Right-click file → "Copy Relative Path"

## 💡 Pro Tips

- **File Finder Patterns:**
  - Use `/` to search in specific folders: `exercises/03`
  - Capital letters create anchors: `OE` matches `OutlineExample`

- **Quick New File:**
  - In File Finder, if no match exists, press Enter to create new file!

- **File History:**
  - Zed remembers your file history per project
  - Recently edited files appear higher in search results

- **Exclude Patterns:**
  - Zed respects `.gitignore` files
  - Hidden files/folders don't appear in finder by default

## ✅ Lesson Summary

You've learned:
- Multiple ways to create files
- File Finder for lightning-fast navigation
- Managing multiple files efficiently
- File operations (rename, duplicate, delete)
- Navigation history and shortcuts

## 🎯 Practice Challenge

Create a mini-project structure:
```
exercises/my-app/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
└── README.md
```

1. Create all folders and files
2. Add basic content to each
3. Use File Finder to jump between them
4. Save all files at once

## 📝 Notes Section

```
Your notes here...




```

---

Great progress! You're mastering Zed's fundamentals. Continue to `lessons/02_editing/04_navigation.md`
