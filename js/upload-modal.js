document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("globalModal");
  const modalContainer = overlay.querySelector("[data-modal-container]");
  const modalContents = modalContainer.querySelectorAll(".modal-content");
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
  const closeButtons = modalContainer.querySelectorAll(".modal-close");

  function openModal(modalName) {
    // Show overlay + modal container
    overlay.classList.remove("hidden");
    overlay.classList.add("active");
    modalContainer.classList.remove("hidden");
    modalContainer.classList.add("active");

    // Hide all modal content blocks
    modalContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Show only the matching modal content
    const target = modalContainer.querySelector(`[data-modal="${modalName}"]`);
    if (target) {
      target.classList.remove("hidden");
    }
  }

  function closeModal() {
    overlay.classList.add("hidden");
    modalContainer.classList.add("hidden");
    overlay.classList.remove("active");
    modalContainer.classList.remove("active");

    // Optionally hide all modal contents as well
    modalContents.forEach((content) => {
      content.classList.add("hidden");
    });
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const target = this.getAttribute("data-modal-trigger");
      openModal(target);
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      closeModal();
    }
  });
});
