import gsap from './node_modules/gsap/index.js';
// import { AttrPlugin } from './node_modules/gsap/plugins/AttrPlugin.js';



let path = `M 10 100 Q 600 100 990 100` 

let finalPath = `M 10 100 Q 600 100 990 100`

const string = document.querySelector(".string")
// const svg = document.querySelector("svg")

string.addEventListener("mousemove", (event) => {
    console.log(event)
    
    path = `M 10 100 Q ${event.x} ${event.y} 990 100` ;
    gsap.to("svg path", {
        attr : {d : path },
        duration : 0.3 ,
        ease : "power3.out"
    })
})

string.addEventListener("mouseleave", () => {
   gsap.to("svg path", {
    attr : {d : finalPath},
    duration : 0.4,
    ease : "elastic.out(1,0.2)"
   })
})