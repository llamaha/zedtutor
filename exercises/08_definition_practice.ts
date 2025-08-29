// TypeScript file for practicing Go to Definition
// Place cursor on various symbols and use go to definition

import { Logger, LogLevel } from './types';
import { formatMessage, parseConfig } from './utils';
import { DEFAULT_CONFIG, MAX_BUFFER_SIZE } from './constants';

// Interface definition
interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    metadata?: UserMetadata;
}

interface UserMetadata {
    lastLogin: Date;
    preferences: Record<string, any>;
    tags: string[];
}

// Type definitions
type UserRole = 'admin' | 'user' | 'guest';
type UserId = string;
type Handler<T> = (data: T) => void | Promise<void>;

// Class using interfaces
class UserService {
    private users: Map<UserId, User>;
    private logger: Logger;
    private config: ServiceConfig;

    constructor(logger: Logger, config?: Partial<ServiceConfig>) {
        this.users = new Map();
        this.logger = logger;
        this.config = { ...DEFAULT_CONFIG, ...config };
    }

    async addUser(userData: Omit<User, 'id'>): Promise<User> {
        const user: User = {
            ...userData,
            id: this.generateId()
        };

        this.users.set(user.id, user);
        this.logger.log(LogLevel.INFO, formatMessage('User added', user.id));
        
        return user;
    }

    getUser(userId: UserId): User | undefined {
        const user = this.users.get(userId);
        if (!user) {
            this.logger.log(LogLevel.WARN, `User not found: ${userId}`);
        }
        return user;
    }

    updateUserRole(userId: UserId, newRole: UserRole): boolean {
        const user = this.getUser(userId);
        if (!user) return false;

        user.role = newRole;
        this.handleRoleChange(user, newRole);
        return true;
    }

    private handleRoleChange(user: User, newRole: UserRole): void {
        // Handler implementation
        this.logger.log(LogLevel.INFO, formatMessage('Role changed', user.id, newRole));
    }

    private generateId(): UserId {
        return `usr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }
}

// Generic class
class EventEmitter<T extends Record<string, any>> {
    private handlers: Map<keyof T, Handler<any>[]>;

    constructor() {
        this.handlers = new Map();
    }

    on<K extends keyof T>(event: K, handler: Handler<T[K]>): void {
        const handlers = this.handlers.get(event) || [];
        handlers.push(handler);
        this.handlers.set(event, handlers);
    }

    emit<K extends keyof T>(event: K, data: T[K]): void {
        const handlers = this.handlers.get(event);
        if (handlers) {
            handlers.forEach(handler => handler(data));
        }
    }
}

// Using the EventEmitter
interface UserEvents {
    userAdded: User;
    userRemoved: UserId;
    roleChanged: { userId: UserId; newRole: UserRole };
}

const userEvents = new EventEmitter<UserEvents>();

// Function using imported types
function createUserService(options?: { logger?: Logger; config?: ServiceConfig }): UserService {
    const logger = options?.logger || createDefaultLogger();
    const config = parseConfig(options?.config);
    
    return new UserService(logger, config);
}

// Dummy implementations for imports
interface ServiceConfig {
    maxUsers: number;
    bufferSize: number;
    timeout: number;
}

function createDefaultLogger(): Logger {
    return {
        log: (level: LogLevel, message: string) => {
            console.log(`[${level}] ${message}`);
        }
    };
}

/* Go to Definition Exercises:
 * 1. Click on 'Logger' and go to its definition
 * 2. Click on 'UserRole' type and see where it's defined
 * 3. Go to definition of 'formatMessage' function
 * 4. Click on 'DEFAULT_CONFIG' constant
 * 5. Navigate to 'LogLevel' enum definition
 * 6. Try go to type definition on 'user' variable
 * 7. Go to implementation of 'Handler' type
 * 
 * Note: Some imports are simulated - in a real project,
 * these would navigate to actual files!
 */

export { UserService, EventEmitter, createUserService };
export type { User, UserEvents, Handler };