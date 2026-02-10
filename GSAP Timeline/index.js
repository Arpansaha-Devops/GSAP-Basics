const tl = gsap.timeline()

tl.from("#logo", {
    y : -20,
    duration : 1,
    opacity : 0
})
.from("#contents h4", {
    y : -20,
    duration : 1,
    opacity : 0,
    stagger : 0.2 // stagger helps us to shows animation one by one .
})
.from("h1", {
    y :-20,
    opacity : 0,
    duration : 1
})