//exemplo de script para manipulação DOM
function clickBtn(){
    //manipulação pelo id -> variável do tipo simples
    let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Meu Título Modificado";
    let li = document.createElement("li");
    let texto = "Modificado Texto do Título";
    li.innerHTML = texto+'button onclick="btnConfere(this)">Confere</button>';
    //querySelector -> variável simples
    document.querySelector(".lista").appendChild(li);
    //getElementsByClassName -> vetor .descricao
    let descricao = document.querySelectorAll(".descricao");
    console.log(descricao);
    descricao.forEach(element => element.style.color = "red");
    texto = "Modificado Cor da Classe Descricao Para Vermelho";
    li.innerHTML = texto+'button onclick="btnConfere(this)">Confere</button>';
    document.querySelector(".list").appendChild(li);
}