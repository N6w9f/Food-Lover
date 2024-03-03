const burger = document.querySelector(".burger");
const x = document.querySelector(".x");
const navbar = document.querySelector(".mobile-navbar");
burger.addEventListener("click", () => {
  navbar.style.right = "0px";
});
x.addEventListener("click", () => {
  navbar.style.right = "-100%";
});
[...navbar.children].forEach((e) => {
  e.addEventListener("click", () => {
    navbar.style.right = "-100%";
  });
});
