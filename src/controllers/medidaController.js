var medidaModel = require("../models/medidaModel");

function buscarResultadosQuiz(req, res) {
    var fk_usuario = req.params.fk_usuario; 

    medidaModel.buscarResultadosQuiz(fk_usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado de quiz encontrado para este usuário!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os resultados do quiz.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function salvarResultadosNoBanco(req, res) {

    var { fk_usuario, respostasAcertas, respostasErradas } = req.body;

    medidaModel.salvarResultadosNoBanco(fk_usuario, respostasAcertas, respostasErradas)
        .then(function (resultado) {
            res.json({ mensagem: "Resultados do quiz salvos com sucesso!" });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao salvar os resultados do quiz.", erro.sqlMessage);
            res.status(500).json({ erro: "Erro ao salvar os resultados do quiz." });
        });
}

module.exports = {
    buscarResultadosQuiz,
    salvarResultadosNoBanco
};