const search = document.querySelector(".search")
const fas = document.querySelector(".fas")
const container = document.querySelector(".container")

let counter = 0;
search.addEventListener("click", () =>{
        opening()
})

function opening(){
    counter++;
    if(counter === 1){
    var input = document.createElement("input")
    input.type = "text"
    container.appendChild(input)
    input.classList.add("input")
    input.placeholder = "Search";
    container.setAttribute("style", "justify-content:flex-end")
    }
    var input = document.querySelector(".input")
    if(input.value !==""){
        window.location='http://www.google.com/search?q='+escape(input.value);;
    }else if (counter !==1){
        closing();
        counter-=2;
    }
}
function closing(){
    var input = document.querySelector(".input")
    input.remove();
    container.setAttribute("style", "justify-content:center")
}


