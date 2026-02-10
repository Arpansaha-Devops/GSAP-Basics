// gsap.to("#box", { // to means initial State to final state
//     x: 1200,
//     duration: 2,
//     delay : 1,
//     borderRadius : "50%",
//     repeat : -1,
//     rotate : 360,
//     yoyo : true
// }) 

gsap.to("h1", {  // From means final State to initial state 
    opacity : 0,
    y : 20,
    duration : 1,
    stagger : 1,
    yoyo : true,
    repeat : -1
})