const crsrblur = document.querySelector("#cursor-blur");
const crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
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
        markers:true,
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
