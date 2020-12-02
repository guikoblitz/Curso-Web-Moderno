const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// A melhor utilização é:
Object.entries(pessoa).forEach(([chave, valor]) => { // desestruturação de array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // será visível ao utilizar Object.keys por exemplo
    writable: false, // não será modificável, funciona como um freeze
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // insere os objetos passados para o objeto de destino (nesse caso, dest)
// O objeto inicial se torna uma concatenação de todos os outros objetos

Object.freeze(obj)
obj.c = 1234
console.log(obj)