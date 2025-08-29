// Complex TypeScript Structure for Outline Practice
// This file has deeply nested structures to practice outline navigation

// Interfaces and Types
interface User {
    id: string;
    username: string;
    email: string;
    profile: UserProfile;
    settings: UserSettings;
}

interface UserProfile {
    firstName: string;
    lastName: string;
    avatar?: string;
    bio?: string;
    social: SocialLinks;
}

interface SocialLinks {
    twitter?: string;
    github?: string;
    linkedin?: string;
}

interface UserSettings {
    notifications: NotificationSettings;
    privacy: PrivacySettings;
    theme: ThemeSettings;
}

interface NotificationSettings {
    email: boolean;
    push: boolean;
    sms: boolean;
    preferences: {
        marketing: boolean;
        updates: boolean;
        alerts: boolean;
    };
}

interface PrivacySettings {
    profileVisibility: 'public' | 'private' | 'friends';
    showEmail: boolean;
    showLocation: boolean;
}

interface ThemeSettings {
    mode: 'light' | 'dark' | 'auto';
    primaryColor: string;
    fontSize: 'small' | 'medium' | 'large';
}

// Enums
enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST',
    Moderator = 'MODERATOR'
}

enum AccountStatus {
    Active = 'ACTIVE',
    Suspended = 'SUSPENDED',
    Deleted = 'DELETED',
    Pending = 'PENDING'
}

// Abstract Base Class
abstract class BaseEntity {
    protected id: string;
    protected createdAt: Date;
    protected updatedAt: Date;

    constructor() {
        this.id = this.generateId();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    protected abstract generateId(): string;
    
    abstract validate(): boolean;

    update(): void {
        this.updatedAt = new Date();
    }
}

// Complex Class with Nested Classes
class UserManager extends BaseEntity {
    private users: Map<string, User>;
    private roleManager: RoleManager;
    private validator: UserValidator;

    constructor() {
        super();
        this.users = new Map();
        this.roleManager = new RoleManager();
        this.validator = new UserValidator();
    }

    protected generateId(): string {
        return `mgr_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    }

    validate(): boolean {
        return this.users.size < 10000;
    }

    // Nested Class
    private class RoleManager {
        private rolePermissions: Map<UserRole, Set<string>>;

        constructor() {
            this.rolePermissions = new Map([
                [UserRole.Admin, new Set(['read', 'write', 'delete', 'admin'])],
                [UserRole.Moderator, new Set(['read', 'write', 'moderate'])],
                [UserRole.User, new Set(['read', 'write'])],
                [UserRole.Guest, new Set(['read'])]
            ]);
        }

        hasPermission(role: UserRole, permission: string): boolean {
            const permissions = this.rolePermissions.get(role);
            return permissions ? permissions.has(permission) : false;
        }

        grantPermission(role: UserRole, permission: string): void {
            const permissions = this.rolePermissions.get(role);
            if (permissions) {
                permissions.add(permission);
            }
        }

        revokePermission(role: UserRole, permission: string): void {
            const permissions = this.rolePermissions.get(role);
            if (permissions) {
                permissions.delete(permission);
            }
        }
    }

    // Nested Class
    private class UserValidator {
        validateEmail(email: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        validateUsername(username: string): boolean {
            return username.length >= 3 && username.length <= 20;
        }

        validatePassword(password: string): boolean {
            // At least 8 chars, one upper, one lower, one number
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
            return passwordRegex.test(password);
        }

        validateUser(user: Partial<User>): string[] {
            const errors: string[] = [];

            if (!user.email || !this.validateEmail(user.email)) {
                errors.push('Invalid email address');
            }

            if (!user.username || !this.validateUsername(user.username)) {
                errors.push('Username must be 3-20 characters');
            }

            return errors;
        }
    }

    // Public Methods
    async createUser(userData: Partial<User>): Promise<User> {
        const errors = this.validator.validateUser(userData);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.join(', ')}`);
        }

        const user: User = {
            id: this.generateUserId(),
            username: userData.username!,
            email: userData.email!,
            profile: this.createDefaultProfile(),
            settings: this.createDefaultSettings()
        };

        this.users.set(user.id, user);
        return user;
    }

    async findUser(id: string): Promise<User | null> {
        return this.users.get(id) || null;
    }

    async updateUser(id: string, updates: Partial<User>): Promise<User> {
        const user = await this.findUser(id);
        if (!user) {
            throw new Error('User not found');
        }

        const updated = { ...user, ...updates };
        this.users.set(id, updated);
        return updated;
    }

    // Private Helper Methods
    private generateUserId(): string {
        return `usr_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    }

    private createDefaultProfile(): UserProfile {
        return {
            firstName: '',
            lastName: '',
            social: {}
        };
    }

    private createDefaultSettings(): UserSettings {
        return {
            notifications: {
                email: true,
                push: true,
                sms: false,
                preferences: {
                    marketing: false,
                    updates: true,
                    alerts: true
                }
            },
            privacy: {
                profileVisibility: 'public',
                showEmail: false,
                showLocation: false
            },
            theme: {
                mode: 'auto',
                primaryColor: '#007bff',
                fontSize: 'medium'
            }
        };
    }
}

// Generic Repository Pattern
class Repository<T extends { id: string }> {
    protected items: Map<string, T>;

    constructor() {
        this.items = new Map();
    }

    async create(item: T): Promise<T> {
        this.items.set(item.id, item);
        return item;
    }

    async findById(id: string): Promise<T | null> {
        return this.items.get(id) || null;
    }

    async findAll(): Promise<T[]> {
        return Array.from(this.items.values());
    }

    async update(id: string, updates: Partial<T>): Promise<T | null> {
        const item = await this.findById(id);
        if (!item) return null;

        const updated = { ...item, ...updates };
        this.items.set(id, updated);
        return updated;
    }

    async delete(id: string): Promise<boolean> {
        return this.items.delete(id);
    }
}

// Specialized Repository
class UserRepository extends Repository<User> {
    async findByEmail(email: string): Promise<User | null> {
        const users = await this.findAll();
        return users.find(u => u.email === email) || null;
    }

    async findByUsername(username: string): Promise<User | null> {
        const users = await this.findAll();
        return users.find(u => u.username === username) || null;
    }

    async searchUsers(query: string): Promise<User[]> {
        const users = await this.findAll();
        const lowercaseQuery = query.toLowerCase();
        
        return users.filter(user => 
            user.username.toLowerCase().includes(lowercaseQuery) ||
            user.email.toLowerCase().includes(lowercaseQuery) ||
            user.profile.firstName?.toLowerCase().includes(lowercaseQuery) ||
            user.profile.lastName?.toLowerCase().includes(lowercaseQuery)
        );
    }
}

// Namespace with nested items
namespace UserOperations {
    export interface Operation {
        id: string;
        userId: string;
        action: string;
        timestamp: Date;
    }

    export class OperationLogger {
        private operations: Operation[] = [];

        log(userId: string, action: string): void {
            this.operations.push({
                id: generateOperationId(),
                userId,
                action,
                timestamp: new Date()
            });
        }

        getOperations(userId?: string): Operation[] {
            if (userId) {
                return this.operations.filter(op => op.userId === userId);
            }
            return [...this.operations];
        }
    }

    export function generateOperationId(): string {
        return `op_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    }

    export namespace Analytics {
        export interface UserMetrics {
            totalLogins: number;
            lastActive: Date;
            actionsPerformed: number;
        }

        export class MetricsCollector {
            private metrics: Map<string, UserMetrics> = new Map();

            trackLogin(userId: string): void {
                const current = this.metrics.get(userId) || {
                    totalLogins: 0,
                    lastActive: new Date(),
                    actionsPerformed: 0
                };

                current.totalLogins++;
                current.lastActive = new Date();
                this.metrics.set(userId, current);
            }

            getMetrics(userId: string): UserMetrics | null {
                return this.metrics.get(userId) || null;
            }
        }
    }
}

// Module exports
export {
    User,
    UserProfile,
    UserSettings,
    UserRole,
    AccountStatus,
    UserManager,
    UserRepository,
    UserOperations
};

/* Outline Navigation Exercises:
 * 1. Find all interfaces using the outline
 * 2. Locate the nested classes within UserManager
 * 3. Search for "validate" methods in the outline
 * 4. Navigate through the namespace hierarchy
 * 5. Jump between the abstract class and its implementation
 * 6. Filter to show only classes (if supported)
 */