function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

//getElementById - seleção do elemento pelo id
let titulo = document.getElementById("titulo"); //variável comum 
titulo.style.color = "blue"; //mudar a cor do elemento 

//getElementsByClassName
let descricao = document.getElementsByClassName("descricao"); //variável vetor/array
descricao[1].style.fontWeight = "bold"; //deixa o primeiro parágrafo em negrito 
descricao[2].style.color = "green";

//getElementsByTagName
let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.length); //números de parágrafos que tem 

//querySelector - primeiro elemento - comum
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

//querySelectorAll - muda todos os elementos para vetor 
let ps = document.querySelectorAll("p");
ps.forEach(p => p.style.fontSize = "18px");