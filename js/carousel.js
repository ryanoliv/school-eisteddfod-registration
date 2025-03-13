let index = 0;

function updateCarousel() {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const indicators = document.querySelectorAll(".carousel-indicators .dot");

  // Calculate the correct offset
  const offset = -index * 600; // 600px = image width
  carousel.style.transform = `translateX(${offset}px)`;

  // Update active dot
  indicators.forEach((dot) => dot.classList.remove("active"));
  indicators[index].classList.add("active");
}

// Initialize dots and attach event listeners
function createIndicators() {
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  const images = document.querySelectorAll(".carousel img");

  images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // First dot active
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
    indicatorsContainer.appendChild(dot);
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  createIndicators();
  updateCarousel();

  // Auto-slide every 4 seconds
  setInterval(() => {
    index = (index + 1) % document.querySelectorAll(".carousel img").length;
    updateCarousel();
  }, 4500);
});
