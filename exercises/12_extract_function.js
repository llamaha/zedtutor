// Extract Function Practice
// Select code blocks and extract them into functions

function processOrderData(orderData) {
    // EXTRACT 1: Extract this validation logic into 'validateOrderData' function
    if (!orderData || typeof orderData !== 'object') {
        throw new Error('Invalid order data');
    }
    
    if (!orderData.items || !Array.isArray(orderData.items)) {
        throw new Error('Order must have items array');
    }
    
    if (orderData.items.length === 0) {
        throw new Error('Order must contain at least one item');
    }
    
    if (!orderData.customerId) {
        throw new Error('Customer ID is required');
    }

    // EXTRACT 2: Extract price calculation into 'calculateTotalPrice' function
    let subtotal = 0;
    for (const item of orderData.items) {
        const itemPrice = item.price * item.quantity;
        const discount = item.discount || 0;
        const discountAmount = itemPrice * (discount / 100);
        subtotal += itemPrice - discountAmount;
    }

    // EXTRACT 3: Extract tax calculation into 'calculateTax' function
    const taxRate = orderData.region === 'CA' ? 0.0725 : 
                   orderData.region === 'NY' ? 0.08 : 
                   orderData.region === 'TX' ? 0.0625 : 0.05;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    // EXTRACT 4: Extract shipping calculation into 'calculateShipping' function
    let shippingCost = 0;
    if (total < 50) {
        shippingCost = 9.99;
    } else if (total < 100) {
        shippingCost = 5.99;
    } else {
        shippingCost = 0; // Free shipping
    }
    
    if (orderData.expressShipping) {
        shippingCost += 15;
    }

    const finalTotal = total + shippingCost;

    // EXTRACT 5: Extract order creation into 'createOrder' function
    const order = {
        id: `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        customerId: orderData.customerId,
        items: orderData.items,
        subtotal: subtotal.toFixed(2),
        tax: taxAmount.toFixed(2),
        shipping: shippingCost.toFixed(2),
        total: finalTotal.toFixed(2),
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    return order;
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        // EXTRACT 6: Extract duplicate check into 'findExistingItem' method
        let existingItem = null;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].productId === product.id) {
                existingItem = this.items[i];
                break;
            }
        }

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            // EXTRACT 7: Extract item creation into 'createCartItem' method
            const cartItem = {
                productId: product.id,
                productName: product.name,
                price: product.price,
                quantity: quantity,
                addedAt: Date.now()
            };
            this.items.push(cartItem);
        }
    }

    removeItem(productId) {
        // EXTRACT 8: Extract item finding logic (reuse from above)
        let itemIndex = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].productId === productId) {
                itemIndex = i;
                break;
            }
        }

        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    }

    getTotal() {
        // EXTRACT 9: Extract this into a shared calculation function
        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    }

    applyPromoCode(code) {
        // EXTRACT 10: Extract promo validation into 'validatePromoCode' function
        const validCodes = {
            'SAVE10': { type: 'percentage', value: 10 },
            'SAVE20': { type: 'percentage', value: 20 },
            'SHIP5': { type: 'fixed', value: 5 },
            'FREESHIP': { type: 'shipping', value: 100 }
        };

        const promo = validCodes[code.toUpperCase()];
        if (!promo) {
            throw new Error('Invalid promo code');
        }

        // EXTRACT 11: Extract discount application into 'applyDiscount' method
        const currentTotal = this.getTotal();
        let discount = 0;

        if (promo.type === 'percentage') {
            discount = currentTotal * (promo.value / 100);
        } else if (promo.type === 'fixed') {
            discount = Math.min(promo.value, currentTotal);
        }

        return {
            originalTotal: currentTotal,
            discount: discount,
            finalTotal: currentTotal - discount,
            promoApplied: code.toUpperCase()
        };
    }
}

// Standalone function with extraction opportunities
function generateReport(salesData) {
    // EXTRACT 12: Extract date range calculation
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    const startDate = startOfMonth.toISOString().split('T')[0];
    const endDate = endOfMonth.toISOString().split('T')[0];

    // EXTRACT 13: Extract sales filtering
    const monthlySales = salesData.filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate >= startOfMonth && saleDate <= endOfMonth;
    });

    // EXTRACT 14: Extract statistics calculation
    const totalRevenue = monthlySales.reduce((sum, sale) => sum + sale.amount, 0);
    const averageSale = totalRevenue / monthlySales.length || 0;
    const maxSale = Math.max(...monthlySales.map(s => s.amount));
    const minSale = Math.min(...monthlySales.map(s => s.amount));

    // EXTRACT 15: Extract report formatting
    const report = {
        period: {
            start: startDate,
            end: endDate,
            month: now.toLocaleString('default', { month: 'long' }),
            year: now.getFullYear()
        },
        metrics: {
            totalSales: monthlySales.length,
            totalRevenue: totalRevenue.toFixed(2),
            averageSale: averageSale.toFixed(2),
            highestSale: maxSale.toFixed(2),
            lowestSale: minSale.toFixed(2)
        },
        generated: new Date().toISOString()
    };

    return report;
}

/* Extract Function Exercises:
 * 1. Select each marked section and extract it into a function
 * 2. Give meaningful names to extracted functions
 * 3. Let the tool detect parameters automatically
 * 4. Check that return values are handled correctly
 * 5. For class methods, extract as private methods
 * 6. Look for duplicate code that can share extracted functions
 * 7. After extraction, the code should be much more readable
 * 8. Test that functionality remains the same after extraction
 * 
 * Extraction Benefits:
 * - Improves code readability
 * - Makes testing easier
 * - Enables code reuse
 * - Reduces complexity
 * - Clarifies intent
 */