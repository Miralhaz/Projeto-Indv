
var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function obterDados() {
    
    var instrucaoSql = `
        SELECT t.idTime, t.nome, COUNT(u.idUser) AS quantidade
        FROM times t
        LEFT JOIN usuario u ON t.idTime = u.fktime
        GROUP BY t.idTime;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDados
};