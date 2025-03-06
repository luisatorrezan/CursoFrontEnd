//atv 1
let titulo = document.getElementById("titulo"); //variável comum 
titulo.style.color = "green"; //mudar a cor do elemento 

let descricao = document.getElementById("descricao"); 
console.log(descricao);

let button = document.getElementById("button"); //variável comum 
console.log(button);

//atv 2
function alterarTexto() {
    document.getElementById("titulo").innerText = "Verdão!";
    document.querySelector(".descricao").innerText = "Melhor do Brasil!";
}

// atv 3
function alterarFundo() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

// atv 4
function adicionarClasse() {
    titulo.classList.add("descricao");
    let descricao = document.querySelector(".descricao");
    descricao.style.color = "red";
}