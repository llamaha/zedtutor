# Lesson 24: Key Bindings

Customize keyboard shortcuts to match your muscle memory and workflow. Learn to create, modify, and manage key bindings in Zed.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand key binding syntax
- View current key bindings
- Create custom shortcuts
- Resolve conflicts
- Import binding sets

## 📚 Key Bindings Overview

Key bindings in Zed:
- **Default Bindings**: Pre-configured shortcuts
- **Custom Bindings**: Your modifications
- **Context-Aware**: Different modes/contexts
- **Conflict Resolution**: Handle overlaps
- **Import/Export**: Share configurations

## 🏃 Exercise 1: Viewing Key Bindings

Explore current bindings:

1. **Open keymap:**
   - Command Palette → "zed: open keymap"
   - Your custom bindings
   - JSON format
   - Override defaults

2. **Default keymap:**
   - Command Palette → "zed: open default keymap"
   - All built-in bindings
   - Reference guide
   - Copy to customize

3. **Keymap structure:**
   ```json
   [
     {
       "bindings": {
         "cmd-s": "workspace:save",
         "cmd-shift-p": "command_palette:toggle"
       }
     }
   ]
   ```

4. **Context system:**
   - Global bindings
   - Editor-specific
   - Mode-specific
   - Priority order

## 🏃 Exercise 2: Creating Custom Bindings

Add your own shortcuts:

1. **Basic binding:**
   ```json
   {
     "bindings": {
       "cmd-shift-d": "editor:duplicate_line",
       "alt-up": "editor:move_line_up",
       "alt-down": "editor:move_line_down"
     }
   }
   ```

2. **Multi-key sequences:**
   ```json
   {
     "bindings": {
       "cmd-k cmd-s": "workspace:save_all",
       "cmd-k cmd-w": "workspace:close_all_items"
     }
   }
   ```

3. **Context-specific:**
   ```json
   {
     "context": "Editor",
     "bindings": {
       "cmd-d": "editor:add_selection_below"
     }
   }
   ```

4. **Action parameters:**
   ```json
   {
     "bindings": {
       "cmd-1": ["workspace:activate_pane", { "direction": "left" }],
       "cmd-2": ["workspace:activate_pane", { "direction": "right" }]
     }
   }
   ```

## 🏃 Exercise 3: Common Customizations

Popular binding modifications:

1. **Navigation shortcuts:**
   ```json
   {
     "bindings": {
       "cmd-left": "editor:move_to_beginning_of_line",
       "cmd-right": "editor:move_to_end_of_line",
       "cmd-up": "editor:move_to_beginning",
       "cmd-down": "editor:move_to_end"
     }
   }
   ```

2. **Editing shortcuts:**
   ```json
   {
     "bindings": {
       "cmd-shift-k": "editor:delete_line",
       "cmd-l": "editor:select_line",
       "cmd-/": "editor:toggle_line_comment"
     }
   }
   ```

3. **Window management:**
   ```json
   {
     "bindings": {
       "cmd-\\": "workspace:split_right",
       "cmd-shift-\\": "workspace:split_down",
       "cmd-w": "workspace:close_active_item"
     }
   }
   ```

4. **Quick actions:**
   ```json
   {
     "bindings": {
       "f5": "task:spawn",
       "shift-f5": "task:rerun",
       "cmd-b": "project_panel:toggle"
     }
   }
   ```

## 🏃 Exercise 4: Resolving Conflicts

Handle binding conflicts:

1. **Identify conflicts:**
   - Same key combination
   - Different contexts
   - Priority rules
   - Override behavior

2. **Resolution strategies:**
   - Unbind defaults
   - Use different keys
   - Context separation
   - Conditional bindings

3. **Unbinding keys:**
   ```json
   {
     "bindings": {
       "cmd-b": null,  // Unbind default
       "cmd-b": "my:custom_action"
     }
   }
   ```

4. **Testing bindings:**
   - Save and test
   - Check conflicts
   - Verify contexts
   - Document changes

## 🏃 Exercise 5: Advanced Key Bindings

Power user techniques:

1. **Platform-specific:**
   ```json
   {
     "bindings": {
       "alt-f4": "workspace:close_window"  // Windows/Linux
     }
   }
   ```

2. **Vim mode bindings:**
   ```json
   {
     "context": "vim_mode == normal",
     "bindings": {
       "space f": "file_finder:toggle",
       "space b": "buffer_search:toggle"
     }
   }
   ```

3. **Chained commands:**
   ```json
   {
     "bindings": {
       "cmd-shift-f": [
         "workspace:save_all",
         "project_search:toggle"
       ]
     }
   }
   ```

4. **Import key sets:**
   - VS Code bindings
   - Sublime mappings
   - Custom sets
   - Team standards

## 💡 Pro Tips

- **Muscle Memory**: Keep familiar shortcuts
- **Consistency**: Similar actions, similar keys
- **Documentation**: Comment complex bindings
- **Backup**: Save keymap before major changes
- **Gradual Change**: Add few at a time

## ✅ Lesson Summary

You've mastered:
- Key binding syntax
- Creating custom shortcuts
- Resolving conflicts
- Context-aware bindings
- Advanced techniques

## 🎯 Practice Challenge

Create your optimal key bindings:
1. Add 5 custom shortcuts you'll use daily
2. Create a multi-key sequence
3. Add context-specific bindings
4. Resolve one conflict
5. Document your additions

Share your favorite bindings!

## 📝 Notes Section

```
Key binding ideas...




```

---

Keyboard mastery complete! Continue to `lessons/08_advanced/25_ai_features.md`