// NavBar Transation
window.addEventListener("scroll", () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  let navbar = document.getElementById("navbar");

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
