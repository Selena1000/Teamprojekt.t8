// Color selector
document.querySelectorAll(".color-options").forEach((group) => {
  const swatches = group.querySelectorAll(".color-swatch");

  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      swatches.forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");
    });
  });
});
const burger = document.querySelector(".burger");
const burgerDropdown = document.querySelector("#burgerDropdown");

burger.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});

// "use strict";
const params = new URLSearchParams(window.location.search);

const category = params.get("category");
console.log("CATEGORY", category);
const productContainer = document.querySelector("main");

fetch(`https://dummyjson.com/products/category/${category}`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    products.products.forEach((product) => {
      productContainer.innerHTML += `<article class="product-box soldout">
            <div class="img-box">
              <i class="ri-poker-hearts-fill favorite-btn"></i>
              <span class="discount-tag">-50%</span>
              <img class="mainimg" src="${product.thumbnail}" alt="" />
              <img class="hoverimg" src="${product.images[1]}" alt="" />
            </div>
            <div class="color-options">
              <span class="color-swatch" style="background-color: #9c9797"></span>
              <span class="color-swatch" style="background-color: #000000"></span>
              <span class="color-swatch" style="background-color: #073e08"></span>
            </div>
            <h3 class="product-title">${product.title}</h3>
            <p>Category title</p>
            <div class="price-box">
              <p class="price"><span class="old-price">DKK,-</span></p>
              <p class="new-price"><span>Now DKK,- </span></p>
              <a href="productdetail.html" class="add-to-cart add-cart">See more</a>
            </div>
          </article>`;
    });
  });
