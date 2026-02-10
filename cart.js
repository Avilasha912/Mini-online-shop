// Shopping Cart Management System
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const item = {
        name: name,
        price: price,
        id: Date.now()
    };
    
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show feedback to user
    alert(name + ' added to cart!');
    console.log('Cart updated:', cart);
}

function viewCart() {
    console.log('Cart Contents:');
    if (cart.length === 0) {
        console.log('Your cart is empty');
        return;
    }
    
    let total = 0;
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Rs ${item.price}`);
        total += item.price;
    });
    console.log(`Total: Rs ${total}`);
}

function removeFromCart(index) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index >= 0 && index < cart.length) {
        const removed = cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`${removed[0].name} removed from cart`);
        
        // Refresh cart display if on cart page
        if (typeof displayCart === 'function') {
            displayCart();
        }
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart cleared');
    
    // Refresh cart display if on cart page
    if (typeof displayCart === 'function') {
        displayCart();
    }
}
