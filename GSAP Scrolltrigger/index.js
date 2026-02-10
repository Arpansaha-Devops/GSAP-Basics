gsap.from("#page2 #box2", {
    opacity : 0,
    duration : 2,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page2",
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top 40%",
        scrub : 3,
    }
})