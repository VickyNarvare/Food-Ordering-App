# 🍽️ Foodie Delight - Food Ordering Web App

A modern, responsive food ordering web application built with vanilla HTML, CSS, and JavaScript. Browse through delicious menu items, add them to your cart, place orders, and track your delivery status.

## ✨ Features

### 🛍️ Shopping Experience
- **Menu Browsing**: Browse through a wide variety of food items organized by categories (Pizza, Burgers, Drinks, Desserts)
- **Search Functionality**: Quickly search for menu items by name
- **Category Filters**: Filter menu items by food category
- **Price Range Filter**: Filter items within your preferred price range
- **Quick View**: View item details in a modal without leaving the page
- **Recently Viewed**: See your recently viewed items for easy access
- **Favorites**: Save your favorite items for quick ordering

### 🛒 Cart & Checkout
- **Shopping Cart**: Add items to cart with quantity management
- **Cart Side Panel**: Easy-to-use slide-out cart panel
- **Promo Codes**: Apply discount codes to save on your orders
  - Available codes: `SAVE10`, `SAVE20`, `FLAT400`, `FIRST`, `WEEKEND20`, `HAPPY15`
- **Order Placement**: Smooth checkout process with order confirmation

### 📦 Order Management
- **Order History**: View all your past orders
- **Order Tracking**: Track the status of your current orders
- **Order Details**: View detailed information about each order

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful, modern interface with smooth animations
- **Toast Notifications**: Real-time feedback for user actions
- **Hero Section**: Eye-catching landing section with statistics
- **Service Cards**: Highlight key services (Fast Delivery, Secure Payment, etc.)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or build tools required

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd "Food ordering web app"
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
Food ordering web app/
├── index.html          # Main menu page
├── orders.html         # Order history page
├── order.html          # Checkout/order placement page
├── track.html          # Order tracking page
├── style.css           # Main stylesheet
├── script.js           # Main JavaScript functionality & menu data
├── features.js         # Additional features (favorites, promo codes, etc.)
└── README.md           # This file
```

## 🎯 Key Functionality

### Menu Management
- Dynamic menu rendering from JavaScript data
- Category-based filtering
- Price range filtering
- Search functionality
- Item details with ratings and reviews

### Cart Management
- Add/remove items
- Quantity adjustment
- Price calculation
- LocalStorage persistence
- Cart count badge

### Order System
- Order creation with unique IDs
- Order history storage
- Order status tracking
- Order details view

### Additional Features
- Favorites system with localStorage
- Recently viewed items tracking
- Promo code validation and application
- Toast notifications for user feedback

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for all functionality
- **Boxicons**: Icon library for UI elements
- **LocalStorage**: Client-side data persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Adding New Menu Items
Edit the `menuItems` array in `script.js`:

```javascript
{
    id: <unique-id>,
    name: "Item Name",
    category: "pizza|burgers|drinks|desserts",
    description: "Item description",
    price: <price-in-rupees>,
    image: "image-url",
    rating: <rating-0-5>,
    reviews: <number-of-reviews>,
    popularity: <popularity-score>,
    deliveryTime: "estimated-time"
}
```

### Adding New Promo Codes
Edit the `promoCodes` object in `features.js`:

```javascript
'PROMOCODE': { discount: <amount>, type: 'percentage' | 'fixed' }
```

### Styling
Modify `style.css` to customize colors, fonts, and layout. The app uses CSS variables for easy theming.

## 📝 Notes

- All data is stored in browser's LocalStorage
- No backend server is required for basic functionality
- Images are loaded from Unsplash (external dependency)
- The app works offline for viewing previously loaded content

## 🔮 Future Enhancements

Potential features for future development:
- Backend integration for real orders
- User authentication
- Payment gateway integration
- Real-time order tracking with delivery partner API
- Restaurant admin panel
- Reviews and ratings system
- Multiple restaurant support
- Delivery address management

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

Created as a food ordering web application demo.

---

**Enjoy your food ordering experience! 🍕🍔🥤🍰**

