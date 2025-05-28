let listaDeQuestoes = [];
let numeroDaQuestaoAtual = 0;
let pontuacaoFinal = 0;
let tentativaIncorreta = 0;
let certas = 0;
let erradas = 0;
let quantidadeDeQuestoes = 0;

let btnSubmeter, btnProx, btnTentarNovamente;
let primeiraOpcao, segundaOpcao, terceiraOpcao, quartaOpcao;

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none";
    document.getElementById('jogo').style.display = "none";

    btnSubmeter = document.getElementById("btnSubmeter");
    btnProx = document.getElementById("btnProx");
    btnTentarNovamente = document.getElementById("btnTentarNovamente");

    primeiraOpcao = document.getElementById("primeiraOpcao");
    segundaOpcao = document.getElementById("segundaOpcao");
    terceiraOpcao = document.getElementById("terceiraOpcao");
    quartaOpcao = document.getElementById("quartaOpcao");
};

function iniciarQuiz() {
    document.getElementById('pontuacao').style.display = "";
    document.getElementById('jogo').style.display = "";
    document.getElementById('btnIniciarQuiz').style.display = "none";

    buscar();
}

function buscar() {

    fetch("http://localhost:3333/perguntas/buscar")
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then(data => {
            listaDeQuestoes = data;
            quantidadeDeQuestoes = listaDeQuestoes.length;

            document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes;
            preencherHTMLcomQuestaoAtual(0);

            btnSubmeter.disabled = false;
            btnProx.disabled = true;
        })
        .catch(error => {
            console.error("Erro ao carregar as perguntas:", error);
            alert("Erro ao carregar perguntas. Verifique o servidor.");
        });

}

function preencherHTMLcomQuestaoAtual(index) {

    habilitarAlternativas(true);
    const questaoAtual = listaDeQuestoes[index];
    numeroDaQuestaoAtual = index;

    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = index + 1;
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativa1;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativa2;

    if (questaoAtual.alternativa3 && questaoAtual.alternativa4) {
        document.getElementById("terceiraOpcao").parentElement.style.display = "block";
        document.getElementById("quartaOpcao").parentElement.style.display = "block";
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativa3;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativa4;
    } else {
        document.getElementById("terceiraOpcao").parentElement.style.display = "none";
        document.getElementById("quartaOpcao").parentElement.style.display = "none";
    }
}

function submeter() {

    const options = document.getElementsByName("option");
    let hasChecked = false;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true;
            break;
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.");
    } else {
        btnSubmeter.disabled = true;
        btnProx.disabled = false;

        habilitarAlternativas(false);
        checarResposta();
    }
}

function habilitarAlternativas(ativar) {
    primeiraOpcao.disabled = !ativar;
    segundaOpcao.disabled = !ativar;
    terceiraOpcao.disabled = !ativar;
    quartaOpcao.disabled = !ativar;
}

function avancar() {
    btnProx.disabled = true;
    btnSubmeter.disabled = false;
    limparCoresBackgroundOpcoes();
    desmarcarRadioButtons();

    if (numeroDaQuestaoAtual >= quantidadeDeQuestoes) {
        finalizarJogo();
        return;
    }

    if (numeroDaQuestaoAtual === quantidadeDeQuestoes - 1) {
        alert("Atenção... a próxima é a última questão!");
    }

    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual];
    const resposta = questaoAtual.alternativaCorreta;
    const options = document.getElementsByName("option");
    let alternativaCorretaLabelId = "";
    let respondeu = false;

    options.forEach(option => {
        if (parseInt(option.value) === resposta && option.labels.length > 0) {
            alternativaCorretaLabelId = option.labels[0].id;
        }
    });

    options.forEach(option => {
        if (option.checked && option.labels.length > 0) {
            respondeu = true;
            const labelId = option.labels[0].id
            const label = document.getElementById(labelId)

            if (parseInt(option.value) === resposta) {
                if (label) label.classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
            } else {
                if (label) label.classList.add("text-danger-with-bg")

                const correta = document.getElementById(alternativaCorretaLabelId)
                if (correta) correta.classList.add("text-success-with-bg")

                tentativaIncorreta++;
                erradas++;
            }
        }
    });

    if (respondeu) {
        numeroDaQuestaoAtual++;
    }
}


function desmarcarRadioButtons() {
    document.getElementsByName("option").forEach(opt => opt.checked = false);
}

function limparCoresBackgroundOpcoes() {
    document.getElementsByName("option").forEach(option => {
        if (option.labels.length > 0) {
            const label = option.labels[0];
            if (label) {
                label.classList.remove("text-success-with-bg", "text-danger-with-bg");
            }
        }
    });
}

function finalizarJogo() {

    let mensagem = "";
    let classe = "";
    const porcentagem = pontuacaoFinal / quantidadeDeQuestoes;

    if (porcentagem <= 0.3) {
        mensagem = "<br> Parece que você não estudou...";
        classe = "text-danger-with-bg";
    } else if (porcentagem < 0.9) {
        mensagem = "<br> Pode melhorar na próxima, hein!";
        classe = "text-warning-with-bg";
    } else {
        mensagem = "<br> Uau, parabéns!";
        classe = "text-success-with-bg";
    }

    mensagem += `<br> Você acertou ${Math.round(porcentagem * 100)}% das questões.`;

    document.getElementById("msgFinal").innerHTML = mensagem;
    document.getElementById("msgFinal").classList.add(classe);
    document.getElementById("spanPontuacaoFinal").innerHTML = pontuacaoFinal;

    document.getElementById("jogo").classList.add("text-new-gray");
    btnSubmeter.disabled = true;
    btnProx.disabled = true;
    btnTentarNovamente.disabled = false;

    salvarResultadosNoBanco()
}

function obterIdDoUsuario() {
    return sessionStorage.getItem('ID_USUARIO'); 
}

function salvarResultadosNoBanco() {

    const usuarioId = obterIdDoUsuario(); 
    if (!usuarioId) {
        console.error("ID do usuário não encontrado. Não foi possível salvar os resultados.");
        return;
    }

    fetch("/medidas/quiz/salvarResultados", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuario: usuarioId,
            respostasAcertas: certas,
            respostasErradas: erradas
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Resultados do quiz salvos com sucesso!", data);
        
    })
    .catch(error => {
        console.error("Erro ao salvar os resultados do quiz:", error);
        alert("Erro ao salvar os resultados. Tente novamente.");
        
    });
}

function tentarNovamente() {
    window.location.reload();
}