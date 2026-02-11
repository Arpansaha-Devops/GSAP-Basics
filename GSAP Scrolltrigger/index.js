// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.from("#page #box", {
    opacity : 0,
    scale : 0.5,
    delay : 1,
    duration : 2
})


// Page 2 - Box grows and rotates on scroll
gsap.from("#page2 #box2", {
   height: "0dvh",
    width : "0dvw",
    opacity : 0,
    duration : 2,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page2",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 20%",
        scrub : 1,
    }
});

// Page 2 container grows
gsap.from("#page2", {
    scale: 0.5,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
    }
});


gsap.to("#page3 h1", {
    transform : "translateX(-270%)",
    duration : 2,
    // delay : 2,
    scrollTrigger : {
        trigger :  "#page3",
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -100%",
        scrub : 2,
        pin : true
    }
})