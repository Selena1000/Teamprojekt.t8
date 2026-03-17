// COLOR SELECTOR (function)

function initSwatches() {
  document.querySelectorAll(".color-options").forEach((group) => {
    const swatches = group.querySelectorAll(".color-swatch");

    swatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        swatches.forEach((s) => s.classList.remove("active"));
        swatch.classList.add("active");
      });
    });
  });
}

// BURGER MENU

const burger = document.querySelector(".burger");
const burgerDropdown = document.querySelector("#burgerDropdown");

burger.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});

// FETCH PRODUCTS BY CATEGORY

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const productContainer = document.querySelector("main");

fetch(`https://dummyjson.com/products/category/${category}`)
  .then((response) => response.json())
  .then((products) => {
    products.products.forEach((product) => {
      const isAvailable = ["In Stock", "Low Stock"].includes(product.availabilityStatus);

      const newPrice = product.price;
      const oldPrice = Math.ceil(product.price / (1 - product.discountPercentage / 100));

      productContainer.innerHTML += `
        <article class="product-box ${isAvailable ? "" : "soldout"} ${product.discountPercentage ? "discounted" : ""}">
          <div class="img-box">
            <i class="ri-poker-hearts-fill favorite-btn"></i>
            ${product.discountPercentage ? `<span class='discount-tag'>-${product.discountPercentage}%</span>` : ""}
            <img class="mainimg" src="${product.thumbnail}" alt="" />
            <img class="hoverimg" src="${product.images[1] || product.thumbnail}" alt="" />

          </div>

          <div class="color-options">
            <span class="color-swatch" style="background-color: #c2c2cbff"></span>
            <span class="color-swatch" style="background-color: #000000"></span>
          </div>

          <h3 class="product-title">${product.title}</h3>
          <p>${product.tags.join(", ")}</p>

          <div class="price-box">
            <p class="price"><span class="old-price">DKK ${oldPrice},-</span></p>
            <p class="new-price"><span>Now DKK ${newPrice},-</span></p>
            <a href="productdetail.html?id=${product.id}" class="add-to-cart add-cart">See more</a>
          </div>
        </article>
      `;
    });

    initSwatches();
  });
