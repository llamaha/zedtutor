# Lesson 18: Tasks and Terminal

Boost productivity with Zed's integrated terminal and task runner. Learn to run commands, automate workflows, and manage development tasks without leaving your editor.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Use the integrated terminal effectively
- Create and run custom tasks
- Manage multiple terminals
- Automate common workflows
- Configure terminal settings

## 📚 Terminal and Tasks Overview

Zed provides:
- **Integrated Terminal**: Full shell access
- **Task Runner**: Automated command execution
- **Multiple Sessions**: Parallel terminals
- **Task Configuration**: Reusable commands
- **Output Management**: Capture and review results

## 🏃 Exercise 1: Terminal Basics

Open and use the integrated terminal:

1. **Open terminal:**
   - Command Palette → "terminal panel: toggle focus"
   - Bottom panel appears
   - Full shell access
   - Native terminal features

2. **Terminal operations:**
   - Run commands
   - Navigate directories
   - Use shell features
   - Interactive programs

3. **Terminal management:**
   - Create new terminals (+)
   - Switch between tabs
   - Rename terminals
   - Close terminals

4. **Terminal integration:**
   - Copy/paste works
   - Click on paths to open
   - Error navigation
   - Output scrolling

## 🏃 Exercise 2: Working with Tasks

Create and run tasks:

1. **Open task configuration:**
   - Command Palette → "task: spawn"
   - See available tasks
   - Or create new task

2. **Task anatomy:**
   ```json
   {
     "label": "Build Project",
     "command": "npm run build",
     "cwd": "$ZED_WORKTREE_ROOT",
     "env": { "NODE_ENV": "production" }
   }
   ```

3. **Run tasks:**
   - Select from list
   - Watch output
   - Rerun tasks
   - Task history

4. **Task variables:**
   - `$ZED_FILE` - current file
   - `$ZED_WORKTREE_ROOT` - project root
   - `$ZED_SELECTED_TEXT` - selection
   - Environment variables

## 🏃 Exercise 3: Creating Custom Tasks

Build your own tasks:

1. **Create task file:**
   - `.zed/tasks.json`
   - Project-specific tasks
   - Version control friendly
   - Share with team

2. **Common task patterns:**
   - Build tasks
   - Test runners
   - Linters
   - Development servers

3. **Task options:**
   - `use_new_terminal` - fresh terminal
   - `allow_concurrent_runs` - multiple instances
   - `reveal` - show terminal
   - `hide` - auto-hide on success

4. **Complex tasks:**
   - Multiple commands
   - Conditional execution
   - Error handling
   - Output processing

## 🏃 Exercise 4: Terminal Workflows

Efficient terminal usage:

1. **Multiple terminals:**
   - Development server
   - Test watcher  
   - Git operations
   - Build processes

2. **Terminal shortcuts:**
   - Quick command execution
   - History navigation
   - Clear terminal
   - Kill processes

3. **Terminal and editor:**
   - Run file in terminal
   - Send selection to terminal
   - Navigate from errors
   - Integrated workflow

4. **Terminal customization:**
   - Font settings
   - Color schemes
   - Shell configuration
   - Key bindings

## 🏃 Exercise 5: Advanced Tasks

Power user task features:

1. **Task dependencies:**
   - Chain tasks
   - Pre-build steps
   - Post-process
   - Complex workflows

2. **Dynamic tasks:**
   - Input prompts
   - Variable substitution
   - Conditional logic
   - Smart execution

3. **Task organization:**
   - Group by purpose
   - Naming conventions
   - Documentation
   - Quick access

4. **Debugging tasks:**
   - Output inspection
   - Error handling
   - Logging
   - Troubleshooting

## 💡 Pro Tips

- **Task Shortcuts**: Assign keys to frequent tasks
- **Terminal Reuse**: Configure task terminal behavior
- **Output History**: Terminals maintain history
- **Task Templates**: Create reusable task patterns
- **Performance**: Close unused terminals

## ✅ Lesson Summary

You've mastered:
- Integrated terminal usage
- Creating and running tasks
- Terminal management
- Task automation
- Advanced workflows

## 🎯 Practice Challenge

Create a complete task workflow:
1. Create a build task
2. Create a test task
3. Create a "watch" task for development
4. Add a deployment task
5. Chain them together appropriately

Run all tasks and verify output!

## 📝 Notes Section

```
Terminal and task insights...




```

---

Terminal mastery achieved! Continue to `lessons/06_productivity/19_debugging.md`