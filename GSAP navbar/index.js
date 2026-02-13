const navMenu = document.querySelector(".nav i")
const crossMenu = document.querySelector("#full i")

let tl = gsap.timeline()

tl.to("#full", {
    right : 0,
    duration : 0.8,
    ease : "power3.out"
})
tl.from("#full h4", {
 x :40,
 stagger : 0.4,
 opacity : 0,
    duration : 0.4,
    ease : "power1.in"
})
.from("#full i", {
  opacity: 0,
  scale: 0.5,
  rotate: 180,
  duration: 0.2,
  ease: "back.out(1.7)"
}, "-=0.2");

tl.pause()


navMenu.addEventListener("click", () => {
    tl.play()
});

crossMenu.addEventListener("click", () => {
    tl.reverse()
})
