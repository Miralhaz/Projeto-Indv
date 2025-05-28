var express = require("express");
var router = express.Router();

var timesFavController = require("../controllers/timesFavController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/", function (req, res) {
    timesFavController.obterDados(req, res);
})

module.exports = router;