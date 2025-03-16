document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("toggle");
  const emailContainer = document.getElementById("email-input-container");
  const mobileContainer = document.getElementById("mobile-input-container");
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");

  if (toggleSwitch && emailContainer && mobileContainer) {
    toggleSwitch.addEventListener("change", function () {
      if (toggleSwitch.checked) {
        // Show Mobile, Hide Email
        emailContainer.classList.add("hidden");
        mobileContainer.classList.remove("hidden");

        emailInput.removeAttribute("required");
        mobileInput.setAttribute("required", "required");
      } else {
        // Show Email, Hide Mobile
        mobileContainer.classList.add("hidden");
        emailContainer.classList.remove("hidden");

        mobileInput.removeAttribute("required");
        emailInput.setAttribute("required", "required");
      }
    });

    // Format mobile input (removes leading 0, prevents non-numeric chars)
    mobileInput.addEventListener("input", function (event) {
      let value = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters

      if (value.startsWith("0")) {
        value = value.substring(1);
      }

      event.target.value = value;
    });
  } else {
    console.error("Toggle switch or input fields not found!");
  }
});
