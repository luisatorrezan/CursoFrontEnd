var prompt = require("prompt-sync")();

//calculadora simples

//funções
function soma(a,b){
    return (a+b);
}

function subtracao(a,b){
    return (a-b);
}

function multiplicacao(a,b){
    return (a*b);
}

function divisao(a,b){
    return (a/b);
}

function menu(){
    console.log("Escolha a Operação Desejada");
    console.log("1. Adição");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    
    let operacao = Number(prompt());
    switch (operacao) {
        case 1:
            var a = Number(prompt("Informe o Primeiro Número: "));
            var b = Number(prompt("Informe o Segundo Número: "));
            console.log("O Resultado é: "+soma(a,b));
            break;

        case 2:
            var a = Number(prompt("Informe o Primeiro Número: "));
            var b = Number(prompt("Informe o Segundo Número: "));
            console.log("O Resultado é: "+subtracao(a,b));
            break;

        case 3:
            var a = Number(prompt("Informe o Primeiro Número: "));
            var b = Number(prompt("Informe o Segundo Número: "));
            console.log("O Resultado é: "+multiplicacao(a,b));
            break;

        case 4:
            var a = Number(prompt("Informe o Primeiro Número: "));
            var b = Number(prompt("Informe o Segundo Número: "));
            console.log("O Resultado é: "+divisao(a,b));
        break;
        default:
            console.log("Operação Inválida")
            break;  
    }
}

menu();