
var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function obterDadosJogadores() {
    
    var instrucaoSql = `
        SELECT j.idJogador, j.nome, COUNT(u.idUser) AS quantidade
        FROM jogadores j
        LEFT JOIN usuario u ON j.idJogador = u.fkjogador
        GROUP BY j.idJogador;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosJogadores
};