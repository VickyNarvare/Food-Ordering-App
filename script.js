// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        price: 1040,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
        rating: 4.5,
        reviews: 128,
        popularity: 95,
        deliveryTime: "25-30 min"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "pizza",
        description: "Traditional pizza topped with spicy pepperoni and cheese",
        price: 1200,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop",
        rating: 4.8,
        reviews: 203,
        popularity: 98,
        deliveryTime: "25-30 min"
    },
    {
        id: 3,
        name: "BBQ Chicken Pizza",
        category: "pizza",
        description: "Smoky BBQ sauce, grilled chicken, red onions, and mozzarella",
        price: 1360,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        rating: 4.7,
        reviews: 156,
        popularity: 92,
        deliveryTime: "30-35 min"
    },
    {
        id: 4,
        name: "Veggie Supreme Pizza",
        category: "pizza",
        description: "Loaded with bell peppers, mushrooms, olives, and onions",
        price: 1280,
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=400&fit=crop",
        rating: 4.4,
        reviews: 89,
        popularity: 78,
        deliveryTime: "25-30 min"
    },
    {
        id: 5,
        name: "Classic Burger",
        category: "burgers",
        description: "Juicy beef patty with lettuce, tomato, pickles, and special sauce",
        price: 800,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
        rating: 4.6,
        reviews: 312,
        popularity: 96,
        deliveryTime: "20-25 min"
    },
    {
        id: 6,
        name: "Cheese Burger",
        category: "burgers",
        description: "Classic burger with melted cheese and all the fixings",
        price: 880,
        image: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?w=600&h=400&fit=crop",
        rating: 4.7,
        reviews: 278,
        popularity: 94,
        deliveryTime: "20-25 min"
    },
    {
        id: 7,
        name: "Bacon Deluxe Burger",
        category: "burgers",
        description: "Premium burger with crispy bacon, cheese, and special sauce",
        price: 1040,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
        rating: 4.9,
        reviews: 445,
        popularity: 99,
        deliveryTime: "25-30 min"
    },
    {
        id: 8,
        name: "Chicken Burger",
        category: "burgers",
        description: "Grilled chicken breast with lettuce, mayo, and pickles",
        price: 960,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop",
        rating: 4.5,
        reviews: 167,
        popularity: 85,
        deliveryTime: "20-25 min"
    },
    {
        id: 9,
        name: "Cola",
        category: "drinks",
        description: "Refreshing cola drink",
        price: 240,
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=400&fit=crop",
        rating: 4.2,
        reviews: 89,
        popularity: 65,
        deliveryTime: "15-20 min"
    },
    {
        id: 10,
        name: "Orange Juice",
        category: "drinks",
        description: "Freshly squeezed orange juice",
        price: 320,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
        rating: 4.6,
        reviews: 124,
        popularity: 72,
        deliveryTime: "15-20 min"
    },
    {
        id: 11,
        name: "Iced Coffee",
        category: "drinks",
        description: "Chilled coffee with ice and cream",
        price: 400,
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop",
        rating: 4.8,
        reviews: 198,
        popularity: 88,
        deliveryTime: "15-20 min"
    },
    {
        id: 12,
        name: "Lemonade",
        category: "drinks",
        description: "Fresh lemonade with a hint of mint",
        price: 280,
        image: "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        rating: 4.4,
        reviews: 76,
        popularity: 68,
        deliveryTime: "15-20 min"
    },
    {
        id: 13,
        name: "Chocolate Cake",
        category: "desserts",
        description: "Rich and moist chocolate cake with frosting",
        price: 560,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
        rating: 4.9,
        reviews: 234,
        popularity: 91,
        deliveryTime: "20-25 min"
    },
    {
        id: 14,
        name: "Ice Cream Sundae",
        category: "desserts",
        description: "Vanilla ice cream with chocolate sauce and toppings",
        price: 480,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
        rating: 4.7,
        reviews: 187,
        popularity: 82,
        deliveryTime: "15-20 min"
    },
    {
        id: 15,
        name: "Apple Pie",
        category: "desserts",
        description: "Homemade apple pie with a flaky crust",
        price: 640,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
        rating: 4.6,
        reviews: 145,
        popularity: 79,
        deliveryTime: "20-25 min"
    },
    {
        id: 16,
        name: "Cheesecake",
        category: "desserts",
        description: "Creamy New York style cheesecake",
        price: 720,
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop",
        rating: 4.8,
        reviews: 289,
        popularity: 93,
        deliveryTime: "20-25 min"
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get filtered menu based on all filters
function getFilteredMenu() {
    let filtered = [...menuItems];
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const minPrice = parseFloat(document.getElementById('minPrice')?.value || 0);
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value || 1600);
    
    // Category filter
    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Price range filter
    filtered = filtered.filter(item => item.price >= minPrice && item.price <= maxPrice);
    
    return filtered;
}

// Render menu items
function renderMenu(items, targetId = 'menuGrid') {
    const menuGrid = document.getElementById(targetId);
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
                <div class="empty-icon" style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="margin-bottom: 0.5rem;">No items found</h3>
                <p style="color: var(--text-light);">Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    items.forEach(item => {
        const isFavorite = favorites.includes(item.id);
        const starsHTML = item.rating && typeof renderStars === 'function' ? renderStars(item.rating) : '';
        
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-item-id', item.id);
        menuItem.innerHTML = `
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${item.id})" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
            <div class="menu-item-image" onclick="openQuickView(${item.id})">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23f0f0f0\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'18\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\'%3EImage not available%3C/text%3E%3C/svg%3E';" />
                <button class="quick-view-btn">View More</button>
                ${item.deliveryTime ? `<span class="delivery-time-badge">⏱️ ${item.deliveryTime}</span>` : ''}
            </div>
            <div class="menu-item-content">
                <span class="menu-item-category">${item.category}</span>
                <h3 class="menu-item-title" onclick="openQuickView(${item.id})">${item.name}</h3>
                ${starsHTML ? `
                    <div class="rating-display">
                        ${starsHTML}
                        <span class="rating-value">${item.rating}</span>
                        <span class="reviews-count">(${item.reviews || 0})</span>
                    </div>
                ` : ''}
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price.toLocaleString('en-IN')}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Update quantity from card
function updateQuantityFromCard(itemId, change) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
            renderMenu(getFilteredMenu());
        }
    } else if (change > 0) {
        addToCart(itemId);
    }
}

// Open quick view modal
function openQuickView(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    if (typeof addToRecentlyViewed === 'function') {
        addToRecentlyViewed(itemId);
    }
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFavorite = favorites.includes(itemId);
    const starsHTML = item.rating && typeof renderStars === 'function' ? renderStars(item.rating) : '';
    
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="quick-view-details">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${item.id}); openQuickView(${item.id})">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
                <span class="category-badge">${item.category}</span>
                <h2>${item.name}</h2>
                ${starsHTML ? `
                    <div class="rating-display">
                        ${starsHTML}
                        <span class="rating-value">${item.rating}</span>
                        <span class="reviews-count">(${item.reviews || 0} reviews)</span>
                    </div>
                ` : ''}
                ${item.deliveryTime ? `<p class="delivery-time">⏱️ Est. Delivery: ${item.deliveryTime}</p>` : ''}
                <p class="description">${item.description}</p>
                <div class="quick-view-price">
                    <span class="price">₹${item.price.toLocaleString('en-IN')}</span>
                    ${item.popularity ? `<span class="popularity-badge">🔥 ${item.popularity}% Popular</span>` : ''}
                </div>
                <div class="quick-view-actions">
                    <button class="add-to-cart-btn-large" onclick="addToCart(${item.id}); closeQuickView(); showToast('Added to cart!', 'success')">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close quick view modal
function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('active');
}

// Load recently viewed items
function loadRecentlyViewed() {
    const recentlyViewedIds = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    if (recentlyViewedIds.length === 0) return;
    
    const items = recentlyViewedIds.slice(0, 4).map(id => menuItems.find(item => item.id === id)).filter(Boolean);
    if (items.length > 0) {
        const section = document.getElementById('recentlyViewedSection');
        if (section) {
            section.style.display = 'block';
            renderMenu(items, 'recentlyViewedGrid');
        }
    }
}


// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderMenu(getFilteredMenu());
        });
    }

    // Category filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMenu(getFilteredMenu());
        });
    });
    
    // Price range filters
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const minPriceVal = document.getElementById('minPriceVal');
    const maxPriceVal = document.getElementById('maxPriceVal');
    
    if (minPrice && maxPrice && minPriceVal && maxPriceVal) {
        const updatePriceDisplay = () => {
            minPriceVal.textContent = parseInt(minPrice.value).toLocaleString('en-IN');
            maxPriceVal.textContent = parseInt(maxPrice.value).toLocaleString('en-IN');
            renderMenu(getFilteredMenu());
        };
        minPrice.addEventListener('input', updatePriceDisplay);
        maxPrice.addEventListener('input', updatePriceDisplay);
    }

    // Cart panel
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const cartPanel = document.getElementById('cartPanel');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartPanel.classList.add('active');
            overlay.classList.add('active');
            // Hide navbar when cart opens
            const header = document.querySelector('.header');
            if (header) {
                header.classList.add('hidden');
            }
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', closeCartPanel);
    }

    if (overlay) {
        overlay.addEventListener('click', closeCartPanel);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                window.location.href = 'order.html';
            }
        });
    }
}

// Functions are now integrated in getFilteredMenu() and renderMenu()

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast('Item added to cart!', 'success');
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart', 'success');
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            if (checkoutBtn) checkoutBtn.disabled = true;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Crect fill=\'%23f0f0f0\' width=\'100\' height=\'100\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'12\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\'%3EN/A%3C/text%3E%3C/svg%3E';" />
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} each</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
            if (checkoutBtn) checkoutBtn.disabled = false;
        }
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString('en-IN');
    }
}

// Close cart panel
function closeCartPanel() {
    const cartPanel = document.getElementById('cartPanel');
    const overlay = document.getElementById('overlay');
    if (cartPanel) cartPanel.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    // Show navbar when cart closes
    const header = document.querySelector('.header');
    if (header) {
        header.classList.remove('hidden');
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Load order summary on order page
function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    const orderItems = document.getElementById('orderItems');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const grandTotalEl = document.getElementById('grandTotal');

    // Render order items
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <div>
                <span class="order-item-name">${item.name}</span>
                <span class="order-item-quantity">x${item.quantity}</span>
            </div>
            <span class="order-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10; // 10% tax
    const grandTotal = subtotal + tax;

    subtotalEl.textContent = subtotal.toLocaleString('en-IN');
    taxEl.textContent = tax.toLocaleString('en-IN');
    grandTotalEl.textContent = grandTotal.toLocaleString('en-IN');
}

// Handle order submission
async function handleOrderSubmission(e) {
    e.preventDefault();
    
    const orderCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (orderCart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) loadingOverlay.classList.add('active');

    // Get form data
    const formData = new FormData(e.target);
    const deliveryDetails = {
        customerName: formData.get('customerName'),
        phone: formData.get('phone'),
        email: formData.get('email') || '',
        address: formData.get('address'),
        city: formData.get('city'),
        zipCode: formData.get('zipCode'),
        deliveryTime: formData.get('deliveryTime'),
        specialInstructions: formData.get('specialInstructions') || ''
    };

    // Get applied discount if any
    const discountInfo = JSON.parse(localStorage.getItem('appliedDiscount') || '{"discount": 0, "code": ""}');
    const appliedDiscount = parseFloat(discountInfo.discount || 0);
    
    // Calculate totals
    const subtotal = orderCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.max(0, (subtotal - appliedDiscount) * 0.10);
    const totalPrice = Math.max(0, subtotal + tax - appliedDiscount);

    // Prepare order data
    const orderData = {
        items: orderCart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            category: item.category
        })),
        subtotal: subtotal,
        discount: appliedDiscount,
        promoCode: discountInfo.code || '',
        tax: tax,
        totalPrice: totalPrice,
        deliveryDetails: deliveryDetails
    };
    
    // Clear discount after order
    localStorage.removeItem('appliedDiscount');

    // Save order to localStorage
    try {
        // Generate unique order ID
        const orderId = 'ORDER_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        // Add orderId and timestamp to orderData
        orderData.orderId = orderId;
        orderData.timestamp = new Date().toISOString();
        
        // Save to localStorage
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        
        if (loadingOverlay) loadingOverlay.classList.remove('active');

        // Clear cart
        localStorage.removeItem('cart');
        cart.length = 0; // Clear the global cart array
        updateCartUI();
        
        // Show success message
        showToast(`Order placed successfully! Order ID: ${orderId}`, 'success');
        
        // Redirect to order tracking after delay
        setTimeout(() => {
            window.location.href = `track.html?id=${orderId}`;
        }, 2000);
    } catch (error) {
        if (loadingOverlay) loadingOverlay.classList.remove('active');
        showToast('An error occurred. Please try again.', 'error');
        console.error('Order submission error:', error);
    }
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.updateQuantityFromCard = updateQuantityFromCard;
window.loadOrderSummary = loadOrderSummary;
window.handleOrderSubmission = handleOrderSubmission;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.getFilteredMenu = getFilteredMenu;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart UI
    updateCartUI();
    
    // Render menu
    renderMenu(getFilteredMenu());
    
    // Load recently viewed
    loadRecentlyViewed();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup quick view modal close
    const closeModal = document.getElementById('closeModal');
    const quickViewModal = document.getElementById('quickViewModal');
    if (closeModal) {
        closeModal.addEventListener('click', closeQuickView);
    }
    if (quickViewModal) {
        quickViewModal.addEventListener('click', function(e) {
            if (e.target === quickViewModal) {
                closeQuickView();
            }
        });
    }
});

// Scroll to menu with offset
function scrollToMenu() {
    const menuSection = document.getElementById('menuSection');
    if (menuSection) {
        const headerOffset = 150; // Offset to stop a bit higher
        const elementPosition = menuSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Combo Deal Functions
function addComboDeal(dealType) {
    const comboDeals = {
        family: {
            items: [
                { id: 2, name: "Pepperoni Pizza", quantity: 2, price: 1200 },
                { id: 13, name: "Coca Cola", quantity: 2, price: 320 },
                { id: 15, name: "Chocolate Cake", quantity: 1, price: 480 }
            ],
            totalPrice: 2400,
            message: "Family Combo added to cart!"
        },
        student: {
            items: [
                { id: 1, name: "Margherita Pizza", quantity: 1, price: 1040 },
                { id: 13, name: "Coca Cola", quantity: 1, price: 320 }
            ],
            totalPrice: 1020,
            message: "Student Special added to cart!"
        }
    };

    if (!comboDeals[dealType]) {
        showToast('Invalid deal selection', 'error');
        return;
    }

    const deal = comboDeals[dealType];
    
    // Add all items from the combo to cart
    deal.items.forEach(dealItem => {
        // Find the actual item from menuItems
        const actualItem = menuItems.find(item => item.id === dealItem.id);
        if (actualItem) {
            // Add each item with specified quantity
            for (let i = 0; i < dealItem.quantity; i++) {
                addToCart(dealItem.id);
            }
        }
    });

    showToast(deal.message, 'success');
    
    // Update cart UI
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    }
}

