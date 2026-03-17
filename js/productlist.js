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
      console.log("availabilityStatus", product.availabilityStatus === "In Stock" || product.availabilityStatus === "Low Stock" ? "" : "soldout");
      productContainer.innerHTML += `<article class="product-box ${product.availabilityStatus === "In Stock" || product.availabilityStatus === "Low Stock" ? "" : "soldout"} ${product.discountPercentage ? "discounted" : ""}">
            <div class="img-box">
              <i class="ri-poker-hearts-fill favorite-btn"></i>
              ${product.discountPercentage ? `<span class='discount-tag'>-${product.discountPercentage}%</span>` : ""}
              <span class="discount-tag">-${product.discountPercentage}%</span>
              <img class="mainimg" src="${product.thumbnail}" alt="" />
              <img class="hoverimg" src="${product.images[1]}" alt="" />
            </div>
            <div class="color-options">
              <span class="color-swatch" style="background-color: #ffffffff"></span>
              <span class="color-swatch" style="background-color: #000000"></span>

            </div>
            <h3 class="product-title">${product.title}</h3>
            <p>Category title</p>
            <div class="price-box">
              <p class="price"><span class="old-price">DKK ${product.price},-</span></p>
              <p class="new-price"><span>Now DKK${Math.ceil((product.price / 100) * product.discountPercentage)},- </span></p>
              <a href="productdetail.html?id=${product.id}" class="add-to-cart add-cart">See more</a>
            </div>
          </article>`;
    });
  });
