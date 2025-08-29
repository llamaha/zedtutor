// Type definitions file
// This file is referenced by 08_definition_practice.ts

export interface Logger {
    log(level: LogLevel, message: string): void;
}

export enum LogLevel {
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error'
}