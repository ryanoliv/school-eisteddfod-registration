document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdown = (button, content) => {
    const icon = button.querySelector("img");

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
      // Collapse
      content.style.maxHeight = null;
      button.classList.add("collapsed");
      if (icon) icon.classList.remove("rotate");
    } else {
      // Expand
      content.style.maxHeight = content.scrollHeight + "px";
      button.classList.remove("collapsed");
      if (icon) icon.classList.add("rotate");
    }
  };

  // Loop through each entry container individually
  const entryContainers = document.querySelectorAll(".upload-entry-container");

  entryContainers.forEach((entry) => {
    const mainToggle = entry.querySelector(".main-files-toggle");
    const mainContent = entry.querySelector(".main-files-content");

    const supportToggle = entry.querySelector(".supporting-files-toggle");
    const supportContent = entry.querySelector(".supporting-files-content");

    // Set initial maxHeight to open both by default
    if (mainContent) {
      mainContent.style.maxHeight = mainContent.scrollHeight + "px";
    }

    if (supportContent) {
      supportContent.style.maxHeight = supportContent.scrollHeight + "px";
    }

    // Add click handlers
    if (mainToggle && mainContent) {
      mainToggle.addEventListener("click", () => {
        toggleDropdown(mainToggle, mainContent);
      });
    }

    if (supportToggle && supportContent) {
      supportToggle.addEventListener("click", () => {
        toggleDropdown(supportToggle, supportContent);
      });
    }
  });
});
