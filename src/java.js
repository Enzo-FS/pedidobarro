'use strict'

const buts = document.querySelector(".butnao");

let altura = window.innerHeight - 50;
let largura = window.innerWidth - 50;

buts.addEventListener("click", function(){
    let novaaltura = Math.random() * altura;
    let novalargura = Math.random() * largura;

    buts.style.position = "absolute";

    buts.style.top = novaaltura + "px";
    buts.style.left = novalargura + "px";

})