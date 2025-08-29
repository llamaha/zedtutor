// Diagnostic Navigation Practice
// This file has multiple errors scattered throughout
// Practice navigating between them

import { SomeType } from './nonexistent-module'; // Error: Module not found

// Error: Interface missing properties
interface User {
    id: string;
    name: string;
    email: string;
}

// Error: Missing required properties
const user1: User = {
    id: '123',
    name: 'John'
    // Missing 'email' property
};

// Warning: Unused function
function unusedFunction() {
    return 'This function is never called';
}

// Error: Type mismatch
function processNumber(num: number): string {
    return num; // Error: Type 'number' is not assignable to type 'string'
}

// Error: Possibly undefined
function handleData(data?: { value: number }) {
    console.log(data.value); // Error: Object is possibly 'undefined'
    
    // More errors in nested code
    if (data) {
        const result = data.value.toFixed(); // Error: needs argument
    }
}

// Warning: Unreachable code
function checkStatus(status: string) {
    if (status === 'active') {
        return true;
    } else {
        return false;
    }
    console.log('This is unreachable'); // Warning
}

// Error: Incorrect implementation
abstract class BaseClass {
    abstract getData(): string;
    abstract processData(data: string): void;
}

class Implementation extends BaseClass {
    getData() {
        return 123; // Error: Wrong return type
    }
    // Error: Missing processData implementation
}

// Multiple errors in one function
function multipleIssues() {
    const arr = [1, 2, 3];
    const result = arr.map(); // Error: Expected 1 argument
    
    const obj = { a: 1 };
    obj.b.c; // Error: Property 'b' does not exist
    
    noSuchFunction(); // Error: Cannot find name
    
    return undefindVariable; // Error: Typo in variable name
}

// Type errors with generics
function genericErrors<T>(items: T[]): T {
    return items; // Error: Type 'T[]' is not assignable to type 'T'
}

// Async/await errors
async function asyncErrors() {
    const data = await 'not a promise'; // Warning: await has no effect
    
    fetch('/api/data')
        .then(res => res.json)  // Error: json is a method, needs ()
        .catch(); // Error: Expected 1 argument
}

// Class with multiple issues
class ProblematicClass {
    private value: number;
    
    constructor() {
        // Error: Property 'value' has no initializer
    }
    
    getValue(): number {
        return this.valeu; // Error: Typo - property doesn't exist
    }
    
    setValue(val: string) { // Warning: Parameter type doesn't match property
        this.value = val; // Error: Type 'string' not assignable to 'number'
    }
    
    static staticMethod() {
        return this.value; // Error: 'value' is instance property
    }
}

// Union type errors
type Status = 'active' | 'inactive' | 'pending';

function handleStatus(status: Status) {
    if (status === 'active') {
        console.log('Active');
    } else if (status === 'completed') { // Error: not in union type
        console.log('Completed');
    }
}

// Array method errors
const numbers = [1, 2, 3, 4, 5];
numbers.filter(); // Error: Expected 1 argument
numbers.reduce(); // Error: Expected 1-2 arguments
numbers.sort((a, b) => a > b); // Warning: Should return number

// Promise errors
function promiseIssues() {
    return new Promise(); // Error: Expected 1 argument
}

// Import usage error
const instance = new SomeType(); // Error: SomeType not found

// Const assertion needed
let config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};

config = { apiUrl: 'new-url' }; // Error: Missing 'timeout' property

// More syntax errors at the end
function syntaxError() {
    const obj = {
        key: 'value',
        another: 'value'  // Missing closing brace
    
} // Error: Unexpected token

/* Navigation Practice:
 * 1. Use "go to diagnostic" to jump to first error
 * 2. Use "go to next diagnostic" to cycle through all
 * 3. Use "go to prev diagnostic" to go backwards
 * 4. Try jumping only between errors (skip warnings)
 * 5. Navigate to specific line numbers with errors
 * 6. Use the problems panel to see all at once
 * 7. Click on diagnostics in the problems panel
 * 8. Notice how navigation preserves cursor history
 * 
 * Goal: Visit every diagnostic in the file systematically
 */