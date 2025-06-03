var express = require("express");
var router = express.Router();

var franquiasFavController = require("../controllers/franquiasFavController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/", function (req, res) {
    franquiasFavController.obterDados(req, res);
})

module.exports = router;