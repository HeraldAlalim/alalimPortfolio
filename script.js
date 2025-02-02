document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("navigateButton");
  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "Information.html"; 
    });
  }
});
