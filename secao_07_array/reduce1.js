const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) { // é possivel chamar até 4 parametros pra reduce: acumulador, valor atual, indice e array completo
    console.log(acumulador, atual)
    return acumulador + atual
}, /*10 <- poderia passar esse valor numérico como valor inicial ao invés do acumulador do índice 0*/) 

console.log(resultado)
