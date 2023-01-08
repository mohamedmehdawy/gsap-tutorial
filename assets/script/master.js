let timeline = gsap
    .timeline()
    .from("#app", {
        opacity: 0,
    })
    .from("#app header h1", {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "back",
    })
    .from(
        "#app .freds img",
        {
            y: 200,
            opacity: 0,
            stagger: {
                amount: 0.5,
            },
        },
    )
    .add("test")
    .from(
        "#app header .time",
        {
            xPercent: 100,
            ease: "bounce",
        },
    );

const controles = document.querySelector(".controls");
const play = controles.querySelector("#play");
const pause = controles.querySelector("#pause");
const reverse = controles.querySelector("#reverse");
const restart = controles.querySelector("#restart");
const test = controles.querySelector("#test");

play.addEventListener("click", () => {
    timeline.play();
});
pause.addEventListener("click", () => {
    timeline.pause();
});
reverse.addEventListener("click", () => {
    timeline.reverse();
});
restart.addEventListener("click", () => {
    timeline.restart();
});
test.addEventListener("click", () => {
    timeline.play("test");
});
