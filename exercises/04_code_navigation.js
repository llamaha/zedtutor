// Code Navigation Practice
// Use this file to practice navigating through code structures

class TaskManager {
    constructor() {
        this.tasks = [];
        this.completed = 0;
        this.categories = new Set();
    }

    // TODO: Implement task validation
    addTask(title, category = 'general') {
        const task = {
            id: this.generateId(),
            title,
            category,
            completed: false,
            createdAt: Date.now()
        };
        
        this.tasks.push(task);
        this.categories.add(category);
        return task;
    }

    // Navigate to matching bracket from here: {
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // TODO: Add error handling
    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task && !task.completed) {
            task.completed = true;
            task.completedAt = Date.now();
            this.completed++;
            return true;
        }
        return false;
    }

    // Practice navigating between these related methods
    getTasks() {
        return [...this.tasks];
    }

    getActiveTasks() {
        return this.tasks.filter(task => !task.completed);
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    // TODO: Implement search functionality
    getTasksByCategory(category) {
        return this.tasks.filter(task => task.category === category);
    }

    // Complex method with nested structures
    getStatistics() {
        const stats = {
            total: this.tasks.length,
            completed: this.completed,
            active: this.tasks.length - this.completed,
            byCategory: {}
        };

        // Navigate through these nested blocks
        for (const category of this.categories) {
            stats.byCategory[category] = {
                total: 0,
                completed: 0
            };
        }

        for (const task of this.tasks) {
            stats.byCategory[task.category].total++;
            if (task.completed) {
                stats.byCategory[task.category].completed++;
            }
        }

        return stats;
    }
}

// Standalone functions to practice function navigation
function validateTaskTitle(title) {
    if (!title || typeof title !== 'string') {
        throw new Error('Task title must be a non-empty string');
    }
    return title.trim().length > 0;
}

function formatTask(task) {
    const status = task.completed ? '✓' : '○';
    return `${status} ${task.title} [${task.category}]`;
}

function sortTasksByDate(tasks, ascending = true) {
    return tasks.sort((a, b) => {
        const diff = a.createdAt - b.createdAt;
        return ascending ? diff : -diff;
    });
}

// Example with syntax errors for diagnostic navigation
function brokenFunction() {
    const unclosedString = "This string is not closed
    const missingBracket = [1, 2, 3
    return unclosedString + missingBracket;
}

/* Navigation Exercises:
 * 1. Jump to each TODO comment using diagnostic navigation
 * 2. Navigate between all methods in TaskManager class
 * 3. Place cursor on opening brackets and jump to closing
 * 4. Use outline search to jump to 'getStatistics'
 * 5. Navigate to the syntax errors in brokenFunction
 */