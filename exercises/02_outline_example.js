// Outline Panel Example
// Open the Outline Panel to see the structure of this file

class TodoList {
    constructor() {
        this.items = [];
        this.completed = 0;
    }

    // Add a new todo item
    addItem(text, priority = 'normal') {
        const item = {
            id: Date.now(),
            text,
            priority,
            completed: false,
            createdAt: new Date()
        };
        this.items.push(item);
        return item;
    }

    // Mark item as complete
    completeItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item && !item.completed) {
            item.completed = true;
            item.completedAt = new Date();
            this.completed++;
            return true;
        }
        return false;
    }

    // Get all active items
    getActiveItems() {
        return this.items.filter(item => !item.completed);
    }

    // Get all completed items
    getCompletedItems() {
        return this.items.filter(item => item.completed);
    }

    // Search items by text
    searchItems(query) {
        const lowerQuery = query.toLowerCase();
        return this.items.filter(item => 
            item.text.toLowerCase().includes(lowerQuery)
        );
    }

    // Get items by priority
    getItemsByPriority(priority) {
        return this.items.filter(item => item.priority === priority);
    }

    // Get statistics
    getStats() {
        return {
            total: this.items.length,
            active: this.getActiveItems().length,
            completed: this.completed,
            byPriority: {
                high: this.getItemsByPriority('high').length,
                normal: this.getItemsByPriority('normal').length,
                low: this.getItemsByPriority('low').length
            }
        };
    }
}

// Helper functions
function formatDate(date) {
    return date.toLocaleDateString();
}

function validatePriority(priority) {
    const valid = ['low', 'normal', 'high'];
    return valid.includes(priority) ? priority : 'normal';
}

// Example usage
const myTodos = new TodoList();
myTodos.addItem('Learn Zed outline panel', 'high');
myTodos.addItem('Practice navigation', 'normal');
myTodos.addItem('Master keyboard shortcuts', 'low');

/*
 * OUTLINE PANEL EXERCISE:
 * 
 * 1. Open the Outline Panel (Command Palette → "outline panel: toggle")
 * 2. Notice how it shows:
 *    - Classes
 *    - Methods
 *    - Functions
 *    - Properties
 * 
 * 3. Try clicking on different items in the outline
 * 4. Search for "Item" in the outline search box
 * 5. Collapse/expand sections in the outline
 * 
 * The outline updates as you edit the file!
 */