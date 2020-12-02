const funcaoDaSorte = function (numEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (numEscolhido === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena! O número sorteado foi o ${numeroAleatorio}`
    )
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"