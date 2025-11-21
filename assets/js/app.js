// App Logic
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    console.log('App initialized :: ');
    console.log('ReWebSDK userLocation available:', !!window?.ReWebSDK?.userLocation);

    setupLogin();
    setupAddToCart();
    checkSDK();
}

// Login Logic
function setupLogin() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
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
        });
    });
}

const checkSDK = setInterval(() => {
    if (window?.ReWebSDK?.userLocation) {
        window.ReWebSDK.userLocation();
        clearInterval(checkSDK);
    }
}, 1000);
