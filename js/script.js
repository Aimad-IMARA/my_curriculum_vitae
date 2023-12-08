// NavBar Transation
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx < 500) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "rgba(26, 26, 26, 0.900)";
  }
  navbar.classList.add("transition-navbar");
});
document.getElementById("navbar").addEventListener("transitionend", () => {
  let navbar = document.getElementById("navbar");
  navbar.classList.remove("transition-navbar");
});

// NavBar links Toggle
let navbarLinks = document.getElementById("nav-links");
navToggle = () => {
  navbarLinks.classList.contains("nav-links-show")
    ? navbarLinks.classList.remove("nav-links-show")
    : navbarLinks.classList.add("nav-links-show");
};
