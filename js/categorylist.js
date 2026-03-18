const burgerBtn = document.getElementById("burgerBtn");
const burgerDropdown = document.getElementById("burgerDropdown");

burgerBtn.addEventListener("click", () => {
  console.log("clicked");
  burgerDropdown.classList.toggle("open");
});

//const categoryContainer = document.querySelector("#categorylist");

const categories = ["Sunglasses", "Womens Bags", "Womens Shoes", "Mens Shoes", "Sports Accessories", "Womens Watches"];
//categories.forEach((category) => {
//categoryContainer.innerHTML += `<a href="productlist.html">${category}</a>`;
// });

fetch("https://dummyjson.com/products/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      if (categories.includes(category.name)) {
        document.querySelector(".cards").innerHTML += `<article class="card">
            <div class="thumb">
              <img src="img.categorylist/${category.name}.webp" alt="Sunglasses" />
            </div>
            <div class="card-body">
              <h3 class="card-title">${category.name}</h3>
              <a href="productlist.html?category=${category.slug}" class="pill">Shop now</a>
            </div>
          </article>`;
      }
    });
  });
