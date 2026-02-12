let path = `M 10 100 Q 400 100 790 100`;
let finalPath = `M 10 100 Q 400 100 790 100`;

let string = document.querySelector('.string');

string.addEventListener("mousemove",(event) => {
    path = `M 10 100 Q ${event.x} ${event.y} 790 100`
    // console.log(event)
gsap.to("svg path", {
    attr : {d : path },
    duration : 0.3,
    ease : "power3.out"
})
} );

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr : {d : finalPath },
        duration : 0.5,
        ease: "elastic.out(1,0.2)"
    })
})