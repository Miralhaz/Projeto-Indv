var express = require("express");
var router = express.Router();

var jogadoresFavController = require("../controllers/jogadoresFavController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/", function (req, res) {
    jogadoresFavController.obterDadosJogadores(req, res);
})

module.exports = router;