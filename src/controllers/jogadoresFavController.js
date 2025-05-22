var jogadoresFavModel = require("../models/jogadoresFavModel");

function obterDadosJogadores(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogadoresFavModel.obterDadosJogadores()
            .then(
                function (resultado) {
                    if (resultado.length > 0){
                        res.status(200).json(resultado)
                    } else {
                        res.status(204).send("JOGADORES NÃO ENCONTRADOS")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar os jogadores! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    obterDadosJogadores
}