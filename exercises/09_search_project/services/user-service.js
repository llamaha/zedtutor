// User Service
// Handles user-related operations

import { logger } from '../utils/logger.js';
import { validateEmail, hashPassword } from '../utils/validators.js';

export class UserService {
    constructor(database) {
        this.db = database;
        this.cache = new Map(); // TODO: Replace with Redis
    }

    async createUser(userData) {
        logger.debug('Creating new user:', userData.email);

        // Validate input
        if (!validateEmail(userData.email)) {
            throw new Error('Invalid email address');
        }

        // Check if user exists
        const existing = await this.findByEmail(userData.email);
        if (existing) {
            throw new Error('User already exists');
        }

        // Hash password
        const hashedPassword = await hashPassword(userData.password);

        // TODO: Add transaction support
        const user = {
            id: this.generateId(),
            email: userData.email,
            password: hashedPassword,
            role: userData.role || 'user',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        await this.db.insert('users', user);
        this.cache.set(user.id, user);

        logger.info('User created successfully:', user.id);
        return this.sanitizeUser(user);
    }

    async findByEmail(email) {
        // FIXME: Add index on email column for better performance
        const users = await this.db.query('users', { email });
        return users[0] || null;
    }

    async findById(userId) {
        // Check cache first
        if (this.cache.has(userId)) {
            logger.debug('User found in cache:', userId);
            return this.cache.get(userId);
        }

        const users = await this.db.query('users', { id: userId });
        const user = users[0];

        if (user) {
            this.cache.set(userId, user);
        }

        return user;
    }

    async updateUser(userId, updates) {
        logger.debug('Updating user:', userId);

        const user = await this.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // TODO: Validate updates
        const updatedUser = {
            ...user,
            ...updates,
            updatedAt: new Date().toISOString()
        };

        await this.db.update('users', userId, updatedUser);
        this.cache.set(userId, updatedUser);

        return this.sanitizeUser(updatedUser);
    }

    async deleteUser(userId) {
        logger.warn('Deleting user:', userId);

        // TODO: Soft delete instead of hard delete
        await this.db.delete('users', userId);
        this.cache.delete(userId);

        logger.info('User deleted:', userId);
    }

    sanitizeUser(user) {
        const { password, ...sanitized } = user;
        return sanitized;
    }

    generateId() {
        // TODO: Use UUID instead
        return `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }

    async handleRequest(request) {
        // Simple request handler
        const { method, path, body } = request;

        if (method === 'POST' && path === '/api/users') {
            return this.createUser(body);
        }

        // TODO: Implement other endpoints
        return { status: 501, message: 'Not implemented' };
    }
}