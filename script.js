
//ADD TO CART
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
}

// CART Scripts
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cart = loadCart();
    cartItems.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    const totalDiv = document.getElementById('cart-total');
    totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    const cart = loadCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem('cart'); // Remove the cart from local storage
    displayCart(); // Refresh the cart display
    alert('Your cart has been cleared!');
}


// Load cart items on window load
window.onload = displayCart;