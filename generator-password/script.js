// variables

const length = document.querySelector("#length")
const upper = document.querySelector("#uppercase")
const lower = document.querySelector("#lowercase")
const num = document.querySelector("#number")
const sym = document.querySelector("#symbol")
const submit = document.querySelector(".generator")
const result = document.querySelector("#password")


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}
var password = [];

upper.addEventListener("change", () =>{
    if(upper.checked){
        
        generateUpper(password)
        
    }
    
})

lower.addEventListener("change", () =>{
    if(lower.checked){
        
        generateLower(password)
        
    }
    
})
num.addEventListener("change", () =>{
    if(num.checked){
        
        generateNum(password)
        
    }
    
})

sym.addEventListener("change", () =>{
    if(sym.checked){
        
        generateSym(password)
        
    }
    
})

function generateUpper(password){
    for (let i = 0; i < length.value; i++){
        password.push(getUppercase());    
    }
}

function generateLower(password){
    for (let i = 0; i < length.value; i++){
        password.push(getLowercase());    
    }
}

function generateNum(password){
    for (let i = 0; i < length.value; i++){
        password.push(getNumber());    
    }
}

function generateSym(password){
    for (let i = 0; i < length.value; i++){
        password.push(getSymbol());    
    }
}

submit.addEventListener("click", () =>{

    var newPassword = ""
    for (let i = 0; i < password.length; i++) {
        newPassword += password[Math.floor(Math.random()* password.length)]
    }
  
    result.innerHTML = newPassword;
})

