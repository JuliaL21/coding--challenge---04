javascript
// Coding Challenge 04: Retail Discount Engine
// This program uses conditionals, switch statements, and loops
// to apply discounts, process customer carts, and update inventory.

// Step 2: Create an array of 5 product objects.
// Each product includes a name, category, price, and inventory count.
const products = [
    {
        name: "Wireless Headphones",
        category: "electronics",
        price: 120,
        inventory: 10
    },
    {
        name: "Graphic T-Shirt",
        category: "apparel",
        price: 25,
        inventory: 20
    },
    {
        name: "Organic Apples",
        category: "groceries",
        price: 8,
        inventory: 30
    },
    {
        name: "Laundry Detergent",
        category: "household",
        price: 15,
        inventory: 12
    },
    {
        name: "Notebook",
        category: "school",
        price: 5,
        inventory: 40
    }
];

// Step 3: Use a for...of loop to cycle through each product.
// A switch statement applies a category-based discount.
for (const product of products) {
    let discountRate;

    switch (product.category) {
        case "electronics":
            discountRate = 0.20;
            break;

        case "apparel":
            discountRate = 0.15;
            break;

        case "groceries":
        case "household":
            discountRate = 0.10;
            break;

        default:
            discountRate = 0;
            break;
    }

    product.discountRate = discountRate;
    product.discountedPrice = product.price - product.price * discountRate;
}

console.log("Products after category discounts:");
console.log(products);

// Step 4: Create customer type discount logic using if...else if.
// Students receive 5% extra off.
// Seniors receive 7% extra off.
// Regular customers receive no extra discount.
function getCustomerDiscount(customerType) {
    let extraDiscount;

    if (customerType === "student") {
        extraDiscount = 0.05;
    } else if (customerType === "senior") {
        extraDiscount = 0.07;
    } else {
        extraDiscount = 0;
    }

    return extraDiscount;
}

// Step 5: Create 3 customers and simulate checkout.
const customers = [
    {
        customerNumber: 1,
        customerType: "regular",
        cart: [
            { productName: "Wireless Headphones", quantity: 1 },
            { productName: "Organic Apples", quantity: 2 }
        ]
    },
    {
        customerNumber: 2,
        customerType: "student",
        cart: [
            { productName: "Graphic T-Shirt", quantity: 2 },
            { productName: "Notebook", quantity: 3 }
        ]
    },
    {
        customerNumber: 3,
        customerType: "senior",
        cart: [
            { productName: "Laundry Detergent", quantity: 1 },
            { productName: "Organic Apples", quantity: 4 }
        ]
    }
];

console.log("Checkout Results:");

// This for loop processes all 3 customers.
for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    let total = 0;

    // This for...of loop goes through each item in the customer's cart.
    for (const cartItem of customer.cart) {
        const product = products.find(item => item.name === cartItem.productName);

        if (product && product.inventory >= cartItem.quantity) {
            total += product.discountedPrice * cartItem.quantity;

            // Reduce product inventory after purchase.
            product.inventory -= cartItem.quantity;
        } else {
            console.log(`${cartItem.productName} is out of stock or does not have enough inventory.`);
        }
    }

    // Apply customer type discount to the total.
    const customerDiscount = getCustomerDiscount(customer.customerType);
    const finalTotal = total - total * customerDiscount;

    console.log(
        `Customer ${customer.customerNumber} (${customer.customerType}) total cost: $${finalTotal.toFixed(2)}`
    );
}

// Step 6: Use for...in to log each key/value pair for one product.
console.log("Single product details using for...in:");

const singleProduct = products[0];

for (const key in singleProduct) {
    console.log(`${key}: ${singleProduct[key]}`);
}

// Step 7: Use Object.entries() and destructuring to log all product info
// after inventory has been updated.
console.log("All product information after inventory updates:");

for (const product of products) {
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }

    console.log("--------------------");
}
