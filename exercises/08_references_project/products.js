// Products module
// Contains product-related functions

import { formatCurrency } from './pricing.js';

const products = new Map([
    ['prod_123', { id: 'prod_123', name: 'Widget', price: 29.99, quantity: 1 }],
    ['prod_456', { id: 'prod_456', name: 'Gadget', price: 49.99, quantity: 1 }],
    ['prod_789', { id: 'prod_789', name: 'Doohickey', price: 19.99, quantity: 1 }]
]);

export function validateProduct(productId) {
    // Check if product ID format is valid
    if (!productId || typeof productId !== 'string') {
        return false;
    }
    
    return productId.startsWith('prod_') && productId.length === 8;
}

export async function getProductById(productId) {
    // Simulate async database lookup
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const product = products.get(productId);
    if (product) {
        // Add formatted price for display
        return {
            ...product,
            displayPrice: formatCurrency(product.price)
        };
    }
    
    return null;
}

export function getAllProducts() {
    return Array.from(products.values()).map(product => ({
        ...product,
        displayPrice: formatCurrency(product.price)
    }));
}

export function updateProductPrice(productId, newPrice) {
    const product = products.get(productId);
    if (product && validateProduct(productId)) {
        product.price = newPrice;
        product.displayPrice = formatCurrency(newPrice);
        return true;
    }
    return false;
}