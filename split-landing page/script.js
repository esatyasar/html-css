const left = document.querySelector(".ps");
const right = document.querySelector(".xbox");

left.addEventListener("mouseenter",()=>{
    left.classList.add("active");
    right.classList.add("passive");
    
});

left.addEventListener("mouseleave",()=>{
    left.classList.remove("active");
    right.classList.remove("passive");
});

// mouse on right side
right.addEventListener("mouseenter",()=>{
    right.classList.add("active");
    left.classList.add("passive");
    
});

right.addEventListener("mouseleave",()=>{
    right.classList.remove("active");
    left.classList.remove("passive");
});