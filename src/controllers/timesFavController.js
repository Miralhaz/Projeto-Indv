var timesFavModel = require("../models/timesFavModel");

function obterDados(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        timesFavModel.obterDados()
            .then(
                function (resultado) {
                    if (resultado.length > 0){
                        res.status(200).json(resultado)
                    } else {
                        res.status(204).send("PERGUNTAS NÃO ENCONTRADAS")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar as perguntas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    obterDados
}