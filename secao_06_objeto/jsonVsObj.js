// JSON é um formato de DADOS, muito usado para interoperabilidade entre sistemas
// Ele não carrega funções, nem nada específico de um sistema/tecnologia

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3")) 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // em JSON por padrão, os atributos devem ser delimitados por aspas duplas
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

let testeJSON = {
    "nome": "Ana",
    "idade": 56,
    "legal": true,
    "filhos": [{
        "nome": "Junior",
        "idade": 18
    }, {
        "legal": false
    }]
}

console.log(testeJSON)