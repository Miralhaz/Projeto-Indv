var medidaModel = require("../models/medidaModel");

function buscarResultadosQuiz(req, res) {
    var fk_usuario = req.params.fk_usuario; 

    medidaModel.buscarResultadosQuiz(fk_usuario)
        .then(function (resultado){
            if (resultado.length > 0) {
                res.json(resultado[0])
            } else {
                res.status(404).send("Nenhum resultado encontrado");
            }
        })
        .catch((erro) => {
            console.log(erro);
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