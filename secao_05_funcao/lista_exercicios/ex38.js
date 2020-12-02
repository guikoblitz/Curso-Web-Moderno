const imprimirImpares = function (inicio = 0, fim = 0) {
    if (inicio > fim) {
        let transit = inicio
        inicio = fim
        fim = transit
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)