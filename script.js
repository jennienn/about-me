const home = document.getElementById("home");
const preparing = document.getElementById("preparing");
const pageLabel = document.getElementById("pageLabel");
const backButton = document.getElementById("backButton");
const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageName = button.dataset.page;

    pageLabel.textContent = pageName;

    home.classList.remove("active");
    preparing.classList.add("active");
  });
});

backButton.addEventListener("click", () => {
  preparing.classList.remove("active");
  home.classList.add("active");
});
