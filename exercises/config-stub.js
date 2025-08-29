// Configuration stub for go-to navigation practice

export const CONFIG = {
    app: {
        name: 'MyApp',
        version: '1.0.0',
        environment: 'development'
    },
    
    database: {
        host: 'localhost',
        port: 5432,
        name: 'myapp_db',
        user: 'app_user',
        password: 'secret'
    },
    
    server: {
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
        cors: {
            enabled: true,
            origin: '*'
        }
    },
    
    features: {
        caching: true,
        logging: true,
        monitoring: false
    }
};

// Additional config helpers
export function getConfig(path) {
    const keys = path.split('.');
    let value = CONFIG;
    
    for (const key of keys) {
        value = value[key];
        if (value === undefined) {
            return undefined;
        }
    }
    
    return value;
}

export function isProduction() {
    return CONFIG.app.environment === 'production';
}

export function isDevelopment() {
    return CONFIG.app.environment === 'development';
}