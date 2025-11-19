// App Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    
    // Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate login
            window.location.href = 'index.html';
        });
    }
    
    // Add to Cart Logic (Mock)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
