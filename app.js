const menuBtn = document.querySelector(".menu-btn");
const navbarMobile = document.querySelector(".navbar-mobile");
const navigationMobile = document.querySelector(".navigation-mobile");
const my_work_on_page = document.getElementById("my-work-on-page");
console.log(my_work_on_page);
const secondLine = document.querySelector(".second-line");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("animation-btn");
  navbarMobile.classList.toggle("animation-nav");
});

if (my_work_on_page)
  my_work_on_page.addEventListener("click", () => {
    console.log("salam");
    menuBtn.classList.toggle("animation-btn");
    navbarMobile.classList.toggle("animation-nav");
  });
