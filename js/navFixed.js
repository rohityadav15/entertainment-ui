var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.style.position = "fixed";
  nav.style.top = "0px";
  nav.style.left = "0px";
  nav.style.width = "100%";
  nav.style.zIndex = "10";
  nav.style.transition = "1s";
});
