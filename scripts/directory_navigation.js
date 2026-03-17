// Select the menu button and navigation menu
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#navMenu");

// Toggle the "open" class on the nav when the button is clicked
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});