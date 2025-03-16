document.addEventListener("DOMContentLoaded", function () {
  const cartDrawer = document.querySelector(".cart-drawer");
  const cartOverlay = document.querySelector(".cart-overlay");
  const closeCartBtn = document.querySelector(".cart-close");
  const addToCartBtns = document.querySelectorAll(".add-to-cart");
  const cartItemsContainer = document.querySelector(".cart-items");

  // Dummy product data
  const productData = {
    name: "M11 - Tap Solo (Intermediate)",
    price: "$55",
    icon: "/images/icon-placeholder.svg",
  };

  // Function to update cart UI
  function updateCart() {
    cartItemsContainer.innerHTML = `
            <div class="cart-item">
                <img src="${productData.icon}" alt="Product Icon" class="cart-icon" />
                <div class="cart-info">
                    <h3>${productData.name}</h3>
                    <p class="price">${productData.price}</p>
                </div>
                <img src="/images/icons/remove-from-cart.svg" alt="trash icon" class="remove-item" />
            </div>
        `;
  }

  // Show Cart
  addToCartBtns.forEach((button) => {
    button.addEventListener("click", function () {
      updateCart(); // Populate the cart
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
    });
  });

  // Close Cart
  closeCartBtn.addEventListener("click", function () {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  });

  // Close when clicking overlay
  cartOverlay.addEventListener("click", function () {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  });

  // Remove item functionality
  cartItemsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      e.target.closest(".cart-item").remove();
    }
  });
});
