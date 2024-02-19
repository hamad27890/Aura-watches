document.addEventListener("DOMContentLoaded", function () {
    const productData = [
        { id: 1, name: 'Stylish Watch', price: 99.99, image: 'watch1.jpg' },
        { id: 2, name: 'Elegant Timepiece', price: 149.99, image: 'watch2.jpg' },
        { id: 3, name: 'Sporty Chrono', price: 129.99, image: 'watch3.jpg' },
        // Add more products as needed
    ];

    const productsSection = document.querySelector('.products');
    const cartButton = document.querySelector('.view-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCartButton = document.querySelector('.close-cart');
    const cartItemsList = document.querySelector('.cart-items');

    // Populate product cards
    productData.forEach(product => {
        const productCard = createProductCard(product);
        productsSection.appendChild(productCard);
    });

    // Event listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    cartButton.addEventListener('click', openCart);
    closeCartButton.addEventListener('click', closeCart);

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        return card;
    }

    function addToCart(event) {
        const productId = event.target.getAttribute('data-id');
        const selectedProduct = productData.find(product => product.id == productId);

        alert(`Product "${selectedProduct.name}" added to cart!`);
        // You can modify this part to add the product to your cart logic
    }
    document.addEventListener("DOMContentLoaded", function () {
        // Your existing JavaScript code...
    
        function addToCart(event) {
            const productId = event.target.getAttribute('data-id');
            const selectedProduct = productData.find(product => product.id == productId);
    
            // Add the selected product to the cart (replace this with your actual cart logic)
            addToCartLogic(selectedProduct);
    
            // Show a confirmation message or update the UI as needed
            alert(`Product "${selectedProduct.name}" added to cart!`);
        }
    
        function addToCartLogic(product) {
            // Implement your logic to add the product to the cart
            // For demonstration purposes, let's add the product to a dummy cart array
            dummyCartItems.push(product);
    
            // Update the cart UI
            updateCartUI();
        }
    
        function updateCartUI() {
            // Clear existing items
            cartItemsList.innerHTML = '';
    
            // Append new items
            dummyCartItems.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('cart-item');
                li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <p>${item.name} - $${item.price.toFixed(2)}</p>
                    </div>
                `;
                cartItemsList.appendChild(li);
            });
        }
    
        // Your existing JavaScript code...
    
    });
    

    function openCart() {
        cartOverlay.style.display = 'flex';
        updateCartUI();
    }

    function closeCart() {
        cartOverlay.style.display = 'none';
    }

    function updateCartUI() {
        // For demonstration purposes, let's add some dummy items to the cart.
        const dummyCartItems = [
            { id: 1, name: 'Stylish Watch', price: 99.99, image: 'watch1.jpg' },
            // Add more items if needed
        ];

        // Clear existing items
        cartItemsList.innerHTML = '';

        // Append new items
        dummyCartItems.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <p>${item.name} - $${item.price.toFixed(2)}</p>
                </div>
            `;
            cartItemsList.appendChild(li);
        });
    }
});
