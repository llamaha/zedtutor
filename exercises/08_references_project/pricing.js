// Pricing module
// Functions that are referenced from other files

export function calculateTotal(products) {
    return products.reduce((sum, product) => {
        const price = product.price * product.quantity;
        return sum + price;
    }, 0);
}

export function applyDiscount(total, discountCode) {
    const discounts = {
        'SAVE10': 0.10,
        'SAVE20': 0.20,
        'SPECIAL50': 0.50
    };
    
    const discountRate = discounts[discountCode] || 0;
    const discountAmount = total * discountRate;
    
    return total - discountAmount;
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Internal function that uses formatCurrency
export function generateInvoice(order) {
    const lines = [
        `Invoice #${order.id}`,
        `Customer: ${order.customerId}`,
        '---',
        'Items:'
    ];
    
    order.products.forEach(product => {
        const lineTotal = product.price * product.quantity;
        lines.push(`${product.name} x${product.quantity} - ${formatCurrency(lineTotal)}`);
    });
    
    lines.push('---');
    lines.push(`Total: ${formatCurrency(order.total)}`);
    
    return lines.join('\n');
}