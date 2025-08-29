// Go-To Navigation Practice
// Practice using go-to definition, type definition, and implementation

// Import to practice cross-file navigation
import { Logger } from './logger-stub.js';
import { Database } from './database-stub.js';
import { CONFIG } from './config-stub.js';

// Base class - go to definition from usage
class BaseService {
    constructor() {
        this.logger = new Logger();
        this.isInitialized = false;
    }

    // Abstract method - find implementations
    async initialize() {
        throw new Error('Must implement initialize method');
    }

    log(message) {
        // Go to definition of logger
        this.logger.info(message);
    }
}

// Implementation - go to definition of BaseService
class UserService extends BaseService {
    constructor(database) {
        super();
        // Go to definition of Database
        this.db = database;
        this.cache = new Map();
    }

    // Override abstract method
    async initialize() {
        this.log('Initializing UserService');
        // Go to definition of CONFIG
        await this.db.connect(CONFIG.database);
        this.isInitialized = true;
    }

    // Method using imported types
    async createUser(userData) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        // Go to definition of generateId
        const userId = this.generateId();
        
        const user = {
            id: userId,
            ...userData,
            createdAt: new Date()
        };

        // Go to implementation of validateUser
        if (!this.validateUser(user)) {
            throw new Error('Invalid user data');
        }

        this.cache.set(userId, user);
        await this.db.insert('users', user);
        
        return user;
    }

    // Local method definition
    generateId() {
        return `user_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    }

    // Another local method
    validateUser(user) {
        // Go to definition of validation helpers
        return validateEmail(user.email) && validateUsername(user.username);
    }

    // Method referencing other methods
    async findUser(userId) {
        // Try go-to on cache methods
        if (this.cache.has(userId)) {
            return this.cache.get(userId);
        }

        // Go to db.query implementation
        const result = await this.db.query('users', { id: userId });
        return result[0] || null;
    }
}

// Standalone functions
function validateEmail(email) {
    // This is referenced from validateUser
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateUsername(username) {
    // Also referenced from validateUser
    return username && username.length >= 3 && username.length <= 20;
}

// Factory function pattern
function createService(type, database) {
    switch (type) {
        case 'user':
            // Go to UserService definition
            return new UserService(database);
        case 'product':
            // Go to ProductService definition
            return new ProductService(database);
        default:
            throw new Error(`Unknown service type: ${type}`);
    }
}

// Another service for cross-reference
class ProductService extends BaseService {
    constructor(database) {
        super();
        this.db = database;
    }

    async initialize() {
        this.log('Initializing ProductService');
        await this.db.connect(CONFIG.database);
        this.isInitialized = true;
    }

    async createProduct(productData) {
        // References shared validation
        if (!this.validateProduct(productData)) {
            throw new Error('Invalid product data');
        }

        // Go to definition of shared helper
        const productId = generateProductId();
        
        return this.db.insert('products', {
            id: productId,
            ...productData
        });
    }

    validateProduct(product) {
        return product.name && product.price > 0;
    }
}

// Shared helper function
function generateProductId() {
    return `prod_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

// Object with methods
const ServiceRegistry = {
    services: new Map(),
    
    // Go to definition from usage
    register(name, service) {
        this.services.set(name, service);
    },
    
    // Method calling other methods
    get(name) {
        if (!this.has(name)) {
            throw new Error(`Service not found: ${name}`);
        }
        return this.services.get(name);
    },
    
    has(name) {
        return this.services.has(name);
    },
    
    // Method using external reference
    async initializeAll() {
        for (const [name, service] of this.services) {
            console.log(`Initializing ${name}`);
            // Go to implementation of initialize
            await service.initialize();
        }
    }
};

// Usage examples to practice navigation
async function main() {
    // Go to definition of Database
    const database = new Database();
    
    // Go to definition of createService
    const userService = createService('user', database);
    const productService = createService('product', database);
    
    // Go to definition of register
    ServiceRegistry.register('users', userService);
    ServiceRegistry.register('products', productService);
    
    // Go to definition/implementation of initializeAll
    await ServiceRegistry.initializeAll();
    
    // Navigate to method definitions
    const user = await userService.createUser({
        username: 'johndoe',
        email: 'john@example.com'
    });
    
    // Go to definition of findUser
    const foundUser = await userService.findUser(user.id);
    
    console.log('User created and found:', foundUser);
}

/* Go-To Navigation Exercises:
 * 1. Go to definition of imported classes (Logger, Database, CONFIG)
 * 2. Go to BaseService from its usage in extends
 * 3. Find all implementations of initialize() method
 * 4. Navigate to validateEmail from its usage
 * 5. Go to definition of methods within objects (ServiceRegistry)
 * 6. Try go-to on built-in methods (Map.set, Array methods)
 * 7. Navigate between related services
 * 8. Use peek definition vs go to definition
 */

// Export for cross-file navigation practice
export { UserService, ProductService, ServiceRegistry, createService };