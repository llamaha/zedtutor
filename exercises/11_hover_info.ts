// Hover Information Practice
// Place your cursor on different elements and use hover to see information

import { EventEmitter } from 'events';

// Hover over these type definitions
type UserId = string;
type Email = `${string}@${string}.${string}`;
type Role = 'admin' | 'user' | 'guest';

// Interface with JSDoc comments
/**
 * Represents a user in the system
 * @interface User
 */
interface User {
    /** Unique identifier for the user */
    id: UserId;
    
    /** User's email address - must be valid email format */
    email: Email;
    
    /** User's display name */
    name: string;
    
    /** User's role determining permissions */
    role: Role;
    
    /** Account creation timestamp */
    createdAt: Date;
    
    /** Optional user metadata */
    metadata?: Record<string, unknown>;
}

// Class with detailed documentation
/**
 * Manages user operations and authentication
 * @class UserManager
 * @extends EventEmitter
 */
class UserManager extends EventEmitter {
    private users: Map<UserId, User>;
    private readonly maxUsers: number = 10000;

    constructor() {
        super();
        this.users = new Map();
    }

    /**
     * Creates a new user in the system
     * @param {Omit<User, 'id' | 'createdAt'>} userData - User data without auto-generated fields
     * @returns {Promise<User>} The created user object
     * @throws {Error} If email is invalid or already exists
     * @emits UserManager#userCreated
     */
    async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        // Hover over validateEmail to see its signature
        if (!this.validateEmail(userData.email)) {
            throw new Error('Invalid email format');
        }

        // Hover over crypto to see Node.js built-in module info
        const { randomUUID } = await import('crypto');
        
        const user: User = {
            ...userData,
            id: randomUUID(),
            createdAt: new Date()
        };

        this.users.set(user.id, user);
        this.emit('userCreated', user);
        
        return user;
    }

    /**
     * Validates email format
     * @param {Email} email - Email to validate
     * @returns {boolean} True if valid
     */
    private validateEmail(email: Email): boolean {
        // Hover over the regex to understand the pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Finds a user by their ID
     * @param {UserId} id - User ID to search for
     * @returns {User | undefined} User if found
     */
    findUser(id: UserId): User | undefined {
        // Hover over Map methods to see signatures
        return this.users.get(id);
    }

    /**
     * Gets users by role
     * @param {Role} role - Role to filter by
     * @returns {User[]} Array of users with specified role
     */
    getUsersByRole(role: Role): User[] {
        // Hover over Array.from and filter to see signatures
        return Array.from(this.users.values())
            .filter(user => user.role === role);
    }
}

// Generic function with constraints
/**
 * Processes items of type T
 * @template T - Type parameter constrained to have an id property
 * @param {T[]} items - Array of items to process
 * @returns {Map<string, T>} Map of items by ID
 */
function processItems<T extends { id: string }>(items: T[]): Map<string, T> {
    // Hover over reduce to see its complex signature
    return items.reduce((map, item) => {
        map.set(item.id, item);
        return map;
    }, new Map<string, T>());
}

// Async function with Promise return
/**
 * Fetches user data from API
 * @param {UserId} userId - ID of user to fetch
 * @returns {Promise<User>} Promise resolving to user data
 */
async function fetchUserFromAPI(userId: UserId): Promise<User> {
    // Hover over Promise to see generic type
    const response = await fetch(`/api/users/${userId}`);
    
    // Hover to see Response methods
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json() as Promise<User>;
}

// Union types with hover info
type ApiResponse<T> = 
    | { success: true; data: T }
    | { success: false; error: string };

// Hover over different parts of this function
function handleApiResponse<T>(response: ApiResponse<T>): T {
    if (response.success) {
        return response.data;
    } else {
        throw new Error(response.error);
    }
}

// Literal types and template literals
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = `/api/${string}`;

// Tuple type with labels
type UserTuple = [id: UserId, name: string, role: Role];

// Conditional types
type IsAdmin<T extends User> = T['role'] extends 'admin' ? true : false;

// Mapped types
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;

// Hover over these to see inferred types
const sampleUser = {
    id: '123' as UserId,
    email: 'user@example.com' as Email,
    name: 'John Doe',
    role: 'user' as Role,
    createdAt: new Date()
};

const userManager = new UserManager();
const apiResponse: ApiResponse<User> = { success: true, data: sampleUser };

/* Hover Practice Exercises:
 * 1. Hover over each type definition to see the full type
 * 2. Hover over function parameters to see their types
 * 3. Hover over class methods to see documentation
 * 4. Hover over built-in functions like Array.from, Map methods
 * 5. Hover over generic type parameters to understand constraints
 * 6. Hover over errors (create some!) to see error messages
 */

// Intentional errors for hover practice (hover to see error details)
// const invalidEmail: Email = 'not-an-email';
// const invalidRole: Role = 'superuser';
// userManager.createUser({ name: 'Test' }); // Missing required fields