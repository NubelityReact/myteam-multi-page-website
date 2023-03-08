const menu = document.getElementById("burger-icon");
const icon = menu.querySelector("img");
const navbar = document.querySelector("nav.navbar");
let isOpen = false;

menu.onclick = () => {
  navbar.classList.toggle("navbar--open");
  if (isOpen) {
    icon.src = "./assets/icon-hamburger.svg";
    document.body.style.overflow = "hidden hidden";
    isOpen = false;
  } else {
    icon.src = "./assets/icon-close.svg";
    document.body.style.overflow = "hidden inital";
    isOpen = true;
  }
};
