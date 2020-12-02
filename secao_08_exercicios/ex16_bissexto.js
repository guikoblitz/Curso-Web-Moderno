const anoBissexto = function (ano) {
    if (ano == 0) {
        return false
    }
    const dividePorQuatro = ano % 4 == 0
    const dividePorCem = ano % 100 == 0
    const dividePorQuatrocentos = ano % 400 == 0

    return (dividePorQuatro && !dividePorCem) || dividePorQuatrocentos
}


// Forma consultando indiretamente se o mês de fevereiro daquele ano tem 29 dias
function anoBissexto1(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))