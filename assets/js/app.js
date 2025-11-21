// App Logic
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    console.log('App initialized :: ');
    console.log(window?.ReWebSDK?.userLocation)
    // Safe SDK method call
    if (window?.ReWebSDK?.userLocation) {
        window.ReWebSDK.userLocation();
    }

    setupLogin();
    setupAddToCart();
}

// Login Logic
function setupLogin() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulated login navigation
        window.location.assign('index.html');
    });
}

// Add to Cart Logic (Mock)
function setupAddToCart() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    if (!addToCartBtns.length) return;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Item added to cart!');
            // Optional future enhancement: store the cart in localStorage or backend
        });
    });
}

