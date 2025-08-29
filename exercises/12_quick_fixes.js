// Quick Fixes Practice
// This file contains intentional errors. Use code actions to fix them!

// Error: Missing import - use code action to add it
const fs = require('fs'); // Convert to ES6 import
const path = reqiure('path'); // Typo in 'require'

// Error: Undefined function - create it with code action
processData({ name: 'John', age: 30 });

// Error: Missing parameter
function greetUser(name) {
    // Error: 'age' is not defined - add it as parameter
    console.log(`Hello ${name}, you are ${age} years old`);
}

// Error: Unused variables - remove with code action
const unusedVariable = 42;
const anotherUnused = 'hello';

// Error: Missing return statement
function calculateTotal(items) {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    // Should return sum - add return statement
}

// Error: Using undefined variable
function processOrder() {
    // 'order' is not defined - add parameter or define it
    console.log('Processing order:', order.id);
    return order.total * TAX_RATE; // TAX_RATE not defined
}

// Error: Unreachable code
function checkStatus(status) {
    return status === 'active';
    console.log('This line is unreachable'); // Remove it
}

// Error: Missing await
async function fetchUserData(userId) {
    // Missing await - add it with code action
    const response = fetch(`/api/users/${userId}`);
    return response.json(); // This needs await too
}

// Error: == should be ===
function compareValues(a, b) {
    if (a == b) { // Use strict equality
        return true;
    }
    return false;
}

// Error: Missing error handling
async function riskyOperation() {
    const data = await fetchData(); // Wrap in try-catch
    return processData(data);
}

// Error: Deprecated method usage
const array = [1, 2, 3, 4, 5];
array.find(x => x > 3); // This is fine
// array.findIndex might be more appropriate in some cases

// Error: Missing semicolons (if your linter requires them)
const value1 = 10
const value2 = 20
const sum = value1 + value2

// Error: Inconsistent quotes
const message1 = "Hello World";
const message2 = 'Hello Universe';
const message3 = "Mixed quotes aren't good";

// Error: Function never used - might suggest removal
function neverCalledFunction() {
    return 'This function is never called';
}

// Error: Could be const
let neverReassigned = 'This should be const';
console.log(neverReassigned);

// Error: Missing JSDoc
function complexFunction(options) {
    // Add JSDoc with code action
    const { timeout = 5000, retries = 3 } = options;
    return performAction({ timeout, retries });
}

// Error: Duplicate declaration
const duplicateName = 'first';
const duplicateName = 'second'; // Rename this

// Error: Type coercion
function addNumbers(a, b) {
    return a + b; // Might concatenate strings
}

// Class with missing methods
class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.validateUser(user); // Method doesn't exist - create it
        this.users.push(user);
    }

    getUser(id) {
        return this.findById(id); // Method doesn't exist - create it
    }
}

// Missing else in if-else chain
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    // Missing else for < 60
}

/* Quick Fix Exercises:
 * 1. Use code actions to fix all the errors above
 * 2. Convert require to import statements
 * 3. Add missing function parameters
 * 4. Remove unused variables
 * 5. Add missing return statements
 * 6. Create missing functions
 * 7. Add try-catch blocks where needed
 * 8. Fix comparison operators
 * 9. Make consistent quote usage
 * 10. Convert let to const where appropriate
 */

// After fixing, this file should have no errors!