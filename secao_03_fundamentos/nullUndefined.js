let valor // não inicializada
console.log(valor) // irá imprimir undefined, pois ela não foi inicializada

valor = null // não aponta pra nenhum valor primitivo nem endereço de local de memória
// representa AUSÊNCIA DE VALOR
console.log(valor)

/* 
O nulo pode ser utilizado pelo programador para zerar um objeto no caso de ele
apontar para um valor ou referência

Por padrão, coloca-se null

Não é necessário atribuir undefined.
*/

// console.log(valor.toString()) ERRO!
// não é possível acessar propriedades de variáveis do tipo nulo ou undefined
// o mais indicado é sempre ter um valor associado a variável

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined!!!! A linguagem pode definir o que é undefined
console.log(!!produto.preco) // false, como se o valor fosse inválido
// delete produto.preco é a forma correta caso você queira DELETAR um atributo, e não tornando ele undefined ou nulo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)