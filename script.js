// Product data
const products = [
    // Bread (74)
    { name: "3-Meat Buns", category: "bread", price: 75 },
    { name: "Asado Roll", category: "bread", price: 60 },
    { name: "Asado Square", category: "bread", price: 65 },
    { name: "Baby Enzaimada", category: "bread", price: 45 },
    { name: "Baked Chicken Empanada", category: "bread", price: 70 },
    { name: "BAKED CHICKEN EMPANADA x10", category: "bread", price: 580 },
    { name: "BAKED CHICKEN EMPANADA x3", category: "bread", price: 175 },
    { name: "BAKED CHICKEN EMPANADA x8", category: "bread", price: 480 },
    { name: "Bavarian Munchies", category: "bread", price: 80 },
    { name: "Blueberry Cinnamon Single", category: "bread", price: 50 },
    { name: "Braided Ham", category: "bread", price: 75 },
    { name: "Butter Toast", category: "bread", price: 55 },
    { name: "Brown Sugar Raisin", category: "bread", price: 65 },
    { name: "Cheese Bites x10", category: "bread", price: 120 },
    { name: "Cream Bread", category: "bread", price: 70 },
    { name: "Creamy Enzaimada", category: "bread", price: 55 },
    { name: "Custard Cream Bun", category: "bread", price: 60 },
    { name: "Double Cheese Bread x4", category: "bread", price: 180 },
    { name: "Double Muncheese", category: "bread", price: 85 },
    { name: "Dulce De Ube", category: "bread", price: 65 },
    { name: "Enzaimada Bites", category: "bread", price: 45 },
    { name: "Enzaimada Rolls", category: "bread", price: 55 },
    { name: "Flossy Cheese Bar", category: "bread", price: 75 },
    { name: "Flossy Meat Roll (Chicken)", category: "bread", price: 80 },
    { name: "Four Seasons", category: "bread", price: 70 },
    { name: "Garlic Butter Toast", category: "bread", price: 60 },
    { name: "Ham & Cheese Roll", category: "bread", price: 70 },
    { name: "Ham & Queso", category: "bread", price: 75 },
    { name: "Hongkong Milk Bread", category: "bread", price: 65 },
    { name: "Hopia Mongo/Ube x20", category: "bread", price: 200 },
    { name: "Hotdog With Cheese", category: "bread", price: 65 },
    { name: "Lotus Biscoff Cinnamon Single", category: "bread", price: 55 },
    { name: "Malunggay Chiz Pandesal X9", category: "bread", price: 180 },
    { name: "Malunggay Pandesal x9", category: "bread", price: 165 },
    { name: "Malunggay Tuna", category: "bread", price: 70 },
    { name: "Milky Baby Pandesal", category: "bread", price: 50 },
    { name: "Milky Ube Roll x6", category: "bread", price: 150 },
    { name: "Mochi Bread x6", category: "bread", price: 140 },
    { name: "Mongo Loaf", category: "bread", price: 85 },
    { name: "Nutella Cinnamon Single", category: "bread", price: 60 },
    { name: "Pandecoco", category: "bread", price: 55 },
    { name: "Pineapple Delight", category: "bread", price: 65 },
    { name: "Pineapple Munchies", category: "bread", price: 75 },
    { name: "Pistacchio Cinnamon Single", category: "bread", price: 65 },
    { name: "Pizza Round", category: "bread", price: 70 },
    { name: "Pizzadog", category: "bread", price: 65 },
    { name: "Premium Cheese Rolls", category: "bread", price: 55 },
    { name: "Raisin & Walnut Sourdough", category: "bread", price: 95 },
    { name: "Raisin Minis", category: "bread", price: 50 },
    { name: "S'Mores Cinnamon Single", category: "bread", price: 60 },
    { name: "Snow Cream", category: "bread", price: 70 },
    { name: "Special Mongo Bun", category: "bread", price: 75 },
    { name: "Special Pandesal x9", category: "bread", price: 150 },
    { name: "Spicy Chicken Floss", category: "bread", price: 80 },
    { name: "Strawberry Cinnamon Single", category: "bread", price: 55 },
    { name: "Ube Enzaimada Single", category: "bread", price: 55 },
    { name: "Ube Macapuno Loaf", category: "bread", price: 95 },
    { name: "Ube Marble Loaf", category: "bread", price: 90 },
    { name: "Ube Munchies x10", category: "bread", price: 180 },
    { name: "Ube Queso Pandesal x6", category: "bread", price: 130 },
    { name: "Volcanic Cheese Melt", category: "bread", price: 80 },
    { name: "Wheat Bread", category: "bread", price: 85 },
    { name: "White Chocolate Almond", category: "bread", price: 75 },
    { name: "Soft Sourdough (Plain)", category: "bread", price: 120 },
    { name: "Soft Sourdough (Sesame)", category: "bread", price: 125 },
    { name: "Cheese Roll", category: "bread", price: 50 },
    { name: "Cheese Stick Bread", category: "bread", price: 60 },
    { name: "Cinnamon Roll", category: "bread", price: 65 },
    { name: "Coco Cluster x6", category: "bread", price: 140 },
    { name: "Coffee Bavarian Bun", category: "bread", price: 75 },
    { name: "Coffee Roti Roll", category: "bread", price: 70 },

    // Pastries (23)
    { name: "Banana Loaf (New Improved)", category: "pastries", price: 180 },
    { name: "Banana Slice", category: "pastries", price: 55 },
    { name: "Cheese Pie", category: "pastries", price: 120 },
    { name: "Chiffon cake", category: "pastries", price: 150 },
    { name: "Choco Crinkles", category: "pastries", price: 45 },
    { name: "Choco Vanilla Sandwich", category: "pastries", price: 60 },
    { name: "Cotton Cloud", category: "pastries", price: 65 },
    { name: "Flossy Chiffon x4", category: "pastries", price: 280 },
    { name: "Fudge Brownies Single", category: "pastries", price: 70 },
    { name: "Fudge Brownies x12", category: "pastries", price: 480 },
    { name: "Leche Flan Cake", category: "pastries", price: 450 },
    { name: "Macaroons x11", category: "pastries", price: 220 },
    { name: "Milky Egg Pie Slice", category: "pastries", price: 85 },
    { name: "Milky Egg Pie Whole", category: "pastries", price: 550 },
    { name: "Mini Jelly Roll x12", category: "pastries", price: 360 },
    { name: "Mini Jelly Roll x8", category: "pastries", price: 260 },
    { name: "Mini Party Cakes x12", category: "pastries", price: 420 },
    { name: "Mocha Vanilla Sandwich", category: "pastries", price: 65 },
    { name: "Premium Taisan Bar", category: "pastries", price: 95 },
    { name: "S'mores Fudge x8", category: "pastries", price: 320 },
    { name: "Sossy Flossy Roll", category: "pastries", price: 85 },
    { name: "Very Cheesy Mamon", category: "pastries", price: 60 },
    { name: "Yema Krema", category: "pastries", price: 75 },

    // Cakes (23)
    { name: "Berry Black Forest", category: "cakes", price: 1200 },
    { name: "Choco Caramel", category: "cakes", price: 950 },
    { name: "Choco Dream", category: "cakes", price: 900 },
    { name: "Choco Fantasy", category: "cakes", price: 850 },
    { name: "Choco Fantasy Rectangle", category: "cakes", price: 1100 },
    { name: "Choco Fudge", category: "cakes", price: 900 },
    { name: "Choco Fudge Bar", category: "cakes", price: 450 },
    { name: "Dulce de Leche", category: "cakes", price: 950 },
    { name: "Dulce de Leche Rectangle", category: "cakes", price: 1150 },
    { name: "Ivory Blossom", category: "cakes", price: 900 },
    { name: "Kitkat Mousse", category: "cakes", price: 1100 },
    { name: "Mango Supreme", category: "cakes", price: 1050 },
    { name: "Mocha Caramel Bar", category: "cakes", price: 480 },
    { name: "Mocha Vanilla Bliss", category: "cakes", price: 950 },
    { name: "Mochalicious", category: "cakes", price: 900 },
    { name: "Mochalicious Rectangle", category: "cakes", price: 1150 },
    { name: "Nutella", category: "cakes", price: 950 },
    { name: "Salted Caramel Walnut", category: "cakes", price: 1100 },
    { name: "The Duet", category: "cakes", price: 1000 },
    { name: "The Flavor Parade", category: "cakes", price: 1200 },
    { name: "Ube Halaya", category: "cakes", price: 1000 },
    { name: "Ube Leche Flan", category: "cakes", price: 1050 },
    { name: "Yema Delight", category: "cakes", price: 900 },

    // Kcafe (36)
    { name: "AMERICANO ICED COFFEE MEDIUM", category: "kcafe", price: 95 },
    { name: "AMERICANO ICED COFFEE LARGE", category: "kcafe", price: 115 },
    { name: "HOT AMERICANO", category: "kcafe", price: 80 },
    { name: "HOT AMERICANO WITH MILK", category: "kcafe", price: 95 },
    { name: "SIGNATURE CHOCO MEDIUM", category: "kcafe", price: 110 },
    { name: "SIGNATURE CHOCO LARGE", category: "kcafe", price: 130 },
    { name: "SPANISH LATTE LARGE", category: "kcafe", price: 140 },
    { name: "SPANISH LATTE MEDIUM", category: "kcafe", price: 120 },
    { name: "STRAWBERRY MATCHA LARGE", category: "kcafe", price: 150 },
    { name: "STRAWBERRY MATCHA MEDIUM", category: "kcafe", price: 130 },
    { name: "STRAWBERRY MILK LARGE", category: "kcafe", price: 140 },
    { name: "STRAWBERRY MILK MEDIUM", category: "kcafe", price: 120 },
    { name: "TARO MILKTEA LARGE", category: "kcafe", price: 145 },
    { name: "TARO MILKTEA MEDIUM", category: "kcafe", price: 125 },
    { name: "WINTERMELON LARGE", category: "kcafe", price: 130 },
    { name: "WINTERMELON MEDIUM", category: "kcafe", price: 110 },
    { name: "BROWN SUGAR LATTE LARGE", category: "kcafe", price: 140 },
    { name: "BROWN SUGAR LATTE MEDIUM", category: "kcafe", price: 120 },
    { name: "BROWN SUGAR MILKTEA LARGE", category: "kcafe", price: 145 },
    { name: "BROWN SUGAR MILKTEA MEDIUM", category: "kcafe", price: 125 },
    { name: "CARAMEL MACHIATTO LARGE", category: "kcafe", price: 150 },
    { name: "CARAMEL MACHIATTO MEDIUM", category: "kcafe", price: 130 },
    { name: "COFFEE JELLY LARGE", category: "kcafe", price: 140 },
    { name: "COFFEE JELLY MEDIUM", category: "kcafe", price: 120 },
    { name: "DIRTY MATCHA LARGE", category: "kcafe", price: 160 },
    { name: "DIRTY MATCHA MEDIUM", category: "kcafe", price: 140 },
    { name: "MOCHA LATTE LARGE", category: "kcafe", price: 145 },
    { name: "MOCHA LATTE MEDIUM", category: "kcafe", price: 125 },
    { name: "OKINAWA LARGE", category: "kcafe", price: 150 },
    { name: "OKINAWA MEDIUM", category: "kcafe", price: 130 },
    { name: "ORIGINAL MATCHA LARGE", category: "kcafe", price: 155 },
    { name: "ORIGINAL MATCHA MEDIUM", category: "kcafe", price: 135 },
    { name: "SALTED CARAMEL LATTE LARGE", category: "kcafe", price: 155 },
    { name: "SALTED CARAMEL LATTE MEDIUM", category: "kcafe", price: 135 },
    { name: "MILKTEA DUO LARGE", category: "kcafe", price: 160 },
    { name: "MILKTEA DUO MEDIUM", category: "kcafe", price: 140 },

    // Sulit Pack (14)
    { name: "SET1 BM5", category: "sulit", price: 299 },
    { name: "SET2 CE5", category: "sulit", price: 299 },
    { name: "SET 3 CE2, BMP3", category: "sulit", price: 349 },
    { name: "SET 4 MR2, US2, FS1", category: "sulit", price: 399 },
    { name: "SET5 MR2, BS1, CRR2", category: "sulit", price: 389 },
    { name: "SET6 PAD2, BM1, PCO2", category: "sulit", price: 379 },
    { name: "SET 7 CCR2, BM1, PCO2", category: "sulit", price: 379 },
    { name: "TRIPLE TREAT 1 (CE3)", category: "sulit", price: 279 },
    { name: "TRIPLE TREAT 2 (CRR3)", category: "sulit", price: 289 },
    { name: "TRIPLE TREAT 3 (CE1, CRR1,CCB1)", category: "sulit", price: 319 },
    { name: "Tipid Pack 1 (BM4)", category: "sulit", price: 249 },
    { name: "Tipid Pack 2 (BM2, CE2)", category: "sulit", price: 259 },
    { name: "Tipid Pack 3 (CE4)", category: "sulit", price: 269 },
    { name: "Tipid Pack 4 (CCR2, BM2)", category: "sulit", price: 279 },

    // Beverages (21)
    { name: "COKE IN CAN", category: "beverage", price: 45 },
    { name: "ROYAL IN CAN", category: "beverage", price: 45 },
    { name: "SPRITE IN CAN", category: "beverage", price: 45 },
    { name: "SMART C 500ML (CALAMANSI)", category: "beverage", price: 55 },
    { name: "SMART C 500ML (DALANDAN)", category: "beverage", price: 55 },
    { name: "SMART C 500ML (LEMON)", category: "beverage", price: 55 },
    { name: "SMART C 500ML (ORANGE)", category: "beverage", price: 55 },
    { name: "SMART C 500ML (POMELO)", category: "beverage", price: 55 },
    { name: "CALAMANSI JUICE (ISLAND)", category: "beverage", price: 65 },
    { name: "GATORADE (BLUE)", category: "beverage", price: 75 },
    { name: "HERBI TEA", category: "beverage", price: 50 },
    { name: "HOUSE BLEND ICED TEA", category: "beverage", price: 55 },
    { name: "KINGS WATER 500ML", category: "beverage", price: 35 },
    { name: "NESTEA", category: "beverage", price: 50 },
    { name: "PINEAPPLE JUICE", category: "beverage", price: 65 },
    { name: "SIP WATER 1L", category: "beverage", price: 45 },
    { name: "WILKINS 500ML", category: "beverage", price: 35 },
    { name: "ZAMBO TROPICAL CALAMANSI", category: "beverage", price: 65 },
    { name: "ZESTO BIG (APPLE)", category: "beverage", price: 55 },
    { name: "ZESTO BIG (ORANGE)", category: "beverage", price: 55 },
    { name: "COKE MISMO", category: "beverage", price: 15 },

    // Lemonade (7)
    { name: "BLUE LEMONADE", category: "lemonade", price: 95 },
    { name: "CUCUMBER LEMON", category: "lemonade", price: 90 },
    { name: "FRESH HONEY LEMON", category: "lemonade", price: 100 },
    { name: "ICED TEA LEMON", category: "lemonade", price: 85 },
    { name: "LEMON KALAMANSI", category: "lemonade", price: 90 },
    { name: "LEMONADE DUO", category: "lemonade", price: 110 },
    { name: "PINK LEMONADE", category: "lemonade", price: 95 },

    // Meals (3)
    { name: "CHA MISUA", category: "meals", price: 120 },
    { name: "CAMARON", category: "meals", price: 150 },
    { name: "KIKIAM", category: "meals", price: 140 },

    // Others (many items)
    { name: "3 IN 1 KAKANIN", category: "others", price: 75 },
    { name: "ADOBO PEANUT POUCH", category: "others", price: 55 },
    { name: "ADORA ALMOND", category: "others", price: 85 },
    { name: "ALMOND JELLY (OVAL)", category: "others", price: 95 },
    { name: "ANIMAL/OCEAN SERIES", category: "others", price: 45 },
    { name: "ASSORTED CANDY", category: "others", price: 50 },
    { name: "ASSORTED LOLLIPOP", category: "others", price: 60 },
    { name: "BANANA CHIPS BIG", category: "others", price: 85 },
    { name: "BISCOCHO (CLASSIC)", category: "others", price: 70 },
    { name: "BISCOCHO (SPECIAL)", category: "others", price: 80 },
    { name: "CHOCO HEARTS x5", category: "others", price: 120 },
    { name: "CHOCO NIPS", category: "others", price: 45 },
    { name: "DARK CHOCO CRINKLES MINI", category: "others", price: 50 },
    { name: "ESPASOL", category: "others", price: 85 },
    { name: "FISH CRACKER", category: "others", price: 65 },
    { name: "GOLD COINS", category: "others", price: 95 },
    { name: "HEALTHY CHIPS", category: "others", price: 75 },
    { name: "JELLY BEANS", category: "others", price: 55 },
    { name: "KUTSINTA", category: "others", price: 65 },
    { name: "LECHE FLAN", category: "others", price: 85 },
    { name: "LENGUA", category: "others", price: 95 },
    { name: "OTAP NEW", category: "others", price: 70 },
    { name: "PEANUT BAR", category: "others", price: 55 },
    { name: "PEANUT POUCH", category: "others", price: 50 },
    { name: "POTATO CHIPS", category: "others", price: 45 },
    { name: "PUTO SMALL X15", category: "others", price: 120 },
    { name: "RAINBOW MALLOWS", category: "others", price: 60 },
    { name: "SHRIMP CRACKERS", category: "others", price: 65 },
    { name: "SQUASH SEEDS POUCH", category: "others", price: 75 },
    { name: "TURONES POUCH", category: "others", price: 85 },
    { name: "YEMA MINI PACK", category: "others", price: 70 },
];

// Featured products for "What's New" section (pick 8 bestsellers)
const featuredProducts = [
    { name: "Choco Fantasy", category: "cakes", price: 850, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
    { name: "Premium Cheese Rolls", category: "bread", price: 55, image: "https://images.unsplash.com/photo-1638901169773-46282b0a7801?w=400&h=400&fit=crop" },
    { name: "Mocha Vanilla Bliss", category: "cakes", price: 950, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
    { name: "Butter Croissants", category: "pastries", price: 65, image: "https://images.unsplash.com/photo-1559365153-cd4628902249?w=400&h=400&fit=crop" },
    { name: "Banana Loaf", category: "pastries", price: 180, image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop" },
    { name: "Spanish Latte", category: "kcafe", price: 120, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
    { name: "Ube Halaya", category: "cakes", price: 1000, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
    { name: "Enzaimada Rolls", category: "bread", price: 55, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop" },
];

// Render featured products in "What's New" section
const whatsNewGrid = document.getElementById('whatsNewGrid');
featuredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'new-product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">₱${product.price.toFixed(2)}</div>
        <button class="add-to-cart-btn" onclick="addToCart('${product.name}')">Add to cart</button>
    `;
    whatsNewGrid.appendChild(card);
});

// Get unique categories
const categories = ['all', ...new Set(products.map(p => p.category))];
const categoryEmojis = {
    'all': 'All Products',
    'bread': '🍞 Bread',
    'cakes': '🎂 Cakes',
    'pastries': '🥐 Pastries',
    'kcafe': '☕ Kcafe',
    'sulit': '💝 Sulit Packs',
    'beverage': '🥤 Beverages',
    'lemonade': '🍋 Lemonades',
    'meals': '🍱 Meals',
    'others': '⭐ Others'
};

// Count products by category
const categoryCounts = {};
categories.forEach(cat => {
    if (cat === 'all') {
        categoryCounts[cat] = products.length;
    } else {
        categoryCounts[cat] = products.filter(p => p.category === cat).length;
    }
});

// Render categories
const categoryList = document.getElementById('categoryList');
categories.forEach((cat, idx) => {
    const li = document.createElement('li');
    li.className = `category-item ${idx === 0 ? 'active' : ''}`;
    li.setAttribute('data-category', cat);
    li.innerHTML = `
        <span>${categoryEmojis[cat] || cat}</span>
        <span class="count">(${categoryCounts[cat]})</span>
    `;
    categoryList.appendChild(li);
});

// Render products
const productGrid = document.getElementById('productGrid');
function renderProducts(filterCategory = 'all') {
    productGrid.innerHTML = '';
    const filtered = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category === filterCategory);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        
        const emoji = categoryEmojis[product.category]?.split(' ')[0] || '📦';
        
        card.innerHTML = `
            <div class="image-container">
                <div class="image-placeholder">${emoji}</div>
                <button class="quick-add" onclick="addToCart('${product.name}')">ADD TO CART</button>
            </div>
            <span class="category-label">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="price">₱${product.price.toFixed(2)}</div>
        `;
        productGrid.appendChild(card);
    });
}

// Initial render
renderProducts();

// Category filtering
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.category-item').forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category');
        renderProducts(category);
    });
});

// Add to cart function
function addToCart(productName) {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = (parseInt(cartCount.textContent) + 1).toString();
    alert(`${productName} added to cart!`);
}