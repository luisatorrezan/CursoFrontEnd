let novoElemento = document.createElement("div");
let titulo1 = document.createElement('p');
titulo1.innerHTML = "<strng>Título 1</strong>";
let titulo2 = document.createElement('p');
titulo2.innerHTML = "<strng>Título 2</strong>";
novoElemento.appendChild(titulo1);
novoElemento.appendChild(titulo2);
novoElemento.style.backgroundColor = "lightblue";
document.body.appendChild(novoElemento);

function duplicarCard() {
    let card = document.getElementById("card");
    let novoCard = card.cloneNode(true);
    document.body.appendChild(novoCard);
}

document.getElementById("modoEscuro").addEventListener(
    "click",darkMode
);

let dark = false
function darkMode(){
    if(dark === false){
    document.body.classList.add("dark-mode")
    dark = true;
    } else {
        document.body.classList.remove("dark-mode");
        dark = true;
    }   
}

//eventos avançados (teclas)
document.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada: " + event.key);
});

let sugestoes = ["JavaScript", "Java", "Python", "C++", "PHP", "Ruby"];

document.getElementById("busca").addEventListener("keyup", function() {
    let termo = this.value.toLowerCase();
    let lista = document.getElementById("sugestoes");
    lista.innerHTML = "";

    sugestoes.forEach(sugestao => {
        if (sugestao.toLowerCase().includes(termo)) {
            let item = document.createElement("li");
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    });
});

//evento de enviou de formulário
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        mensagem.innerText = "Todos os campos são obrigatórios!";
        mensagem.style.color = "red";
    } else {
        mensagem.innerText = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }
});
