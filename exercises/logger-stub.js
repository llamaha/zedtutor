// Logger stub for go-to navigation practice

export class Logger {
    constructor(options = {}) {
        this.level = options.level || 'info';
        this.prefix = options.prefix || '[LOG]';
    }

    info(message, ...args) {
        console.log(`${this.prefix} INFO:`, message, ...args);
    }

    warn(message, ...args) {
        console.warn(`${this.prefix} WARN:`, message, ...args);
    }

    error(message, ...args) {
        console.error(`${this.prefix} ERROR:`, message, ...args);
    }

    debug(message, ...args) {
        if (this.level === 'debug') {
            console.log(`${this.prefix} DEBUG:`, message, ...args);
        }
    }
}