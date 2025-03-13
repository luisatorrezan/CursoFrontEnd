//script para o jogo de quiz-interativo

let perguntas = [];
let perguntaAtual = 0;

const perguntaE1 = document.getElementById("pergunta");
const opcoesE1 = document.getElementById("opcoes");
const proximaE1 = document.getElementById("proxima");
const resultadoE1 = document.getElementById("resultado");

//carregar perguntas

fetch("perguntas.json")
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        carregarPergunta();
    })
    .catch(error => console.error("Erro ao carregar perguntas:", error));

function carregarPergunta(){
    perguntaE1.innerText= "";
    opcoesE1.innerText= "";
    proximaE1.disabled = true;

    if (perguntaAtual>=perguntas.length) {
        perguntaE1.innerText = "Quiz Finalizado!";
        opcoesE1.innerHTML = "";
        proximaE1.style.display = "none";
        return;
    }
    const p = perguntas[perguntaAtual];
    perguntaE1.innerText = p.pergunta;
    opcoesE1.innerHTML = "";

    p.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.classList.add("opcao");
        btn.addEventListener("click", () => verificarResposta(opcao, btn));
        opcoesE1.appendChild(btn);
    })

function verificarResposta(opcao, btn) {
    const respostaCorreta = perguntas[perguntaAtual].resposta;
    if (opcao === respostaCorreta) {
        btn.classList.add("correta");
        resultadoE1.innerText = "Correto!";
    } else {
        btn.classList.add("errada");
        resultadoE1.innerText = `Errado! A resposta correta era: ${respostaCorreta}`;
    }

    document.querySelectorAll(".opcao").forEach(b => b.disabled = true);
    proximaE1.disabled = false;
}

document.getElementById("proxima").addEventListener(
    "click",() => {
    perguntaAtual++,
    carregarPergunta();}
);
}