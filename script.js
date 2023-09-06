// Simulating a backend response with some products
const products = [
  { id: 1, name: "Laptop", description: "High-end laptop.", initialBid: 100, image: "laptop.jpg" },
  { id: 2, name: "Camera", description: "DSLR Camera.", initialBid: 200, image: "camera.jpg" },
  // Add more products
];

// Populating the product grid dynamically
function loadProducts() {
  const productGrid = document.getElementById("product-grid");
  products.forEach(product => {
    const productCard = document.createElement("a");
    productCard.className = "product-card";
    productCard.href = `product.html?id=${product.id}`;
    
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    
    productCard.append(productImage, productName, productDescription);
    productGrid.appendChild(productCard);
  });
}

// Loading individual product details
function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const product = products.find(p => p.id == id); // Replace with API call in a real app
  
  if (product) {
    document.getElementById("product-title").textContent = `${product.name} - Auction Site`;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.image;
    document.getElementById("current-bid").textContent = product.initialBid;
    document.getElementById("new-bid").min = product.initialBid + 1;
  }
}

// If we are on the index page, load the product grid
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  loadProducts();
}

// If we are on a product page, load the individual product
if (window.location.pathname.endsWith('product.html')) {
  loadProduct();
}
