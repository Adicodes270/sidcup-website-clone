const crsrblur = document.querySelector("#cursor-blur");
const crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    crsrblur.style.left = dets.x -250 +"px"
    crsrblur.style.top = dets.y - 250 +"px"
});   





gsap.to("#nav",{
    backgroundColor : "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger: "#main",
        scroller: "body",
       
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})



const scrollerH4s = document.querySelectorAll("#scroller h4");

// Track mouse position
let mouseX = 0;
let mouseY = 0;

// Update mouse position continuously
document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Check hover on each animation frame (smooth detection)
function checkHover() {
    scrollerH4s.forEach(h4 => {
        const rect = h4.getBoundingClientRect();
        
        // Check if mouse is over this h4 element
        if (mouseX >= rect.left && 
            mouseX <= rect.right && 
            mouseY >= rect.top && 
            mouseY <= rect.bottom) {
            // Mouse is hovering - fill with color
            h4.style.color = "#95C11E";
        } else {
            // Mouse is not hovering - transparent with stroke
            h4.style.color = "transparent";
        }
    });
    
    // Keep checking on every frame
    requestAnimationFrame(checkHover);
}

// Start the hover detection
checkHover();

// ========================================
// OPTIONAL: Add pointer cursor on h4 elements
// ========================================
scrollerH4s.forEach(h4 => {
    h4.style.cursor = "pointer";
    
    // Optional: Add click effect
//     h4.addEventListener("click", function() {
        console.log("Clicked:", this.textContent);
        // You can add more functionality here
    });

const navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid "
        crsr.style.backgroundColor = "#95C11E";

    })
})

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});