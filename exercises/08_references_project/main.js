// Main entry point
// Find all references to see where functions are used

import { calculateTotal, applyDiscount, formatCurrency } from './pricing.js';
import { validateProduct, getProductById } from './products.js';
import { createOrder, ORDER_STATUS } from './orders.js';

// Main function using various imports
async function processOrder(productIds, customerId, discountCode) {
    const products = [];
    
    // Validate and fetch products
    for (const productId of productIds) {
        if (validateProduct(productId)) {
            const product = await getProductById(productId);
            if (product) {
                products.push(product);
            }
        }
    }
    
    // Calculate pricing
    let total = calculateTotal(products);
    
    // Apply discount if provided
    if (discountCode) {
        total = applyDiscount(total, discountCode);
    }
    
    // Create the order
    const order = createOrder({
        customerId,
        products,
        total,
        status: ORDER_STATUS.PENDING,
        formattedTotal: formatCurrency(total)
    });
    
    return order;
}

// Example usage
async function main() {
    try {
        const order = await processOrder(
            ['prod_123', 'prod_456'],
            'customer_789',
            'SAVE10'
        );
        
        console.log('Order created:', order.id);
        console.log('Total:', formatCurrency(order.total));
    } catch (error) {
        console.error('Order processing failed:', error);
    }
}

/* References Exercise:
 * 1. Find all references to 'calculateTotal'
 * 2. Find where ORDER_STATUS is used
 * 3. Locate all uses of 'formatCurrency'
 * 4. Find references to 'validateProduct'
 * 5. See where 'products' array is referenced
 */

export { processOrder, main };