// contexto de execução node vs browser
// Variáveis var declaradas no escopo global são visíveis no window (browser) e global (node)
// Variáveis let ou constantes const não são visíveis diretamente DENTRO do escopo global

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(global.a) // irá retornar undefined
console.log(a)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca: sem var e let
abc = 3 // NÃO FAZER ISSO
console.log(global.abc)

/*
É preciso conhecer o RUNTIME, ou seja, o local onde o JavaScript está sendo executado
Dessa forma será possível utilizar o JS da melhor maneira possível
Coisas aparentemente "inofensivas" podem gerar problemas grandes posteriormente, devido a permissividade do JS
*/