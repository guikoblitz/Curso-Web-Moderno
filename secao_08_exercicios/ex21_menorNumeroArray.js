const menorNumero1 = function (array) {
    let menor = array[0]
    for (let i in array) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return menor
}

// Outra opção
const menorNumero = function (array) {
    return Math.min(...array)
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15