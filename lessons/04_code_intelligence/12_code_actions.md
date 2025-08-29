# Lesson 12: Code Actions and Refactoring

Transform your code with intelligent refactoring tools. Learn to use code actions that automate common programming tasks and improve code quality.

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand and use code actions
- Perform safe symbol renaming
- Extract functions and variables
- Apply quick fixes automatically
- Use refactoring patterns effectively

## 📚 Code Actions Overview

Code actions are context-aware operations that:
- **Fix Problems**: Resolve errors and warnings
- **Refactor Code**: Improve structure without changing behavior
- **Generate Code**: Add missing implementations
- **Organize Code**: Sort imports, remove unused code

## 🏃 Exercise 1: Quick Fixes

Open `exercises/12_quick_fixes.js` and practice:

1. **Open code actions menu:**
   - Place cursor on error/warning
   - Command Palette → "editor: toggle code actions"
   - See available fixes
   - Choose appropriate action

2. **Common quick fixes:**
   - Add missing imports
   - Remove unused variables
   - Fix typos in names
   - Add missing parameters

3. **Apply fixes:**
   - Select fix from menu
   - Preview changes
   - Apply with Enter
   - Undo if needed

4. **Fix multiple issues:**
   - Some actions fix multiple problems
   - "Fix all" options
   - Careful with automatic fixes

## 🏃 Exercise 2: Rename Symbol

Practice in `exercises/12_rename_practice.ts`:

1. **Safe renaming:**
   - Place cursor on symbol
   - Command Palette → "editor: rename"
   - Type new name
   - See preview of changes

2. **Rename scope:**
   - Local variables
   - Function/method names
   - Class names
   - Imported symbols
   - Across multiple files

3. **Smart renaming:**
   - Updates all references
   - Handles different cases
   - Updates imports/exports
   - Preserves functionality

4. **Rename validation:**
   - Checks for conflicts
   - Warns about issues
   - Suggests alternatives
   - Safe refactoring

## 🏃 Exercise 3: Extract Functions

Use `exercises/12_extract_function.js`:

1. **Extract function:**
   - Select code block
   - Command Palette → "editor: toggle code actions"
   - Choose "Extract function"
   - Name the new function

2. **What gets extracted:**
   - Selected statements
   - Automatic parameter detection
   - Return value inference
   - Local variable handling

3. **Extract method:**
   - In classes
   - Becomes class method
   - Handles `this` context
   - Private/public visibility

4. **Extract considerations:**
   - Variable dependencies
   - Side effects
   - Return statements
   - Error handling

## 🏃 Exercise 4: More Refactorings

Explore more refactoring options in any codebase:

1. **Extract variable:**
   - Select expression
   - Extract to const/let
   - Reuse complex expressions
   - Improve readability

2. **Inline variable:**
   - Opposite of extract
   - Replace variable with value
   - Simplify code
   - Remove temporaries

3. **Convert functions:**
   - Arrow to function declaration
   - Async/await from promises
   - Method to function
   - Parameter patterns

4. **Move and organize:**
   - Move to new file
   - Sort imports
   - Remove unused imports
   - Organize members

## 🏃 Exercise 5: Code Generation

Practice code generation features in any TypeScript file:

1. **Generate implementations:**
   - Implement interface
   - Override methods
   - Generate constructors
   - Add missing members

2. **Generate getters/setters:**
   - From private fields
   - With validation
   - Following conventions
   - TypeScript properties

3. **Generate from usage:**
   - Create missing functions
   - Add missing parameters
   - Create types/interfaces
   - Define missing variables

4. **Import management:**
   - Auto-import symbols
   - Fix import paths
   - Convert require to import
   - Organize imports

## 💡 Pro Tips

- **Preview First**: Always preview refactoring changes
- **Test After**: Run tests after refactoring
- **Small Steps**: Refactor incrementally
- **Version Control**: Commit before major refactoring
- **Language Specific**: Available actions vary by language

## ✅ Lesson Summary

You've mastered:
- Using code actions for quick fixes
- Safe symbol renaming
- Extracting functions and variables
- Code generation features
- Refactoring best practices

## 🎯 Practice Challenge

Practice refactoring on any messy code:
1. Fix all errors using code actions
2. Extract duplicate code into functions
3. Rename variables for clarity
4. Simplify complex expressions
5. Organize imports and remove unused code

Transform it into clean, maintainable code!

## 📝 Notes Section

```
Refactoring insights...




```

---

Refactoring mastery achieved! Continue to `lessons/04_code_intelligence/13_diagnostics.md`