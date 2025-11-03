// Additional Features Module
// This file contains all new features

// Promo codes
const promoCodes = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'SAVE20': { discount: 20, type: 'percentage' },
    'FLAT5': { discount: 5, type: 'fixed' },
    'FIRST': { discount: 15, type: 'percentage' }
};

// Favorites Management
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

// Toggle favorite
function toggleFavorite(itemId) {
    const index = favorites.indexOf(itemId);
    if (index > -1) {
        favorites.splice(index, 1);
        if (typeof showToast === 'function') {
            showToast('Removed from favorites', 'success');
        }
    } else {
        favorites.push(itemId);
        if (typeof showToast === 'function') {
            showToast('Added to favorites', 'success');
        }
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    if (document.getElementById('menuGrid') && typeof getFilteredMenu === 'function' && typeof renderMenu === 'function') {
        renderMenu(getFilteredMenu());
    }
    // Also update recently viewed if it exists
    const recentlyGrid = document.getElementById('recentlyViewedGrid');
    if (recentlyGrid && typeof loadRecentlyViewed === 'function') {
        loadRecentlyViewed();
    }
}

// Add to recently viewed
function addToRecentlyViewed(itemId) {
    if (!recentlyViewed.includes(itemId)) {
        recentlyViewed.unshift(itemId);
        if (recentlyViewed.length > 10) {
            recentlyViewed.pop();
        }
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
}

// Apply promo code
function applyPromoCode(code) {
    const promo = promoCodes[code.toUpperCase()];
    if (!promo) {
        return { success: false, message: 'Invalid promo code' };
    }
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        return { success: false, message: 'Cart is empty' };
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    
    if (promo.type === 'percentage') {
        discount = (subtotal * promo.discount) / 100;
    } else {
        discount = promo.discount;
    }
    
    return { success: true, discount: discount.toFixed(2), code: code.toUpperCase() };
}

// Sort menu items
function sortMenuItems(items, sortBy) {
    const sorted = [...items];
    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'popularity':
            return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        default:
            return sorted;
    }
}

// Filter by price range
function filterByPriceRange(items, minPrice, maxPrice) {
    return items.filter(item => item.price >= minPrice && item.price <= maxPrice);
}

// Get recommended items (based on category and popularity)
function getRecommendedItems(currentItemId, limit = 4) {
    const currentItem = menuItems.find(i => i.id === currentItemId);
    if (!currentItem) return [];
    
    return menuItems
        .filter(item => item.id !== currentItemId && item.category === currentItem.category)
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, limit);
}

// Generate star rating HTML
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star filled">★</span>';
    }
    if (hasHalfStar) {
        starsHTML += '<span class="star half">★</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    return starsHTML;
}

// Print order
function printOrder(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.orderId === orderId);
    if (!order) {
        showToast('Order not found', 'error');
        return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Order ${orderId}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #ff6b35; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background-color: #f8f9fa; }
                    .total { font-weight: bold; font-size: 1.2em; }
                </style>
            </head>
            <body>
                <h1>Foodie Delight - Order Receipt</h1>
                <p><strong>Order ID:</strong> ${order.orderId}</p>
                <p><strong>Date:</strong> ${new Date(order.timestamp).toLocaleString()}</p>
                <h2>Delivery Details</h2>
                <p>${order.deliveryDetails.customerName}<br>
                ${order.deliveryDetails.address}<br>
                ${order.deliveryDetails.city}, ${order.deliveryDetails.zipCode}<br>
                Phone: ${order.deliveryDetails.phone}</p>
                <h2>Order Items</h2>
                <table>
                    <tr><th>Item</th><th>Quantity</th><th>Price</th></tr>
                    ${order.items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>$${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                    <tr><td colspan="2"><strong>Subtotal:</strong></td><td>$${order.subtotal}</td></tr>
                    ${order.discount && parseFloat(order.discount) > 0 ? `<tr><td colspan="2"><strong>Discount (${order.promoCode || 'Promo'}):</strong></td><td style="color: #28a745;">-$${order.discount}</td></tr>` : ''}
                    <tr><td colspan="2"><strong>Tax:</strong></td><td>$${order.tax}</td></tr>
                    <tr class="total"><td colspan="2"><strong>Grand Total:</strong></td><td>$${order.totalPrice}</td></tr>
                </table>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Calculate estimated delivery time
function getEstimatedDeliveryTime(items) {
    const baseTime = 20; // Base 20 minutes
    const itemTime = items.length * 3; // 3 minutes per item
    return baseTime + itemTime;
}

// Make functions globally available
window.toggleFavorite = toggleFavorite;
window.applyPromoCode = applyPromoCode;
window.sortMenuItems = sortMenuItems;
window.filterByPriceRange = filterByPriceRange;
window.getRecommendedItems = getRecommendedItems;
window.renderStars = renderStars;
window.printOrder = printOrder;
window.getEstimatedDeliveryTime = getEstimatedDeliveryTime;
window.addToRecentlyViewed = addToRecentlyViewed;

