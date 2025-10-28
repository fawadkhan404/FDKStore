// Example Product Data (later dynamic kar sakte ho)
const product = {
  title: "Men's Stainless Watch",
  description: "Stainless steel • Quartz • Water-resistant",
  features: ["Stainless Steel", "Quartz Movement", "Water Resistant 50m"],
  price: "$89.99",
  images: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80"
  ]
};

// Populate Product Details
document.getElementById("productTitle").innerText = product.title;
document.getElementById("productDescription").innerText = product.description;
document.getElementById("productPrice").innerText = product.price;

// Populate Features
const featuresList = document.getElementById("productFeatures");
product.features.forEach(f => {
  const li = document.createElement("li");
  li.innerText = f;
  featuresList.appendChild(li);
});

// Populate Images
const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

product.images.forEach((img, index) => {
  const thumb = document.createElement("img");
  thumb.src = img;
  thumb.className = "w-16 h-16 object-cover rounded cursor-pointer";
  thumb.onclick = () => { mainImage.src = img; };
  thumbnails.appendChild(thumb);

  if (index === 0) mainImage.src = img;
});

// Handle Add to Cart
document.getElementById("addToCartBtn").onclick = () => {
  alert(`${product.title} added to cart!`);
};

// Handle Reviews
const reviewsContainer = document.getElementById("reviewsContainer");
const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reviewName").value;
  const rating = document.getElementById("reviewRating").value;
  const comment = document.getElementById("reviewComment").value;

  const reviewDiv = document.createElement("div");
  reviewDiv.className = "bg-gray-800 p-4 rounded";
  reviewDiv.innerHTML = `<strong>${name}</strong> - ${"⭐".repeat(rating)}<p>${comment}</p>`;
  reviewsContainer.appendChild(reviewDiv);

  reviewForm.reset();
});
