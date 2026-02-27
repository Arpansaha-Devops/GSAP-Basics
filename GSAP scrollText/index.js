// 1. Clone slides for seamless loop
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

slides.forEach(slide => carousel.appendChild(slide.cloneNode(true)));

// 2. Measure one full set width
const gap = 20;
const setWidth = slides.length * (slides[0].offsetWidth + gap);

// 3. Infinite marquee with GSAP
const marquee = gsap.to(".carousel", {
    x: -setWidth,
    duration: 20,
    ease: "none",
    repeat: -1
});

// 4. Smooth direction change on scroll
window.addEventListener("wheel", (e) => {
    const dir = e.deltaY > 0 ? 1 : -1;
    gsap.to(marquee, {
        timeScale: dir,
        duration: 0.5,
        overwrite: true
    });
});
