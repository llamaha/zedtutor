# Lesson 27: Vim Mode (Optional)

Experience the power of modal editing with Zed's Vim emulation. This optional lesson introduces Vim concepts integrated with Zed's modern features.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Enable and configure Vim mode
- Understand modal editing basics
- Use Vim motions and commands
- Combine Vim with Zed features
- Customize Vim bindings

## 📚 Vim Mode Overview

Zed's Vim integration:
- **Modal Editing**: Different modes for different tasks
- **Vim Motions**: Efficient cursor movement
- **Text Objects**: Smart selections
- **Zed Integration**: Modern features preserved
- **Customizable**: Adapt to your style

## 🏃 Exercise 1: Enabling Vim Mode

Get started with Vim:

1. **Enable Vim mode:**
   - Command Palette → "vim: toggle"
   - Or in settings:
   ```json
   {
     "vim_mode": true
   }
   ```

2. **Mode indicators:**
   - NORMAL: Navigation/commands
   - INSERT: Text entry
   - VISUAL: Selection
   - Status bar shows mode

3. **Basic mode switching:**
   - `i` - Enter INSERT mode
   - `Esc` - Return to NORMAL
   - `v` - Enter VISUAL mode
   - `:` - Command mode

4. **First movements:**
   - `h,j,k,l` - Left, down, up, right
   - `w,b` - Word forward/back
   - `0,$` - Line start/end
   - `gg,G` - File start/end

## 🏃 Exercise 2: Vim Motions

Efficient navigation:

1. **Word movements:**
   - `w` - Next word start
   - `e` - Next word end
   - `b` - Previous word
   - `W,E,B` - WORD movements

2. **Line movements:**
   - `0` - Line beginning
   - `^` - First non-blank
   - `$` - Line end
   - `_` - First non-blank

3. **Vertical movements:**
   - `{,}` - Paragraph
   - `(,)` - Sentence
   - `Ctrl-d,u` - Half page
   - `Ctrl-f,b` - Full page

4. **Jumping:**
   - `f{char}` - Find char
   - `t{char}` - Till char
   - `%` - Matching bracket
   - `*,#` - Word search

## 🏃 Exercise 3: Vim Operators

Text manipulation:

1. **Basic operators:**
   - `d` - Delete
   - `c` - Change
   - `y` - Yank (copy)
   - `p` - Paste

2. **Operator + motion:**
   - `dw` - Delete word
   - `d$` - Delete to line end
   - `ci"` - Change inside quotes
   - `ya{` - Yank around braces

3. **Text objects:**
   - `iw,aw` - Inner/around word
   - `is,as` - Inner/around sentence
   - `i",a"` - Inner/around quotes
   - `it,at` - Inner/around tags

4. **Repeat and undo:**
   - `.` - Repeat last change
   - `u` - Undo
   - `Ctrl-r` - Redo
   - `@:` - Repeat command

## 🏃 Exercise 4: Zed-Specific Vim

Integration with Zed features:

1. **Multi-cursor Vim:**
   - `gb` - Add cursor
   - Normal mode with cursors
   - Vim motions apply to all
   - Visual block mode

2. **Zed commands in Vim:**
   - `:w` - Save file
   - `:q` - Close file
   - `:e {file}` - Open file
   - `:sp,:vsp` - Split windows

3. **Custom mappings:**
   ```json
   {
     "vim": {
       "normal": {
         "<space>f": "file_finder:toggle",
         "<space>s": "project_search:toggle"
       }
     }
   }
   ```

4. **Modern features:**
   - LSP with Vim
   - Git integration
   - Multi-cursor
   - All Zed features

## 🏃 Exercise 5: Advanced Vim

Power user techniques:

1. **Macros:**
   - `q{letter}` - Record macro
   - `q` - Stop recording
   - `@{letter}` - Play macro
   - `@@` - Repeat macro

2. **Marks:**
   - `m{letter}` - Set mark
   - `'{letter}` - Jump to mark
   - `` `{letter}`` - Jump to exact position
   - `:marks` - List marks

3. **Advanced motions:**
   - `gd` - Go to definition
   - `gf` - Go to file
   - `]m,[m` - Next/prev method
   - `]c,[c` - Next/prev change

4. **Vim surround:**
   - `cs"'` - Change quotes
   - `ds"` - Delete quotes
   - `ysiw"` - Surround word
   - Visual + `S"`

## 💡 Pro Tips

- **Gradual Learning**: Start with basic motions
- **Think in Objects**: Word, sentence, paragraph
- **Compose Commands**: Operator + motion
- **Practice Daily**: Build muscle memory
- **Customize Gradually**: Add mappings as needed

## ✅ Lesson Summary

You've learned:
- Vim mode basics
- Essential motions
- Operators and text objects
- Zed-Vim integration
- Advanced techniques

## 🎯 Practice Challenge

Vim editing challenge:
1. Navigate a file using only Vim motions
2. Delete 3 words using different methods
3. Change text inside quotes/brackets
4. Create a macro to format lines
5. Use marks to jump between sections

Time yourself - Vim is about efficiency!

## 📝 Notes Section

```
Vim discoveries...




```

---

Vim power unlocked! Continue to `lessons/08_advanced/28_congratulations.md`