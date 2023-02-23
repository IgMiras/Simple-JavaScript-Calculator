let visor = document.querySelector(".visor")
let soma = document.querySelector(".soma")
let subtracao = document.querySelector(".subtracao")
let multiplicacao = document.querySelector(".multiplicacao")
let divisao = document.querySelector(".divisao")
let sete = document.querySelector(".sete")
let oito = document.querySelector(".oito")
let nove = document.querySelector(".nove")
let igual = document.querySelector(".igual")
let quatro = document.querySelector(".quatro")
let cinco = document.querySelector(".cinco")
let seis = document.querySelector(".seis")
let um = document.querySelector(".um")
let dois = document.querySelector(".dois")
let tres = document.querySelector(".tres")
let zero = document.querySelector(".zero")
let ponto = document.querySelector(".ponto")
let c = document.querySelector(".c")

let numero_string = ""
let numero_float = 0

sete.addEventListener("click", () =>{
    numero_string = numero_string + "7"
    visor.innerHTML = numero_string
})

oito.addEventListener("click", () =>{
    numero_string = numero_string + "8"
    visor.innerHTML = numero_string
})

nove.addEventListener("click", () =>{
    numero_string = numero_string + "9"
    visor.innerHTML = numero_string
})

quatro.addEventListener("click", () =>{
    numero_string = numero_string + "4"
    visor.innerHTML = numero_string
})

cinco.addEventListener("click", () =>{
    numero_string = numero_string + "5"
    visor.innerHTML = numero_string
})

seis.addEventListener("click", () =>{
    numero_string = numero_string + "6"
    visor.innerHTML = numero_string
})

um.addEventListener("click", () =>{
    numero_string = numero_string + "1"
    visor.innerHTML = numero_string
})

dois.addEventListener("click", () =>{
    numero_string = numero_string + "2"
    visor.innerHTML = numero_string
})

tres.addEventListener("click", () =>{
    numero_string = numero_string + "3"
    visor.innerHTML = numero_string
})

zero.addEventListener("click", () =>{
    numero_string = numero_string + "0"
    visor.innerHTML = numero_string
})

ponto.addEventListener("click", () =>{
    numero_string = numero_string + "."
    visor.innerHTML = numero_string
})

soma.addEventListener("click", () => {
    numero_string = numero_string + "+"
    visor.innerHTML = numero_string

})

subtracao.addEventListener("click", () => {
    numero_string = numero_string + "-"
    visor.innerHTML = numero_string
})

multiplicacao.addEventListener("click", () => {
    numero_string = numero_string + "*"
    visor.innerHTML = numero_string
})

divisao.addEventListener("click", () => {
    numero_string = numero_string + "/"
    visor.innerHTML = numero_string
})

c.addEventListener("click", () => {
    visor.innerHTML = ""
    numero_float = 0
    numero_string = ""
})

igual.addEventListener("click", () => {
    if(visor.innerHTML){
        visor.innerHTML = eval(numero_string)
    }
})