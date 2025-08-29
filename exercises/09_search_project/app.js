// Main application file
// Practice searching across the project

import { UserService } from './services/user-service.js';
import { AuthService } from './services/auth-service.js';
import { DatabaseConnection } from './database/connection.js';
import { CONFIG } from './config.js';
import { logger } from './utils/logger.js';

class Application {
    constructor() {
        this.db = null;
        this.userService = null;
        this.authService = null;
        this.isInitialized = false;
    }

    async initialize() {
        try {
            logger.info('Initializing application...');
            
            // TODO: Add retry logic for database connection
            this.db = new DatabaseConnection(CONFIG.database);
            await this.db.connect();
            
            // Initialize services
            this.userService = new UserService(this.db);
            this.authService = new AuthService(this.db, CONFIG.auth);
            
            // TODO: Load initial data
            await this.loadInitialData();
            
            this.isInitialized = true;
            logger.info('Application initialized successfully');
        } catch (error) {
            logger.error('Failed to initialize application:', error);
            throw error;
        }
    }

    async loadInitialData() {
        // FIXME: This should be moved to a migration system
        const adminExists = await this.userService.findByEmail('admin@example.com');
        if (!adminExists) {
            await this.userService.createUser({
                email: 'admin@example.com',
                password: 'temporary123', // TODO: Use secure default
                role: 'admin'
            });
        }
    }

    async handleRequest(request) {
        if (!this.isInitialized) {
            throw new Error('Application not initialized');
        }

        // Route handling logic
        const { path, method } = request;
        logger.debug(`Handling ${method} ${path}`);

        // TODO: Implement proper routing
        if (path.startsWith('/api/users')) {
            return this.userService.handleRequest(request);
        } else if (path.startsWith('/api/auth')) {
            return this.authService.handleRequest(request);
        }

        return { status: 404, message: 'Not found' };
    }

    async shutdown() {
        logger.info('Shutting down application...');
        
        // Cleanup resources
        if (this.db) {
            await this.db.disconnect();
        }
        
        this.isInitialized = false;
        logger.info('Application shut down complete');
    }
}

// Singleton instance
let app = null;

export async function startApp() {
    if (!app) {
        app = new Application();
        await app.initialize();
    }
    return app;
}

export async function stopApp() {
    if (app) {
        await app.shutdown();
        app = null;
    }
}

/* Search Exercise Hints:
 * - Search for all TODO comments
 * - Find all logger calls
 * - Look for async functions
 * - Search for error handling patterns
 * - Find configuration usage (CONFIG)
 */