const hamburger = document.querySelector(".hamburger");
const  navMenu = document.querySelector(".nav__link--list");
const handWave = document.querySelector(".wave");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    handWave.classList.add("hidden");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


