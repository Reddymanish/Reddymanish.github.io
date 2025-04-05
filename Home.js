document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemElement = event.target.closest('.item');
            const itemName = itemElement.querySelector('h3').textContent;
            const itemPrice = parseFloat(itemElement.querySelector('p:nth-of-type(2)').textContent.replace('₹', ''));
            const itemImage = itemElement.querySelector('img').src;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if item is already in cart
            const existingItem = cart.find(item => item.name === itemName);

            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if already in cart
            } else {
                cart.push({
                    name: itemName,
                    price: itemPrice,
                    image: itemImage,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            alert(`${itemName} added to cart!`);
        });
    });

    // Function to update cart badge count
    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = cartCount;
    }

    // Initialize cart badge count on page load
    updateCartBadge();
});