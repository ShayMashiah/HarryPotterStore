// Example data for products
const products = [
    {
        name: "Harry Potter and the Philosopher's Stone",
        image: "images/book1.jpg",
        price: 12.99
    },
    {
        name: "Harry Potter and the Chamber of Secrets",
        image: "images/book2.jpg",
        price: 14.99
    },
    {
        name: "Harry Potter and the Prisoner of Azkaban",
        image: "images/book3.jpg",
        price: 16.99
    },
    // Add more products as needed
];

// Function to display products on the page
function displayProducts() {
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const image = document.createElement("img");
        image.src = product.image;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "$" + product.price.toFixed(2);

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);

        productContainer.appendChild(card);
    });
}

// Call the displayProducts function to populate the product section
displayProducts();
