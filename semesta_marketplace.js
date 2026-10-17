// This will eventually be your Supabase API URL
const API_URL = "https://your-project-id.supabase.co/rest/v1/products";
// This is a public key, safe to put on GitHub
const PUBLIC_ANON_KEY = "your-public-anon-key";

// For now, we will use mock data so you can see how it works before setting up the database
const mockProducts = [
    { id: 1, name: "Premium Java Vanilla Beans", category: "Agriculture", price: "$120.00 / kg" },
    { id: 2, name: "Processed Coconut Briquettes", category: "Energy", price: "$950.00 / ton" },
    { id: 3, name: "Industrial Microgreens Setup", category: "Technology", price: "$2,500.00 / unit" }
];

// Function to display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; // Clear loading text

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Category:</strong> ${product.category}</p>
            <p class="price">${product.price}</p>
            <a href="#" class="btn">Inquire for Export</a>
        `;
        productContainer.appendChild(card);
    });
}

// Initialize the marketplace
document.addEventListener('DOMContentLoaded', () => {
    // Later, we will replace this with a real fetch() call to your SQL database
    displayProducts(mockProducts);
});