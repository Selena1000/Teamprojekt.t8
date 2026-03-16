const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productBox = event.target.closest(".product-box");
    addToCart(productBox);
  });
});
document.querySelectorAll(".favorite-btn").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("favorited");
  });
});

const cartContent = document.querySelector(".cart-content");
const addToCart = (productBox) => {
  const productImgSrc = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".product-title").textContent;
  const productPrice = productBox.querySelector(".price").textContent;

  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `         
   <img src="${productImgSrc}" class="cart-image" alt="" />
          <div class="cart-details">
            <h3 class="cart-product-title">${productTitle}</h3>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
              <button id="decrement">-</button>
              <span class="quantity">1</span>
              <button id="increment">+</button>
            </div>
          </div>
          <i class="ri-delete-bin-5-line"></i>
          `;
  // insert new cart item before the .total element so total and buy button remain at the bottom
  const totalElement = cartContent.querySelector(".total");
  if (totalElement) {
    cartContent.insertBefore(cartBox, totalElement);
  } else {
    cartContent.appendChild(cartBox);
  }

  cartBox.querySelector(".cart-remove").addEventListener("click", () => {
    cartBox.remove();
  });
};
