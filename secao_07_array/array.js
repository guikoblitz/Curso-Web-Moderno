// NESSE ARQUIVO: .push(), .sort(), .splice()

// Array em JS é um objeto, e ao invés de organizar seus dados por chave, ele organiza por índice
console.log(typeof Array, typeof new Array, typeof [])

// A boa prática é trabalhar com dados homogêneos dentro de um array (int, string, boolean, etc)

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma não tão recomendada de criar Array, a melhor forma é a LITERAL

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // remove o elemento no índice porém fica como UNDEFINED
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // o primeiro número é o índice, o segundo é a quantidade de elementos a serem excluídos
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // nesse caso ele irá "substituir" os elementos antigos pelos novos
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento3', 'Elemento4') // se tiver um 0 no lugar da exclusão de elementos, nenhum elemento será excluído
console.log(aprovados)

// Uma CONSTANTE Array terá um endereço de memória constante, mas o conteúdo pode ser modificado