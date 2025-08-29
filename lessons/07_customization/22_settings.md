# Lesson 22: Settings and Preferences

Customize Zed to match your workflow perfectly. Learn to configure settings, understand options, and create your ideal development environment.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Access and modify settings
- Understand setting categories
- Configure language-specific settings
- Create workspace settings
- Import/export configurations

## 📚 Settings Overview

Zed settings include:
- **Editor Settings**: Core editing behavior
- **UI Settings**: Interface preferences
- **Language Settings**: Per-language configuration
- **Terminal Settings**: Shell and appearance
- **Project Settings**: Workspace-specific

## 🏃 Exercise 1: Accessing Settings

Open and explore settings:

1. **Open settings:**
   - Command Palette → "zed: open settings"
   - JSON configuration file
   - Direct editing
   - Immediate application

2. **Default settings:**
   - Command Palette → "zed: open default settings"
   - See all options
   - Copy to customize
   - Reference guide

3. **Settings structure:**
   ```json
   {
     "theme": "One Dark",
     "font_size": 14,
     "tab_size": 2,
     "format_on_save": true
   }
   ```

4. **Settings location:**
   - User: `~/.config/zed/settings.json`
   - Workspace: `.zed/settings.json`
   - Priority order
   - Override behavior

## 🏃 Exercise 2: Editor Configuration

Configure core editor settings:

1. **Basic settings:**
   ```json
   {
     "font_family": "Monaco",
     "font_size": 14,
     "line_height": 1.5,
     "tab_size": 4,
     "hard_tabs": false
   }
   ```

2. **Behavior settings:**
   ```json
   {
     "word_wrap": "none",
     "show_whitespace": "selection",
     "scroll_beyond_last_line": true,
     "cursor_blink": true
   }
   ```

3. **Auto-save and format:**
   ```json
   {
     "autosave": "on_focus_change",
     "format_on_save": true,
     "remove_trailing_whitespace_on_save": true
   }
   ```

4. **Advanced editor:**
   ```json
   {
     "indent_guides": true,
     "show_line_numbers": true,
     "relative_line_numbers": false,
     "gutter": true
   }
   ```

## 🏃 Exercise 3: Language-Specific Settings

Configure per-language:

1. **Language blocks:**
   ```json
   {
     "languages": {
       "JavaScript": {
         "tab_size": 2,
         "format_on_save": true
       },
       "Python": {
         "tab_size": 4,
         "hard_tabs": false
       }
     }
   }
   ```

2. **LSP configuration:**
   ```json
   {
     "lsp": {
       "rust-analyzer": {
         "check": {
           "command": "clippy"
         }
       }
     }
   }
   ```

3. **File associations:**
   ```json
   {
     "file_types": {
       ".jsx": "JavaScript",
       ".config": "JSON"
     }
   }
   ```

4. **Language features:**
   - Formatters
   - Linters
   - Completion
   - Diagnostics

## 🏃 Exercise 4: UI and Theme Settings

Customize appearance:

1. **Theme settings:**
   ```json
   {
     "theme": "Zed Pro Dark",
     "ui_font_family": "SF Pro Display",
     "ui_font_size": 14
   }
   ```

2. **Panel configuration:**
   ```json
   {
     "project_panel": {
       "width": 240,
       "show_hidden_files": false
     },
     "terminal": {
       "font_family": "Monaco",
       "font_size": 13
     }
   }
   ```

3. **Git indicators:**
   ```json
   {
     "git": {
       "gutter": true,
       "inline_blame": {
         "enabled": true,
         "delay_ms": 500
       }
     }
   }
   ```

4. **Diagnostics display:**
   ```json
   {
     "diagnostics": {
       "inline": {
         "enabled": true,
         "max_severity": "warning"
       }
     }
   }
   ```

## 🏃 Exercise 5: Workspace Settings

Project-specific configuration:

1. **Create workspace settings:**
   - `.zed/settings.json` in project
   - Overrides user settings
   - Version control friendly
   - Team consistency

2. **Common workspace settings:**
   ```json
   {
     "tab_size": 2,
     "format_on_save": true,
     "preferred_line_length": 100,
     "show_wrap_guides": true
   }
   ```

3. **Excluded files:**
   ```json
   {
     "excluded_files": [
       "node_modules",
       "dist",
       "*.log"
     ]
   }
   ```

4. **Sharing settings:**
   - Commit to repository
   - Team standards
   - Consistent environment
   - Override personal

## 💡 Pro Tips

- **Comments**: JSON5 supports comments with //
- **Validation**: Invalid settings are ignored
- **Reload**: Most settings apply immediately
- **Backup**: Keep settings in version control
- **Experiment**: Try different configurations

## ✅ Lesson Summary

You've mastered:
- Accessing and editing settings
- Core editor configuration
- Language-specific settings
- UI customization
- Workspace settings

## 🎯 Practice Challenge

Create your perfect setup:
1. Configure editor basics (font, size, tabs)
2. Set up format on save
3. Configure Git features
4. Add language-specific settings
5. Create a workspace settings file

Export and save your configuration!

## 📝 Notes Section

```
Settings discoveries...




```

---

Settings mastery achieved! Continue to `lessons/07_customization/23_themes.md`