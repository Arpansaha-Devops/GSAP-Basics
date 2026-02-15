// Create infinite animation
const marquee = gsap.to(".main", {
  xPercent: -50,
  duration: 25,
  ease: "none",
  repeat: -1
});

// Default direction: left → right
let direction = 1;

// Wheel event
window.addEventListener("wheel", (e) => {

  if (e.deltaY > 0) {
    // Scroll DOWN → normal direction
    if (direction !== 1) {
      direction = 1;
      marquee.timeScale(1);   // forward
    }
  } else {
    // Scroll UP → reverse direction
    if (direction !== -1) {
      direction = -1;
      marquee.timeScale(-1);  // reverse
    }
  }
});
