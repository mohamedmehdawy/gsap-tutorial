const tween = gsap.to('.images img',{
    y: -100,
    repeat: -1,
    yoyo: true,
});
const controles = document.querySelector(".controls");
const play = controles.querySelector('#play');
const pause = controles.querySelector('#pause');
const reverse = controles.querySelector('#reverse');
const restart = controles.querySelector('#restart');


play.addEventListener('click', ()=> {
    tween.play();
})
pause.addEventListener('click', ()=> {
    tween.pause();
})
reverse.addEventListener('click', ()=> {
    tween.reverse();
})
restart.addEventListener('click', ()=> {
    tween.restart();
})