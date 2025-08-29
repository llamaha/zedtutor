// Diagnostic Types Demonstration
// This file shows different types of diagnostics

// ERROR: Syntax error - Missing closing parenthesis
function syntaxError() {
    console.log('This has a syntax error'
    // Red underline appears here
}

// ERROR: Reference error - Undefined variable
function referenceError() {
    console.log(undefinedVariable); // 'undefinedVariable' is not defined
    return someValue * 2; // 'someValue' is not defined
}

// ERROR: Type error in obvious cases
function typeError() {
    const num = 42;
    num.toLowerCase(); // toLowerCase doesn't exist on numbers
    
    const obj = { name: 'John' };
    obj.forEach(item => console.log(item)); // forEach doesn't exist on objects
}

// WARNING: Unused variables
function unusedWarnings() {
    const unused1 = 'This is never used'; // Warning: unused variable
    const unused2 = 42; // Warning: unused variable
    let unusedLet = 'Also unused'; // Warning: unused variable
    
    // This one is used
    const used = 'Hello';
    console.log(used);
}

// WARNING: Unreachable code
function unreachableCode() {
    return 'done';
    console.log('This line is unreachable'); // Warning: unreachable code
    const afterReturn = 'Never executed'; // Warning: unreachable
}

// WARNING: Missing semicolons (if linter requires them)
const noSemicolon1 = 'value1' // Warning: missing semicolon
const noSemicolon2 = 'value2' // Warning: missing semicolon

// WARNING: == vs === comparison
function comparisonWarning(value) {
    if (value == null) { // Warning: use === instead
        return 'null or undefined';
    }
    if (value == '5') { // Warning: use === for strict equality
        return 'five';
    }
}

// INFO/HINT: Could be const
function constHint() {
    let shouldBeConst = 'This value never changes'; // Hint: use const
    console.log(shouldBeConst);
    
    let actuallyChanges = 'initial';
    actuallyChanges = 'changed'; // This one needs let
    console.log(actuallyChanges);
}

// WARNING: Function complexity
function tooComplex(a, b, c, d, e) { // Warning: too many parameters
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    if (e > 0) { // Warning: deeply nested
                        return 'too complex';
                    }
                }
            }
        }
    }
}

// ERROR: Duplicate declarations
const duplicate = 'first';
const duplicate = 'second'; // Error: already declared

// WARNING: Deprecated usage (if applicable)
function deprecatedUsage() {
    // Some libraries mark functions as deprecated
    // This would show a strikethrough and warning
    escape('some text'); // Deprecated global function
}

// ERROR: Missing required parameters
function requiresParams(name, age, email) {
    return `${name} is ${age} years old`;
}
requiresParams('John'); // Error: missing parameters

// WARNING: Implicit any (in TypeScript mode)
function implicitAny(param) { // In TS: Parameter implicitly has 'any' type
    return param.someMethod();
}

// ERROR: Async function issues
async function asyncIssues() {
    const result = fetch('/api/data'); // Missing await
    return result.json(); // This won't work as expected
}

// WARNING: Console.log statements (often configured as warning)
function hasConsoleLog() {
    console.log('Debug output'); // Warning in production code
    console.error('Error output'); // Warning in production code
    return 'done';
}

// ERROR: JSON parsing issues
function jsonIssues() {
    const invalid = JSON.parse('not valid json'); // Will throw error
    const valid = JSON.parse('{"key": "value"}'); // This is fine
}

// WARNING: Empty blocks
function emptyBlocks() {
    if (true) {
        // Warning: empty block
    }
    
    try {
        riskyOperation();
    } catch (e) {
        // Warning: empty catch block
    }
}

// INFO: TODO comments (often shown as info)
function todoComments() {
    // TODO: Implement this function
    // FIXME: This needs attention
    // HACK: Temporary workaround
    return 'not implemented';
}

// ERROR: Class issues
class MyClass {
    constructor() {
        this.property = 'value';
    }
    
    duplicateMethod() {
        return 'first';
    }
    
    duplicateMethod() { // Error: duplicate method
        return 'second';
    }
}

// Diagnostic summary:
// - Red underlines = Errors (must fix)
// - Yellow underlines = Warnings (should fix)
// - Blue underlines = Info/Hints (consider fixing)
// - Scrollbar shows markers for all diagnostics
// - Status bar shows counts

/* Diagnostic Observation Exercises:
 * 1. Look at the different underline colors
 * 2. Hover over each diagnostic to see details
 * 3. Check the scrollbar for diagnostic markers
 * 4. Look at the status bar for counts
 * 5. Try to identify each diagnostic type
 * 6. Notice which need immediate fixing (errors)
 * 7. See which are suggestions (warnings/hints)
 */