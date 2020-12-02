// Função é um bloco de código nomeado, que possibilita sua reutilização
// Ela pode não receber nenhum parâmetro, não retornar dado, e vice-versa, há várias combinações possíveis

// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // nesse caso o segundo valor será undefined por padrão, e o retorno será NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // irá retornar a soma e ignorar os demais valores
imprimirSoma() // NaN

// O JavaScript permite muita flexibilidade, e isso pode ser usado a favor do programador

//Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())