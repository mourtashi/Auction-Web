const products = [
  { id: 1, name: "Laptop", description: "High-end laptop.", initialBid: 100, image: "laptop.jpg" },
  { id: 2, name: "Camera", description: "DSLR Camera.", initialBid: 200, image: "camera.jpg" },
];

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

function handleCreateFormSubmission(event) {
  event.preventDefault();
  const newProduct = {
    id: products.length + 1,
    name: event.target.name.value,
    description: event.target.description.value,
    quality: event.target.quality.value,
    condition: event.target.condition.value,
    initialBid: parseFloat(event.target.initialBid.value),
    buyNowPrice: parseFloat(event.target.buyNowPrice.value),
    image: event.target.image.value
  };
  products.push(newProduct);
  alert('New product created successfully!');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    loadProducts();
    const createButton = document.getElementById('create-button');
    if (createButton) {
      createButton.addEventListener('click', function() {
        window.location.href = 'create.html';
      });
    }
  }

  if (window.location.pathname.endsWith('create.html')) {
    const createForm = document.getElementById('create-form');
    if (createForm) {
      createForm.addEventListener('submit', handleCreateFormSubmission);
    }
  }
});
