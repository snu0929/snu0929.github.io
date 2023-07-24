let resume1 = document
  .getElementById("resume-button-1")
  .addEventListener("click", NewTab);
let resume2 = document
  .getElementById("resume-button-2")
  .addEventListener("click", NewTab);
function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1LOa9Y2gsUtbQ3RJFYqwVe_bS-GlLHeUU/view?usp=sharing",
    "_blank"
  );
}
// const toggleIcon = document.querySelector(".toggle-icon");
// toggleIcon.addEventListener("click", () => {
//     toggleIcon.classList.toggle("bx-sun");
//     document.body.classList.toggle("dark-mode");
// });

//  ====== toggle icon navbar ======

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//  ====== scroll sections active links ======
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      let link = document.querySelector(`header nav a[href*="${id}"]`);
      if (link) {
        link.classList.add("active");
      }
    }
  });
};

//  ====== sticky Navbar ======

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

//  ====== remove toggle icon and navbaer when click navbar links ======

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

// ==================scroll regveal================//
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .skills-container,.project-card, #contact, .stats",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});

ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// ============typed js===============

const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "MERN stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});
