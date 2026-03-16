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

// Favorite toggle
