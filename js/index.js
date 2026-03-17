const burgerBtn = document.getElementById("burgerBtn");
const burgerDropdown = document.getElementById("burgerDropdown");

burgerBtn.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});
// -------------------------------------------------------------------
// FETCH STARTER HER :)

const productGrid = document.querySelector(".product-grid");

fetch("https://dummyjson.com/products/category/sunglasses")
  .then((respone) => respone.json())
  .then((sunglasses) => {
    sunglasses.products.forEach((sunglas) => {
      productGrid.innerHTML += `
         <div class="product-card">
            <div class="product-img">
              <img src="${sunglas.thumbnail}" />
              </div>
              <div class="card-info">
              <a href="productdetail.html?id=${sunglas.id}" class="seemore">See More</a>
              <h3>${sunglas.brand}</h3>
              <p>${sunglas.category}</p>
              <p>€ ${sunglas.price},-</p>
              </div>
              </div>
              `;
    });
  });
// <button href="https://dr.dk" class="seemore">See more</button>
// <a class="seemore" href="productdetail.html?id=${sunglas.id}">link</a>
// <button href="https://dr.dk" class="seemore">See more</button>//
// <a href="productlist.html?category=womens-bags" class="shop-now">Shop now</a>
