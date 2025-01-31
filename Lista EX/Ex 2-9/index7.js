function calcularReajuste(salarioAtual) {
    let aumento;
    let novoSalario;

    // Verificando a faixa salarial e definindo o aumento
    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = 0.15; // 15% de aumento
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = 0.12; // 12% de aumento
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = 0.09; // 9% de aumento
    } else if (salarioAtual >= 3000) {
        aumento = 0.06; // 6% de aumento
    } else {
        return "Salário inválido. O salário deve ser maior ou igual a 1.500,00.";
    }

    // Calculando o novo salário
    novoSalario = salarioAtual * (1 + aumento);
    
    return {
        salarioAtual: salarioAtual.toFixed(2),
        aumento: (aumento * 100).toFixed(2) + '%',
        novoSalario: novoSalario.toFixed(2)
    };
}

// Exemplo de uso
const salarioAtual = 1800.00; // Salário atual do funcionário
const resultado = calcularReajuste(salarioAtual);
console.log(resultado);