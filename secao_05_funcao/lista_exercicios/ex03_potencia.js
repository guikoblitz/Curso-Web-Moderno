function elevado(base, expo) {

    // Poderia ser feito como:
    let resultado = Math.pow(base, expo)

    // Atualmente é melhor:
    resultado = base ** expo
    return resultado
}

console.log(elevado(2, 3))