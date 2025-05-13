
function cadastro() {
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nome = ipt_nome.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var confirmacaoSenha = ipt_confirm_senha.value
    var cpf = ipt_cpf.value
    var timeFav = slt_time_fav.value
    // Verificando se há algum campo em branco
    if (
        nome == "" ||
        email == "" ||
        senha == "" ||
        confirmacaoSenha == "" ||
        cpf == ""
    ) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = "Algum campo está em branco! Verifique todos os campos!";

        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            cpfServer: cpf,
            timeServer: timeFav
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                limparFormulario();
                finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}
