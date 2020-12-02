const filtrarPorQuantidadeDeDigitos = function (numeros, qtd) {
    let resultado = []
    for (numero of numeros) {
        const qtdDigitos = String(numero).length
        if (qtdDigitos === qtd) {
            resultado.push(numero)
        }
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]