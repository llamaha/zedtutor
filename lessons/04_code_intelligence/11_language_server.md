# Lesson 11: Language Server Features

Unlock the power of intelligent code assistance with Language Server Protocol (LSP) features. Transform Zed into a smart coding companion that understands your code.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand Language Server Protocol basics
- Use hover information effectively
- Navigate with go-to features
- Find references and implementations
- Work with type information

## 📚 Language Server Overview

Language Servers provide:
- **Semantic Understanding**: Beyond syntax highlighting
- **Real-time Analysis**: Instant feedback as you type
- **Cross-file Intelligence**: Project-wide understanding
- **Language-specific Features**: Tailored to each language

## 🏃 Exercise 1: Hover Information

Open `exercises/11_hover_info.ts` and practice:

1. **Basic hover:**
   - Place cursor on any symbol
   - Command Palette → "editor: hover"
   - See type information and docs
   - Works on variables, functions, types

2. **Quick info access:**
   - Hover shows:
     - Type signatures
     - Documentation
     - Parameter info
     - Return types

3. **Hover on errors:**
   - Hover over error underlines
   - See detailed error messages
   - Often includes quick fixes

4. **Documentation links:**
   - Some hovers include links
   - Jump to documentation
   - See examples and details

## 🏃 Exercise 2: Go-To Navigation

Practice with `exercises/11_goto_practice.js`:

1. **Go to Definition:**
   - Cursor on symbol
   - Command Palette → "editor: go to definition"
   - Jump to where it's defined
   - Works across files

2. **Go to Type Definition:**
   - On variables/parameters
   - Command Palette → "editor: go to type definition"
   - See the type declaration
   - Understand data structures

3. **Go to Implementation:**
   - On interfaces/abstract methods
   - Command Palette → "editor: go to implementation"
   - Find concrete implementations
   - Navigate inheritance

4. **Navigation options:**
   - Regular go-to navigates to location
   - Hold Ctrl/Cmd and click for quick navigation
   - Use back/forward navigation after jumping

## 🏃 Exercise 3: Finding References

Practice finding references in any multi-file project:

1. **Find all references:**
   - Command Palette → "editor: find all references"
   - See every usage
   - Grouped by file
   - Includes imports

2. **Reference types:**
   - Read references
   - Write references
   - Declaration references
   - Different highlights

3. **Navigate references:**
   - Click to jump
   - Preview in panel
   - Systematic review
   - Refactoring preparation

4. **Reference filters:**
   - By file
   - By type
   - In current file only
   - Exclude tests

## 🏃 Exercise 4: Advanced LSP Features

Explore these advanced features in any codebase:

1. **Find callers:**
   - Use "editor: find all references" on function names
   - See where functions are called
   - Trace execution flow
   - Understand dependencies

2. **Type relationships:**
   - Use "go to implementation" on interfaces
   - Use "go to type definition" to see types
   - Navigate inheritance manually
   - Understand relationships

3. **Document symbols:**
   - Use "outline: toggle" for symbol overview
   - Shows current file structure
   - Language-specific symbols
   - Quick navigation

4. **Workspace symbols:**
   - Use "project symbols: toggle"
   - Search across entire project
   - Filter by name
   - Find implementations

## 🏃 Exercise 5: Language-Specific Features

Practice with different languages:

1. **TypeScript/JavaScript:**
   - Type inference
   - JSDoc support
   - Module resolution
   - Auto-imports

2. **Python:**
   - Type hints
   - Docstring info
   - Virtual env support
   - Import analysis

3. **Rust:**
   - Lifetime information
   - Trait implementations
   - Macro expansion
   - Cargo integration

4. **Go:**
   - Interface satisfaction
   - Package info
   - Build tags
   - Test coverage

## 💡 Pro Tips

- **Multiple Servers**: Some languages use multiple servers
- **Server Status**: Check if LSP is running for best features
- **Indexing Time**: Large projects need initial indexing
- **Restart LSP**: If features stop working, restart server
- **Configuration**: Some servers need configuration

## ✅ Lesson Summary

You've mastered:
- Hover for instant information
- Go-to navigation features
- Finding and navigating references
- Advanced LSP capabilities
- Language-specific intelligence

## 🎯 Practice Challenge

Complete the LSP treasure hunt in any project:
1. Choose a multi-file project:
   - Find the main entry point
   - Trace function calls using "find all references"
   - Find interface implementations with "go to implementation"
   - Identify unused functions by checking reference counts
   - Navigate type relationships

Use only LSP features - no manual searching!

## 📝 Notes Section

```
Language Server insights...




```

---

Code intelligence unlocked! Continue to `lessons/04_code_intelligence/12_code_actions.md`