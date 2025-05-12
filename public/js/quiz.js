let perguntas = [
  {
    pergunta: "Qual time venceu mais campeonatos da NBA?",
    opcoes: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"],
    respostaCorreta: 2
  },
  {
    pergunta: "Quem é o maior pontuador da história da NBA?",
    opcoes: ["LeBron James", "Michael Jordan", "Kareem Abdul-Jabbar", "Kobe Bryant"],
    respostaCorreta: 0
  },
  {
    pergunta: "Qual jogador tem mais títulos da NBA?",
    opcoes: ["Stephen Curry", "Tim Duncan", "Magic Johnson", "Bill Russell"],
    respostaCorreta: 3
  },
  {
    pergunta: "Qual time é responsável pela melhor temporada regular da história da NBA?",
    opcoes: ["Oklahoma City Thunder", "Miami Heat", "Golden State Warriors", "Houston Rockets"],
    respostaCorreta: 2
  },
  {
    pergunta: "Em que ano a NBA foi fundada?",
    opcoes: ["1946", "1950", "1935", "1962"],
    respostaCorreta: 0
  },
  {
    pergunta: "Quantos jogadores compõem um time titular da NBA?",
    opcoes: ["4", "5", "6", "7"],
    respostaCorreta: 1
  },
  {
    pergunta: "Qual franquia foi a primeira campeã da NBA?",
    opcoes: ["Boston Celtics", "New York Knicks", "Philadelphia Warriors", "Los Angeles Lakers"],
    respostaCorreta: 2
  },
  {
    pergunta: "Quem foi o MVP da temporada 2022-23?",
    opcoes: ["Luka Doncic", "Nikola Jokic", "Giannis Antetokounmpo", "Joel Embiid"],
    respostaCorreta: 3
  }
]

let indice = 0
let acertos = 0
let jaRespondeu = false

function prepararQuiz() {

  document.getElementById('bloco-pergunta').style.display = 'none'
  document.getElementById('resultado-final').style.display = 'none'
  document.getElementById('iniciar-btn').style.display = 'block'

}

function iniciarQuiz() {

  indice = 0
  acertos = 0
  document.getElementById('iniciar-btn').style.display = 'none'
  document.getElementById('resultado-final').style.display = 'none'
  document.getElementById('bloco-pergunta').style.display = 'block'
  mostrarPergunta()

}

function mostrarPergunta() {

  jaRespondeu = false
  let pergunta = perguntas[indice]

  document.getElementById('numero-pergunta').textContent = `Pergunta ${indice + 1} de ${perguntas.length}`
  document.getElementById('texto-pergunta').textContent = pergunta.pergunta

  let alternativas = document.getElementById('alternativas')
  alternativas.innerHTML = ''

  pergunta.opcoes.forEach((opcao, i) => {
    let label = document.createElement('label')
    label.classList.add('opcao-item') 
    label.innerHTML = `
      <input type="radio" name="resposta" value="${i}">
      ${opcao}
    `
    label.querySelector('input').addEventListener('change', checarResposta)
    alternativas.appendChild(label)

  })

  document.getElementById('proximo-btn').disabled = true
}

function checarResposta(evento) {

  if (jaRespondeu) return
  jaRespondeu = true

  let respostaEscolhida = parseInt(evento.target.value)
  let correta = perguntas[indice].respostaCorreta

  if (respostaEscolhida === correta) {
    acertos++
  }

  let opcoes = document.querySelectorAll('#alternativas label')

  opcoes.forEach((label, i) => {
    
  })

  document.getElementById('proximo-btn').disabled = false
}

function proximaPergunta() {

  indice++

  if (indice >= perguntas.length) {

    mostrarResultado()

  } else {
    
    mostrarPergunta()

  }
}

function mostrarResultado() {

  let erros = perguntas.length - acertos
  let porcentagem = ((acertos / perguntas.length) * 100).toFixed(1)

  document.getElementById('bloco-pergunta').style.display = 'none'
  document.getElementById('resultado-final').style.display = 'block'
  document.getElementById('acertos').textContent = acertos
  document.getElementById('erros').textContent = erros
  document.getElementById('taxa-acertos').textContent = `${porcentagem}%`

}

function reiniciarQuiz() {
  iniciarQuiz()
}