// Outline Panel Basics
// Use this file to practice basic outline panel navigation

// Constants Section
const API_VERSION = '2.0';
const MAX_REQUESTS = 100;
const CACHE_DURATION = 3600;

// Configuration Object
const config = {
    server: {
        host: 'localhost',
        port: 3000,
        secure: false
    },
    database: {
        host: 'db.example.com',
        port: 5432,
        name: 'myapp'
    },
    features: {
        caching: true,
        logging: true,
        analytics: false
    }
};

// Utility Functions
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36);
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main Application Class
class Application {
    constructor(options = {}) {
        this.name = options.name || 'MyApp';
        this.version = options.version || '1.0.0';
        this.config = { ...config, ...options.config };
        this.modules = new Map();
    }

    // Initialization Methods
    async initialize() {
        console.log(`Initializing ${this.name} v${this.version}`);
        await this.loadModules();
        await this.connectDatabase();
        await this.startServer();
    }

    async loadModules() {
        // Load application modules
        this.modules.set('auth', new AuthModule());
        this.modules.set('api', new ApiModule());
        this.modules.set('cache', new CacheModule());
    }

    async connectDatabase() {
        console.log('Connecting to database...');
        await delay(1000); // Simulate connection
        console.log('Database connected');
    }

    async startServer() {
        const { host, port } = this.config.server;
        console.log(`Server starting on ${host}:${port}`);
    }

    // Runtime Methods
    getModule(name) {
        return this.modules.get(name);
    }

    updateConfig(updates) {
        this.config = { ...this.config, ...updates };
    }

    async shutdown() {
        console.log('Shutting down application...');
        // Cleanup logic here
    }
}

// Module Classes
class AuthModule {
    constructor() {
        this.users = new Map();
        this.sessions = new Map();
    }

    async authenticate(username, password) {
        // Authentication logic
        return { success: true, token: generateId() };
    }

    validateToken(token) {
        return this.sessions.has(token);
    }

    createSession(userId) {
        const token = generateId();
        this.sessions.set(token, { userId, createdAt: Date.now() });
        return token;
    }
}

class ApiModule {
    constructor() {
        this.endpoints = new Map();
        this.middleware = [];
    }

    registerEndpoint(path, handler) {
        this.endpoints.set(path, handler);
    }

    use(middlewareFn) {
        this.middleware.push(middlewareFn);
    }

    async handleRequest(path, data) {
        const handler = this.endpoints.get(path);
        if (!handler) {
            throw new Error('Endpoint not found');
        }
        return handler(data);
    }
}

class CacheModule {
    constructor() {
        this.cache = new Map();
        this.stats = {
            hits: 0,
            misses: 0,
            sets: 0
        };
    }

    get(key) {
        if (this.cache.has(key)) {
            this.stats.hits++;
            return this.cache.get(key).value;
        }
        this.stats.misses++;
        return null;
    }

    set(key, value, ttl = CACHE_DURATION) {
        this.cache.set(key, {
            value,
            expires: Date.now() + ttl * 1000
        });
        this.stats.sets++;
    }

    clear() {
        this.cache.clear();
    }

    getStats() {
        return { ...this.stats };
    }
}

// Exported Functions
export function createApp(options) {
    return new Application(options);
}

export { Application, AuthModule, ApiModule, CacheModule };

/* Outline Panel Exercises:
 * 1. Toggle the outline panel and explore the structure
 * 2. Click on different symbols to navigate
 * 3. Notice how classes and their methods are grouped
 * 4. Try collapsing and expanding sections
 * 5. Search for "Module" in the outline
 * 6. Jump to all async functions using the outline
 */