let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // se colocado uma vez !, ele inverte a lógica (ou seja, !true significa "não true")
// dessa forma, !!true = true; !true = false
// Utilizando !!, "forçamos" uma conversão do valor para verdadeiro ou falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazia é bom para testar se um nome está preenchido ou não
console.log(!!null)
console.log(!!NaN) // not a number NaN
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // operação lógica, dependendo do contexto ele converte para V ou F
// || representa o operador lógico "ou"

let nome = ''
console.log(nome || 'Desconhecido') // se a string estiver vazia, printa o valor padrão 'Desconhecido'