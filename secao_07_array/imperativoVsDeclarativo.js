const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativa -> o "como" tem que ser feito é mais importante do que "o que" tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) // o que importa é "o que" tem de ser feito, os laços são detalhes internos do reduce, por exemplo
console.log(total2 / alunos.length) // ou seja: não se preocupa muito com o "como" vai ser feito

// O método declarativo promove o reuso de código, e o código em si fica mais claro de ler 

// select codigo, nome, email from clientes where ativo = 1
// esse exemplo de consulta MySQL é um exemplo de comando declarativo, que não se importa em COMO a informação será encontrada