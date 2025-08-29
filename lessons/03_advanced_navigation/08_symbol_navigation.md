# Lesson 8: Symbol Navigation

Navigate your codebase intelligently using symbols. Jump directly to functions, classes, variables, and other code constructs with precision.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Navigate to symbols within files
- Search symbols across your project
- Use go-to-definition effectively
- Find all references to symbols
- Understand symbol types and filters

## 📚 Symbol Navigation Overview

Symbols are named entities in your code:
- **Functions/Methods**: Function and method definitions
- **Classes/Types**: Class, interface, type definitions
- **Variables**: Constants, variables, properties
- **Modules**: Module and namespace declarations

## 🏃 Exercise 1: Symbol Search in File

Open `exercises/08_symbols_practice.js` and practice:

1. **Open symbol search:**
   - Command Palette → "outline panel: toggle focus"
   - Shows all symbols in current file
   - Symbol list appears in side panel

2. **Navigate symbols:**
   - Type to filter symbols
   - Use fuzzy matching
   - Press Enter to jump
   - See symbol types (function, class, etc.)

3. **Symbol hierarchy:**
   - Notice nested symbols
   - Methods inside classes
   - Properties in objects
   - Maintains code structure

4. **Quick symbol jump:**
   - Learn common symbol prefixes
   - `@` for methods in some contexts
   - `#` for private/protected

## 🏃 Exercise 2: Project-Wide Symbol Search

Practice with the full project:

1. **Open project symbols:**
   - Command Palette → "workspace: toggle project symbols"
   - Searches all symbols in project

2. **Filter by symbol type:**
   - Start with symbol type prefix
   - Functions, classes, interfaces
   - Narrow down large result sets

3. **Navigate results:**
   - See file location for each symbol
   - Preview symbol in context
   - Jump to definition

4. **Smart matching:**
   - Fuzzy search works here too
   - `init` matches `initialize`, `initConfig`
   - Capital letters as anchors

## 🏃 Exercise 3: Go to Definition

Use `exercises/08_definition_practice.ts`:

1. **Go to definition:**
   - Place cursor on symbol
   - Command Palette → "editor: go to definition"
   - Jumps to where symbol is defined

2. **Multiple ways to go to definition:**
   - Command Palette → "editor: go to definition"
   - Or hold Ctrl/Cmd and click the symbol
   - Opens in same pane by default

3. **Go to type definition:**
   - For variables/parameters
   - Command Palette → "editor: go to type definition"
   - Jumps to type/interface/class

4. **Multiple definitions:**
   - Some symbols have multiple definitions
   - Choose from list when ambiguous
   - Common with overloaded functions

## 🏃 Exercise 4: Find References

Practice in `exercises/08_references_project/`:

1. **Find all references:**
   - Cursor on symbol
   - Command Palette → "editor: find all references"
   - Shows every usage location

2. **Navigate references:**
   - Results in bottom panel
   - Grouped by file
   - Click to jump to each usage

3. **Reference types:**
   - Declarations
   - Read references
   - Write references
   - Import references

4. **Rename symbol:**
   - Command Palette → "editor: rename"
   - Updates all references
   - Safe refactoring!

## 🏃 Exercise 5: Advanced Symbol Features

Explore these advanced features in any code file:

1. **Go to implementation:**
   - For interfaces/abstract classes
   - Command Palette → "editor: go to implementation"
   - Finds concrete implementations

2. **Symbol breadcrumbs:**
   - Shows current symbol context
   - Click breadcrumbs to navigate
   - Quick parent symbol access

3. **Call hierarchy:**
   - See what calls a function
   - Trace execution paths
   - Understand code flow

4. **Type hierarchy:**
   - For classes/interfaces
   - See inheritance chain
   - Navigate type relationships

## 💡 Pro Tips

- **Symbol Caching**: Zed indexes symbols for speed
- **Language Intelligence**: Better with language servers
- **Cross-File Navigation**: Works across project boundaries
- **History Navigation**: Use back/forward after jumping
- **Multi-Language**: Symbol navigation works across languages

## ✅ Lesson Summary

You've mastered:
- Symbol search within files
- Project-wide symbol navigation
- Go to definition/implementation
- Finding all references
- Advanced symbol features

## 🎯 Practice Challenge

Create or use an existing project with multiple files:
1. Find the main entry point function
2. Use go to definition to trace function calls
3. Find all references to a commonly used function
4. Practice renaming a variable across files
5. Navigate between related classes/types

Complete using only symbol navigation!

## 📝 Notes Section

```
Symbol navigation insights...




```

---

Excellent navigation skills! Continue to `lessons/03_advanced_navigation/09_project_search.md`