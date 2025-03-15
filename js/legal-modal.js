document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const modals = document.querySelectorAll(".modal");
  const acceptButtons = document.querySelectorAll(".accept-btn");
  const closeButtons = document.querySelectorAll(".close");

  // Track which modals have already been opened
  const modalOpened = {
    "honour-pledge-checkbox": false,
    "terms-checkbox": false,
  };

  // Open modal on first click
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function (event) {
      if (!modalOpened[checkbox.id]) {
        event.preventDefault(); // Prevent checkbox from being checked
        modalOpened[checkbox.id] = true; // Mark modal as opened

        const modalId =
          checkbox.id === "honour-pledge-checkbox"
            ? "honour-pledge-modal"
            : "terms-modal";

        const modal = document.getElementById(modalId);
        modal.classList.add("active");
        modal.classList.remove("hidden");

        // Store which checkbox is linked to the modal
        modal.dataset.checkboxId = checkbox.id;
      }
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

  // Close modal when clicking the close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-target");
      const modal = document.getElementById(modalId);

      modal.classList.remove("active");
      modal.classList.add("hidden");
    });
  });

  // Prevent form submission if checkboxes are not checked
  document
    .querySelector(".profile-form")
    .addEventListener("submit", function (e) {
      const honourPledgeChecked = document.getElementById(
        "honour-pledge-checkbox"
      ).checked;
      const termsChecked = document.getElementById("terms-checkbox").checked;

      if (!honourPledgeChecked || !termsChecked) {
        e.preventDefault();
        alert(
          "Please accept the Honour Pledge and Terms & Conditions before submitting."
        );
      }
    });
});
