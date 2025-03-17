document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");
  const acceptButtons = document.querySelectorAll(".accept-btn");

  // When clicking the checkbox, open the modal
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function (event) {
      event.preventDefault(); // Stop the checkbox from being checked

      const modalId =
        checkbox.id === "honour-pledge-checkbox"
          ? "honour-pledge-modal"
          : "terms-modal";

      const modal = document.getElementById(modalId);
      modal.classList.add("active");
      modal.classList.remove("hidden");

      // Store the related checkbox in the modal dataset
      modal.dataset.checkboxId = checkbox.id;
    });
  });

  // Close modal when clicking the close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-target");
      const modal = document.getElementById(modalId);

      modal.classList.remove("active");
      modal.classList.add("hidden");
    });
  });

  // Accept button - Closes modal & checks the checkbox
  acceptButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      const checkboxId = modal.dataset.checkboxId;
      document.getElementById(checkboxId).checked = true; // Check the linked checkbox

      modal.classList.remove("active");
      modal.classList.add("hidden");
    });
  });
});
