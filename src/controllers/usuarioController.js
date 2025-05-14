var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res){

    var email = req.body.emailServer
    var senha = req.body.senhaServer

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!")
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {

                        console.log(resultadoAutenticar);

                            res.json({
                                idUser: resultadoAutenticar[0].idUser,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                cpf: resultadoAutenticar[0].cpf,
                                senha: resultadoAutenticar[0].senha,
                                timeFav: resultadoAutenticar[0].timeFav
                            });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    var nome = req.body.nomeServer
    var cpf = req.body.cpfServer
    var timeFav = req.body.timeFavServer

    // Faça as validações dos valores
    
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido")
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está indefinido")
    } else if (timeFav == undefined) {
        res.status(400).send("Seu time está indefinido")
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, cpf, timeFav)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}