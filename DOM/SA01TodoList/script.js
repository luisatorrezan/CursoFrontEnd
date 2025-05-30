//usar o DOM para adicionar um evento no HTML
document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim(); //pega o valor e recorta os espaços em branco 

    if(texto===""){
        return; //interrompe a function 
    }
    
    //continuar o código se texto não for vazio ""
    let li = document.createElement("li"); //criando um elemento de lista
    li.innerHTML = texto+ '<button onclick="removerTarefa(this)">Remover</button>'; //criei o conteúdo do item da lista 

    let ul = document.getElementById("lista");
    ul.appendChild(li); //adicionar o item a lista

    input.value = "";
}

//função do botão para remover o elemento pai(parent) (li)
function removerTarefa(botao){ 
    botao.parentElement.remove();
}

//muadr cor do botão
document.getElementById("mudarCor").addEventListener("click", function()
{
    let cores = ["red", "blue", "green", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});


