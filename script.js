// script.js
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-btn");
  var navbarMenu = document.getElementById("navbarMenu");

  navbarToggler.addEventListener("click", function () {
    navbarMenu.classList.toggle("is-open");
  });
});
