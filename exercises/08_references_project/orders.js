// Orders module
// Order creation and management

import { calculateTotal, formatCurrency } from './pricing.js';
import { validateProduct } from './products.js';

export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

const orders = new Map();

export function createOrder(orderData) {
    const orderId = generateOrderId();
    
    const order = {
        id: orderId,
        customerId: orderData.customerId,
        products: orderData.products,
        total: orderData.total,
        status: orderData.status || ORDER_STATUS.PENDING,
        createdAt: new Date().toISOString(),
        formattedTotal: orderData.formattedTotal
    };
    
    orders.set(orderId, order);
    return order;
}

export function updateOrderStatus(orderId, newStatus) {
    const order = orders.get(orderId);
    
    if (!order) {
        throw new Error(`Order ${orderId} not found`);
    }
    
    if (!Object.values(ORDER_STATUS).includes(newStatus)) {
        throw new Error(`Invalid status: ${newStatus}`);
    }
    
    order.status = newStatus;
    order.updatedAt = new Date().toISOString();
    
    return order;
}

export function getOrdersByStatus(status) {
    return Array.from(orders.values()).filter(order => order.status === status);
}

export function recalculateOrderTotal(orderId) {
    const order = orders.get(orderId);
    if (!order) return null;
    
    // Recalculate using the pricing module
    const newTotal = calculateTotal(order.products);
    order.total = newTotal;
    order.formattedTotal = formatCurrency(newTotal);
    
    return order;
}

function generateOrderId() {
    return `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

// Function that uses multiple imports
export function validateOrder(order) {
    if (!order.products || order.products.length === 0) {
        return false;
    }
    
    // Validate all products
    const allProductsValid = order.products.every(p => validateProduct(p.id));
    
    // Check total matches
    const calculatedTotal = calculateTotal(order.products);
    const totalMatches = Math.abs(calculatedTotal - order.total) < 0.01;
    
    return allProductsValid && totalMatches;
}