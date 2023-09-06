//função que calcula Bhaskara
function calcularBhaskara() {
    //obtém os coeficientes A,B e C
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    const c = parseFloat(document.getElementById("inputC").value);

    //calculando delta
    const delta = b * b - 4 * a * c;

    //Caso o delta for negativo, não terá raizes reais
    if (delta < 0) {
        //exibindo uma mensagem de erro ao usuário
        document.getElementById("resultado").innerHTML = "Delta é negativo, não há raízes reais.";
    } else {
        //calculando as raizes reais
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        //formatando as raizes para 2 casas decimais
        const x1Formatado = x1.toFixed(2);
        const x2Formatado = x2.toFixed(2);

        //exibindo as raizes
        document.getElementById("resultado").innerHTML = `X' = ${x1.toFixed(2)}, X'' = ${x2.toFixed(2)}`;
    }
}

//função para limpar os campos
function limparCampos() {
    //limpando os campos A,B e C
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
    //limpando o resultado
    document.getElementById("resultado").innerHTML = "";
}

// Adicionar event listeners aos botões
document.getElementById("calcularButton").addEventListener("click", calcularBhaskara);
document.getElementById("limparButton").addEventListener("click", limparCampos);
