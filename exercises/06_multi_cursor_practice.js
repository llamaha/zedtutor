// Multi-Cursor Editing Practice
// Use this file to practice multi-cursor techniques

// Exercise 1: Variable Renaming
// Rename all instances of 'oldName' to a new name using multi-cursor
// Try: Select 'oldName' → "editor: select all matches" → Type new name
function processData() {
    const oldName = getData();
    if (oldName) {
        console.log('Processing:', oldName);
        return transformData(oldName);
    }
    return oldName;
}

// Exercise 2: Adding Prefixes
// Add 'user_' prefix to all these variables using multi-cursor
// Try: Column selection at the start of each const name
const name = 'John Doe';
const email = 'john@example.com';
const age = 30;
const country = 'USA';
const role = 'developer';

// Exercise 3: Column Selection Practice
// Use column selection to change all values to uppercase strings
// Try: Alt/Option + drag to select the value column
const config = {
    host:     'localhost',
    port:     3000,
    database: 'myapp',
    timeout:  5000,
    retries:  3
};

// Exercise 4: Simultaneous Function Editing
// Add error handling to all these similar functions
// Try: Select 'return' → "editor: select all matches" → Edit all at once
function fetchUser(id) {
    return database.users.find(id);
}

function fetchProduct(id) {
    return database.products.find(id);
}

function fetchOrder(id) {
    return database.orders.find(id);
}

function fetchCategory(id) {
    return database.categories.find(id);
}

// Exercise 5: Pattern Replacement
// Convert all 'var' to 'const' using multi-cursor
// Try: Select 'var' → "editor: select all matches" → Type 'const'
var APP_NAME = 'MyApp';
var VERSION = '1.0.0';
var MAX_RETRIES = 3;
var TIMEOUT = 5000;
var DEBUG_MODE = true;

/* Multi-Cursor Commands:
 * - "editor: select next" - Add next occurrence to selection
 * - "editor: select all matches" - Select all occurrences
 * - "editor: add cursor above/below" - Add cursor on line above/below
 * - Alt/Option + click - Add cursor at click position
 * - Alt/Option + drag - Column selection
 * - "editor: undo selection" - Skip current occurrence
 */