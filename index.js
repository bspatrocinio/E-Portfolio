
// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const  navMenu = document.querySelector(".nav__link--list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector(".wave").style.visbility = "hidden";
}

// When a link is clicked

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
