const faqItems = document.querySelectorAll(".faq-section .faq-item .question");

faqItems.forEach((item) => {
    item.addEventListener('click', displayContent);
})

const answers = document.querySelectorAll(".faq-section .faq-item .answer");

function displayContent(question) {

    //uncomment this if  you want to show only one block of answer at a time
    // answers.forEach((ans)=>{
    //     ans.classList.remove("active");
    // })

    let answer = question.target.nextElementSibling;
    answer.classList.toggle("active");

    let angleIcon = question.target.children[0];
    angleIcon.classList.toggle("angleIcon");

}