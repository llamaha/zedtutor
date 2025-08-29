// Logger utility
// Provides logging functionality across the application

const LogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
};

class Logger {
    constructor() {
        this.level = LogLevel.INFO; // TODO: Make configurable
        this.outputs = [console]; // TODO: Add file output
    }

    debug(...args) {
        this.log(LogLevel.DEBUG, 'DEBUG', ...args);
    }

    info(...args) {
        this.log(LogLevel.INFO, 'INFO', ...args);
    }

    warn(...args) {
        this.log(LogLevel.WARN, 'WARN', ...args);
    }

    error(...args) {
        this.log(LogLevel.ERROR, 'ERROR', ...args);
    }

    log(level, levelName, ...args) {
        if (level < this.level) {
            return;
        }

        const timestamp = new Date().toISOString();
        const message = `[${timestamp}] [${levelName}] ${args.join(' ')}`;

        // TODO: Add color coding for different levels
        this.outputs.forEach(output => {
            if (level >= LogLevel.ERROR) {
                output.error(message);
            } else if (level >= LogLevel.WARN) {
                output.warn(message);
            } else {
                output.log(message);
            }
        });

        // FIXME: This causes performance issues in production
        if (level >= LogLevel.ERROR) {
            this.saveToFile(message);
        }
    }

    saveToFile(message) {
        // TODO: Implement file logging
        // This is a placeholder that causes performance issues
        // Should use a proper logging library
    }

    setLevel(level) {
        this.level = level;
    }
}

export const logger = new Logger();

// TODO: Add log rotation
// TODO: Add remote logging support
// TODO: Add structured logging format