const receberPrimeiroEUltimoElemento = function (array) {
    let novoArray = [array.shift(), array.pop()]

    return novoArray
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))