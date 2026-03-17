const params = new URLSearchParams(window.location.search);

const id = params.get("id");
console.log(id);
const main = document.querySelector(".product-page");

fetch(`https://dummyjson.com/products/${id}`)
  .then((respone) => respone.json())
  .then((product) => {
    main.innerHTML += `
      <!-- BACK BUTTON -->
      <a class="back-box" href="productlist.html">← Back</a>

      <div class="product-grid">

        <!-- LEFT: BILLEDER -->
        <div class="image-section">
          <div class="thumbs" id="thumbs"></div>

          <div class="main-image">
            <img src="${product.thumbnail}" id="mainImage" alt="Product image" />

            <button class="img-arrow left" id="prevImg">‹</button>
            <button class="img-arrow right" id="nextImg">›</button>

            <div class="image-counter" id="imageCounter">1/${product.images.length}</div>
          </div>
        </div>

        <!-- RIGHT: INFO -->
        <div class="info-section">
          <div class="category">${product.category}</div>
          <h1 class="title">${product.title}</h1>

          <div class="rating">
            <span id="stars">${"★".repeat(Math.round(product.rating))}${"☆".repeat(5 - Math.round(product.rating))}</span>
            <span id="reviews">Reviews (${product.reviews.length})</span>
          </div>

          <div class="price">DKK ${product.price},-</div>

          <div class="label">Brand</div>
          <p>${product.brand}</p>

          <div class="label">Description</div>
          <p class="description">${product.description}</p>

          <div class="label">Shipping</div>
          <p>${product.shippingInformation}</p>

          <div class="label">Warranty</div>
          <p>${product.warrantyInformation}</p>

          <div class="label">Return Policy</div>
          <p>${product.returnPolicy}</p>

          <div class="actions">
            <button class="add-btn" id="addToBasket">Add to basket</button>
            <button class="heart-btn" id="wishlist">♡</button>
          </div>
        </div>
      </div>
    `;
  });
const burger = document.querySelector(".burger");
const burgerDropdown = document.querySelector("#burgerDropdown");

burger.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});
