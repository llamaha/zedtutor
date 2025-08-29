// Code Completion Practice
// Use this file to practice various completion features

// PRACTICE 1: Basic Completion
// Start typing these and use completion:
// - cons (for const)
// - func (for function)
// - clas (for class)
// - arr (for array methods)

// PRACTICE 2: Object Method Completion
const myString = "Hello World";
// Type: myString. (dot)
// See all string methods available

const myArray = [1, 2, 3, 4, 5];
// Type: myArray. (dot)
// Explore array methods like map, filter, reduce

// PRACTICE 3: Import Completion
// Try typing these and accepting import completion:
// - readFile (from 'fs')
// - path.join (from 'path')
// - EventEmitter (from 'events')

// PRACTICE 4: Function Parameter Hints
function greetUser(name, age, location) {
    return `${name} is ${age} years old from ${location}`;
}

// Type: greetUser(
// See parameter hints as you type

// PRACTICE 5: Class and Method Completion
class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(user) {
        this.users.push(user);
    }
    
    findUserById(id) {
        return this.users.find(u => u.id === id);
    }
}

const manager = new UserManager();
// Type: manager. (dot)
// See available methods

// PRACTICE 6: Snippet Expansion
// Type these abbreviations and accept the snippet:
// - for (creates for loop)
// - if (creates if statement)
// - try (creates try-catch block)
// - log (creates console.log)

// PRACTICE 7: Chaining Completion
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Start typing this chain and use completion for each method:
// numbers
//   .filter(n => n % 2 === 0)
//   .map(n => n * 2)
//   .reduce((sum, n) => sum + n, 0)

// PRACTICE 8: Async/Await Completion
// Type: async func
// Complete the async function template

// Type: await fetch
// See completion for fetch API

// PRACTICE 9: Object Property Completion
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    }
};

// Type: config. (dot)
// Navigate nested properties

// PRACTICE 10: JSDoc Completion
// Type: /** above a function
// Press Enter to expand JSDoc template

/**
 * [Function description will appear here]
 * @param {*} param1 
 * @param {*} param2 
 * @returns {*}
 */
function documentedFunction(param1, param2) {
    return param1 + param2;
}

// PRACTICE 11: Callback Function Completion
[1, 2, 3].map(/* Start typing here and see function completion */);
Promise.resolve(42).then(/* Callback completion here */);

// PRACTICE 12: Enum-like Completion
const STATUS = {
    PENDING: 'pending',
    ACTIVE: 'active',
    COMPLETED: 'completed'
};

// Type: STATUS. (dot)
// See available status values

/* Completion Tips:
 * - Use Tab to accept suggestions
 * - Use Arrow keys to navigate options
 * - Continue typing to filter results
 * - Escape to cancel completion
 * - Ctrl/Cmd+Space to manually trigger
 * - Read documentation in completion popup
 */

// YOUR PRACTICE SPACE
// Write your own code below and practice completions: