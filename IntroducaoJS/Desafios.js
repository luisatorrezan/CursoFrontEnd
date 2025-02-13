var prompt = require("prompt-sync")();

//desafio 1 - verificação de idade
var idade = Number(prompt("Informe Sua Idade: "));
if (idade < 18) { //if encadeado, um depende do outro 
    console.log("Você é menor de idade");
} else if(idade >= 18 && idade<60){ //condição intermediaria
    console.log("Você é adulto");
} else{
    console.log("Você é idoso")
}

//desafio 2 - tabuada do 5
let numero = 5;
for (let i = 0; i <= 10; i++) {
    console.log(numero * i)
}

//desafio 3 - todos os números pares de 1 a 20
for(let i=1;i<=20;i++){
    if ((i%2)==0) {
        console.log(i +" é par");
    }
}