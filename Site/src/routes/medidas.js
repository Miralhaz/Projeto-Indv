var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/quiz/salvarResultados", function (req, res) {
    medidaController.salvarResultadosNoBanco(req, res)
})

router.get("/quiz-resultado/:fk_usuario", function (req, res) {  
    medidaController.buscarResultadosQuiz(req, res);
})

module.exports = router;