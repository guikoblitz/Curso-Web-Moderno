const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Essa constante sempre irá apontar para essa array, não é possível atribuir outra coisa à constante, mas o conteúdo do array pode ser alterado

pilotos.pop() // remove o ÚLTIMO elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento AO FINAL da lista
console.log(pilotos)

pilotos.shift() // remove o PRIMEIRO elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // ADICIONA um elemento ao primeiro índice da lista
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // GERA UM NOVO ARRAY a partir do índice colocado, nesse caso 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O segundo índice fornecido na função não será incluido, nesse caso irá incluir do 1 ao 3
console.log(algunsPilotos2)