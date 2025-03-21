document.addEventListener("DOMContentLoaded", function () {
  const howItWorksTrigger = document.querySelector(".how-it-works-icon");
  const modal = document.getElementById("howItWorksModal");
  const overlay = document.getElementById("globalModal");
  const closeModalBtn = document.getElementById("modalClose");

  function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  // Open modal on click
  howItWorksTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    openModal();
  });

  // Close modal on button click
  closeModalBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the content (overlay)
  overlay.addEventListener("click", closeModal);
});
