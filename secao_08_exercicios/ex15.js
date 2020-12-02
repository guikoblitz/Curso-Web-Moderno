const receberSomenteOsParesDeIndicesPares = function (array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0 && array[i] % 2 == 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]