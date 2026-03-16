console.log("FAVORITE.JS IS RUNNING");

// ------------------------------
// SELECTORS
// ------------------------------
const favoritesPanel = document.querySelector(".favorites");
const favoritesContent = document.querySelector(".favorites-content");
const favoritesIcon = document.querySelector("#favorites-icon");
const favoritesClose = document.querySelector("#favorites-close");
const bubble = document.querySelector(".favorites-bubble");

// ------------------------------
// EVENT DELEGATION FOR HEARTS
// ------------------------------
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".favorite-btn");
  if (!heart) return;

  console.log("HEART CLICKED");

  const product = heart.closest(".product-box");
  if (!product) return;

  heart.classList.toggle("favorited");

  if (heart.classList.contains("favorited")) {
    addToFavorites(product);
  } else {
    removeFromFavorites(product);
  }

  updateBubble();
  updateEmptyMessage();
});

// ------------------------------
// ADD FAVORITE
// ------------------------------
function addToFavorites(productBox) {
  const title = productBox.querySelector(".product-title").textContent.trim();
  const img = productBox.querySelector(".mainimg").src;
  const link = productBox.querySelector(".add-to-cart")?.href || "#";

  console.log("addToFavorites:", title);

  if (favoritesContent.querySelector(`[data-title="${title}"]`)) return;

  const item = document.createElement("div");
  item.classList.add("fav-item");
  item.dataset.title = title;

  item.innerHTML = `
    <img src="${img}" alt="">
    <div class="fav-info">
      <p>${title}</p>
      <a href="${link}" class="fav-view">View item</a>
    </div>
    <i class="ri-delete-bin-line remove-fav"></i>
  `;

  favoritesContent.appendChild(item);

  item.querySelector(".remove-fav").addEventListener("click", () => {
    item.remove();
    unhighlightHeart(title);
    updateBubble();
    updateEmptyMessage();
  });
}

// ------------------------------
// REMOVE FAVORITE
// ------------------------------
function removeFromFavorites(productBox) {
  const title = productBox.querySelector(".product-title").textContent.trim();
  console.log("removeFromFavorites:", title);

  const item = favoritesContent.querySelector(`[data-title="${title}"]`);
  if (item) item.remove();
}

// ------------------------------
// UNHIGHLIGHT HEART
// ------------------------------
function unhighlightHeart(title) {
  document.querySelectorAll(".product-box").forEach((box) => {
    const t = box.querySelector(".product-title");
    if (t && t.textContent.trim() === title) {
      const heart = box.querySelector(".favorite-btn");
      if (heart) heart.classList.remove("favorited");
    }
  });
}

// ------------------------------
// EMPTY MESSAGE
// ------------------------------
function updateEmptyMessage() {
  const emptyMsg = favoritesContent.querySelector(".no-favorites");
  if (!emptyMsg) return;

  const hasItems = favoritesContent.querySelectorAll(".fav-item").length > 0;
  emptyMsg.style.display = hasItems ? "none" : "block";
}

// ------------------------------
// BUBBLE COUNTER
// ------------------------------
function updateBubble() {
  const count = favoritesContent.querySelectorAll(".fav-item").length;
  bubble.style.display = count === 0 ? "none" : "flex";
  bubble.textContent = count;
}

// ------------------------------
// OPEN / CLOSE PANEL
// ------------------------------
favoritesIcon.addEventListener("click", () => {
  favoritesPanel.classList.add("active");
});

favoritesClose.addEventListener("click", () => {
  favoritesPanel.classList.remove("active");
});
