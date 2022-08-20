const showModelBtns = document.querySelectorAll("header .show-modal");
const closeBtn = document.querySelectorAll(".modal .crossBtn");
const modelWindows = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");

let modelIndex = 0;


const closeModel = () => {
    overlay.classList.add("hidden");
    modelWindows[modelIndex].classList.add("hidden");
}

showModelBtns.forEach((button) => {


    button.addEventListener('click', () => {
        modelIndex = button.id;
        modelWindows[modelIndex].classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
});


closeBtn.forEach(e => {
    e.addEventListener("click", closeModel);
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeModel();
    }
})
overlay.addEventListener("click", () => {
    closeModel();
})
