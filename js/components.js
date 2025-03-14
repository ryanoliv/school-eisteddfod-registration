// document.addEventListener("DOMContentLoaded", function () {
//   fetch("components/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header-container").innerHTML = data;

//       // Attach the event listener AFTER inserting the header
//       const menuToggle = document.getElementById("menu-toggle");
//       const navMenu = document.getElementById("nav-menu");

//       if (menuToggle && navMenu) {
//         menuToggle.addEventListener("click", function () {
//           navMenu.classList.toggle("active");
//         });
//       }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Now that the header is loaded, attach event listeners
      const menuToggle = document.getElementById("menu-toggle");
      const menuClose = document.getElementById("menu-close");
      const navMenu = document.getElementById("nav-menu");
      const overlay = document.getElementById("overlay");

      if (menuToggle && menuClose && navMenu && overlay) {
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
      }
    });

  // Load Footer
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
