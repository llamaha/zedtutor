// API Module
// Search for error handling patterns across the project

class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        // TODO: Add authentication support
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async postData(endpoint, data) {
        // TODO: Add request validation
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('POST Error:', error);
            return null;
        }
    }
}

module.exports = APIClient;