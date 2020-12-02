function divisao(dividendo, divisor) {
    let resultado = Math.floor(dividendo/divisor)
    let resto = dividendo % divisor

    return `Resultado: ${resultado} Resto: ${resto}`
}

console.log(divisao(11, 4))