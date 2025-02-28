// Crie um formulário onde o usuário insira notas.
// Armazene essas notas em um array.
// Use o método reduce para calcular a média e exiba o resultado na tela.
const prompt = require("prompt-sync")();

let notas = []; //declarado o vetor de notas

function inserirNotas(){
    let nota = Number(prompt("Digite a Nota: "));
    notas.push(nota);
}

function calcularMedia(){
    let media = notas.reduce((media,nota)=>media+nota)/notas.length
    console.log("A média é "+media);
}

function menu(){
    let continuar = true
    while(continuar){
        console.log("===Sistema de Notas/Media===");
        console.log("|1. Inserir Notas          |");
        console.log("|2. Calcular Média         |");
        console.log("|3. Sair                   |");
        console.log("============================");
       operador = prompt("Informe a Opção: ")
        switch (operador) {
            case "1":
                inserirNotas();
                break;
            case "2":
                calcularMedia();
            case "3":
                continuar = false;
                console.log("Saindo...");
            default:
                console.log("Informe uma Opção Válida");
                break;
        }//fim do switch case
    }//fim do while
}//fim da function

menu();