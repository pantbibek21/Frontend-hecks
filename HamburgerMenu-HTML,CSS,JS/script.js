const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header .nav-bar ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

const listItems = document.querySelectorAll("header .nav-bar ul li");
listItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    })
})