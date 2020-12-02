// pessoa -> aponta para um endereço de memória
// neste endereço é onde está o objeto criado
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // não mudamos a referência da constante, mas sim o dado QUE ESTÁ no endereço, e este pode ser alterado
console.log(pessoa)

// pessoa -> outro endereço de memória -> {...} 
//pessoa = { nome: 'Ana' } // erro -> Assignment to constant variable.

Object.freeze(pessoa) // congela o objeto pessoa, ele não pode mais ser modificado, tornando O OBJETO constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' // não irá adicionar o endereço
delete pessoa.nome // não irá deletar o atributo

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' }) // criou o objeto já como constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)