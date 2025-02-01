const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
gif.src = "https://raw.githubusercontent.com/Bahnikana/valientines-day-web-design/refs/heads/main/first.gif";


yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY!! Will You be my forever!";
    gif.src = "https://raw.githubusercontent.com/Bahnikana/valientines-day-web-design/refs/heads/main/second.gif";

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Let's get MARRIED!";
        gif.src = "https://raw.githubusercontent.com/Bahnikana/valientines-day-web-design/refs/heads/main/third.gif";

        yesBtn.addEventListener("click", () => {
            question.innerHTML = "You are MINE now!!";
            gif.src = "https://raw.githubusercontent.com/Bahnikana/valientines-day-web-design/refs/heads/main/fourth.gif";
        });
    });

});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
