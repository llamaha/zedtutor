// Find and Replace Practice
// Use this file to practice find and replace operations

// Exercise 1: Replace all 'var' with 'let' or 'const' as appropriate
var userName = 'John Doe';
var userAge = 25;
var isActive = true;

function processUser() {
    var result = {};
    var temp = userName;
    var MAX_AGE = 100;
    
    if (userAge < MAX_AGE) {
        var status = 'valid';
        result.status = status;
    }
    
    return result;
}

// Exercise 2: Update old API endpoints (v1 -> v2)
const endpoints = {
    users: 'https://api.example.com/v1/users',
    posts: 'https://api.example.com/v1/posts',
    comments: 'https://api.example.com/v1/comments',
    auth: 'https://api.example.com/v1/auth',
    profile: 'https://api.example.com/v1/profile'
};

// Exercise 3: Standardize console.log statements
console.log("Debug: Starting application");
console.log('User data:', userName);
console.log("Processing " + userAge + " items");
console.log(`Status: ${isActive}`);
console.log("Error:", "Something went wrong");

// Exercise 4: Fix inconsistent quotes (make all single quotes)
const messages = {
    welcome: "Welcome to the app",
    error: "An error occurred",
    success: 'Operation successful',
    warning: "Please be careful",
    info: 'For your information'
};

// Exercise 5: Rename variables (userId -> userID)
function getUserData(userId) {
    const userIdString = userId.toString();
    console.log('Fetching data for userId:', userId);
    
    return {
        userId: userId,
        userIdHash: hash(userId),
        userIdDisplay: `User #${userId}`
    };
}

// Exercise 6: Replace TODO with FIXME
// TODO: Add error handling
// TODO: Implement caching
// ToDo: Validate input
// todo: Optimize performance
// TODO: Write tests

// Exercise 7: Smart case replacement
// Replace 'item' with 'element' preserving case
const item = 'test';
const Item = 'Test';
const ITEM = 'TEST';
const myItem = 'myTest';
const MyItem = 'MyTest';

/* Replace Practice Tips:
 * - Use case sensitivity when needed
 * - Preview changes before replacing all
 * - Use regex for complex patterns
 * - Remember undo works on replace all
 */