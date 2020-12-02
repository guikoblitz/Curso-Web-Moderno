const despesasTotais = function (array) {
    const apenasPreco = array => array.preco
    const somaElemento = (elem1, elem2) => elem1 + elem2
    const despesas = array.map(apenasPreco).reduce(somaElemento)
    return despesas
}

// Outra forma
const despesasTotais1 = function (itens) {
    let total = 0
    for (let item of itens) {
        total += item.preco
    }
    return total
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])) // retornará 239.99
console.log(despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
])) // retornará 34599.89