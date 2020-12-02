const calcularPreco = function (idade) {
    let valorBase = 100
    if (idade < 10) {
        return valorBase + 80
    } else if (idade < 30) {
        return valorBase + 50
    } else if (idade < 60) {
        return valorBase + 95
    } else {
        return valorBase + 130
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));