# Git Practice Guide

This guide helps you practice Git features in Zed. You'll need to be in a Git repository to see these features work.

## Setup Instructions

1. **Initialize Git** (if not already in a repo):
   ```bash
   git init
   ```

2. **Create some initial commits**:
   ```bash
   echo "Initial content" > test.txt
   git add test.txt
   git commit -m "Initial commit"
   ```

## Practice Exercises

### Exercise 1: Gutter Indicators

Create a file called `gutter_practice.js`:

```javascript
// Original file content
function hello() {
    console.log("Hello, World!");
}

function goodbye() {
    console.log("Goodbye!");
}
```

Commit this file, then make these changes to see gutter indicators:

1. **Green indicator** (Added lines):
   ```javascript
   // Add this new function
   function greet(name) {
       console.log(`Hello, ${name}!`);
   }
   ```

2. **Blue indicator** (Modified lines):
   - Change `"Hello, World!"` to `"Hello, Zed!"`
   
3. **Red indicator** (Deleted lines):
   - Delete the `goodbye()` function

### Exercise 2: Git Blame Practice

1. Create a file with multiple commits:
   ```javascript
   // First commit this
   const config = {
       name: "MyApp"
   };
   ```

2. Commit it: `git add . && git commit -m "Add config"`

3. Add more content and commit:
   ```javascript
   const config = {
       name: "MyApp",
       version: "1.0.0"  // Second commit
   };
   
   // Third commit - add this function
   function getConfig() {
       return config;
   }
   ```

4. Enable inline git blame to see who added each line

### Exercise 3: Working with Hunks

Create `hunk_practice.js` and commit it:

```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        return a / b;
    }
}
```

Now make changes in different parts:

1. **First hunk** - Add error handling to divide:
   ```javascript
   divide(a, b) {
       if (b === 0) {
           throw new Error("Division by zero");
       }
       return a / b;
   }
   ```

2. **Second hunk** - Add a new method:
   ```javascript
   power(a, b) {
       return Math.pow(a, b);
   }
   ```

3. **Third hunk** - Modify the add method:
   ```javascript
   add(a, b) {
       // Adding numbers
       return a + b;
   }
   ```

Practice:
- Navigate between hunks
- Expand/collapse hunks
- Revert specific hunks

### Exercise 4: File Status Types

Create different file states:

1. **Modified (M)**:
   - Edit any committed file
   
2. **Added (A)**:
   - Create `new_file.js`
   - Stage it: `git add new_file.js`
   
3. **Untracked (?)**:
   - Create `untracked.js`
   - Don't stage it
   
4. **Deleted (D)**:
   - Delete a committed file
   - See the deletion indicator

5. **Renamed (R)**:
   - Rename a file: `git mv old.js new.js`

### Exercise 5: Branch Indicators

1. Create and switch branches:
   ```bash
   git checkout -b feature/new-feature
   ```

2. Make commits on the branch

3. Switch back to main:
   ```bash
   git checkout main
   ```

4. Observe:
   - Branch name in status bar
   - Different file states per branch
   - Merge conflict indicators (if you merge)

## Git Commands Cheatsheet

While in Zed, you might need these terminal commands:

```bash
# Status
git status

# Staging
git add <file>
git add .

# Committing
git commit -m "message"

# Branches
git branch
git checkout <branch>
git checkout -b <new-branch>

# History
git log --oneline

# Diff
git diff
git diff --staged
```

## Tips for Practice

1. **Make small changes**: Easier to see indicators
2. **Commit frequently**: Creates blame history
3. **Use meaningful messages**: Helps with blame understanding
4. **Try different file types**: See how indicators work everywhere
5. **Experiment with hunks**: Learn selective staging/reverting

## Common Scenarios

### Scenario 1: Code Review
1. Enable git blame inline
2. Navigate through changes with hunk navigation
3. Review who made what changes and when

### Scenario 2: Selective Commit
1. Make changes in multiple places
2. Use hunk navigation to review
3. Stage only specific hunks (using terminal)
4. Commit partial changes

### Scenario 3: Understanding History
1. Open an old file with history
2. Enable blame to see evolution
3. Click on blame info to see commit details
4. Understand why changes were made

Remember: Zed's Git integration helps you understand your repository's state at a glance. Use these visual indicators to work more efficiently with Git!