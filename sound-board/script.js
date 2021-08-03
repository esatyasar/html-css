
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
    for (let i =0; i < 8; i++){
        let animals = [elephantPlay,horsePlay,wolfPlay,cowPlay,turkeyPlay,sheepPlay,dogPlay,catPlay];
        const stop = document.getElementById(`${animals[i].value}`)
        stop.pause();
        stop.currentTime = 0;
    }}

/* 
elephantPlay.addEventListener("click",() =>{
    elephantPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/elefant.mp3'></audio>"

})


horsePlay.addEventListener("click",() =>{
    horsePlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/pony.mp3'></audio>"

})

wolfPlay.addEventListener("click",() =>{
    wolfPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/wolf.mp3'></audio>"

})

cowPlay.addEventListener("click",() =>{
    cowPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/rinder_muh.mp3'></audio>"

})

turkeyPlay.addEventListener("click",() =>{
    turkeyPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/truthahn.mp3'></audio>"

})

sheepPlay.addEventListener("click",() =>{
    sheepPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/schafe.mp3'></audio>"

})

dogPlay.addEventListener("click",() =>{
    dogPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/Bluthund_jault.mp3'></audio>"

})

catPlay.addEventListener("click",() =>{
    catPlay.innerHTML += "<audio autoplay volume preload='none' src='./assets/Katze_miaut.mp3'></audio>"

}) */
