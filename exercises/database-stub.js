// Database stub for go-to navigation practice

export class Database {
    constructor() {
        this.connected = false;
        this.tables = new Map();
    }

    async connect(config) {
        console.log('Connecting to database:', config.host);
        // Simulate connection delay
        await new Promise(resolve => setTimeout(resolve, 100));
        this.connected = true;
        return true;
    }

    async insert(table, data) {
        if (!this.connected) {
            throw new Error('Database not connected');
        }

        if (!this.tables.has(table)) {
            this.tables.set(table, []);
        }

        this.tables.get(table).push(data);
        return data;
    }

    async query(table, criteria) {
        if (!this.connected) {
            throw new Error('Database not connected');
        }

        const tableData = this.tables.get(table) || [];
        
        return tableData.filter(item => {
            return Object.entries(criteria).every(([key, value]) => {
                return item[key] === value;
            });
        });
    }

    async disconnect() {
        this.connected = false;
        this.tables.clear();
    }
}