

const imgContainer = document.querySelector(".image-container")

document.body.addEventListener("mousemove", (event) => {
   gsap.to("#cursor", {
     duration : 0.8,
     x : event.x,
     y : event.y,
     ease : "power2.out"
   })
})

imgContainer.addEventListener("mouseenter", (event) => {
    
    gsap.to("#cursor", {
        scale : 2,
        
    })
})
imgContainer.addEventListener("mouseleave", (event) => {
    gsap.to("#cursor", {
        scale : 1,
    })
})