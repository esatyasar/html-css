
const elephantPlay = document.querySelector(".elephant")
const horsePlay= document.querySelector(".horse")
const wolfPlay= document.querySelector(".wolf")
const cowPlay= document.querySelector(".cow")
const turkeyPlay= document.querySelector(".turkey")
const sheepPlay= document.querySelector(".sheep")
const dogPlay= document.querySelector(".dog")
const catPlay= document.querySelector(".cat")



for (let i =0; i < 8; i++){
    let animals = [elephantPlay,horsePlay,wolfPlay,cowPlay,turkeyPlay,sheepPlay,dogPlay,catPlay];
    animals[i].innerHTML += `<audio id="${animals[i].value}" volume preload='none' src='./assets/${animals[i].value}.mp3'></audio>`;
    animals[i].addEventListener("click",() =>{
        noSound();
        document.getElementById(`${animals[i].value}`).play();
    })
}
function noSound(){
    let animals = [elephantPlay,horsePlay,wolfPlay,cowPlay,turkeyPlay,sheepPlay,dogPlay,catPlay];
    for (let i =0; i < 8; i++){
        document.getElementById(`${animals[i].value}`).pause();        
}}

