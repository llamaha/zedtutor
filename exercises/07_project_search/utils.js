// Utility Functions
// Search for console.log statements that should be removed

export function formatDate(date) {
    console.log('Formatting date:', date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function validateEmail(email) {
    console.log('Validating email:', email);
    // TODO: Use better regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function generateID() {
    console.log('Generating new ID');
    return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// TODO: Add unit tests for all utility functions
// TODO: Document function parameters

export function deepClone(obj) {
    console.log('Deep cloning object');
    return JSON.parse(JSON.stringify(obj));
}