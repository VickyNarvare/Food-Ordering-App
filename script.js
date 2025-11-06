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
        deliveryTime: "20-25 min"
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get filtered menu
function getFilteredMenu() {
    let filtered = [...menuItems];
    const activeCategory = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

// Render menu items
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    const filtered = getFilteredMenu();
    
    if (filtered.length === 0) {
        menuGrid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;"><h3>No items found</h3></div>';
        return;
    }
    
    menuGrid.innerHTML = filtered.map(item => {
        const stars = '★'.repeat(Math.floor(item.rating));
        return `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" />
                    <span class="delivery-time-badge">⏱️ ${item.deliveryTime}</span>
                </div>
                <div class="menu-item-content">
                    <span class="menu-item-category">${item.category}</span>
                    <h3 class="menu-item-title">${item.name}</h3>
                    <div class="rating-display">
                        <span class="star filled">${stars}</span>
                        <span class="rating-value">${item.rating}</span>
                        <span class="reviews-count">(${item.reviews})</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">₹${item.price.toLocaleString('en-IN')}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Add to cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast('Item added to cart!');
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

// Update quantity
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

// Save cart
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
                        <img src="${item.image}" alt="${item.name}" />
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
}

// Show toast
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll to menu
function scrollToMenu() {
    const menuSection = document.getElementById('menuSection');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    updateCartUI();
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', renderMenu);
    }
    
    // Category filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderMenu();
        });
    });
    
    // Cart panel
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            document.getElementById('cartPanel').classList.add('active');
            overlay.classList.add('active');
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
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.scrollToMenu = scrollToMenu;
