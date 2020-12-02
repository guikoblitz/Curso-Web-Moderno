Array.prototype.filter2 = function (callback) {
    const newArray = [] // filter também gera um novo array
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { // se for true adiciona, se não não faz nada
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil == true // poderia colocar apenas produto.fragil pois já retorna true ou false

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))