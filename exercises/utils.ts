// Utility functions
// Referenced by 08_definition_practice.ts

export function formatMessage(action: string, ...args: any[]): string {
    const timestamp = new Date().toISOString();
    const details = args.join(', ');
    return `[${timestamp}] ${action}: ${details}`;
}

export function parseConfig(config: any): any {
    // Simple config parser
    return {
        maxUsers: config?.maxUsers || 1000,
        bufferSize: config?.bufferSize || 100,
        timeout: config?.timeout || 30000
    };
}