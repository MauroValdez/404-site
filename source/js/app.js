import ScrollReveal from "ScrollReveal";

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
});

function showMenu() {
  const navToggle = document.querySelector("#nav-toggle");
  const navClose = document.querySelector("#nav-close");
  const navMenu = document.querySelector("#nav-menu");
  const navLink = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });
}

const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(".home__data", { origin: "top", delay: 400 });
sr.reveal(".home__img", { origin: "bottom", delay: 600 });
sr.reveal(".home__footer", { origin: "left", delay: 800 });

