document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdown = (button, content) => {
    const icon = button.querySelector("img");

    if (content.style.maxHeight) {
      // Collapse
      content.style.maxHeight = null;
      icon.classList.remove("rotate");
      button.classList.add("collapsed");
    } else {
      // Expand
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add("rotate");
      button.classList.remove("collapsed");
    }
  };

  const mainToggle = document.getElementById("mainFilesToggle");
  const mainContent = document.getElementById("main-files-content");
  const supportToggle = document.getElementById("supportingFilesToggle");
  const supportContent = document.getElementById("supporting-files-content");

  // Set initial height so content is visible on load
  mainContent.style.maxHeight = mainContent.scrollHeight + "px";
  supportContent.style.maxHeight = supportContent.scrollHeight + "px";

  mainToggle.addEventListener("click", () => {
    toggleDropdown(mainToggle, mainContent);
  });

  supportToggle.addEventListener("click", () => {
    toggleDropdown(supportToggle, supportContent);
  });
});
