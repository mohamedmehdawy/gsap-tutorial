gsap.timeline()
    .from("#app", {
    opacity: 0,
    })
    .from("#app header h1", {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "back",
    })
    .from("#app .freds img", {
        y: 200,
        opacity: 0,
        stagger: {
            amount: 0.5
        }
    })
    .from("#app header .time", {
        xPercent: 100,
        ease: 'bounce'
    })
