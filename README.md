# 🍽️ Foodie Delight - Food Ordering Web App

A modern, responsive food ordering web application built with vanilla HTML, CSS, and JavaScript. Browse through delicious menu items, add them to your cart, and manage your orders.

## ✨ Features

### 🛍️ Shopping Experience
- **Menu Browsing**: Browse through a wide variety of food items organized by categories (Pizza, Burgers, Drinks, Desserts)
- **Search Functionality**: Quickly search for menu items by name or description
- **Category Filters**: Filter menu items by food category (All, Pizza, Burgers, Drinks, Desserts)
- **Item Details**: View item descriptions, ratings, reviews, and prices

### 🛒 Cart Management
- **Shopping Cart**: Add items to cart with quantity management
- **Cart Side Panel**: Easy-to-use slide-out cart panel
- **Quantity Control**: Increase or decrease item quantities
- **Remove Items**: Remove items from cart
- **Cart Persistence**: Cart data saved in browser's LocalStorage

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
└── README.md           # This file
```

## 🎯 Key Functionality

### Menu Management
- Dynamic menu rendering from JavaScript data
- Category-based filtering
- Search functionality by name or description
- Item details with ratings and reviews

### Cart Management
- Add items to cart
- Remove items from cart
- Quantity adjustment (increase/decrease)
- Price calculation
- LocalStorage persistence
- Cart count badge in header

### User Interactions
- Smooth scrolling to menu section
- Cart panel open/close
- Toast notifications for user feedback
- Responsive navigation

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
    deliveryTime: "estimated-time"
}
```

### Styling
Modify `style.css` to customize colors, fonts, and layout. The app uses CSS variables for easy theming.

## 📝 Usage Guide

### Adding Items to Cart
1. Browse the menu on the home page
2. Click "Add to Cart" button on any item
3. View your cart by clicking the cart icon in the header
4. Adjust quantities using + and - buttons
5. Remove items using the "Remove" button

### Searching and Filtering
1. Use the search bar to find items by name or description
2. Click category buttons (All, Pizza, Burgers, Drinks, Desserts) to filter items
3. Search and filters work together

### Managing Cart
1. Click the cart icon in the header to open the cart panel
2. View all items in your cart
3. Update quantities or remove items
4. Click "Proceed to Checkout" to go to the order page

## 📝 Notes

- All data is stored in browser's LocalStorage
- Fully client-side application - no backend server required
- Images are loaded from Unsplash (external dependency)
- The app works offline for viewing previously loaded content
- Cart data persists across page refreshes

## 🔮 Future Enhancements

Potential features for future development:
- Order placement functionality
- Order history and tracking
- User authentication
- Payment gateway integration
- Promo codes and discounts
- Favorites system
- Recently viewed items
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
