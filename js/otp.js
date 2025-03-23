document.addEventListener("DOMContentLoaded", function () {
  const otpInputs = document.querySelectorAll(".otp-input");
  const sendNewCodeButton = document.querySelector(".btn.secondary");
  const countdownElement = document.querySelector(".verify-code-expiry span");

  let timerDuration = 60;
  let timer;

  // Function to start the countdown
  function startCountdown() {
    sendNewCodeButton.classList.add("disabled");
    sendNewCodeButton.disabled = true;
    sendNewCodeButton.style.cursor = "not-allowed";

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
        sendNewCodeButton.classList.remove("disabled");
        sendNewCodeButton.disabled = false;
        sendNewCodeButton.style.cursor = "pointer";
      }
    }, 1000);
  }

  // Auto-focus between inputs
  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (e.inputType === "deleteContentBackward" && index !== 0) {
        otpInputs[index - 1].focus();
      } else if (value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index !== 0) {
        otpInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", (e) => {
      const pasteData = e.clipboardData.getData("text").trim();
      if (!/^\d+$/.test(pasteData)) return; // Only digits

      e.preventDefault();

      const digits = pasteData.split("").slice(0, otpInputs.length);
      digits.forEach((digit, i) => {
        otpInputs[i].value = digit;
      });

      const nextEmpty =
        otpInputs[digits.length] || otpInputs[otpInputs.length - 1];
      nextEmpty.focus();
    });
  });

  startCountdown();

  // Handle "Send New Code" button click
  sendNewCodeButton.addEventListener("click", function () {
    if (!sendNewCodeButton.disabled) {
      timerDuration = 60; // Reset timer
      startCountdown(); // Restart the timer
    }
  });
});
