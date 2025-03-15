document.addEventListener("DOMContentLoaded", function () {
  const ctaHeader = document.getElementById("cta-header");
  const navMenu = document.getElementById("nav-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const overlay = document.getElementById("overlay");

  function moveCTA() {
    if (window.innerWidth <= 1100) {
      // Move CTA inside the nav
      if (!navMenu.contains(ctaHeader)) {
        navMenu.appendChild(ctaHeader);
      }
    } else {
      // Move CTA back to its original position
      if (
        document.querySelector(".header") &&
        !document.querySelector(".header").contains(ctaHeader)
      ) {
        document.querySelector(".header").appendChild(ctaHeader);
      }
    }
  }

  // Run on page load & resize
  moveCTA();
  window.addEventListener("resize", moveCTA);

  // Open Menu
  menuToggle.addEventListener("click", function () {
    navMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // Close Menu
  menuClose.addEventListener("click", function () {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close when clicking outside menu
  overlay.addEventListener("click", function () {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
