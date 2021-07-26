// variables

const nextbtn = document.querySelector(".btnnext")
const prevbtn  = document.querySelector(".btnprev")
const progress = document.querySelector(".progress")
const content2 = document.querySelector(".content2")
const content3 = document.querySelector(".content3")
const content4 = document.querySelector(".content4")
var counter = 0;

nextbtn.addEventListener("click", () => {
    counter++;
    if(counter ===1){
        progress.setAttribute("style", "width : 25%; backgroundColor:var(--line-border-fill)")
        content2.classList.add("active");
    } else if(counter === 2){
        progress.setAttribute("style", "width : 60%; backgroundColor:var(--line-border-fill)")
        content3.classList.add("active");

    }else if(counter === 3){
        progress.setAttribute("style", "width : 100%; backgroundColor:var(--line-border-fill)")
        content4.classList.add("active");
    }
    else {
        counter--;
    }
})

prevbtn.addEventListener("click",() => {
    counter--;
    if(counter === 2){
        progress.setAttribute("style", "width : 60%; backgroundColor:var(--line-border-fill)")
        content4.classList.remove("active")
    }else if(counter === 1){
        progress.setAttribute("style", "width : 25%; backgroundColor:var(--line-border-fill)")
        content3.classList.remove("active")
    }else if(counter === 0){
        progress.setAttribute("style", "width : 0%; backgroundColor:var(--line-border-fill)")
        content2.classList.remove("active")
    }else{
        counter++;
    }
})

