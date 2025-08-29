# Lesson 2: Understanding Zed's Interface

Now that you're comfortable with the Command Palette, let's explore Zed's user interface and learn how to navigate efficiently.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Identify all major UI components
- Navigate between different panels
- Understand the tab system
- Use the integrated terminal

## 📚 Zed's Interface Components

### 1. **The Editor Area** (Center)
The main area where you write and edit code. Features:
- Multiple tabs for different files
- Split panes for side-by-side editing
- Syntax highlighting
- Code folding

**Command Palette commands:**
- `workspace: new` - Create new file
- `workspace: save` - Save current file  
- `editor: fold` - Fold code blocks
- `editor: unfold lines` - Unfold code blocks

### 2. **The Project Panel** (Left)
Your file explorer. Shows:
- Directory tree structure
- File icons based on type
- Git status indicators
- Quick file operations

**Command Palette commands:**
- `project panel: toggle focus` - Toggle panel (see exercise below)
- `workspace: toggle left dock` - Hide/show entire left dock
- `workspace: close all docks` - Hide all panels at once
- Right-click in panel for context menu options:
  - New File
  - New Directory  
  - Copy Path
  - Copy Relative Path
  - Reveal in File Manager

### 3. **The Terminal Panel** (Bottom)
Integrated terminal for:
- Running commands
- Viewing output
- Multiple terminal tabs

**Command Palette commands:**
- `terminal panel: toggle focus` - Show/hide terminal
- `workspace: new terminal` - Create new terminal tab tab
- `terminal: clear` - Clear terminal output

### 4. **The Status Bar** (Bottom)
Shows important information:
- Current file path
- Language mode
- Line/column position
- Git branch
- Diagnostics count

**Command Palette commands:**
- `go to line: toggle` - Jump to specific line
- `language selector: toggle` - Change syntax highlighting  
- `diagnostics: deploy` - Show all project diagnostics

## 🏃 Exercise 1: Exploring the Project Panel

1. **Toggle the Project Panel:**
   - Command Palette → "project panel: toggle focus"
   - If hidden: appears and gets focus
   - If visible but not focused: gets focus
   - If focused: disappears
   - Alternative: "workspace: toggle left dock" to hide entire left side

2. **Navigate with keyboard:**
   - Click on a file in the project panel
   - Use arrow keys to move up/down
   - Press Enter to open a file
   - Press Space to preview without opening

3. **Expand/Collapse folders:**
   - Use arrow keys to select a folder
   - Right arrow to expand
   - Left arrow to collapse

## 🏃 Exercise 2: Working with Tabs

1. **Open multiple files:**
   - Open `exercises/02_tabs_practice_1.txt`
   - Open `exercises/02_tabs_practice_2.txt`
   - Open `exercises/02_tabs_practice_3.txt`

2. **Navigate between tabs:**
   - Command Palette → "tab switcher: toggle"
   - Or use `pane: activate next item` and `pane: activate previous item`

3. **Rearrange tabs:**
   - Drag tabs to reorder them
   - Try moving a tab to create a split view

4. **Close tabs:**
   - Command Palette → "workspace: close active item"
   - Or click the × on the tab

## 🏃 Exercise 3: Using Split Panes

1. **Create a split:**
   - Command Palette → "workspace: split right"
   - You now have two panes!

2. **Move between panes:**
   - Command Palette → "workspace: activate pane in direction"
   - Or click on a pane to focus it

3. **Open different files in each pane:**
   - Great for comparing files
   - Or viewing related code

4. **Close a pane:**
   - Command Palette → "workspace: close active pane"

## 🏃 Exercise 4: The Integrated Terminal

1. **Open the terminal:**
   - Command Palette → "terminal panel: toggle focus"
   - The terminal appears at the bottom

2. **Try these terminal features:**
   - Type `pwd` to see current directory
   - Type `ls` (or `dir` on Windows) to list files
   - Create a new terminal tab with the + button

3. **Resize the terminal:**
   - Drag the top edge up or down
   - Double-click the edge to maximize/restore

## 🏃 Exercise 5: The Outline Panel

1. **Open a code file:**
   - Open `exercises/02_outline_example.js`

2. **Toggle the Outline Panel:**
   - Command Palette → "outline panel: toggle focus"
   - See the structure of your code

3. **Navigate using outline:**
   - Click on functions/classes to jump
   - Search within the outline

## 💡 Pro Tips

- **Focus Mode**: Hide all panels with Command Palette → "workspace: toggle focus mode"
- **Zen Mode**: Command Palette → "workspace: toggle zoom" for distraction-free editing
- **Panel Positions**: Most panels can be moved to different sides
- **Persistent Layout**: Zed remembers your layout preferences

## ✅ Lesson Summary

You've learned about:
- The Project Panel for file navigation
- Tab management and navigation
- Split panes for multi-file editing
- The integrated terminal
- The Outline Panel for code structure

## 🎯 Practice Challenge

Set up your ideal workspace:
1. Open 3 files in tabs
2. Create a vertical split
3. Open the terminal at the bottom
4. Toggle the outline panel
5. Arrange everything to your liking

Take a screenshot of your layout to remember it!

## 📝 Notes Section

```
Your notes here...




```

---

Excellent progress! Ready for Lesson 3? Open `lessons/01_basics/03_file_management.md`