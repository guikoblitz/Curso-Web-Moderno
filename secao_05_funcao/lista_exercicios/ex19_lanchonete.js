const calcularVenda = function (codigo, qtd) {
    switch (codigo) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.50
        case 400:
            return qtd * 7.50
        case 500:
            return qtd * 3.50
        case 600:
            return qtd * 2.80
        default:
            return 'Produto inexistente'
    }
}

console.log(`O valor final da compra será: R$${calcularVenda(100, 2).toFixed(2)}`)
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))