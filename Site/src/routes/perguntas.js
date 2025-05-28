var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/buscar", function (req, res) {
    perguntasController.buscar(req, res);
})

module.exports = router;