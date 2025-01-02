/**
 * OOP Shopping Cart
 *
 * Object Orientated Programming Shopping Cart Example
 */

/* --- LOCAL DATA --- */
const products = [
   {
        id: 1,
        category: "Cupcake",
        name: "Vanilla Cupcakes (6 Pack)",
        price: 12.99
    },
    {
        id: 2,
        category: "Macaron",
        name: "French Macaron",
        price: 3.99
    },
    {
        id: 3,
        category: "Cupcake",
        name: "Pumpkin Cupcake",
        price: 3.99
    },
    {
        id: 4,
        category: "Cupcake",
        name: "Chocolate Cupcake",
        price: 5.99
    },
    {
        id: 5,
        category: "Pretzel",
        name: "Chocolate Pretzels (4 Pack)",
        price: 10.99
    },
    {
        id: 6,
        category: "Ice Cream",
        name: "Strawberry Ice Cream",
        price: 2.99
    },
    {
        id: 7,
        category: "Macaron",
        name: "Chocolate Macarons (4 Pack)",
        price: 9.99
    },
    {
        id: 8,
        category: "Pretzel",
        name: "Strawberry Pretzel",
        price: 4.99
    },
    {
        id: 9,
        category: "Ice Cream",
        name: "Butter Pecan Ice Cream",
        price: 2.99
    },
    {
        id: 10,
        category: "Ice Cream",
        name: "Rocky Road Ice Cream",
        price: 2.99
    },
    {
        id: 11,
        category: "Macaron",
        name: "Vanilla Macarons (5 Pack)",
        price: 11.99
    },
    {
        id: 12,
        category: "Cupcake",
        name: "Lemon Cupcakes (4 Pack)",
        price: 12.99
    }
];
/* --- END LOCAL DATA --- */

/* --- INTERFACE VARIABLES --- */
/* Buttons */
const addToCartBtns = document.getElementsByClassName('add-to-cart-btns');
const cartBtn = document.getElementById('cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const showHideCartSpan = document.getElementById('show-hide-cart');
/* End Buttons */

/* Containers */
const cartContainer = document.getElementById('cart-container');
const dessertCards = document.getElementById('dessert-card-container');
const productsContainer = document.getElementById('products-container');
/* End Containers */

/* Text Elements (Totals) */
const cartSubTotal = document.getElementById('subtotal');
const cartTaxes = document.getElementById('taxes');
const cartTotal = document.getElementById('total');
const totalNumberOfItems = document.getElementById('total-items');
/* End Text Elements */

/* --- END INTERFACE VARIABLES --- */

/* --- FUNCTIONAL VARIABLES --- */
let isCartShowing = false;
/* --- END FUNCTIONAL VARIABLES --- */

/* --- INTERFACE FUNCTIONS --- */

/**
 * Base Prooduct layout.
 */
products.forEach(
    ({ name, id, price, category }) => {
        dessertCards.innerHTML += `
            <div class="dessert-card">
                <h2>${name}</h2>
                <p class="dessert-price">\$${price}</p>
                <p class="product-category">Category: ${category}</p>
                <button id="${id}" class="btn add-to-cart-btn">Add to cart</button>
            </div>
        `;
    }
);

class ShoppingCart {
    constructor() {
        this.items = [];
        this.taxRate = 8.25;
        this.total = 0;
    }

    /* Methods */
    addItem(id, products) {
        // Create a copy of the product
        const product = products.find(
            (item) => { return item.id === id}
        );
        const { name, price } = product;
        // Push the product to the ShoppingCart
        this.items.push(product);

        // Create a object for tracking if the item is in the Cart
        const totalCountPerProduct = {};
        this.items.forEach((dessert) => {
            totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
        });
        // Get current count of products
        const currentProductCount = totalCountPerProduct[product.id];

        // Update interface
        const currentProductCountSpan = document.getElementById(`product-count-for-id${product.id}`);

        // If the product is in the cart then:
        currentProductCount > 1
            ? currentProductCountSpan.textContent = `${currentProductCount}x` 
            : productsContainer.innerHTML +=`
                <div class="product" id="dessert${id}">
                    <p><span class="product-count" id="product-count-for-id${id}" />${name}</p>
                    <p>${price}</p>
                </div>
            `;
    };

    getCounts() {
        return this.items.length;
    }

    calculateTaxes(amount) {
        return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }
    
    calculateTotal() {
        const subTotal = this.items.reduce((total, item) => total + item.price, 0);
        const tax = this.calculateTaxes(subTotal);
        this.total = subTotal + tax;
        cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
        cartTaxes.textContent = `$${tax.toFixed(2)}`;
        cartTotal.textContent = `$${this.total.toFixed(2)}`;
        return this.total;
    }
};

const cart = new ShoppingCart();

[...addToCartBtns].forEach(
    (btn) => {
        btn.addEventListener("click", (event) => {
            cart.addItem(Number(event.target.id), products);
            totalNumberOfItems.textContent = cart.getCounts();
        });
    }
);

cartBtn.addEventListener("click", () => {
    const isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
});

/* --- END INTERFACE FUNCTIONS --- */
