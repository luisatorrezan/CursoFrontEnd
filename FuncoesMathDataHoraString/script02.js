//funções de String(texto)

var texto = "Aula de JavaScript";
console.log(texto.length); //contar o número de caracteres

console.log(texto.toUpperCase()); //tudo maiúsculo
console.log(texto.toLowerCase()); //tudo minúsculo

//manipulação de texto
console.log(texto.substring(0,4)); //aula
console.log(texto.slice(-10)); //javascript
console.log(texto.replace("JavaScript" , "TypeScript")); //troca a palavra

//split (usar um caracter em comum para separar em um vetor)
let linguagens = "JavaScript,C++,Python,Java,PHP";
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens);

//trim (tesoura)
let tesoura = "  JavaScript  ";
console.log(tesoura.trim());