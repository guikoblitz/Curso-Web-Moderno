function fatorial(num) {
    let resultado = 1

    for (let i = 1; i <= num; i++) {
        resultado *= i
        console.log(resultado)
    }
    return resultado
}

console.log(fatorial(10))