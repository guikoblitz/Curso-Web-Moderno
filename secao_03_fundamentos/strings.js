const escola = "Cod3r"

console.log(escola.charAt(4)) // letra no índice 4
console.log(escola.charAt(5)) // retorna um valor vazio, e não erro
console.log(escola.charCodeAt(3)) // valor dentro da tabela Unicode código HTML
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // imprimir a partir do índice 1
console.log(escola.substring(0, 3)) // do 0 até 3, sem incluir o 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // converte em um Array a partir de um separador