// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 // Operador OU é muito usado ainda hoje para atribuir valores padrão
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // o indice 1 é referente a posição de b na array; se fosse a, seria 0, se fosse c, seria 2
    c = isNaN(c) ? 1 : c // melhor estratégia nesse caso, mais segura
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
