const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const opcoesRespostas = [
  "Não.",
  "Sim!",
  "Com certeza!",
  "Sinais apontam que sim.",
  "Provavelmente.",
  "Absolutamente não.",
  "Não conte com isso.",
  "Não tenho tanta certeza.",
  "As perspectivas não são tão boas.",
  "Definitivamente!"
]

function fazerPergunta() {

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta novamente")
    return
  } 

buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = opcoesRespostas.length
  const aleatorio = Math.floor(Math.random() * totalRespostas)
  elementoResposta.innerHTML = pergunta + opcoesRespostas[aleatorio]

elementoResposta.style.opacity = 1

  setTimeout(function() {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
