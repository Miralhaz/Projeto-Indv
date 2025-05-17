var database = require("../database/config");

function salvarResultadosNoBanco (fk_usuario, respostasAcertas, respostasErradas) {
    var instrucaoSql = `
        INSERT INTO quiz (fk_usuario, respostasAcertas, respostasErradas)
        VALUES (${fk_usuario}, ${respostasAcertas}, ${respostasErradas});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResultadosQuiz(fk_usuario) {
    var instrucaoSql = `
        SELECT respostasAcertas, respostasErradas
        FROM quiz 
        WHERE fk_usuario = ${fk_usuario}
        ORDER BY idQuiz DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultadosNoBanco,
    buscarResultadosQuiz
};