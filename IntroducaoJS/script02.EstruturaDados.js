//estruturas de dados

//condicionais (if else; switch case)
var precoProduto = 150;

if (precoProduto>=100) {
    console.log("Valor a pagar: "+(precoProduto*0.9));
} else {
    console.log("Valor a pagar: "+(precoProduto));
}

//switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;

    case 2: 
        console.log("Fevereiro");
        break;

    case 3:
        console.log("Março");
        break;    
    default:
        console.log("Outro Mês");
        break;
}

//estruturas de repetição (for; while)
//for (ponto de ínicio; ponto de parada; incremento)
for (let i = 0; i < 10; i++) {
    console.log ("Índice: "+i);
}

//while (condição de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas = 0;
while (continuar) {
    let numeroSorteado = Math.round(Math.random()*10)
    if (numeroEscolhido==numeroSorteado) {
        continuar = false 
    } 
    tentativas++;
    console.log("Número de Tentativas: "+tentativas); 
    
}

//funções (métodos)
function saudacao(nome) {
    return "Ola, " + nome + "!!!";
}

console.log(saudacao("Luisa"));