//arrays e matrizes

//declaração de um array
let dados = []; //uso do colchetes permite a declaração de um array

let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];
let mista = [1, "texto", true];
console.log(numeros.length); //quantidade de elementos do array

//índices do array

//imprimir o 5º elemento de um array
console.log(numeros[4]); //5

//adicionar elementos em uma array
palavras.push("Cachorro"); //adicionar no final do array
console.log(palavras);
palavras.unshift("Prédio"); //adicionar no começo do array
console.log(palavras);

//remover elementos 
palavras.pop(); //remove o último elemento
console.log(palavras);
palavras.shift(); //remove o primeiro elemento 
console.log(palavras);

//percorrer um array (loop) - for
for(let i = 0; i <numeros.length;i++){
    console.log("numero["+i+"]="+numeros[i])
};

//forEach - repetição em um vetor 
palavras.forEach(palavra => {
    console.log(palavra);
});

//alterar um valor de um elemento
palavras[2]="Sacola";
console.log(palavras);

//splice
//remove pelo índice 
palavras.splice(1,1); //remover sapato
console.log(palavras);

//manipulação de arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);