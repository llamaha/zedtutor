# Project Search Exercise

This project structure simulates a real application to practice project-wide searching.

## Search Challenges

### Basic Searches
1. Find all `TODO` comments across the project
2. Search for all `logger` usage
3. Find all `async` functions
4. Locate all `throw new Error` statements

### Filtered Searches
1. Find `TODO` only in `.js` files
2. Search for `import` statements, excluding test files
3. Find `logger` usage only in the services directory
4. Search for `FIXME` comments in utilities

### Pattern Searches
1. Use regex to find all function definitions: `function\s+\w+`
2. Find all class definitions: `class\s+\w+`
3. Search for all method calls: `\.\w+\(`
4. Find all string literals: `['"][^'"]+['"]`

### Advanced Workflows
1. Find and count all error handling blocks (`try/catch`)
2. Locate all database operations (search for `this.db`)
3. Find all commented code (lines starting with `//`)
4. Search for security issues (hardcoded passwords, tokens)

## File Structure

```
09_search_project/
├── app.js                 # Main application
├── config.js             # Configuration
├── services/             # Business logic
│   ├── user-service.js
│   └── auth-service.js
├── database/             # Database layer
│   └── connection.js
├── utils/                # Utilities
│   ├── logger.js
│   └── validators.js
└── tests/                # Test files
```

## Search Tips

- Use include patterns: `services/**/*.js`
- Exclude directories: `!node_modules,!dist`
- Combine searches: Find TODO but not in tests
- Use project search history for quick re-runs

## Practice Goals

1. Master include/exclude patterns
2. Learn efficient result navigation
3. Practice search and replace workflows
4. Understand when to use different search types