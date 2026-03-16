const product = {
  category: "Accessories | Bags",
  title: "ARETE TOTE BAG",
  price: 1299,
  rating: 3,
  reviews: 50,
  images: ["https://via.placeholder.com/800x600?text=Image+1", "https://via.placeholder.com/800x600?text=Image+2", "https://via.placeholder.com/800x600?text=Image+3", "https://via.placeholder.com/800x600?text=Image+4"],
  colors: ["#111", "#444", "#bbb", "#e5e5e5", "#fff"],
  sizes: ["xs", "s", "m", "l", "xl", "xxl"],
};

let currentImage = 0;
let selectedColor = 0;
let selectedSize = "xs";

// Tekstfelter
document.getElementById("category").textContent = product.category;
document.getElementById("title").textContent = product.title;
document.getElementById("price").textContent = `DKK ${product.price},-`;
document.getElementById("reviews").textContent = `Reviews (${product.reviews})`;

document.getElementById("stars").textContent = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

// -------------------------
// BILLEDER
// -------------------------
function renderImages() {
  const thumbs = document.getElementById("thumbs");
  thumbs.innerHTML = "";

  product.images.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "thumb" + (i === currentImage ? " active" : "");
    div.innerHTML = `<img src="${src}">`;
    div.onclick = () => {
      currentImage = i;
      updateMainImage();
      renderImages();
    };
    thumbs.appendChild(div);
  });

  updateMainImage();
}

function updateMainImage() {
  document.getElementById("mainImage").src = product.images[currentImage];
  document.getElementById("imageCounter").textContent = `${currentImage + 1}/${product.images.length}`;
}

// Pile til billedskift
document.getElementById("prevImg").onclick = () => {
  currentImage--;
  if (currentImage < 0) currentImage = product.images.length - 1;
  updateMainImage();
  renderImages();
};

document.getElementById("nextImg").onclick = () => {
  currentImage++;
  if (currentImage >= product.images.length) currentImage = 0;
  updateMainImage();
  renderImages();
};

// -------------------------
// FARVER
// -------------------------
function renderColors() {
  const colors = document.getElementById("colors");
  colors.innerHTML = "";

  product.colors.forEach((hex, i) => {
    const dot = document.createElement("div");
    dot.className = "color-dot" + (i === selectedColor ? " active" : "");
    dot.style.backgroundColor = hex;
    dot.onclick = () => {
      selectedColor = i;
      renderColors();
    };
    colors.appendChild(dot);
  });
}

// -------------------------
// STØRRELSER
// -------------------------
function renderSizes() {
  const sizes = document.getElementById("sizes");
  sizes.innerHTML = "";

  product.sizes.forEach((size) => {
    const btn = document.createElement("button");
    btn.className = "size-btn" + (size === selectedSize ? " active" : "");
    btn.textContent = size;
    btn.onclick = () => {
      selectedSize = size;
      renderSizes();
    };
    sizes.appendChild(btn);
  });
}

// -------------------------
// KNAPPER
// -------------------------
document.getElementById("addToBasket").onclick = () => {
  alert(`Added to basket:\n${product.title}\nSize: ${selectedSize.toUpperCase()}`);
};

document.getElementById("wishlist").onclick = () => {
  const btn = document.getElementById("wishlist");
  btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
};

// -------------------------
// INITIALISERING
// -------------------------
renderImages();
renderColors();
renderSizes();

// -------------------------
// Header
// -------------------------
const burgerBtn = document.getElementById("burgerBtn");
const burgerDropdown = document.getElementById("burgerDropdown");

burgerBtn.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});
