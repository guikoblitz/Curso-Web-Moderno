const somarNumeros1 = function (array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

const somarNumeros = function (numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60