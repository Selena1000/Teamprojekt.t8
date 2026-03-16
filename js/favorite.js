// --- SELECTORS ---
const favoriteButtons = document.querySelectorAll(".favorite-btn");
const favoritesContent = document.querySelector(".favorites-content");
const favoritesIcon = document.querySelector("#favorites-icon");
const favoritesPanel = document.querySelector(".favorites");
const favoritesClose = document.querySelector("#favorites-close");

// --- HEART CLICK LOGIC ---
favoriteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("favorited");

    // pop animation
    btn.classList.add("pop");
    setTimeout(() => btn.classList.remove("pop"), 200);

    const productBox = btn.closest(".product-box");

    if (btn.classList.contains("favorited")) {
      addToFavorites(productBox);
    } else {
      removeFromFavorites(productBox);
    }
  });
});

// --- ADD FAVORITE ---
function addToFavorites(productBox) {
  const img = productBox.querySelector(".mainimg").src;
  const title = productBox.querySelector("h3").textContent;
  const link = productBox.querySelector("a.add-cart").getAttribute("href");

  const favItem = document.createElement("div");
  favItem.classList.add("fav-item");
  favItem.dataset.title = title;

  favItem.innerHTML = `
    <img src="${img}" />
    <div class="fav-info">
      <p>${title}</p>
      <a href="${link}" class="fav-view">View item</a>
    </div>
    <i class="ri-delete-bin-line remove-fav"></i>
  `;

  favoritesContent.appendChild(favItem);

  // remove button inside favorites
  favItem.querySelector(".remove-fav").addEventListener("click", () => {
    favItem.remove();
    unhighlightHeart(title);
    updateEmptyMessage();
    updateFavoritesBubble();
  });

  updateEmptyMessage();
  updateFavoritesBubble();
}

// --- REMOVE FAVORITE ---
function removeFromFavorites(productBox) {
  const title = productBox.querySelector("h3").textContent;
  const favItem = favoritesContent.querySelector(`[data-title="${title}"]`);
  if (favItem) favItem.remove();

  updateEmptyMessage();
  updateFavoritesBubble();
}

// --- UNHIGHLIGHT HEART WHEN REMOVED ---
function unhighlightHeart(title) {
  document.querySelectorAll(".product-box").forEach((box) => {
    if (box.querySelector("h3").textContent === title) {
      box.querySelector(".favorite-btn").classList.remove("favorited");
    }
  });
}

// --- EMPTY MESSAGE LOGIC ---
function updateEmptyMessage() {
  const hasItems = favoritesContent.querySelectorAll(".fav-item").length > 0;
  const emptyMsg = favoritesContent.querySelector(".no-favorites");
  emptyMsg.style.display = hasItems ? "none" : "block";
}

// --- BUBBLE COUNTER LOGIC ---
function updateFavoritesBubble() {
  const count = favoritesContent.querySelectorAll(".fav-item").length;
  const bubble = document.querySelector(".favorites-bubble");

  if (count === 0) {
    bubble.style.display = "none";
  } else {
    bubble.style.display = "flex";
    bubble.textContent = count;
  }
}

// --- OPEN/CLOSE FAVORITES PANEL ---
favoritesIcon.addEventListener("click", () => {
  favoritesPanel.classList.add("active");
});

favoritesClose.addEventListener("click", () => {
  favoritesPanel.classList.remove("active");
});
