# Project Search Exercise

This folder contains multiple files to practice project-wide searching.

## Search Tasks

1. **Find all TODO comments** across all files
   - How many TODO items are there?
   - Which files contain TODOs?

2. **Find all console.log statements**
   - Search for different variations
   - Consider removing them for production

3. **Find all error handling**
   - Search for `catch` blocks
   - Search for `error` (case insensitive)
   - Find Error constructors

4. **Find API endpoints**
   - Search for `/v1/` to find version 1 endpoints
   - Find all URL patterns

5. **Find specific patterns with filters**
   - Search for "error" only in .js files
   - Search for "TODO" excluding .json files
   - Search for "console" in utils.js only

## Advanced Searches

Try these regex patterns:
- `console\.(log|error|warn)` - All console methods
- `TODO:.*$` - TODO with descriptions
- `https?://` - HTTP(S) URLs
- `/v\d+/` - Version patterns (v1, v2, etc.)

## Project Search Tips

- Use file filters to narrow results
- Click on results to preview
- Use keyboard shortcuts to navigate results
- Remember searches for quick re-use