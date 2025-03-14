document.addEventListener("DOMContentLoaded", function () {
  const otpInputs = document.querySelectorAll(".otp-input");
  const sendNewCodeButton = document.querySelector(".btn.secondary");
  const countdownElement = document.querySelector(".verify-code-expiry span");

  let timerDuration = 60; // 1-minute countdown
  let timer;

  // Function to start the countdown
  function startCountdown() {
    sendNewCodeButton.classList.add("disabled"); // Ensure button starts disabled
    sendNewCodeButton.disabled = true; // Prevent clicks
    sendNewCodeButton.style.cursor = "not-allowed"; // Visually indicate it's disabled

    timer = setInterval(() => {
      if (timerDuration > 0) {
        timerDuration--;
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;
        countdownElement.innerText = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      } else {
        clearInterval(timer);
        sendNewCodeButton.classList.remove("disabled"); // Remove disabled class
        sendNewCodeButton.disabled = false; // Enable button
        sendNewCodeButton.style.cursor = "pointer"; // Update cursor
      }
    }, 1000);
  }

  // Auto-focus shifting between OTP inputs
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.inputType === "deleteContentBackward" && index !== 0) {
        otpInputs[index - 1].focus();
      } else if (e.target.value && index !== otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && index !== 0 && input.value === "") {
        otpInputs[index - 1].focus();
      }
    });
  });

  // Start the timer when the page loads
  startCountdown();

  // Handle "Send New Code" button click
  sendNewCodeButton.addEventListener("click", function () {
    if (!sendNewCodeButton.disabled) {
      timerDuration = 60; // Reset timer
      startCountdown(); // Restart the timer
    }
  });
});
