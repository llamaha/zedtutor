// Symbol Navigation Practice
// Use outline search and symbol navigation to explore this file

// Constants
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const TIMEOUT_MS = 5000;

// Enums (sort of)
const UserRole = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
};

// Classes
class DataProcessor {
    constructor(config) {
        this.config = config;
        this.cache = new Map();
    }

    // Public methods
    async process(data) {
        this.validateData(data);
        const normalized = this.normalize(data);
        const result = await this.transform(normalized);
        this.cache.set(data.id, result);
        return result;
    }

    validateData(data) {
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data format');
        }
        if (!data.id) {
            throw new Error('Data must have an id');
        }
    }

    normalize(data) {
        return {
            ...data,
            timestamp: Date.now(),
            normalized: true
        };
    }

    async transform(data) {
        // Simulate async transformation
        await this.delay(100);
        return {
            ...data,
            transformed: true
        };
    }

    // Utility methods
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    clearCache() {
        this.cache.clear();
    }

    getCacheSize() {
        return this.cache.size;
    }
}

// Function declarations
function createProcessor(options = {}) {
    const defaultConfig = {
        timeout: TIMEOUT_MS,
        retries: MAX_RETRIES,
        baseUrl: API_BASE_URL
    };
    
    return new DataProcessor({
        ...defaultConfig,
        ...options
    });
}

async function fetchUserData(userId) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
    }
    return response.json();
}

// Nested object with methods
const Analytics = {
    events: [],
    
    track(eventName, properties = {}) {
        this.events.push({
            name: eventName,
            properties,
            timestamp: Date.now()
        });
    },
    
    getEvents() {
        return [...this.events];
    },
    
    clear() {
        this.events = [];
    },
    
    // Nested namespace
    utils: {
        formatEvent(event) {
            return `${event.name} at ${new Date(event.timestamp).toISOString()}`;
        },
        
        filterByName(events, name) {
            return events.filter(e => e.name === name);
        }
    }
};

// Arrow function assignments
const processUser = async (userData) => {
    const processor = createProcessor();
    return processor.process(userData);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// More complex nested structure
class UserManager {
    constructor() {
        this.users = new Map();
        this.roles = UserRole;
    }

    async addUser(userData) {
        if (!validateEmail(userData.email)) {
            throw new Error('Invalid email');
        }
        
        const user = {
            ...userData,
            id: this.generateId(),
            createdAt: Date.now()
        };
        
        this.users.set(user.id, user);
        Analytics.track('user_added', { userId: user.id });
        return user;
    }

    getUser(userId) {
        return this.users.get(userId);
    }

    getAllUsers() {
        return Array.from(this.users.values());
    }

    updateUserRole(userId, newRole) {
        const user = this.getUser(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        if (!Object.values(this.roles).includes(newRole)) {
            throw new Error('Invalid role');
        }
        
        user.role = newRole;
        Analytics.track('role_updated', { userId, newRole });
        return user;
    }

    generateId() {
        return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
}

/* Symbol Navigation Exercises:
 * 1. Use outline search to find all classes
 * 2. Navigate to the 'process' method in DataProcessor
 * 3. Find all methods that include 'user' in the name
 * 4. Jump to the Analytics object
 * 5. Locate all async functions
 * 6. Find nested methods (Analytics.utils.formatEvent)
 */

export { DataProcessor, UserManager, Analytics, createProcessor, fetchUserData };