var prompt = require("prompt-sync")();

//exercicio 1 - par e ímpar
var numero = Number(prompt("Informe um número: "));
if ((numero%2)==0) {
    console.log("O Número Digitado é Par");
} else{
    console.log("O número Digitado é Ímpar");
}

//exercicio 2 - laço for 
for (let i = 1; i <= 100; i++) {
    console.log(i); 
}