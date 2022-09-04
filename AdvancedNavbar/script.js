const moreBtn = document.querySelector(".more-btn");
const subMenu = document.querySelector(".main-navbar .active");

moreBtn.addEventListener("click", () => {
    subMenu.classList.toggle("active");
})