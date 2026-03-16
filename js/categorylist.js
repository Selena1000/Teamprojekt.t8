const burgerBtn = document.getElementById("burgerBtn");
const burgerDropdown = document.getElementById("burgerDropdown");

burgerBtn.addEventListener("click", () => {
  burgerDropdown.classList.toggle("open");
});
