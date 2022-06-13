const elementoResposta = document.querySelector("#resposta");
const perguntaFeita = document.querySelector("#perguntaFeita");
const buttonPerguntar = document.querySelector("#buttonPerg");

const listaRespostas = [
  "Não.",
  "Provavelmente.",
  "Não conte com isso.",
  "Minhas fontes dizem que sim.",
  "Sinais apontam que sim.",
  "Não é possivel prever agora.",
  "Sem dúvidas!",
  "Concentre-se e pergunte novamente...",
  "Sim, com certeza!",
  "Sinais apontam que não.",
  "Não entendi sua pergunta.",
  "Existem grandes chances.",
  "Sim!",
  "Pode contar com isso.",
  "Existem chances mínimas.",
  "Certamente que não.",
  "Tudo indica que sim.",
  "Melhor você nem saber.",
  "As perspectivas não são tão boas.",
  "A meu ver, sim.",
  "De jeito nenhum!"
];

function fazerPergunta() {
  if (perguntaFeita.value === "") {
    elementoResposta.style.opacity = 1;
    elementoResposta.innerHTML = "Faça sua Pergunta...";
  } else {
    const pergunta = "<div>" + perguntaFeita.value + "</div>";

    const totalListaRespostas = listaRespostas.length;
    const respostaAleatoria = Math.floor(Math.random() * totalListaRespostas);

    buttonPerguntar.setAttribute("disabled", true);

    elementoResposta.style.opacity = 1;
    elementoResposta.innerHTML = pergunta + listaRespostas[respostaAleatoria];
  }

  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
    perguntaFeita.value = "";

    setTimeout(function () {
      elementoResposta.innerHTML = "";
    }, 1000);
  }, 3000);
}
