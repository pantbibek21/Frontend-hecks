let sliderItems = document.querySelector(".slider").children;
let nextBtn = document.querySelector(".fa-arrow-right");
let prevBtn = document.querySelector(".fa-arrow-left");
var index = 0;

nextBtn.addEventListener('click', () => {
    next("next");
})
prevBtn.addEventListener('click', () => {
    next("prev");
})

function next(direction) {
    resetTimer();
    console.log(sliderItems.length);
    if (direction == "next") {
        index++;
        if (index == sliderItems.length) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = sliderItems.length;
        }
        index--;
    }
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove("active");
    }
    sliderItems[index].classList.add("active");
    console.log("I am here");
}



var timer = setInterval(() => {
    next("next");
}, 4000)


function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        next("next");
    }, 4000);
}