const menuBtn = document.querySelector(".menu-btn");
const navbarMobile = document.querySelector(".navbar-mobile");
const navigationMobile = document.querySelector(".navigation-mobile");

const secondLine = document.querySelector(".second-line");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("animation-btn");
  navbarMobile.classList.toggle("animation-nav");
});
