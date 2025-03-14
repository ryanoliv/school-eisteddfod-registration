document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const inputField = document.getElementById("emailOrMobile");
  const inputLabel = document.getElementById("input-label");

  if (toggle && inputField && inputLabel) {
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        inputLabel.innerText = "Mobile Number*";
        inputField.type = "tel";
        inputField.placeholder = "+27 82 123 4567";
      } else {
        inputLabel.innerText = "Email*";
        inputField.type = "email";
        inputField.placeholder = "johndoe@gmail.com";
      }
    });
  } else {
    console.error("Toggle switch elements not found!");
  }
});
